"""
SMPZ Weapon Handbook - Automated P3D to GLB Converter
=====================================================
Converts DayZ / Arma Bohemia Interactive MLOD (.p3d) models into
fully textured, un-mirrored, Draco + WebP optimized glTF 2.0 Binary (.glb) files.
"""

import sys
import os
import io
import json
import shutil
import struct
import subprocess
from collections import defaultdict

if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8', line_buffering=True, errors='replace')
    except Exception:
        pass

import numpy as np
from PIL import Image
import py3d


def get_system_drives():
    drives = []
    for letter in "CDEFGHIJKLMNOPQRSTUVWXYZ":
        d_path = f"{letter}:\\"
        if os.path.exists(d_path):
            drives.append(d_path)
    return drives


def auto_detect_pbo_dirs():
    found_dirs = []
    for drive in get_system_drives():
        common_candidates = [
            os.path.join(drive, "Program Files (x86)", "Steam", "steamapps", "common"),
            os.path.join(drive, "Program Files", "Steam", "steamapps", "common"),
            os.path.join(drive, "SteamLibrary", "steamapps", "common"),
            os.path.join(drive, "Steam", "steamapps", "common"),
            os.path.join(drive, "Games", "Steam", "steamapps", "common"),
            os.path.join(drive, "DayZ"),
            os.path.join(drive, "DayZServer"),
        ]
        for common in common_candidates:
            if not os.path.exists(common):
                continue
            # DayZ root variants
            dayz_roots = [
                os.path.join(common, "DayZ"),
                os.path.join(common, "DayZServer"),
                common if os.path.basename(common).lower() in ("dayz", "dayzserver") else None
            ]
            for droot in dayz_roots:
                if not droot or not os.path.exists(droot):
                    continue
                # Addons
                addon_path = os.path.join(droot, "addons")
                if os.path.exists(addon_path) and addon_path not in found_dirs:
                    found_dirs.append(addon_path)
                
                # Workshop mods (scan all @ prefixed mod folders or specific mod pack)
                workshop_dir = os.path.join(droot, "!Workshop")
                if os.path.exists(workshop_dir):
                    try:
                        for mod_name in os.listdir(workshop_dir):
                            if mod_name.startswith("@"):
                                mod_addon = os.path.join(workshop_dir, mod_name, "addons")
                                if os.path.exists(mod_addon) and mod_addon not in found_dirs:
                                    found_dirs.append(mod_addon)
                    except Exception:
                        pass
    return found_dirs


def auto_detect_img2paa_exe():
    for drive in get_system_drives():
        tool_candidates = [
            os.path.join(drive, "Program Files (x86)", "Steam", "steamapps", "common", "DayZ Tools", "Bin", "ImageToPAA", "ImageToPAA.exe"),
            os.path.join(drive, "Program Files", "Steam", "steamapps", "common", "DayZ Tools", "Bin", "ImageToPAA", "ImageToPAA.exe"),
            os.path.join(drive, "SteamLibrary", "steamapps", "common", "DayZ Tools", "Bin", "ImageToPAA", "ImageToPAA.exe"),
            os.path.join(drive, "Steam", "steamapps", "common", "DayZ Tools", "Bin", "ImageToPAA", "ImageToPAA.exe"),
            os.path.join(drive, "DayZ Tools", "Bin", "ImageToPAA", "ImageToPAA.exe"),
        ]
        for t in tool_candidates:
            if os.path.exists(t):
                return t
    return shutil.which("ImageToPAA.exe")


DEFAULT_OUTPUT_DIR = r"assets\models"


def read_asciiz(f):
    chars = []
    while True:
        c = f.read(1)
        if not c or c == b'\x00':
            break
        chars.append(c)
    return b''.join(chars).decode('utf-8', errors='ignore')


