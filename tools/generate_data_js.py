#SMPZ Modpack -> data.js Automated Data Generator

import os
import glob
import re
import csv
import json
import argparse
import urllib.request
import urllib.parse
import sys

# Ensure UTF-8 console output
sys.stdout.reconfigure(encoding='utf-8')

# Default project paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, '..'))

DEFAULT_DATA_JS_PATH = os.path.join(PROJECT_ROOT, 'data.js')
DEFAULT_BACKUP_JS_PATH = os.path.join(PROJECT_ROOT, 'data.backup.js')
DEFAULT_ASSETS_DIR = os.path.join(PROJECT_ROOT, 'assets')
DEFAULT_MODELS_DIR = os.path.join(DEFAULT_ASSETS_DIR, 'models')
CACHE_DIR = os.path.join(SCRIPT_DIR, '.cache')
CONFIG_FILE = os.path.join(SCRIPT_DIR, '.config.json')

# ---------------------------------------------------------------------------
# GOOGLE TRANSLATE API
# ---------------------------------------------------------------------------
def google_translate(text, target_lang='ko', source_lang='auto'):
    """Translates text to Korean using Google Translate API"""
    if not text or not text.strip():
        return ""
    clean_text = text.replace('\r\n', ' ').replace('\n', ' ').strip()
    url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl={source_lang}&tl={target_lang}&dt=t&q={urllib.parse.quote(clean_text)}"
    req = urllib.request.Request(
        url,
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
    )
    try:
        with urllib.request.urlopen(req, timeout=8) as response:
            res_bytes = response.read()
            res_json = json.loads(res_bytes.decode('utf-8'))
            translated_pieces = [sentence[0] for sentence in res_json[0] if sentence[0]]
            return "".join(translated_pieces).strip()
    except Exception as e:
        print(f"[번역] 경고: {e}")
        return clean_text

# ---------------------------------------------------------------------------
# CPP & STRINGTABLE PARSER ENGINE
# ---------------------------------------------------------------------------
def parse_cpp_file(filepath):
    """Parses a DayZ config.cpp/config_decompiled.cpp into class objects"""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            text = f.read()
    except Exception:
        return {}

    text = re.sub(r'/\*.*?\*/', '', text, flags=re.DOTALL)
    text = re.sub(r'//.*', '', text)
    
    classes = {}
    pos = 0
    while True:
        m = re.search(r'\bclass\s+([A-Za-z0-9_]+)(?:\s*:\s*([A-Za-z0-9_]+))?\s*\{', text[pos:])
        if not m:
            break
        class_name = m.group(1)
        parent_name = m.group(2)
        start_idx = pos + m.end() - 1
        
        brace_count = 1
        i = start_idx + 1
        while i < len(text) and brace_count > 0:
            if text[i] == '{':
                brace_count += 1
            elif text[i] == '}':
                brace_count -= 1
            i += 1
        
        if brace_count == 0:
            body = text[start_idx+1:i-1]
            classes[class_name] = {
                'name': class_name,
                'parent': parent_name,
                'body': body,
                'source_file': filepath
            }
            pos = pos + m.start() + len(m.group(0))
        else:
            pos = pos + m.end()
            
    return classes

def parse_array_value(raw_val):
    """Parses a DayZ C++ array value like {10, 15} or {"Vest", "Body"} into a Python list"""
    raw = raw_val.strip().strip('{}')
    if not raw:
        return []
    items = []
    for part in raw.split(','):
        part = part.strip()
        if not part:
            continue
        if part.startswith('"') and part.endswith('"'):
            items.append(part[1:-1])
        elif part.isdigit():
            items.append(int(part))
        else:
            try:
                items.append(float(part))
            except ValueError:
                items.append(part.strip('"'))
    return items

