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
        # Live Google Translate API fallback
        translated = google_translate(clean_raw)
        google_cache[clean_raw] = translated
        return translated, 'google_translate'

    # Helper: Extract C++ OpticsInfo Magnification
    def get_class_optics_info_body(cname):
        curr = cname
        visited = set()
        while curr and curr not in visited and curr in all_classes:
            visited.add(curr)
            body = all_classes[curr].get('body', '')
            if 'class OpticsInfo' in body:
                m = re.search(r'\bclass\s+OpticsInfo\b[^{]*\{', body)
                if m:
                    start_idx = m.end() - 1
                    depth = 1
                    i = start_idx + 1
                    n = len(body)
                    while i < n and depth > 0:
                        if body[i] == '{': depth += 1
                        elif body[i] == '}': depth -= 1
                        i += 1
                    return body[start_idx+1:i-1]
            curr = all_classes[curr].get('parent')
        return None

    def eval_safe_expr(expr_str):
        cleaned = re.sub(r'[^0-9+\-*/.()]', '', expr_str)
        if not cleaned: return None
        try:
            return eval(cleaned, {"__builtins__": None}, {})
        except:
            return None

    def extract_optic_magnification(item_id):
        oi_body = get_class_optics_info_body(item_id)
        if not oi_body:
            return None
        
        # 1. discretefov[]
        dfov_m = re.search(r'discretefov\[\]\s*=\s*\{([^}]+)\};', oi_body, re.IGNORECASE)
        if dfov_m:
            raw_list = [x.strip().strip('"\'') for x in dfov_m.group(1).split(',')]
            zooms = []
            for r in raw_list:
                if '/' in r:
                    parts = r.split('/')
                    val = eval_safe_expr(parts[1])
                    if val is not None:
                        zooms.append(val)
                else:
                    val = eval_safe_expr(r)
                    if val is not None and val > 0:
                        mag = 1.0 if abs(val - 0.5236) < 0.01 else round(0.5236 / val, 1)
                        zooms.append(mag)
            if zooms:
                min_z = min(zooms)
                max_z = max(zooms)
                min_fmt = f"{int(min_z)}" if min_z.is_integer() else f"{min_z}"
                max_fmt = f"{int(max_z)}" if max_z.is_integer() else f"{max_z}"
                return f"{min_fmt}x" if min_fmt == max_fmt else f"{min_fmt}-{max_fmt}x"
        
        # 2. opticsZoomMin / Max
        min_m = re.search(r'opticsZoomMin\s*=\s*["\']?([^;"\']+)["\']?;', oi_body)
        max_m = re.search(r'opticsZoomMax\s*=\s*["\']?([^;"\']+)["\']?;', oi_body)
        if min_m and max_m:
            min_raw = min_m.group(1).strip()
            max_raw = max_m.group(1).strip()
            def calc_mag(s):
                if '/' in s:
                    parts = s.split('/')
                    val = eval_safe_expr(parts[1])
                    return val if val is not None else 1.0
                val = eval_safe_expr(s)
                if val is not None and val > 0:
                    return 1.0 if abs(val - 0.5236) < 0.01 else round(0.5236 / val, 1)
                return 1.0
            mag1 = calc_mag(min_raw)
            mag2 = calc_mag(max_raw)
            min_z = min(mag1, mag2)
            max_z = max(mag1, mag2)
            min_fmt = f"{int(min_z)}" if min_z.is_integer() else f"{min_z}"
            max_fmt = f"{int(max_z)}" if max_z.is_integer() else f"{max_z}"
            return f"{min_fmt}x" if min_fmt == max_fmt else f"{min_fmt}-{max_fmt}x"
            
        return '1x'

    # Korean Translation map for C++ ProtectionAreas
    PROTECTION_AREAS_MAP = {
        'Neck': '목',
        'Torso': '흉부',
        'Back': '등',
        'LeftShoulder': '좌측 어깨',
        'RightShoulder': '우측 어깨',
        'Stomach': '복부',
        'LeftSide': '좌측 옆구리',
        'RightSide': '우측 옆구리',
        'Groin': '낭심(사타구니)',
        'Head': '두부(머리)',
        'Face': '안면(얼굴)',
        'Ears': '귀',
        'Eyes': '눈',
        'Arms': '팔',
        'Legs': '다리',
        'Feet': '발',
        'Hands': '손'
    }

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
        'slots_linked': 0,
        'protection_items': 0,
        'optics_magnification': 0
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
                item_obj.pop('modesKo', None)
                item_obj.pop('protectionAreasKo', None)
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

                # 4-1. Weapon Designated Primary Caliber
                if sec_name == 'weaponsData':
                    w_cals = extract_weapon_primary_caliber_from_cpp(item_id, item_obj, props)
                    if w_cals:
                        item_obj['calibers'] = w_cals

                # 5. Protection Areas metadata
                prot_areas = props.get('ProtectionAreas')
                if prot_areas and isinstance(prot_areas, list) and len(prot_areas) > 0:
                    item_obj['protectionAreas'] = prot_areas
                    stats_summary['protection_items'] += 1

                # 6. Weapon Fire Modes metadata
                modes_arr = props.get('modes')
                if modes_arr and isinstance(modes_arr, list) and len(modes_arr) > 0:
                    item_obj['modes'] = modes_arr

                # 7. Tactical Flashlight Light Distance
                if 'Flashlight' in item_id or item_obj.get('category') == '전술 플래시':
                    desc_short = str(props.get('descriptionShort', ''))
                    m_dist = re.search(r'(?:Max light distance|distance)[:\s]*(\d+)\s*m', desc_short, re.IGNORECASE)
                    if m_dist:
                        item_obj.setdefault('stats', {})['lightDistance'] = f"{m_dist.group(1)}m"
                    elif 'M600' in item_id:
                        item_obj.setdefault('stats', {})['lightDistance'] = "100m"
                    elif 'XHP35' in item_id:
                        item_obj.setdefault('stats', {})['lightDistance'] = "300m"

                # 8. Optics Magnification
                if item_obj.get('category') == '광학 조준경' or 'Optic' in item_id or 'Scope' in item_id or 'Sight' in item_id:
                    mag = extract_optic_magnification(item_id)
                    if mag:
                        item_obj.setdefault('stats', {})['magnification'] = mag
                        stats_summary['optics_magnification'] += 1

                # 9. Description resolution
                final_desc, src_type = resolve_item_description(item_id, existing_desc)
                item_obj['description'] = final_desc
                stats_summary[src_type] += 1

                result_data[sec_name][cat].append(item_obj)

    # 10. Enrich magazine and weapon compatible calibers
    enrich_magazine_calibers(result_data['weaponsData'], result_data['attachmentData'])

    # Save updated translation cache
    save_google_translation_cache(google_cache)

    print("\n" + "-" * 70)
    print(f"[*] 데이터 생성 및 처리 통계:")
    print(f"    - 기존 설명 보존:               {stats_summary['existing']}개")
    print(f"    - 구글 번역(캐시 및 신규 번역):  {stats_summary['google_translate']}개")
    print(f"    - 설명 없음 / 비어있음:          {stats_summary['empty']}개")
    print(f"    - 가방/수납 크기 파싱 완료:      {stats_summary['cargo_items']}개")
    print(f"    - 슬롯(inventorySlots) 연동:     {stats_summary['slots_linked']}개")
    print(f"    - 방호 부위(ProtectionAreas) 연동: {stats_summary['protection_items']}개")
    print(f"    - 조준경 C++ 배율 연동:          {stats_summary['optics_magnification']}개")
    print(f"    - 3D 모델(.glb) 자동 연결:       {stats_summary['models_linked']}개")
    print("-" * 70)

    return result_data['weaponsData'], result_data['gearData'], result_data['attachmentData']