class PBOIndexer:
    def __init__(self, pbo_dirs):
        self.index = {}
        self.pbo_dirs = [d for d in pbo_dirs if os.path.exists(d)]
        self._build_index()

    def _build_index(self):
        print("[1/5] PBO 아카이브 인덱싱 중...", flush=True)
        for pdir in self.pbo_dirs:
            for fname in os.listdir(pdir):
                if not fname.lower().endswith('.pbo'):
                    continue
                pbo_path = os.path.join(pdir, fname)
                try:
                    with open(pbo_path, 'rb') as f:
                        read_asciiz(f)
                        first_meta = struct.unpack('<IIIII', f.read(20))
                        if first_meta[0] == 0x56657273:
                            while True:
                                k = read_asciiz(f)
                                if not k:
                                    break
                                read_asciiz(f)
                        entries = []
                        while True:
                            ename = read_asciiz(f)
                            if not ename:
                                f.seek(20, 1)
                                break
                            meta = struct.unpack('<IIIII', f.read(20))
                            entries.append({'name': ename, 'size': meta[4]})

                        header_end = f.tell()
                        cur = header_end
                        for e in entries:
                            e['offset'] = cur
                            cur += e['size']
                            norm_key = e['name'].replace('\\', '/').lower().lstrip('/')
                            self.index[norm_key] = [pbo_path, e['offset'], e['size']]
                except Exception as ex:
                    print(f"  [!] PBO 읽기 실패 ({fname}): {ex}", flush=True)

        print(f"      총 {len(self.index):,}개의 모드 및 게임 애셋 파일 인덱싱 완료.", flush=True)

    def extract_file(self, tex_ref: str, out_dir: str) -> str:
        norm_tex = tex_ref.replace('\\', '/').lower().lstrip('/')
        search_keys = [
            norm_tex,
            norm_tex.replace("smpz_weapons/", ""),
            norm_tex.replace("smpz_more_attachment/", ""),
            norm_tex.replace("smpz_more_weapons/", ""),
            norm_tex.replace("smpz_gears/", ""),
            norm_tex.replace("smpz_clothes/", ""),
            norm_tex.replace("dz/weapons/", ""),
            norm_tex.replace("dz/", ""),
            norm_tex.replace("dz/weapons/attachments/", "data/"),
            norm_tex.replace("dz/weapons/ammunition/", "data/"),
        ]

        found_entry = None
        for k in search_keys:
            if k in self.index:
                found_entry = self.index[k]
                break

        if not found_entry:
            for idx_key, val in self.index.items():
                for k in search_keys:
                    if idx_key.endswith(k) or (os.path.basename(idx_key) == os.path.basename(k) and os.path.dirname(idx_key).endswith(os.path.dirname(k))):
                        found_entry = val
                        break
                if found_entry:
                    break

        if not found_entry:
            base_fname = os.path.basename(norm_tex)
            for idx_key, val in self.index.items():
                if os.path.basename(idx_key) == base_fname:
                    found_entry = val
                    break

        if not found_entry:
            return None

        pbo_path, offset, size = found_entry
        safe_name = tex_ref.replace('\\', '__').replace('/', '__').replace(':', '')
        paa_out = os.path.join(out_dir, safe_name)

        with open(pbo_path, 'rb') as pf:
            pf.seek(offset)
            data = pf.read(size)
        with open(paa_out, 'wb') as out_f:
            out_f.write(data)

        return paa_out