def extract_properties(body):
    """Extracts property dictionary from raw class body, including arrays"""
    props = {}
    
    # 1. First extract array properties (e.g., itemsCargoSize[], itemSize[], inventorySlot[], attachments[], itemInfo[])
    for m in re.finditer(r'([A-Za-z0-9_]+)\[\]\s*=\s*\{([^}]*)\};', body):
        k = m.group(1)
        props[k] = parse_array_value(m.group(2))
        
    # 2. Clean out arrays and nested classes to parse scalar key = value;
    clean_body = re.sub(r'[A-Za-z0-9_]+\[\]\s*=\s*\{[^}]*\};', '', body)
    clean_body = re.sub(r'class\s+[A-Za-z0-9_]+(?:\s*:\s*[A-Za-z0-9_]+)?\s*\{[^}]*\}', '', clean_body)
    for m in re.finditer(r'([A-Za-z0-9_]+)\s*=\s*([^;]+);', clean_body):
        k = m.group(1)
        v = m.group(2).strip()
        if v.startswith('"') and v.endswith('"'):
            v = v[1:-1]
        elif v.isdigit():
            v = int(v)
        else:
            try:
                v = float(v)
            except:
                pass
        props[k] = v
    return props

def load_stringtables(smpz_dir):
    """Loads all translation stringtables from SMPZ folders"""
    strings = {}
    csv_files = glob.glob(os.path.join(smpz_dir, '**', '*.csv'), recursive=True)
    for cf in csv_files:
        try:
            with open(cf, 'r', encoding='utf-8-sig', errors='ignore') as f:
                reader = csv.reader(f)
                for row in reader:
                    if len(row) >= 2 and row[0].strip():
                        key = row[0].strip().lstrip('$')
                        orig = row[1].strip().strip('"')
                        eng = row[2].strip().strip('"') if len(row) > 2 and row[2].strip() else orig
                        strings[key] = eng if eng else orig
        except Exception:
            pass
    return strings

def load_asset_files(assets_dir):
    """Builds lowercase filename map for automatic image asset linking"""
    file_map = {}
    if os.path.exists(assets_dir):
        for f in os.listdir(assets_dir):
            if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                base = os.path.splitext(f)[0].lower()
                file_map[base] = f"assets/{f}"
    return file_map

def load_model_files(models_dir):
    """Builds filename map for 3D model files (.glb, .gltf) in assets/models"""
    model_map = {}
    if os.path.exists(models_dir):
        for root, _, files in os.walk(models_dir):
            for f in files:
                if f.lower().endswith(('.glb', '.gltf')):
                    rel_path = os.path.relpath(os.path.join(root, f), PROJECT_ROOT).replace('\\', '/')
                    base = os.path.splitext(f)[0].lower()
                    model_map[base] = rel_path
                    clean_key = re.sub(r'[^a-z0-9]', '', base)
                    if clean_key and clean_key != base:
                        model_map[clean_key] = rel_path
    return model_map

def match_model_for_item(item_id, item_name, model_map, sec_type='weapon'):
    """Finds best matching 3D model file for an item according to section type"""
    if not model_map:
        return None

    # 1. Exact match with item_id (lowercase)
    id_lower = item_id.lower()
    if id_lower in model_map:
        return model_map[id_lower]

    # 2. Cleaned ID without prefixes (e.g. "SMPZ_Weapon_M4A1" -> "m4a1", "m4")
    id_cleaned = re.sub(r'^(smpz_weapon_|smpz_gear_|smpz_optics_|smpz_attachments_|smpz_)', '', id_lower)
    if id_cleaned in model_map:
        return model_map[id_cleaned]

    clean_alphanum = re.sub(r'[^a-z0-9]', '', id_cleaned)
    if clean_alphanum in model_map:
        return model_map[clean_alphanum]

    # 3. For weapons: match base weapon model (e.g. key="m4" matches "SMPZ_Weapon_M4A1", "m4a1", but NOT attachments/gear)
    if sec_type == 'weapon':
        for key, path in model_map.items():
            if len(key) >= 2:
                pattern = r'^' + re.escape(key) + r'(?:[a-z]|_|$)'
                if re.match(pattern, id_cleaned) or re.match(pattern, clean_alphanum):
                    if key[-1].isdigit() and len(clean_alphanum) > len(key):
                        next_char = clean_alphanum[len(key)]
                        if next_char.isdigit():
                            continue
                    return path

        # Word match in Weapon Name (e.g. "Colt M4A1" -> "m4a1" matching "m4")
        if item_name:
            name_lower = item_name.lower()
            name_words = re.findall(r'[a-z0-9]+', name_lower)
            for w in name_words:
                if w in model_map and len(w) >= 2:
                    return model_map[w]
                for key, path in model_map.items():
                    if len(key) >= 2:
                        pattern = r'^' + re.escape(key) + r'(?:[a-z]|_|$)'
                        if re.match(pattern, w):
                            if key[-1].isdigit() and len(w) > len(key) and w[len(key)].isdigit():
                                continue
                            return path

    return None