def normalize_ammo_caliber(raw_str):
    """Normalizes an ammo/caliber string from C++ config (caliberName, bulletType, chamberableFrom) into standard name"""
    if not raw_str:
        return None
    raw = str(raw_str).lower().replace(' ', '').replace('_', '').replace('-', '')
    raw_lower = str(raw_str).lower()
    
    # 1. .50 AE vs .50 BMG
    if '50ae' in raw or 'actionexpress' in raw:
        return '.50 AE'
    if '50bmg' in raw or '12.7x99' in raw or '12.7x108' in raw or (('50cal' in raw or '.50' in raw_lower) and 'bmg' in raw_lower):
        return '.50 BMG'
    
    # 2. Shotgun 12ga
    if '12ga' in raw or '12gauge' in raw or '12x70' in raw or '12/70' in raw:
        return '12 Gauge'
    
    # 3. Specific Calibers from C++ config
    if '300blk' in raw or '300aac' in raw or '300blackout' in raw or '300whisper' in raw or '300vmax' in raw or '300bcp' in raw:
        return '.300 BLK'
    if '68x51' in raw or '6.8x51' in raw_lower or '277fury' in raw or '277sig' in raw:
        return '6.8x51mm'
    if '366tkm' in raw or '.366' in raw_lower:
        return '.366 TKM'
    if '556x45' in raw or '5.56x45' in raw_lower or '556nato' in raw or '223rem' in raw:
        return '5.56x45mm'
    if '545x39' in raw or '5.45x39' in raw_lower:
        return '5.45x39mm'
    if '762x39' in raw or '7.62x39' in raw_lower:
        return '7.62x39mm'
    if '762x51' in raw or '7.62x51' in raw_lower or '308win' in raw or '.308' in raw_lower:
        return '7.62x51mm'
    if '762x54' in raw or '7.62x54' in raw_lower:
        return '7.62x54mmR'
    if '762x25' in raw or '7.62x25' in raw_lower or 'tokarev' in raw:
        return '7.62x25mm'
    if '9x19' in raw or 'parabellum' in raw or 'luger' in raw:
        return '9x19mm'
    if '9x39' in raw:
        return '9x39mm'
    if '9x18' in raw or 'makarov' in raw:
        return '9x18mm'
    if '9x21' in raw or 'gyurza' in raw:
        return '9x21mm'
    if '45acp' in raw or '.45acp' in raw_lower or '11.43x23' in raw:
        return '.45 ACP'
    if '57x28' in raw or '5.7x28' in raw_lower:
        return '5.7x28mm'
    if '46x30' in raw or '4.6x30' in raw_lower:
        return '4.6x30mm'
    if '338' in raw or 'lapua' in raw:
        return '.338 Lapua'
    if '300win' in raw or '300wm' in raw:
        return '.300 Win'
    if '408ct' in raw or 'cheytac' in raw or 'm200' in raw:
        return '.408 CheyTac'
    if '357' in raw or 'magnum' in raw:
        return '.357 Magnum'
    if '22lr' in raw:
        return '.22 LR'
    if '40mm' in raw or 'grenade' in raw:
        return '40mm'
    
    return None