class P3DToGLBConverter:
    def __init__(self, pbo_dirs=None, img2paa_exe=None):
        self.pbo_dirs = pbo_dirs or auto_detect_pbo_dirs()
        self.img2paa_exe = img2paa_exe or auto_detect_img2paa_exe()
        self.indexer = PBOIndexer(self.pbo_dirs)

    def convert(self, p3d_path: str, output_glb_path: str):
        print(f"\n=======================================================", flush=True)
        print(f"[*] 변환 시작: {os.path.basename(p3d_path)}", flush=True)
        print(f"=======================================================", flush=True)

        with open(p3d_path, "rb") as f:
            header = f.read(4)

        if header == b"ODOL":
            print(f"[!] 오류: '{os.path.basename(p3d_path)}' 파일은 게임 엔진용 바이너리(ODOL) 포맷입니다.", flush=True)
            print(f"    3D 메쉬 추출을 위해 편집 가능한 비바이너리(MLOD) 포맷의 P3D 파일을 사용해 주세요.", flush=True)
            return False

        if header != b"MLOD":
            print(f"[!] 오류: '{os.path.basename(p3d_path)}' 파일은 올바른 MLOD P3D 포맷이 아닙니다 (헤더: {header}).", flush=True)
            return False

        model_name = os.path.splitext(os.path.basename(p3d_path))[0]
        temp_dir = os.path.join(os.path.dirname(output_glb_path), f"_temp_{model_name}")
        os.makedirs(temp_dir, exist_ok=True)

        try:
            with open(p3d_path, "rb") as f:
                model = py3d.P3D(f)

            if not model.lods:
                raise ValueError("P3D 파일 내에 LOD 메쉬 데이터가 없습니다.")

            lod = model.lods[0]
            print(f"[2/5] P3D 메쉬 파싱 (정점: {len(lod.points):,}개, 폴리곤: {len(lod.faces):,}개)", flush=True)

            unique_textures = sorted(list(set(f.texture for f in lod.faces if f.texture)))
            print(f"[3/5] 필요 텍스처 {len(unique_textures)}개 검색 및 추출...", flush=True)

            texture_map = {}
            for tex_ref in unique_textures:
                paa_path = self.indexer.extract_file(tex_ref, temp_dir)
                if not paa_path:
                    print(f"  [-] 텍스처 미발견 (기본 건메탈 재질 적용): {tex_ref}", flush=True)
                    continue

                png_path = os.path.splitext(paa_path)[0] + ".png"
                if self.img2paa_exe:
                    subprocess.run(
                        [self.img2paa_exe, paa_path, png_path],
                        capture_output=True,
                        encoding='utf-8',
                        errors='ignore'
                    )

                if os.path.exists(png_path):
                    try:
                        im = Image.open(png_path)
                        if max(im.size) > 1024:
                            im.thumbnail((1024, 1024), Image.Resampling.LANCZOS)
                        out_buf = io.BytesIO()
                        im.save(out_buf, format='WEBP', quality=85, method=6)
                        texture_map[tex_ref] = out_buf.getvalue()
                        print(f"  [+] 텍스처 완료 (WebP): {os.path.basename(tex_ref)} ({len(out_buf.getvalue())/1024:.1f} KB)", flush=True)
                    except Exception as ex:
                        print(f"  [!] 텍스처 변환 실패 ({tex_ref}): {ex}", flush=True)

            print("[4/5] 좌우반전 교정 및 GLB 바이너리 조립 중...", flush=True)
            raw_glb_path = os.path.join(temp_dir, f"{model_name}_raw.glb")
            self._build_raw_glb(lod, texture_map, raw_glb_path, model_name)

            print("[5/5] gltf-transform 메쉬 최적화 및 Draco 초경량 압축 중...", flush=True)
            self._optimize_glb(raw_glb_path, output_glb_path)

            final_size = os.path.getsize(output_glb_path)
            print(f"\n[성공] 변환 완료! -> {output_glb_path} ({final_size/(1024*1024):.2f} MB)", flush=True)
            return True

        finally:
            if os.path.exists(temp_dir):
                shutil.rmtree(temp_dir, ignore_errors=True)

    def _build_raw_glb(self, lod, texture_map, out_path, model_name):
        groups = defaultdict(list)
        for face in lod.faces:
            groups[face.texture].append(face)

        mesh_primitives = []
        materials = []
        images = []
        textures = []
        samplers = [{
            "magFilter": 9729,
            "minFilter": 9987,
            "wrapS": 10497,
            "wrapT": 10497
        }]
        accessors = []
        buffer_views = []
        bin_chunks = []
        current_byte_offset = 0

        def add_buffer_data(data_bytes: bytes, target=None):
            nonlocal current_byte_offset
            padding = (4 - (len(data_bytes) % 4)) % 4
            padded_bytes = data_bytes + (b'\x00' * padding)

            bv_idx = len(buffer_views)
            bv = {
                "buffer": 0,
                "byteOffset": current_byte_offset,
                "byteLength": len(data_bytes)
            }
            if target:
                bv["target"] = target
            buffer_views.append(bv)
            bin_chunks.append(padded_bytes)
            current_byte_offset += len(padded_bytes)
            return bv_idx

        mat_index = 0

        for tex_raw, face_list in groups.items():
            unique_verts = {}
            positions = []
            normals = []
            uvs = []
            indices = []

            def get_vert_id(pt_idx, norm_idx, uv):
                pt = lod.points[pt_idx].coords
                norm = lod.facenormals[norm_idx] if norm_idx < len(lod.facenormals) else (0.0, 1.0, 0.0)

                # Invert Z axis for right-handed glTF
                gx, gy, gz = pt[0], pt[1], -pt[2]
                gnx, gny, gnz = norm[0], norm[1], -norm[2]
                gu, gv = uv[0], uv[1]

                key = (
                    round(gx, 6), round(gy, 6), round(gz, 6),
                    round(gnx, 4), round(gny, 4), round(gnz, 4),
                    round(gu, 4), round(gv, 4)
                )
                if key in unique_verts:
                    return unique_verts[key]

                idx = len(positions)
                unique_verts[key] = idx
                positions.append([gx, gy, gz])
                normals.append([gnx, gny, gnz])
                uvs.append([gu, gv])
                return idx

            for face in face_list:
                v_count = len(face.vertices)
                if v_count == 3:
                    i0 = get_vert_id(face.vertices[0].point_index, face.vertices[0].normal_index, face.vertices[0].uv)
                    i1 = get_vert_id(face.vertices[1].point_index, face.vertices[1].normal_index, face.vertices[1].uv)
                    i2 = get_vert_id(face.vertices[2].point_index, face.vertices[2].normal_index, face.vertices[2].uv)
                    indices.extend([i0, i2, i1])
                elif v_count == 4:
                    i0 = get_vert_id(face.vertices[0].point_index, face.vertices[0].normal_index, face.vertices[0].uv)
                    i1 = get_vert_id(face.vertices[1].point_index, face.vertices[1].normal_index, face.vertices[1].uv)
                    i2 = get_vert_id(face.vertices[2].point_index, face.vertices[2].normal_index, face.vertices[2].uv)
                    i3 = get_vert_id(face.vertices[3].point_index, face.vertices[3].normal_index, face.vertices[3].uv)
                    indices.extend([i0, i2, i1, i0, i3, i2])

            num_vertices = len(positions)
            num_indices = len(indices)
            if num_vertices == 0 or num_indices == 0:
                continue

            pos_arr = np.array(positions, dtype=np.float32)
            norm_arr = np.array(normals, dtype=np.float32)
            uv_arr = np.array(uvs, dtype=np.float32)

            use_uint32 = (num_vertices > 65535)
            idx_dtype = np.uint32 if use_uint32 else np.uint16
            idx_comp_type = 5125 if use_uint32 else 5123
            idx_arr = np.array(indices, dtype=idx_dtype)

            idx_bv = add_buffer_data(idx_arr.tobytes(), target=34963)
            pos_bv = add_buffer_data(pos_arr.tobytes(), target=34962)
            norm_bv = add_buffer_data(norm_arr.tobytes(), target=34962)
            uv_bv = add_buffer_data(uv_arr.tobytes(), target=34962)

            idx_acc = len(accessors)
            accessors.append({
                "bufferView": idx_bv,
                "byteOffset": 0,
                "componentType": idx_comp_type,
                "count": num_indices,
                "type": "SCALAR"
            })

            pos_acc = len(accessors)
            accessors.append({
                "bufferView": pos_bv,
                "byteOffset": 0,
                "componentType": 5126,
                "count": num_vertices,
                "type": "VEC3",
                "min": pos_arr.min(axis=0).tolist(),
                "max": pos_arr.max(axis=0).tolist()
            })

            norm_acc = len(accessors)
            accessors.append({
                "bufferView": norm_bv,
                "byteOffset": 0,
                "componentType": 5126,
                "count": num_vertices,
                "type": "VEC3"
            })

            uv_acc = len(accessors)
            accessors.append({
                "bufferView": uv_bv,
                "byteOffset": 0,
                "componentType": 5126,
                "count": num_vertices,
                "type": "VEC2"
            })

            current_mat_idx = mat_index
            mat_index += 1
            mat_name = os.path.splitext(os.path.basename(tex_raw))[0] or "default"

            if tex_raw in texture_map:
                webp_bytes = texture_map[tex_raw]
                img_bv = add_buffer_data(webp_bytes)
                img_idx = len(images)
                images.append({
                    "bufferView": img_bv,
                    "mimeType": "image/webp",
                    "name": mat_name
                })
                tex_idx = len(textures)
                textures.append({
                    "sampler": 0,
                    "source": img_idx,
                    "extensions": {
                        "EXT_texture_webp": {
                            "source": img_idx
                        }
                    }
                })
                materials.append({
                    "name": f"{mat_name}_Mat",
                    "pbrMetallicRoughness": {
                        "baseColorTexture": {
                            "index": tex_idx
                        },
                        "metallicFactor": 0.15,
                        "roughnessFactor": 0.65
                    },
                    "doubleSided": True
                })
            else:
                materials.append({
                    "name": f"{mat_name}_Mat",
                    "pbrMetallicRoughness": {
                        "baseColorFactor": [0.2, 0.2, 0.2, 1.0],
                        "metallicFactor": 0.8,
                        "roughnessFactor": 0.4
                    },
                    "doubleSided": True
                })

            mesh_primitives.append({
                "attributes": {
                    "POSITION": pos_acc,
                    "NORMAL": norm_acc,
                    "TEXCOORD_0": uv_acc
                },
                "indices": idx_acc,
                "material": current_mat_idx
            })

        gltf_json = {
            "asset": {
                "version": "2.0",
                "generator": "SMPZ Weapon Handbook 3D Generator"
            },
            "extensionsUsed": [
                "EXT_texture_webp"
            ],
            "extensionsRequired": [
                "EXT_texture_webp"
            ],
            "scenes": [{"nodes": [0]}],
            "nodes": [{"name": model_name, "mesh": 0}],
            "meshes": [{
                "name": f"{model_name}_Mesh",
                "primitives": mesh_primitives
            }],
            "materials": materials,
            "textures": textures,
            "images": images,
            "samplers": samplers,
            "accessors": accessors,
            "bufferViews": buffer_views,
            "buffers": [{"byteLength": current_byte_offset}]
        }

        bin_data = b"".join(bin_chunks)

        json_str = json.dumps(gltf_json, separators=(',', ':'))
        json_bytes = json_str.encode('utf-8')
        json_padding = (4 - (len(json_bytes) % 4)) % 4
        json_bytes += b' ' * json_padding

        total_length = 12 + 8 + len(json_bytes) + 8 + len(bin_data)
        glb_header = struct.pack('<4sII', b'glTF', 2, total_length)
        json_header = struct.pack('<II', len(json_bytes), 0x4E4F534A)
        bin_header = struct.pack('<II', len(bin_data), 0x004E4942)

        with open(out_path, "wb") as f:
            f.write(glb_header + json_header + json_bytes + bin_header + bin_data)

    def _optimize_glb(self, input_glb, output_glb):
        npx_cmd = shutil.which("npx.cmd") or shutil.which("npx")
        if not npx_cmd:
            shutil.copyfile(input_glb, output_glb)
            return

        cmd = [
            npx_cmd, "--yes", "@gltf-transform/cli", "optimize",
            input_glb, output_glb,
            "--texture-compress", "false",
            "--compress", "draco"
        ]

        res = subprocess.run(
            cmd,
            capture_output=True,
            encoding='utf-8',
            errors='ignore'
        )
        if res.returncode == 0 and os.path.exists(output_glb):
            pass
        else:
            shutil.copyfile(input_glb, output_glb)