# ---------------------------------------------------------------------------
# LOCAL CONFIG & TRANSLATION CACHES
# ---------------------------------------------------------------------------
def load_config():
    """Loads local config file"""
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_config(cfg):
    """Saves local config file"""
    try:
        with open(CONFIG_FILE, 'w', encoding='utf-8') as f:
            json.dump(cfg, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"[설정] 저장 실패: {e}")

def load_google_translation_cache():
    """Loads cached Google Translations"""
    cache_path = os.path.join(CACHE_DIR, 'google_translation_cache.json')
    if os.path.exists(cache_path):
        try:
            with open(cache_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_google_translation_cache(cache):
    """Saves Google Translations cache"""
    os.makedirs(CACHE_DIR, exist_ok=True)
    cache_path = os.path.join(CACHE_DIR, 'google_translation_cache.json')
    try:
        with open(cache_path, 'w', encoding='utf-8') as f:
            json.dump(cache, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"[캐시] 저장 실패: {e}")

def is_valid_smpz_dir(path):
    """Checks if the given directory contains SMPZ mod packages or cpp files"""
    if not path or not os.path.isdir(path):
        return False
    has_subpkg = any(os.path.exists(os.path.join(path, pkg)) for pkg in ['SMPZ_Weapons', 'SMPZ_More_Weapons', 'SMPZ_More_Attachment', 'SMPZ_Gears'])
    if has_subpkg:
        return True
    cpp_files = glob.glob(os.path.join(path, '**', '*.cpp'), recursive=True)
    return len(cpp_files) > 0

def prompt_folder_dialog(title="SMPZ 모드팩 루트 디렉토리를 선택해주세요", initial_dir=None):
    """Opens a GUI folder picker dialog using Tkinter"""
    try:
        import tkinter as tk
        from tkinter import filedialog
        
        root = tk.Tk()
        root.withdraw()
        root.attributes('-topmost', True)
        selected = filedialog.askdirectory(title=title, initialdir=initial_dir or PROJECT_ROOT)
        root.destroy()
        return selected if selected else None
    except Exception as e:
        print(f"[GUI] 폴더 선택 다이얼로그 실행 실패: {e}")
        return None

def resolve_smpz_dir(cli_dir=None, force_select=False, no_gui=False):
    """Resolves the SMPZ root directory via CLI, Config, Auto-discovery, or GUI dialog"""
    config = load_config()

    # 1. CLI argument directly specified
    if cli_dir:
        if is_valid_smpz_dir(cli_dir):
            config['smpz_dir'] = os.path.abspath(cli_dir)
            save_config(config)
            return os.path.abspath(cli_dir)
        else:
            print(f"[경고] 지정된 경로가 유효한 SMPZ 모드팩 디렉토리가 아닙니다: {cli_dir}")

    # 2. If force selection requested, open GUI directly
    if force_select and not no_gui:
        print("[*] SMPZ 모드팩 폴더 선택 창을 엽니다...")
        selected = prompt_folder_dialog(initial_dir=config.get('smpz_dir'))
        if selected and is_valid_smpz_dir(selected):
            config['smpz_dir'] = os.path.abspath(selected)
            save_config(config)
            return os.path.abspath(selected)
        elif selected:
            print(f"[경고] 선택한 폴더에 SMPZ 모드 파일이 없습니다: {selected}")
        else:
            print("[*] 폴더 선택이 취소되었습니다.")

    # 3. Check previously saved config
    saved_dir = config.get('smpz_dir')
    if saved_dir and is_valid_smpz_dir(saved_dir):
        return saved_dir

    # 4. Check environment variable
    env_dir = os.environ.get('SMPZ_DIR') or os.environ.get('SMPZ_MOD_PATH')
    if env_dir and is_valid_smpz_dir(env_dir):
        config['smpz_dir'] = os.path.abspath(env_dir)
        save_config(config)
        return os.path.abspath(env_dir)

    # 5. Auto-discovery in relative paths
    candidates = [
        os.path.join(PROJECT_ROOT, 'SMPZ'),
        os.path.join(PROJECT_ROOT, '..', 'SMPZ'),
        os.path.join(PROJECT_ROOT, 'mod_source', 'SMPZ'),
    ]
    for cand in candidates:
        if is_valid_smpz_dir(cand):
            config['smpz_dir'] = os.path.abspath(cand)
            save_config(config)
            return os.path.abspath(cand)

    # 6. Fallback to GUI prompt if available
    if not no_gui:
        print("[*] SMPZ 모드팩 경로를 찾을 수 없어 폴더 선택 창을 엽니다...")
        selected = prompt_folder_dialog()
        if selected and is_valid_smpz_dir(selected):
            config['smpz_dir'] = os.path.abspath(selected)
            save_config(config)
            return os.path.abspath(selected)
        elif selected:
            print(f"[경고] 선택한 폴더에 SMPZ 모드 파일이 없습니다: {selected}")

    return None

# ---------------------------------------------------------------------------
# DATASET GENERATION PIPELINE
# ---------------------------------------------------------------------------
def build_data_js(smpz_dir, assets_dir=DEFAULT_ASSETS_DIR, models_dir=DEFAULT_MODELS_DIR, data_js_path=DEFAULT_DATA_JS_PATH, backup_js_path=DEFAULT_BACKUP_JS_PATH):
    """
    Main conversion pipeline:
    1. Parses SMPZ mod packages and extracts properties (including arrays: itemsCargoSize, itemSize, inventorySlot, attachments, itemInfo).
    2. Resolves descriptions (preserves existing, translates missing via Google Translate).
    3. Links 2D image assets and 3D .glb models.
    4. Computes backpack grid size & slot capacity, preserves raw C++ slots & attachment info.
    5. Outputs data.js.
    """
    print("=" * 70)
    print("  SMPZ 모드팩: data.js 자동 생성기")
    print("  (가방 수납 크기 + 슬롯 메타데이터 + 3D 모델 + 설명 번역 자동 연동)")
    print("=" * 70)

    # 1. Load Stringtables, Assets, Models, and Caches
    str_table = load_stringtables(smpz_dir)
    file_map = load_asset_files(assets_dir)
    model_map = load_model_files(models_dir)
    google_cache = load_google_translation_cache()

    print(f"[*] 로컬라이제이션 스트링테이블 {len(str_table)}개 항목 로드 완료.")
    print(f"[*] 에셋 이미지 인덱싱 완료 ({len(file_map)}개 파일): {assets_dir}")
    print(f"[*] 3D 모델 인덱싱 완료 ({len(model_map)}개 키): {models_dir}")
    print(f"[*] 캐시된 구글 번역 {len(google_cache)}개 로드 완료.")

    # 2. Parse C++ Classes across SMPZ packages
    target_dirs = ['SMPZ_Weapons', 'SMPZ_More_Weapons', 'SMPZ_More_Attachment', 'SMPZ_Gears']
    all_classes = {}
    for td in target_dirs:
        p = os.path.join(smpz_dir, td)
        cpp_files = glob.glob(os.path.join(p, '**', '*.cpp'), recursive=True)
        print(f"[*] {td} 파싱 중 ({len(cpp_files)}개 cpp 파일)...")
        for cf in cpp_files:
            cls_map = parse_cpp_file(cf)
            for cname, cinfo in cls_map.items():
                if cname not in all_classes:
                    all_classes[cname] = cinfo
                    all_classes[cname]['props'] = extract_properties(cinfo['body'])

    print(f"[*] 파싱된 고유 클래스 총 {len(all_classes)}개")

    def get_inherited_props(cname):
        curr = cname
        visited = set()
        chain = []
        while curr and curr not in visited and curr in all_classes:
            visited.add(curr)
            chain.append(curr)
            curr = all_classes[curr].get('parent')
        merged = {}
        for c in reversed(chain):
            merged.update(all_classes[c].get('props', {}))
        return merged

    # 3. Load Canonical Reference Items
    if os.path.exists(data_js_path):
        ref_file = data_js_path
    elif os.path.exists(DEFAULT_DATA_JS_PATH):
        ref_file = DEFAULT_DATA_JS_PATH
    else:
        ref_file = backup_js_path
    with open(ref_file, 'r', encoding='utf-8') as f:
        text = f.read()

    w_match = re.search(r'const weaponsData = (\{.*?\});\s*(?=//|const gearData)', text, re.DOTALL)
    g_match = re.search(r'const gearData = (\{.*?\});\s*(?=//|const attachmentData)', text, re.DOTALL)
    a_match = re.search(r'const attachmentData = (\{.*?\});', text, re.DOTALL)

    target_w = json.loads(w_match.group(1)) if w_match else {}
    target_g = json.loads(g_match.group(1)) if g_match else {}
    target_a = json.loads(a_match.group(1)) if a_match else {}

    # Helper: Resolve description
    def resolve_item_description(item_id, existing_desc=""):
        # 1. Preserve existing description if already present
        if existing_desc and str(existing_desc).strip():
            return str(existing_desc).strip(), 'existing'

        # 2. For items with missing descriptions: Google Translate from raw config
        props = get_inherited_props(item_id)
        raw_desc_key = str(props.get('descriptionShort', '')).strip()
        raw_desc = str_table.get(raw_desc_key.lstrip('$'), raw_desc_key)
        if not raw_desc or raw_desc.startswith('$STR_') or raw_desc == 'None':
            return "", 'empty'

        clean_raw = raw_desc.replace('\r\n', ' ').replace('\n', ' ').strip()
        if clean_raw in google_cache:
            return google_cache[clean_raw], 'google_translate'

        # Live Google Translate API fallback
        translated = google_translate(clean_raw)
        google_cache[clean_raw] = translated
        return translated, 'google_translate'

    # Reconstruct datasets
    sections = [
        ('weaponsData', target_w, 'weapon'),
        ('gearData', target_g, 'gear'),
        ('attachmentData', target_a, 'attachment')
    ]
    result_data = {}
    stats_summary = {
        'existing': 0,
        'google_translate': 0,
        'empty': 0,
        'cargo_items': 0,
        'models_linked': 0,
        'slots_linked': 0
    }

    for sec_name, sec_dict, sec_type in sections:
        result_data[sec_name] = {}
        for cat, items in sec_dict.items():
            result_data[sec_name][cat] = []
            for item in items:
                item_id = item['id']
                item_name = item.get('name', '')
                existing_desc = item.get('description', '')
                item_obj = dict(item)
                props = get_inherited_props(item_id)

                # 1. 2D Image Asset mapping
                matched_img = file_map.get(item_id.lower())
                if matched_img:
                    item_obj['image'] = matched_img
                    item_obj['images'] = [matched_img]

                # 2. 3D Model Asset mapping (.glb)
                matched_model = match_model_for_item(
                    item_id=item_id,
                    item_name=item_name,
                    model_map=model_map,
                    sec_type=sec_type
                )
                if matched_model:
                    item_obj['model'] = matched_model
                    stats_summary['models_linked'] += 1
                elif 'model' in item_obj:
                    del item_obj['model']

                # 3. Cargo Size & Item Size parsing (raw dimensions & slot counts)
                cargo_size_arr = props.get('itemsCargoSize') or props.get('itemCargoSize')
                if cargo_size_arr and len(cargo_size_arr) >= 2:
                    try:
                        cw = int(cargo_size_arr[0])
                        ch = int(cargo_size_arr[1])
                        item_obj['cargoSize'] = f"{cw}x{ch}"
                        item_obj['cargoSlots'] = cw * ch
                        stats_summary['cargo_items'] += 1
                    except (ValueError, TypeError):
                        pass

                item_size_arr = props.get('itemSize')
                if item_size_arr and len(item_size_arr) >= 2:
                    try:
                        iw = int(item_size_arr[0])
                        ih = int(item_size_arr[1])
                        item_obj['itemSize'] = f"{iw}x{ih}"
                        item_obj['itemSlots'] = iw * ih
                    except (ValueError, TypeError):
                        pass

                # 4. Raw C++ Slots & Attachments metadata
                inv_slots = props.get('inventorySlot')
                item_info = props.get('itemInfo')
                att_slots = props.get('attachments')
                magazines = props.get('magazines')
                chamberable = props.get('chamberableFrom')

                if inv_slots:
                    item_obj['inventorySlots'] = inv_slots
                    stats_summary['slots_linked'] += 1
                if item_info:
                    item_obj['itemInfo'] = item_info
                if att_slots:
                    item_obj['attachmentSlots'] = att_slots
                if magazines:
                    item_obj['magazines'] = magazines
                if chamberable:
                    item_obj['chamberableFrom'] = chamberable

                # 5. Description resolution
                final_desc, src_type = resolve_item_description(item_id, existing_desc)
                item_obj['description'] = final_desc
                stats_summary[src_type] += 1

                result_data[sec_name][cat].append(item_obj)

    # Save updated translation cache
    save_google_translation_cache(google_cache)

    print("\n" + "-" * 70)
    print(f"[*] 데이터 생성 및 처리 통계:")
    print(f"    - 기존 설명 보존:               {stats_summary['existing']}개")
    print(f"    - 구글 번역(캐시 및 신규 번역):  {stats_summary['google_translate']}개")
    print(f"    - 설명 없음 / 비어있음:          {stats_summary['empty']}개")
    print(f"    - 가방/수납 크기 파싱 완료:      {stats_summary['cargo_items']}개")
    print(f"    - 슬롯(inventorySlots) 연동:     {stats_summary['slots_linked']}개")
    print(f"    - 3D 모델(.glb) 자동 연결:       {stats_summary['models_linked']}개")
    print("-" * 70)

    return result_data['weaponsData'], result_data['gearData'], result_data['attachmentData']

def save_data_js(weaponsData, gearData, attachmentData, output_file=DEFAULT_DATA_JS_PATH):
    """Outputs data.js with formatting"""
    output_content = f"""// 무기 데이터 (자동 동기화 빌드)
// 이제 데이터는 이 파일에 저장됩니다
const weaponsData = {json.dumps(weaponsData, indent=4, ensure_ascii=False)};

// 기어 데이터 (자동 동기화 빌드)
const gearData = {json.dumps(gearData, indent=4, ensure_ascii=False)};

// 부착물 데이터 (자동 동기화 빌드)
const attachmentData = {json.dumps(attachmentData, indent=4, ensure_ascii=False)};
"""
    with open(output_file, 'w', encoding='utf-8', newline='\n') as f:
        f.write(output_content)
    print(f"\n[✓] data.js 파일 생성 완료: {output_file}")

# ---------------------------------------------------------------------------
# MAIN CLI
# ---------------------------------------------------------------------------
def main():
    parser = argparse.ArgumentParser(description="SMPZ 모드팩 data.js 자동 생성 도구")
    parser.add_argument('--smpz-dir', help="SMPZ 모드팩 루트 디렉토리 경로 (직접 지정 시 저장됨)")
    parser.add_argument('--select-dir', action='store_true', help="GUI 폴더 선택 창을 띄워 SMPZ 모드팩 경로를 새로 지정합니다")
    parser.add_argument('--no-gui', action='store_true', help="GUI 다이얼로그를 띄우지 않고 콘솔만 사용합니다")
    parser.add_argument('--assets-dir', default=DEFAULT_ASSETS_DIR, help="assets 디렉토리 경로")
    parser.add_argument('--models-dir', default=DEFAULT_MODELS_DIR, help="assets/models 디렉토리 경로")
    parser.add_argument('--output', default=DEFAULT_DATA_JS_PATH, help="출력할 data.js 파일 경로")
    args = parser.parse_args()

    smpz_dir = resolve_smpz_dir(cli_dir=args.smpz_dir, force_select=args.select_dir, no_gui=args.no_gui)
    if not smpz_dir:
        print("\n[오류] 유효한 SMPZ 모드팩 디렉토리를 찾을 수 없습니다.")
        print("  - GUI 창에서 SMPZ 모드팩 폴더를 선택하거나,")
        print("  - --smpz-dir 옵션을 사용하여 경로를 지정해주세요.")
        print('  예: python tools/generate_data_js.py --smpz-dir "path/to/SMPZ"')
        sys.exit(1)

    print(f"[*] 사용 중인 SMPZ 모드팩 경로: {smpz_dir}")

    weapons, gear, attachments = build_data_js(
        smpz_dir=smpz_dir,
        assets_dir=args.assets_dir,
        models_dir=args.models_dir,
        data_js_path=args.output,
        backup_js_path=DEFAULT_BACKUP_JS_PATH
    )

    save_data_js(weapons, gear, attachments, output_file=args.output)
    print("\n[✓] 모든 작업이 성공적으로 완료되었습니다!")

if __name__ == '__main__':
    main()