def extract_weapon_primary_caliber_from_cpp(item_id, item_obj, props):
    """
    Pure C++ driven primary caliber resolution:
    1. Reads C++ `caliberName` property from inherited class chain.
    2. Reads C++ `bulletType` property from inherited class chain.
    3. Analyzes C++ `chamberableFrom[]` array.
    """
    # 1. C++ caliberName
    c_name = props.get('caliberName')
    if c_name:
        cal = normalize_ammo_caliber(c_name)
        if cal:
            return [cal]
            
    # 2. C++ bulletType
    b_type = props.get('bulletType')
    if b_type:
        cal = normalize_ammo_caliber(b_type)
        if cal:
            return [cal]
            
    # 3. C++ chamberableFrom (single caliber or first primary)
    chamber = props.get('chamberableFrom') or item_obj.get('chamberableFrom', [])
    if chamber:
        cals = []
        for ammo in chamber:
            cal = normalize_ammo_caliber(ammo)
            if cal and cal not in cals:
                cals.append(cal)
        if len(cals) == 1:
            return cals
        elif len(cals) > 1:
            return [cals[0]]
            
    return []

def enrich_magazine_calibers(weaponsData, attachmentData):
    """Links weapons' chamberableFrom calibers to compatible magazines, populating calibers[]"""
    mag_to_calibers = {}

    # 1. Cross-reference weapons to magazines
    for cat, weapons in weaponsData.items():
        for weapon in weapons:
            w_mags = weapon.get('magazines') or []
            w_chamber = weapon.get('chamberableFrom') or []
            w_cals = [normalize_ammo_caliber(a) for a in w_chamber]
            w_cals = [c for c in w_cals if c]

            for m_id in w_mags:
                if m_id not in mag_to_calibers:
                    mag_to_calibers[m_id] = set()
                for c in w_cals:
                    mag_to_calibers[m_id].add(c)

    # 2. Enrich attachmentData['탄창'] items
    mag_items = attachmentData.get('탄창', [])
    for mag in mag_items:
        m_id = mag.get('id', '')
        cals_set = mag_to_calibers.get(m_id, set())

        # Fallback heuristics for standalone/custom magazines
        if not cals_set:
            id_lower = m_id.lower()
            name_lower = str(mag.get('name', '')).lower()
            all_str = f"{id_lower} {name_lower}"

            if any(k in all_str for k in ['stanag', '556', 'ar15', 'pmag_40', 'drumpmag556', 'beta_cmag_556', 'troy_battlemag', 'l5awm']):
                cals_set = {'5.56x45mm', '.300 BLK'}
            elif any(k in all_str for k in ['762x51', '68x51', 'l7awm', 'drum_x25', 'sr25', 'm110', 'kac_steel', '308']):
                cals_set = {'6.8x51mm', '7.62x51mm'}
            elif any(k in all_str for k in ['762x39', 'akms', 'aka16', 'ultimag_762', '6l10', '6p2', 'x47']):
                cals_set = {'7.62x39mm', '.366 TKM'}
            else:
                single_cal = normalize_ammo_caliber(all_str)
                if single_cal:
                    cals_set = {single_cal}

        # Sort calibers deterministically
        if cals_set:
            mag['calibers'] = sorted(list(cals_set))

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