def resolve_file_path(path_str):
    clean = path_str.strip('"\'')
    if os.path.isabs(clean) and os.path.exists(clean):
        return clean
    rel = os.path.abspath(clean)
    if os.path.exists(rel):
        return rel
    return None


def main():
    p3d_inputs = []

    if len(sys.argv) > 1:
        for arg in sys.argv[1:]:
            resolved = resolve_file_path(arg)
            if resolved and resolved.lower().endswith('.p3d'):
                p3d_inputs.append(resolved)
            else:
                print(f"[경고] 파일을 찾을 수 없습니다: {arg}", flush=True)

    if len(sys.argv) == 1:
        try:
            import tkinter as tk
            from tkinter import filedialog
            root = tk.Tk()
            root.withdraw()
            root.attributes('-topmost', True)
            selected = filedialog.askopenfilenames(
                title="변환할 P3D 파일들을 선택하세요 (다중 선택 가능)",
                filetypes=[("Bohemia P3D Models", "*.p3d"), ("All Files", "*.*")]
            )
            p3d_inputs = [s for s in selected if os.path.exists(s)]
        except Exception as ex:
            print(f"[!] 파일 선택창 열기 실패: {ex}", flush=True)

    if not p3d_inputs:
        print("[!] 변환할 P3D 파일이 없습니다. 프로그램을 종료합니다.", flush=True)
        return

    workspace_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    out_dir = os.path.join(workspace_root, DEFAULT_OUTPUT_DIR)
    os.makedirs(out_dir, exist_ok=True)

    converter = P3DToGLBConverter()

    print(f"\n총 {len(p3d_inputs)}개의 P3D 파일 변환을 시작합니다.", flush=True)
    success_count = 0
    for idx, p3d_file in enumerate(p3d_inputs, start=1):
        filename = os.path.splitext(os.path.basename(p3d_file))[0]
        out_glb = os.path.join(out_dir, f"{filename}.glb")

        print(f"\n[{idx}/{len(p3d_inputs)}] 작업 진행: {filename}.p3d -> {filename}.glb", flush=True)
        if converter.convert(p3d_file, out_glb):
            success_count += 1

    print("\n=======================================================", flush=True)
    print(f"[V] 작업 완료: 총 {len(p3d_inputs)}개 중 {success_count}개 변환 성공!")
    print(f"    결과 파일 저장 위치: {out_dir}")
    print("=======================================================\n", flush=True)


if __name__ == "__main__":
    main()
