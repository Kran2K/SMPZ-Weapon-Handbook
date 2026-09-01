
// 전역 상태 변수
let currentCategory = null;
let currentWeapon = null;
let currentPanel = 'weapon';
let currentGear = null;
let lastGalleryImageIndex = 0;
let lastGridScrollY = 0;
let compareTarget = null;
let isAdmin = false;
const APP_STATE_KEY = 'smpz_handbook_state';

// 네비게이션 히스토리 스택
let navStack = [];
let isNavigatingHistory = false;

// 슬롯명 한국어 매핑 사전
const slotNameMap = {
    // AR / 서방권 소총
    'ARBuffer': 'AR 버퍼 튜브',
    'ARChargingHandle': 'AR 차징 핸들',
    'ARpistolgrip': 'AR 피스톨 그립',
    'M4Receiver': 'M4 리시버',
    'M4Handguard': 'M4 핸드가드',
    'ARGasblock': '가스 블록',
    'AR10Gasblock': 'AR-10 가스 블록',
    'weaponMuzzleM4': 'M4 총구 부착물',
    'ARButtstock': 'AR 개머리판',
    'AR10Handguard': 'AR-10 핸드가드',
    'ARIntegratedStock': 'AR 일체형 개머리판',
    'LPTBuffer': 'LPT 버퍼 튜브',
    '417Buffer': 'HK417 버퍼 튜브',
    '417Handguard': 'HK417 핸드가드',
    'HK416Handguard': 'HK416 핸드가드',
    'SCARButtstock': 'SCAR 개머리판',
    'SCARBuffer': 'SCAR 버퍼 튜브',
    'SCARHandguard': 'SCAR 핸드가드',
    'SCARHandguardCASV': 'SCAR CASV 핸드가드',
    'SPEARHandguard': 'SPEAR 핸드가드',
    'SPEARSuppressor': 'SPEAR 소음기',
    'DD9LowerHandguard': 'DD 9인치 하부 핸드가드',
    'DD12LowerHandguard': 'DD 12인치 하부 핸드가드',
    'DDCover': 'DD 레일 커버',
    'DDCover2': 'DD 레일 커버 2',
    'JailBreakMuzzle': 'JailBreak 머즐',
    'SA58Stock': 'SA58 개머리판',
    'SA58Pistolgrip': 'SA58 피스톨 그립',
    'SA58Handguard': 'SA58 핸드가드',
    'SA58Cover': 'SA58 커버',
    'MDRHandguard': 'MDR 핸드가드',
    'F2000Handguard': 'F2000 핸드가드',
    'F2000Rearsight': 'F2000 가늠자',
    'X17Receiver': 'X-17 리시버',
    'G36Buttstock': 'G36 개머리판',
    'G36Optic': 'G36 조준경',
    'G36Frontsight': 'G36 가늠쇠',
    'G36Handguard': 'G36 핸드가드',
    'G36Magwell': 'G36 탄창 삽입구',
    'MasadaButtstock': '마사다 개머리판',
    'MasadaHandguard': '마사다 핸드가드',
    'MCXButtstock': 'MCX 개머리판',
    'MCXHandguard': 'MCX 핸드가드',
    'AUGReceiver': 'AUG 리시버',
    'AUGOptic': 'AUG 조준경',
    'AUGMount': 'AUG 마운트',
    'AUGMuzzle': 'AUG 머즐',

    // AK / 동구권 소총
    'AKpistolgrip': 'AK 피스톨 그립',
    'AKChargingHandle': 'AK 차징 핸들',
    'weaponOpticsAK': 'AK 조준경',
    'AK74MBuffer': 'AK-74M 버퍼 튜브',
    'AK74MButtstock': 'AK-74M 개머리판',
    'AKSidemount': 'AK 사이드 마운트',
    'AKButtpad': 'AK 버트패드',
    'AKCover': 'AK 리시버 커버',
    'AKRearsight': 'AK 가늠자',
    'AKHandguard': 'AK 핸드가드',
    'AKButtstock': 'AK 개머리판',
    'AKMSStock': 'AKMS 개머리판',
    'AKZenitStock': 'AK Zenit 개머리판',
    'weaponMuzzleAK74': 'AK-74 소염기/소음기',
    'weaponMuzzleAKM': 'AKM 소염기/소음기',
    'AK12Cover': 'AK-12 리시버 커버',
    'AK12Handguard': 'AK-12 핸드가드',
    'AK12Muzzle': 'AK-12 소염기',
    'AK308Cover': 'AK-308 리시버 커버',
    'AK308Handguard': 'AK-308 핸드가드',
    'AK308Muzzle': 'AK-308 소염기',
    'AK50Cover': 'AK-50 리시버 커버',
    'AK50Hndgrd': 'AK-50 핸드가드',
    'RD704Handguard': 'RD-704 핸드가드',
    'VPO101Cover': 'VPO-101 커버',
    'AN94Buttstock': 'AN-94 개머리판',
    'AKS74UButtstock': 'AKS-74U 개머리판',
    'AKS74UCover': 'AKS-74U 커버',
    'AKS74UHandguard': 'AKS-74U 핸드가드',
    'OpticsOnAKHndgrd': 'AK 핸드가드 조준경',

    // 특수 / 저격 / 지정사수 소총
    'VALAdapter': 'VAL 어댑터',
    'VALButtstock': 'VAL 개머리판',
    'VSSCover': 'VSS 커버',
    'VSSRearsight': 'VSS 가늠자',
    'VSSHandguard': 'VSS 핸드가드',
    'VSSMount': 'VSS 마운트',
    'ASVALMod4Handguard': 'AS VAL Mod.4 핸드가드',
    'ASVALMod4Muzzle': 'AS VAL Mod.4 총구',
    'SR3MSuppressor': 'SR-3M 소음기',
    'ASH12Suppressor': 'ASh-12 소음기',
    'SKSHandguard': 'SKS 핸드가드',
    'SKSStock': 'SKS 개머리판',
    'SKSReceiver': 'SKS 리시버',
    'SKSMount': 'SKS 마운트',
    'SKSRearsight': 'SKS 가늠자',
    'M1AChassis': 'M1A 섀시',
    'M1AUpper': 'M1A 어퍼',
    'M1AScopeMount': 'M1A 스코프 마운트',
    'SVTStock': 'SVT 개머리판',
    'SVTMount': 'SVT 마운트',
    'SVTOptic': 'SVT 조준경',
    'SVDStock': 'SVD 개머리판',
    'SVDButtstock': 'SVD 개머리판',
    'SVDAdapter': 'SVD 어댑터',
    'SVDCover': 'SVD 리시버 커버',
    'SVDMK1ChassisUpperBand': 'SVD MK1 섀시 어퍼',
    'SVDHandguard': 'SVD 핸드가드',
    '762x54Suppressor': '7.62x54mm 소음기',
    'AXMCButtstock': 'AXMC 개머리판',
    'AXMCHandguard': 'AXMC 핸드가드',
    'M107A1Cheek': 'M107A1 칙패드',
    'M107A1Rearsight': 'M107A1 가늠자',
    'M107A1Frontsight': 'M107A1 가늠쇠',
    'M107A1Bipod': 'M107A1 양각대',
    'M107A1Muzzle': 'M107A1 머즐',
    'XM109Muzzle': 'XM109 머즐',
    'M200Stock': 'M200 개머리판',
    'M200Handguard': 'M200 핸드가드',
    'M200Muzzle': 'M200 머즐',
    'BipodDVL10': 'DVL-10 양각대',
    'weaponOpticsMosin': '모신나강 조준경',
    'MosinStock': '모신나강 개머리판',
    'MosinPatriot': '모신나강 패트리어트 키트',
    'MosinRearsight': '모신나강 가늠자',
    'MosinSuppressor': '모신나강 소음기',
    'MSRStock': 'MSR 개머리판',
    'CNCstock': 'CNC 개머리판',
    'CNCAdapter': 'CNC 어댑터',
    'CNCChassis': 'CNC 섀시',
    'CNCHandguard': 'CNC 핸드가드',
    '308Adapter': '.308 어댑터',
    '300WinSuppressor': '.300 Win 소음기',
    '338Muzzle': '.338 머즐',
    '366Muzzle': '.366 머즐',
    'SV98Bipod': 'SV-98 양각대',
    'SV98Suppressor': 'SV-98 소음기',
    'MjolnirHndgrd': '묠니르 핸드가드',
    'TRGHandguard': 'TRG 핸드가드',
    'TRGPad': 'TRG 패드',
    'DRGMount': 'DRG 마운트',
    'PRSStock': 'PRS 개머리판',
    'UMSButtstock': 'UMS 개머리판',

    // 기관단총 (SMG)
    'MP5Stock': 'MP5 개머리판',
    'MP5Mount': 'MP5 마운트',
    'MP5Handguard': 'MP5 핸드가드',
    'MP5Rearsight': 'MP5 가늠자',
    'MP7Stock': 'MP7 개머리판',
    'MP7Suppressor': 'MP7 소음기',
    'MP7SureFireSuppressor': 'MP7 슈어파이어 소음기',
    'MP9Suppressor': 'MP9 소음기',
    'MPXChargingHandle': 'MPX 차징 핸들',
    'MPXHandguard': 'MPX 핸드가드',
    'MPXSD': 'MPX SD 핸드가드',
    'P90Optic': 'P90 조준경',
    'P90Receiver': 'P90 리시버',
    'P90Suppressor': 'P90 소음기',
    'PP19Stock': 'PP-19 개머리판',
    'PP19Cover': 'PP-19 커버',
    'SR2MSuppressor': 'SR-2M 소음기',
    'VectorStock': 'Vector 개머리판',

    // 산탄총 (Shotgun)
    'MP133Stock': 'MP-133 개머리판',
    'MP133Hndgrd': 'MP-133 핸드가드',
    'SprutMount': 'Sprut 마운트',
    'UltimaStock': 'Ultima 개머리판',
    'UltimaPistolgrip': 'Ultima 피스톨 그립',
    'UltimaHndgrd': 'Ultima 핸드가드',
    'UlitmaMount': 'Ultima 마운트',
    'MP18Stock': 'MP-18 개머리판',
    'MP18Hndgrd': 'MP-18 핸드가드',
    '590A1Stock': '590A1 개머리판',
    '590A1Mount': '590A1 마운트',
    '590A1Hndgrd': '590A1 핸드가드',
    'SaigaButtstock': 'Saiga 개머리판',
    'SaigaCover': 'Saiga 커버',
    'SaigaRearsight': 'Saiga 가늠자',
    'SaigaHandguard': 'Saiga 핸드가드',
    '12gaMuzzle': '12게이지 머즐',

    // 권총 (Pistol)
    'M9A3Mount': 'M9A3 마운트',
    'M1911AO': 'M1911 전용 부품',
    'M1911Mount': 'M1911 마운트',
    '45ACPSuppressor': '.45 ACP 소음기',
    'FSRMRMount': 'FS RMR 마운트',
    'FSBarrel': 'FS 바렐',
    'FSSuppressor': 'FS 소음기',
    'GlockButtstock': 'Glock 개머리판',
    'GlockGrip': 'Glock 그립',
    'GlockRearsight': 'Glock 가늠자',
    'GlockFrontsight': 'Glock 가늠쇠',
    'GlockMount': 'Glock 마운트',
    'GlockSuppressor': 'Glock 소음기',
    'GlockSlide': 'Glock 슬라이드',
    'GlockBarrel': 'Glock 바렐',
    'GlockOptics': 'Glock 조준경',
    'pistolOptics': '권총 조준경',
    'UCPMount': 'UCP 마운트',
    'UCPPistolgrip': 'UCP 피스톨 그립',
    'UCPSuppressor': 'UCP 소음기',
    'USPMount': 'USP 마운트',
    'USBM': 'USBM 부착물',
    'SR1MPSidemount': 'SR-1MP 사이드 마운트',
    'SR1MPSuppressor': 'SR-1MP 소음기',

    // 기관총 (LMG)
    'RPDStock': 'RPD 개머리판',
    'RPDHandguard': 'RPD 핸드가드',
    'RPDMuzzle': 'RPD 총구',
    'RPDRearsight': 'RPD 가늠자',
    'RPDBipod': 'RPD 양각대',
    'PKButtstock': 'PK 개머리판',
    'PKRearsight': 'PK 가늠자',
    'PKHandguard': 'PK 핸드가드',
    'PKMSuppressor': 'PKM 소음기',
    'B51Mount': 'B-51 마운트',
    'PKBipod': 'PK 양각대',
    'PKPSuppressor': 'PKP 소음기',
    'RPK16Buffer': 'RPK-16 버퍼 튜브',
    'RPK16Cover': 'RPK-16 리시버 커버',
    'RPK16Hndgrd': 'RPK-16 핸드가드',
    'M60Buttstock': 'M60 개머리판',
    'M60Handguard': 'M60 핸드가드',
    'M60Bipod': 'M60 양각대',
    'M60Pistolgrip': 'M60 피스톨 그립',
    'M60PistolgripGroup': 'M60 피스톨 그립 그룹',
    'M60Frontsight': 'M60 가늠쇠',
    'M32Optics': 'M32 조준경',

    // 범용 총기 부착물 / 레일 / 조준경 / 조명 / 손잡이 / 양각대
    'Rearsight': '가늠자',
    'Frontsight': '가늠쇠',
    'weaponOptics': '조준경',
    'weaponOpticsSecond': '보조 조준경',
    'HydraOptics': '하이드라 조준경',
    'noMountRMROptics': 'RMR 직결 조준경',
    'Grip': '전방 손잡이',
    'GripCASV': '전방 손잡이',
    'Bipod': '양각대',
    'BipodKeymod': 'Keymod 양각대',
    'BipodKeymodMLOKMount': 'Keymod/M-LOK 양각대 마운트',
    'BipodKeymodMount': 'Keymod 양각대 마운트',
    'weaponWrap': '총기 랩',
    '762Suppressor': '7.62mm 소음기',
    'weaponFlashlight': '전술 조명',
    'weaponFlashlightFirst': '전술 조명 1',
    'weaponFlashlightSecond': '전술 조명 2',
    'weaponFlashlightThird': '전술 조명 3',
    'weaponFlashlightFourth': '전술 조명 4',
    'weaponFlashlightFifth': '전술 조명 5',
    'Flashlight': '플래시라이트',
    'M16Mount': 'M16 마운트',
    'M203': 'M203 유탄발사기',
    'RiserMount': '라이저 마운트',
    'CantedMount': '켄티드 마운트',
    'AimpointT1': 'Aimpoint T-1 마운트',
    'AimpointACRO': 'Aimpoint ACRO 마운트',
    'MagnifierCompatOptics': '매그니파이어 호환 조준경',
    'ROF90Mount': 'ROF-90 마운트',
    'CRDMuzzle': 'CRD 머즐',
    'BottomRailCover': '하부 레일 커버',
    'LeftRailCover': '좌측 레일 커버',
    'RightRailCover': '우측 레일 커버',
    'SMRShortRailMountLeft': 'SMR 좌측 레일 마운트',
    'SMRShortRailMountRight': 'SMR 우측 레일 마운트',
    'SMRRailMountUnder': 'SMR 하부 레일 마운트',
    'SMRShortRailMountUnder': 'SMR 하부 쇼트 레일 마운트',
    'URXStopper': 'URX 스토퍼',
    'URXPanel': 'URX 패널',
    'URXPanel2': 'URX 패널 2',
    'RAPTAR': 'RAPTAR 레이저',
    'RAPTARSecond': 'RAPTAR 보조',
    'BatteryD': 'D형 배터리',
    'WF501B': 'WF-501B 라이트',
    'FFP3': 'FFP3 필터',

    // 기어 / 헬멧 / 방탄복 부착물
    'NVG': '야간 투시경 (NVG)',
    'Visor': '바이저 (안면 보호대)',
    'HelmetPlate': '헬멧 방탄 플레이트',
    'Mandible': '턱/안면 보호대 (Mandible)',
    'HelmetAventail': '방탄 목가리개',
    'HelmetHeadset': '헤드셋',
    'AFMLOKChops': 'M-LOK 턱 보호대',
    'UCSPad': '완충 패드',
    'PatchLarge': '패치',
    'Pouch_IFAK': 'IFAK 파우치',
    'VestHolster': '권총 홀스터',
    'Case_Front': '전면 케이스',
    'Tourniquet': '지혈대',
    'Shoulder': '어깨 보호대',
    'WalkieTalkie': '무전기',
    'Chemlight': '케미라이트'
};

// 슬롯 그룹 매핑 (동일 규격의 1번/2번/3번 슬롯들을 하나의 대표 그룹으로 묶음)
const slotGroupMap = {
    // 전방 손잡이 (동일 번호/규격)
    'Grip': 'grip_group',
    'GripCASV': 'grip_group',
    'GripThird': 'grip_group',
    'GripFourth': 'grip_group',

    // 전술 조명 (1번~11번 및 범용 조명)
    'weaponFlashlight': 'flashlight_group',
    'weaponFlashlightFirst': 'flashlight_group',
    'weaponFlashlightSecond': 'flashlight_group',
    'weaponFlashlightThird': 'flashlight_group',
    'weaponFlashlightFourth': 'flashlight_group',
    'weaponFlashlightFifth': 'flashlight_group',
    'weaponFlashlightSix': 'flashlight_group',
    'weaponFlashlightSeven': 'flashlight_group',
    'weaponFlashlightEight': 'flashlight_group',
    'weaponFlashlightNine': 'flashlight_group',
    'weaponFlashlightTen': 'flashlight_group',
    'weaponFlashlightEleven': 'flashlight_group',
    'Flashlight': 'flashlight_group',

    // DD 레일 커버 1, 2
    'DDCover': 'ddcover_group',
    'DDCover2': 'ddcover_group',

    // URX 패널 1, 2
    'URXPanel': 'urxpanel_group',
    'URXPanel2': 'urxpanel_group',

    // RAPTAR 레이저 1, 2
    'RAPTAR': 'raptar_group',
    'RAPTARSecond': 'raptar_group'
};

// 그룹 정의 (표시 이름 및 포함되는 슬롯 키 목록)
const slotGroupDefinitions = {
    'grip_group': {
        name: '전방 손잡이',
        slots: ['Grip', 'GripCASV', 'GripThird', 'GripFourth']
    },
    'flashlight_group': {
        name: '전술 조명',
        slots: [
            'weaponFlashlight', 'weaponFlashlightFirst', 'weaponFlashlightSecond',
            'weaponFlashlightThird', 'weaponFlashlightFourth', 'weaponFlashlightFifth',
            'weaponFlashlightSix', 'weaponFlashlightSeven', 'weaponFlashlightEight',
            'weaponFlashlightNine', 'weaponFlashlightTen', 'weaponFlashlightEleven',
            'Flashlight'
        ]
    },
    'ddcover_group': {
        name: 'DD 레일 커버',
        slots: ['DDCover', 'DDCover2']
    },
    'urxpanel_group': {
        name: 'URX 패널',
        slots: ['URXPanel', 'URXPanel2']
    },
    'raptar_group': {
        name: 'RAPTAR 레이저',
        slots: ['RAPTAR', 'RAPTARSecond']
    }
};

// 슬롯명 표시 라벨 반환
function getSlotDisplayName(slotName) {
    if (!slotName) return '';
    if (slotNameMap[slotName]) {
        return slotNameMap[slotName];
    }
    return slotName.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
}

// 전체 데이터베이스 아이템 수집
function getAllDatabaseItems() {
    const items = [];
    if (typeof weaponsData !== 'undefined' && weaponsData) {
        items.push(...Object.values(weaponsData).flat());
    }
    if (typeof gearData !== 'undefined' && gearData) {
        items.push(...Object.values(gearData).flat());
    }
    if (typeof attachmentData !== 'undefined' && attachmentData) {
        items.push(...Object.values(attachmentData).flat());
    }
    return items;
}

// 복수 슬롯 키 중 하나라도 만족하는 아이템 목록 필터링 (inventorySlots 기준 중복 제거)
function getItemsForSlotKeys(slotKeys) {
    const all = getAllDatabaseItems();
    const results = [];
    const seen = new Set();
    const keysSet = new Set(slotKeys);
    for (const item of all) {
        if (item && Array.isArray(item.inventorySlots)) {
            if (item.inventorySlots.some(s => keysSet.has(s))) {
                if (!seen.has(item.id)) {
                    seen.add(item.id);
                    results.push(item);
                }
            }
        }
    }
    return results;
}

// 특정 부착물 슬롯에 장착 가능한 아이템 목록 필터링 (단일 슬롯 키용)
function getItemsForAttachmentSlot(slotName) {
    return getItemsForSlotKeys([slotName]);
}

// 아이템의 attachmentSlots를 그룹화하여 중복 슬롯을 하나로 통합 (부모가 실제 보유한 슬롯만 안전하게 검색)
function getGroupedAttachmentSlots(rawSlots) {
    if (!Array.isArray(rawSlots)) return [];
    const groups = [];
    const seenGroupIds = new Set();
    const rawSlotsSet = new Set(rawSlots);

    for (const slot of rawSlots) {
        const groupId = slotGroupMap[slot];
        if (groupId && slotGroupDefinitions[groupId]) {
            if (!seenGroupIds.has(groupId)) {
                seenGroupIds.add(groupId);
                const groupDef = slotGroupDefinitions[groupId];
                // 중요: 부모 아이템이 실제로 가지고 있는 슬롯들만 필터링(교집합)하여 검색 대상 지정
                const activeSlotsInParent = groupDef.slots.filter(s => rawSlotsSet.has(s));
                groups.push({
                    id: groupId,
                    name: groupDef.name,
                    slotKeys: activeSlotsInParent
                });
            }
        } else {
            const singleId = 'single_' + slot;
            if (!seenGroupIds.has(singleId)) {
                seenGroupIds.add(singleId);
                groups.push({
                    id: singleId,
                    name: getSlotDisplayName(slot),
                    slotKeys: [slot]
                });
            }
        }
    }
    return groups;
}

// 아이템의 패널 타입 및 카테고리 자동 판별
function getItemTypeAndCategory(item) {
    if (!item) return { panelType: 'weapon', category: 'all' };
    if (item.category && typeof attachmentData !== 'undefined' && attachmentData[item.category]) {
        return { panelType: 'attachment', category: item.category };
    }
    if (item.category && typeof gearData !== 'undefined' && gearData[item.category]) {
        return { panelType: 'gear', category: item.category };
    }
    if (item.category && typeof weaponsData !== 'undefined' && weaponsData[item.category]) {
        return { panelType: 'weapon', category: item.category };
    }

    if (typeof attachmentData !== 'undefined') {
        for (const [cat, list] of Object.entries(attachmentData)) {
            if (list.some(x => x.id === item.id)) return { panelType: 'attachment', category: cat };
        }
    }
    if (typeof gearData !== 'undefined') {
        for (const [cat, list] of Object.entries(gearData)) {
            if (list.some(x => x.id === item.id)) return { panelType: 'gear', category: cat };
        }
    }
    if (typeof weaponsData !== 'undefined') {
        for (const [cat, list] of Object.entries(weaponsData)) {
            if (list.some(x => x.id === item.id)) return { panelType: 'weapon', category: cat };
        }
    }
    return { panelType: 'attachment', category: item.category || 'all' };
}

// 아이템 상세 화면 자동 렌더링
function showItemDetailAuto(item, categoryKey, galleryIndex = 0) {
    const info = getItemTypeAndCategory(item);
    const cat = categoryKey || info.category;
    if (info.panelType === 'gear') {
        showGearDetail(item, cat, galleryIndex);
    } else if (info.panelType === 'weapon') {
        showWeaponDetail(item, cat, galleryIndex);
    } else {
        showAttachmentDetail(item, cat, galleryIndex);
    }
}

// 네비게이션 스택 푸시
function pushNavState(viewState) {
    if (isNavigatingHistory) return;
    if (!viewState || viewState.type === 'empty') return;
    navStack.push(viewState);
}

// 네비게이션 스택 팝 (이전 화면으로 복귀)
function popNavState() {
    if (navStack.length === 0) {
        backToGrid();
        return;
    }
    const previousState = navStack.pop();
    isNavigatingHistory = true;
    try {
        restoreView(previousState);
    } finally {
        isNavigatingHistory = false;
    }
}

// 최초 루트 그리드/목록으로 한 번에 복귀
function resetToRootGrid() {
    if (navStack.length > 0) {
        const rootState = navStack[0];
        navStack = [];
        isNavigatingHistory = true;
        try {
            restoreView(rootState);
        } finally {
            isNavigatingHistory = false;
        }
    } else {
        backToGrid();
    }
}

// 슬롯 그룹 클릭 시 해당 그룹의 호환 아이템들을 그리드로 표시
function showSlotGroupAttachments(parentItem, groupName, slotKeys) {
    pushNavState(captureCurrentView());
    const matchedItems = getItemsForSlotKeys(slotKeys);
    const parentName = parentItem && parentItem.name ? parentItem.name : '';
    const fullTitle = parentName ? `${parentName} > ${groupName}` : groupName;
    showGridView(fullTitle, matchedItems, 'slot_group_' + slotKeys[0], 'attachment');
}

// 기존 showSlotAttachments 호환 유지
function showSlotAttachments(parentItem, slotName) {
    const groupId = slotGroupMap[slotName];
    if (groupId && slotGroupDefinitions[groupId]) {
        const def = slotGroupDefinitions[groupId];
        showSlotGroupAttachments(parentItem, def.name, def.slots);
    } else {
        const slotTitle = getSlotDisplayName(slotName);
        showSlotGroupAttachments(parentItem, slotTitle, [slotName]);
    }
}

// 장착 가능한 부착물 슬롯 UI 섹션 생성 (동일 종류 통합 렌더링)
function createAttachmentSlotsSection(item) {
    if (!item || !Array.isArray(item.attachmentSlots) || item.attachmentSlots.length === 0) {
        return null;
    }

    const groupedSlots = getGroupedAttachmentSlots(item.attachmentSlots);
    if (groupedSlots.length === 0) {
        return null;
    }

    const container = document.createElement('div');
    container.className = 'attachment-slots-container';

    const header = document.createElement('div');
    header.className = 'weapon-stats-header';
    const title = document.createElement('div');
    title.className = 'weapon-stats-title';
    title.textContent = '- 장착 가능한 부착물 -';
    header.appendChild(title);
    container.appendChild(header);

    const slotsGrid = document.createElement('div');
    slotsGrid.className = 'attachment-slots-grid';

    groupedSlots.forEach(group => {
        const matchedItems = getItemsForSlotKeys(group.slotKeys);
        const count = matchedItems.length;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'attachment-slot-btn';
        if (count === 0) {
            btn.classList.add('empty-slot');
        }

        const slotLabel = document.createElement('span');
        slotLabel.className = 'slot-label';
        slotLabel.textContent = group.name;

        const slotCount = document.createElement('span');
        slotCount.className = 'slot-count';
        slotCount.textContent = `(${count})`;

        btn.appendChild(slotLabel);
        btn.appendChild(slotCount);

        btn.onclick = () => {
            showSlotGroupAttachments(item, group.name, group.slotKeys);
        };

        slotsGrid.appendChild(btn);
    });

    container.appendChild(slotsGrid);
    return container;
}


function loadData() {
    const savedWeapons = localStorage.getItem('smpz_weapons_data');
    if (savedWeapons) {
        try {
            const parsed = JSON.parse(savedWeapons);
            Object.assign(weaponsData, parsed);
        } catch(e) {}
    }
    const savedGear = localStorage.getItem('smpz_gear_data');
    if (savedGear) {
        try {
            const parsed = JSON.parse(savedGear);
            Object.assign(gearData, parsed);
        } catch(e) {}
    }
}

function saveData() {
    localStorage.setItem('smpz_weapons_data', JSON.stringify(weaponsData));
    localStorage.setItem('smpz_gear_data', JSON.stringify(gearData));
}

function saveAppState() {
    const state = {
        panel: currentPanel,
        category: currentCategory,
        itemId: currentWeapon ? currentWeapon.id : (currentGear ? currentGear.id : null),
        galleryIndex: lastGalleryImageIndex
    };
    sessionStorage.setItem(APP_STATE_KEY, JSON.stringify(state));
}

function restoreAppState() {
    const raw = sessionStorage.getItem(APP_STATE_KEY);
    if (!raw) return false;
    try {
        const state = JSON.parse(raw);
        if (state.panel) {
            switchPanel(state.panel);
        }
        const showDetail = (it, cat) => {
            if (state.panel === 'gear') {
                showGearDetail(it, cat, state.galleryIndex || 0);
            } else if (state.panel === 'attachment') {
                showAttachmentDetail(it, cat, state.galleryIndex || 0);
            } else {
                showWeaponDetail(it, cat, state.galleryIndex || 0);
            }
        };
        if (state.category && state.category !== 'search' && state.itemId) {
            const dataSource = state.panel === 'gear' ? gearData : (state.panel === 'attachment' ? attachmentData : weaponsData);
            if (state.category === 'all') {
                for (const cat of Object.keys(dataSource)) {
                    const it = dataSource[cat].find(x => x.id === state.itemId);
                    if (it) {
                        renderItemGrid('all', state.panel);
                        showDetail(it, 'all');
                        return true;
                    }
                }
            } else if (dataSource[state.category]) {
                const it = dataSource[state.category].find(x => x.id === state.itemId);
                if (it) {
                    renderItemGrid(state.category, state.panel);
                    showDetail(it, state.category);
                    return true;
                }
            }
        }
    } catch(e) {}
    return false;
}

function switchPanel(panel) {
    currentPanel = panel;
    saveAppState();
    
    document.querySelectorAll('.panel-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.panel === panel);
    });
    
    const weaponPanel = document.getElementById('weaponPanel');
    const gearPanel = document.getElementById('gearPanel');
    const attachmentPanel = document.getElementById('attachmentPanel');
    
    if (weaponPanel) weaponPanel.style.display = panel === 'weapon' ? 'block' : 'none';
    if (gearPanel) gearPanel.style.display = panel === 'gear' ? 'block' : 'none';
    if (attachmentPanel) attachmentPanel.style.display = panel === 'attachment' ? 'block' : 'none';
    
    clearDetail();
    
    const searchInput = document.getElementById('itemSearch');
    if (searchInput) searchInput.value = '';
    
    if (panel === 'gear') {
        renderGearCategories();
    } else if (panel === 'attachment') {
        renderAttachmentCategories();
    } else {
        renderCategories();
    }
}


function showAttachmentDetail(attachment, categoryKey, initialGalleryIndex = 0) {
    const weaponDetail = showDetailContainer();
    currentCategory = categoryKey;
    currentWeapon = attachment;
    lastGalleryImageIndex = initialGalleryIndex;
    saveAppState();

    document.querySelectorAll('.grid-card').forEach(item => {
        item.classList.remove('active');
        if ((item.dataset.weaponId || item.dataset.itemId) === attachment.id) {
            item.classList.add('active');
        }
    });

    weaponDetail.innerHTML = '';
    const detailCard = document.createElement('div');
    detailCard.className = 'weapon-detail-card';
    detailCard.appendChild(createBackToGridButton());

    const nameContainer = document.createElement('div');
    nameContainer.className = 'weapon-detail-name-container';
    const name = document.createElement('div');
    name.className = 'weapon-detail-name';
    const nameText = document.createElement('span');
    nameText.className = 'weapon-name-text';
    nameText.textContent = attachment.name;
    name.appendChild(nameText);
    nameContainer.appendChild(name);
    detailCard.appendChild(nameContainer);
    
    const divider = document.createElement('div');
    divider.className = 'weapon-detail-divider';
    detailCard.appendChild(divider);
    
    const imagePanel = createImagePanelWithArrows(attachment, attachment.name, initialGalleryIndex, (idx) => {
        lastGalleryImageIndex = idx;
        saveAppState();
    });
    detailCard.appendChild(imagePanel);
    
    const descContainer = document.createElement('div');
    descContainer.className = 'weapon-detail-description-container';
    if (attachment.description) {
        const desc = document.createElement('div');
        desc.className = 'weapon-detail-description';
        desc.innerHTML = attachment.description;
        descContainer.appendChild(desc);
    } else {
        descContainer.innerHTML = '<div class="weapon-description-placeholder">해당 부착물의 설명</div>';
    }
    detailCard.appendChild(descContainer);
    
    const hasAttachmentStats = Boolean(attachment.stats);
    const hasAttachmentSpecs = Boolean(attachment.itemSize || attachment.itemSlots || attachment.cargoSize || attachment.cargoSlots);
    if (hasAttachmentStats || hasAttachmentSpecs) {
        const statsContainer = document.createElement('div');
        statsContainer.className = 'weapon-stats-container';
        
        const statsHeader = document.createElement('div');
        statsHeader.className = 'weapon-stats-header';
        const statsTitle = document.createElement('div');
        statsTitle.className = 'weapon-stats-title';
        statsTitle.textContent = '- 능력치 -';
        statsHeader.appendChild(statsTitle);
        statsContainer.appendChild(statsHeader);
        
        const statsList = document.createElement('div');
        statsList.className = 'weapon-stats-list';
        
        if (attachment.stats) {
            const statLabels = {
                'recoil': '반동',
                'sway': '흔들림',
                'weight': '무게',
                'capacity': '탄창 용량'
            };
            
            Object.keys(attachment.stats).forEach(key => {
                const row = document.createElement('div');
                row.className = 'weapon-stat-row';
                
                const label = document.createElement('span');
                label.className = 'weapon-stat-label';
                label.textContent = `${statLabels[key] || key}:`;
                
                const value = document.createElement('span');
                value.className = 'weapon-stat-value';
                value.textContent = attachment.stats[key] || '-';
                
                row.appendChild(label);
                row.appendChild(value);
                statsList.appendChild(row);
            });
        }

        appendItemSpecRows(statsList, attachment);

        statsContainer.appendChild(statsList);

        const statsParent = detailCard.querySelector('.weapon-detail-description-container') || detailCard;
        statsParent.appendChild(statsContainer);
    }

    const slotsSection = createAttachmentSlotsSection(attachment);
    if (slotsSection) {
        const slotsParent = detailCard.querySelector('.weapon-detail-description-container') || detailCard;
        slotsParent.appendChild(slotsSection);
    }
    
    weaponDetail.appendChild(detailCard);
}


// 카테고리 드롭다운 열기/닫기 (상단바 버튼을 누르면 내려오는 목록)
function openDropdown() {
    const dropdown = document.getElementById('categoryDropdown');
    if (dropdown) dropdown.classList.add('open');
}

function closeDropdown() {
    const dropdown = document.getElementById('categoryDropdown');
    if (dropdown) dropdown.classList.remove('open');
}

// 그리드/상세 영역 전환 헬퍼
function showDetailContainer() {
    const gridView = document.getElementById('gridView');
    const isFromGrid = gridView && gridView.style.display !== 'none';
    if (isFromGrid) {
        lastGridScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    }
    if (gridView) gridView.style.display = 'none';
    const weaponDetail = document.getElementById('weaponDetail');
    weaponDetail.style.display = 'flex';

    if (isFromGrid) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    return weaponDetail;
}

function createBackToGridButton() {
    const wrap = document.createElement('div');
    wrap.className = 'back-to-grid-wrap';

    const btnPrev = document.createElement('button');
    btnPrev.type = 'button';
    btnPrev.className = 'back-to-grid-btn';
    btnPrev.textContent = '← 이전으로';
    btnPrev.onclick = popNavState;
    wrap.appendChild(btnPrev);

    if (navStack.length > 0) {
        const btnRoot = document.createElement('button');
        btnRoot.type = 'button';
        btnRoot.className = 'back-to-grid-btn root-grid-btn';
        btnRoot.textContent = '목록으로';
        btnRoot.onclick = resetToRootGrid;
        wrap.appendChild(btnRoot);
    }

    return wrap;
}

// 마지막으로 표시된 그리드 상태 (상세 화면에서 "목록으로" 이동 시 사용)
let lastGridState = null;

// 검색 시작 직전의 화면 상태 (검색창을 비우면 이 화면으로 복귀)
let preSearchView = null;

function captureCurrentView() {
    const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    if (currentWeapon) {
        return { type: 'detail', panel: currentPanel, category: currentCategory, item: currentWeapon, galleryIndex: lastGalleryImageIndex, scrollY: currentScrollY };
    }
    if (lastGridState) {
        return { type: 'grid', title: lastGridState.title, items: lastGridState.items, categoryKey: lastGridState.categoryKey, panelType: lastGridState.panelType, scrollY: currentScrollY };
    }
    return { type: 'empty' };
}

function restoreView(view) {
    if (!view || view.type === 'empty') {
        clearDetail();
        return;
    }
    if (view.type === 'detail') {
        showItemDetailAuto(view.item, view.category, view.galleryIndex || 0);
        if (view.scrollY) {
            requestAnimationFrame(() => {
                window.scrollTo({ top: view.scrollY, left: 0, behavior: 'instant' });
            });
        }
    } else if (view.type === 'grid') {
        lastGridScrollY = view.scrollY || 0;
        showGridView(view.title, view.items, view.categoryKey, view.panelType, true);
    }
}

function backToGrid() {
    if (lastGridState) {
        showGridView(lastGridState.title, lastGridState.items, lastGridState.categoryKey, lastGridState.panelType, true);
    } else {
        clearDetail();
    }
}

// 카테고리 선택 시 해당 항목들을 메인 영역에 그리드로 표시
function renderItemGrid(categoryKey, panelType) {
    panelType = panelType || currentPanel;
    closeDropdown();

    // 카테고리 전환 시 히스토리 스택 초기화
    navStack = [];

    // 검색 중이 아닌 실제 카테고리 진입이므로 검색 상태를 초기화
    preSearchView = null;
    const searchInput = document.getElementById('itemSearch');
    if (searchInput && searchInput.value) searchInput.value = '';

    const dataSource = panelType === 'gear' ? gearData : (panelType === 'attachment' ? attachmentData : weaponsData);
    let items;
    let title;
    if (categoryKey === 'all') {
        items = Object.values(dataSource).flat();
        title = panelType === 'gear' ? '기어 전체' : (panelType === 'attachment' ? '부착물 전체' : '무기 전체');
    } else {
        items = dataSource[categoryKey] || [];
        title = categoryKey;
    }

    showGridView(title, items, categoryKey, panelType);
}

// 이미 계산된 항목 목록을 그리드로 표시 (검색 결과 등에도 사용)
function showGridView(title, items, categoryKey, panelType, shouldRestoreScroll = false) {
    lastGridState = { title, items, categoryKey, panelType };
    currentPanel = panelType;
    currentCategory = categoryKey;
    currentWeapon = null;
    saveAppState();

    const gridView = document.getElementById('gridView');
    const weaponDetail = document.getElementById('weaponDetail');
    if (gridView) gridView.style.display = 'block';
    weaponDetail.style.display = 'none';
    weaponDetail.innerHTML = '';

    // 상단 이전/목록 버튼 영역 처리
    let backWrap = gridView.querySelector('.grid-back-wrap');
    if (!backWrap) {
        backWrap = document.createElement('div');
        backWrap.className = 'grid-back-wrap back-to-grid-wrap';
        gridView.insertBefore(backWrap, gridView.firstChild);
    }
    backWrap.innerHTML = '';
    if (navStack.length > 0) {
        const btnPrev = document.createElement('button');
        btnPrev.type = 'button';
        btnPrev.className = 'back-to-grid-btn';
        btnPrev.textContent = '← 이전으로';
        btnPrev.onclick = popNavState;
        backWrap.appendChild(btnPrev);

        const btnRoot = document.createElement('button');
        btnRoot.type = 'button';
        btnRoot.className = 'back-to-grid-btn root-grid-btn';
        btnRoot.textContent = '목록으로';
        btnRoot.onclick = resetToRootGrid;
        backWrap.appendChild(btnRoot);

        backWrap.style.display = 'flex';
    } else {
        backWrap.style.display = 'none';
    }

    const gridTitle = document.getElementById('gridTitle');
    const gridCount = document.getElementById('gridCount');
    if (gridTitle) gridTitle.textContent = title;
    if (gridCount) gridCount.textContent = `${items.length}개`;

    const grid = document.getElementById('itemGrid');
    if (!grid) return;
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = '<p class="empty-message">표시할 항목이 없습니다.</p>';
        return;
    }

    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
    sortedItems.forEach(item => {
        grid.appendChild(createGridCard(item, categoryKey, panelType));
    });

    if (shouldRestoreScroll && lastGridScrollY > 0) {
        const targetY = lastGridScrollY;
        requestAnimationFrame(() => {
            window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
        });
    } else if (!shouldRestoreScroll) {
        lastGridScrollY = 0;
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
}

// 그리드 카드 생성 (이미지 + 이름)
function createGridCard(item, categoryKey, panelType) {
    const card = document.createElement('div');
    card.className = 'grid-card';
    card.dataset.itemId = item.id;
    card.dataset.weaponId = item.id;

    const imgWrap = document.createElement('div');
    imgWrap.className = 'grid-card-image';
    const images = getItemImages(item);
    if (images.length > 0) {
        const img = document.createElement('img');
        img.src = images[0];
        img.alt = item.name;
        img.onerror = function() {
            imgWrap.innerHTML = '<span class="grid-card-placeholder">-</span>';
        };
        imgWrap.appendChild(img);
    } else {
        imgWrap.innerHTML = '<span class="grid-card-placeholder">-</span>';
    }
    card.appendChild(imgWrap);

    const nameEl = document.createElement('div');
    nameEl.className = 'grid-card-name';
    nameEl.textContent = item.name;
    card.appendChild(nameEl);

    const realCategoryKey = item.category || categoryKey;
    card.addEventListener('click', () => {
        compareTarget = null;
        pushNavState(captureCurrentView());
        showItemDetailAuto(item, realCategoryKey);
    });

    return card;
}

// 그리드가 특정 카테고리를 표시 중이면 최신 데이터로 새로고침
function refreshGridIfShowing(categoryKey, panelType) {
    if (lastGridState && lastGridState.panelType === panelType &&
        (lastGridState.categoryKey === categoryKey || lastGridState.categoryKey === 'all')) {
        renderItemGrid(lastGridState.categoryKey, panelType);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 모든 모달 닫기 (안전장치)
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => {
        if (modal.id === 'imageModal') {
            modal.style.setProperty('display', 'none', 'important');
        } else {
            modal.style.display = 'none';
        }
    });
    
    loadData();
    renderCategories();
    renderGearCategories();
    renderAttachmentCategories();
    setupEventListeners();
    const restored = restoreAppState();
    if (!restored) {
        // 초기 진입 시 바로 무기 전체 그리드를 기본 화면으로 표시
        renderItemGrid('all', 'weapon');
    }
});











// 카테고리 렌더링
function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    if (!categoryList) return;
    categoryList.innerHTML = '';

    // 전체 무기 카테고리 추가
    const totalCount = Object.values(weaponsData).reduce((sum, weapons) => sum + weapons.length, 0);
    const allCategory = createCategoryItem('무기', totalCount, 'all', 'weapon');
    categoryList.appendChild(allCategory);

    // 각 카테고리 추가
    Object.keys(weaponsData).forEach(key => {
        const count = weaponsData[key]?.length || 0;
        const item = createCategoryItem(key, count, key, 'weapon');
        categoryList.appendChild(item);
    });
}

// 기어 카테고리 렌더링
function renderGearCategories() {
    const categoryList = document.getElementById('gearCategoryList');
    if (!categoryList) return;
    categoryList.innerHTML = '';

    const totalCount = Object.values(gearData).reduce((sum, items) => sum + items.length, 0);
    const allCategory = createCategoryItem('기어 전체', totalCount, 'all', 'gear');
    categoryList.appendChild(allCategory);

    Object.keys(gearData).forEach(key => {
        const count = gearData[key]?.length || 0;
        const item = createCategoryItem(key, count, key, 'gear');
        categoryList.appendChild(item);
    });
}

// 부착물 카테고리 렌더링 (공통 createCategoryItem 템플릿 사용)
function renderAttachmentCategories() {
    const categoryList = document.getElementById('attachmentCategoryList');
    if (!categoryList) return;
    categoryList.innerHTML = '';

    const totalCount = Object.values(attachmentData).reduce((sum, items) => sum + items.length, 0);
    const allCategory = createCategoryItem('부착물 전체', totalCount, 'all', 'attachment');
    categoryList.appendChild(allCategory);

    Object.keys(attachmentData).forEach(key => {
        const count = attachmentData[key]?.length || 0;
        const item = createCategoryItem(key, count, key, 'attachment');
        categoryList.appendChild(item);
    });
}

// 카테고리 아이템 생성
function createCategoryItem(name, count, key, panelType) {
    panelType = panelType || 'weapon';
    const li = document.createElement('li');
    li.className = 'category-item';
    li.dataset.category = key;
    li.dataset.panelType = panelType;
    
    const link = document.createElement('div');
    link.className = 'category-link';
    link.dataset.category = key;
    
    // 카테고리별 아이콘 매핑
    const categoryIcons = {
        '권총': 'assets/pistol.png',
        '돌격 소총': 'assets/ar.png',
        '기관단총': 'assets/smg.png',
        '저격 소총': 'assets/sr.png',
        '산탄총': 'assets/shotgun.png',
        '경기관총': 'assets/lmg.png',
        '유탄 발사기': 'assets/gl.png'
    };
    
    // 아이콘 추가 (해당 카테고리에 아이콘이 있는 경우)
    if (categoryIcons[key]) {
        const iconImg = document.createElement('img');
        iconImg.src = categoryIcons[key];
        iconImg.alt = name;
        iconImg.className = 'category-icon';
        // 돌격 소총, 기관단총, 저격 소총 아이콘은 더 크게
        if (key === '돌격 소총' || key === '기관단총' || key === '저격 소총' || key === '산탄총' || key === '경기관총' || key === '유탄 발사기') {
            iconImg.classList.add('category-icon-large');
        }
        link.appendChild(iconImg);
    }
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'category-name';
    nameSpan.textContent = name;
    
    const countSpan = document.createElement('span');
    countSpan.className = 'category-count';
    countSpan.textContent = `(${count})`;
    
    link.appendChild(nameSpan);
    link.appendChild(countSpan);
    li.appendChild(link);

    // 카테고리 클릭 시 해당 항목들을 메인 영역에 그리드로 표시
    link.addEventListener('click', (e) => {
        e.stopPropagation();
        renderItemGrid(key, panelType);
    });

    return li;
}

// 아이템 이미지 배열 추출 (image 단일 또는 images 배열 지원)
function getItemImages(item) {
    if (item.images && Array.isArray(item.images) && item.images.length > 0) {
        return item.images;
    }
    if (item.image) {
        return [item.image];
    }
    return [];
}

// 아이템 크기 및 수납 공간 행 추가 (기존 능력치 항목과 일관된 심플한 스타일)
function appendItemSpecRows(statsList, item) {
    if (!item || !statsList) return;

    // 아이템 크기
    if (item.itemSize || (item.itemSlots !== undefined && item.itemSlots !== null)) {
        const row = document.createElement('div');
        row.className = 'weapon-stat-row';

        const label = document.createElement('span');
        label.className = 'weapon-stat-label';
        label.textContent = '아이템 크기:';

        const value = document.createElement('span');
        value.className = 'weapon-stat-value';
        const sizeStr = item.itemSize || '';
        const slotStr = (item.itemSlots !== undefined && item.itemSlots !== null) ? `${item.itemSlots}칸` : '';
        value.textContent = sizeStr ? (slotStr ? `${sizeStr} (${slotStr})` : sizeStr) : slotStr;

        row.appendChild(label);
        row.appendChild(value);
        statsList.appendChild(row);
    }

    // 수납 공간 (수납 공간이 있는 아이템만)
    if (item.cargoSize || (item.cargoSlots !== undefined && item.cargoSlots !== null)) {
        const row = document.createElement('div');
        row.className = 'weapon-stat-row';

        const label = document.createElement('span');
        label.className = 'weapon-stat-label';
        label.textContent = '수납 공간:';

        const value = document.createElement('span');
        value.className = 'weapon-stat-value';
        const cargoSizeStr = item.cargoSize || '';
        const cargoSlotStr = (item.cargoSlots !== undefined && item.cargoSlots !== null) ? `${item.cargoSlots}칸` : '';
        value.textContent = cargoSizeStr ? (cargoSlotStr ? `${cargoSizeStr} (${cargoSlotStr})` : cargoSizeStr) : cargoSlotStr;

        row.appendChild(label);
        row.appendChild(value);
        statsList.appendChild(row);
    }
}

// 이미지/3D 패널 생성 (갤러리 타이틀 + 화살표 + 3D 인스펙트 뷰어 지원)
function createImagePanelWithArrows(item, itemName, initialImageIndex = 0, onImageIndexChange = null) {
    const images = getItemImages(item);
    const hasModel = Boolean(item && item.model);
    const galleryWrapper = document.createElement('div');
    galleryWrapper.className = 'gallery-panel-wrapper';
    
    // 갤러리 헤더 (타이틀 + 모드 스위치)
    const headerRow = document.createElement('div');
    headerRow.className = 'gallery-header-row';
    
    const galleryTitle = document.createElement('div');
    galleryTitle.className = 'gallery-title';
    galleryTitle.textContent = '- 갤러리 -';
    headerRow.appendChild(galleryTitle);
    
    let is3DMode = false;
    let modelViewerEl = null;

    if (hasModel) {
        const modeSwitch = document.createElement('div');
        modeSwitch.className = 'gallery-mode-switch';
        
        const btn2D = document.createElement('button');
        btn2D.type = 'button';
        btn2D.className = 'gallery-mode-btn active';
        btn2D.textContent = '사진';
        
        const btn3D = document.createElement('button');
        btn3D.type = 'button';
        btn3D.className = 'gallery-mode-btn';
        btn3D.textContent = '3D';
        
        modeSwitch.appendChild(btn2D);
        modeSwitch.appendChild(btn3D);
        headerRow.appendChild(modeSwitch);
        
        btn2D.onclick = () => switchMode(false);
        btn3D.onclick = () => switchMode(true);
    }
    galleryWrapper.appendChild(headerRow);
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'weapon-detail-image-container';
    
    // 2D 뷰 요소들
    const hasMultiple = images.length > 1;
    const arrowLeft = document.createElement('button');
    arrowLeft.type = 'button';
    arrowLeft.className = 'image-nav-arrow image-nav-left';
    arrowLeft.innerHTML = '‹';
    arrowLeft.setAttribute('aria-label', '이전 이미지');
    if (!hasMultiple) {
        arrowLeft.classList.add('image-nav-disabled');
        arrowLeft.style.display = 'none';
    }
    
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'weapon-detail-image-wrapper';
    const img = document.createElement('img');
    img.className = 'weapon-detail-image';
    let currentIndex = Math.max(0, Math.min(initialImageIndex, Math.max(0, images.length - 1)));
    if (images.length > 0) {
        img.src = images[currentIndex];
        img.alt = itemName;
        img.style.cursor = 'pointer';
    }
    const placeholder = document.createElement('div');
    placeholder.className = 'weapon-image-placeholder';
    placeholder.textContent = '-';
    placeholder.style.display = images.length === 0 ? 'flex' : 'none';
    imgWrapper.appendChild(placeholder);
    
    if (images.length > 0) {
        img.onerror = function() {
            this.style.display = 'none';
            placeholder.style.display = 'flex';
        };
        img.onclick = function() {
            openImageModal(images[currentIndex], itemName);
        };
        imgWrapper.appendChild(img);
    }
    
    const arrowRight = document.createElement('button');
    arrowRight.type = 'button';
    arrowRight.className = 'image-nav-arrow image-nav-right';
    arrowRight.innerHTML = '›';
    arrowRight.setAttribute('aria-label', '다음 이미지');
    if (!hasMultiple) {
        arrowRight.classList.add('image-nav-disabled');
        arrowRight.style.display = 'none';
    }
    
    function updateImage() {
        if (images.length === 0) return;
        img.src = images[currentIndex];
        img.alt = itemName;
        img.style.display = '';
        placeholder.style.display = 'none';
        img.onclick = () => openImageModal(images[currentIndex], itemName);
    }
    
    if (hasMultiple) {
        const notifyChange = () => {
            if (typeof onImageIndexChange === 'function') onImageIndexChange(currentIndex);
        };
        const blurArrow = (e) => {
            e.target.blur();
        };
        arrowLeft.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
            notifyChange();
            blurArrow(e);
        });
        arrowRight.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
            notifyChange();
            blurArrow(e);
        });
    }
    
    imageContainer.appendChild(arrowLeft);
    imageContainer.appendChild(imgWrapper);
    imageContainer.appendChild(arrowRight);
    
    // 3D 뷰 요소 (hasModel일 때 준비)
    let modelViewerContainer = null;
    if (hasModel) {
        modelViewerContainer = document.createElement('div');
        modelViewerContainer.className = 'model-viewer-container';
        modelViewerContainer.style.display = 'none';
        
        modelViewerEl = document.createElement('model-viewer');
        modelViewerEl.className = 'weapon-model-viewer';
        modelViewerEl.setAttribute('src', item.model);
        if (images.length > 0) {
            modelViewerEl.setAttribute('poster', images[0]);
        }
        modelViewerEl.setAttribute('camera-controls', '');
        modelViewerEl.setAttribute('auto-rotate', '');
        modelViewerEl.setAttribute('auto-rotate-delay', '3000');
        modelViewerEl.setAttribute('rotation-per-second', '30deg');
        modelViewerEl.setAttribute('shadow-intensity', '1');
        modelViewerEl.setAttribute('shadow-softness', '0.5');
        modelViewerEl.setAttribute('exposure', '1.0');
        modelViewerEl.setAttribute('camera-orbit', '45deg 75deg auto');
        modelViewerEl.setAttribute('interaction-prompt', 'none');
        
        const bottomBar = document.createElement('div');
        bottomBar.className = 'model-viewer-bottom-bar';
        
        const bgPresets = [
            {
                name: '다크',
                background: 'radial-gradient(circle at center, #1f1f1f 0%, #0a0a0a 100%)',
                exposure: '1.0',
                shadowIntensity: '1.0',
                shadowSoftness: '0.5'
            },
            {
                name: '하늘',
                background: 'linear-gradient(180deg, #1d6fa5 0%, #4a9fd5 45%, #9fd3f7 80%, #cfe8fb 100%)',
                exposure: '1.15',
                shadowIntensity: '1.4',
                shadowSoftness: '0.4'
            },
            {
                name: '노을',
                background: 'linear-gradient(180deg, #201e2b 0%, #3a2e3d 35%, #5d434a 65%, #8a5d53 90%, #a8796b 100%)',
                exposure: '1.08',
                shadowIntensity: '1.4',
                shadowSoftness: '0.4'
            },
            {
                name: '화이트',
                background: 'radial-gradient(circle at center, #ffffff 0%, #e2e8f0 100%)',
                exposure: '1.05',
                shadowIntensity: '1.2',
                shadowSoftness: '0.6'
            },
            {
                name: '야전',
                background: 'radial-gradient(circle at center, #243526 0%, #101a11 100%)',
                exposure: '1.0',
                shadowIntensity: '1.3',
                shadowSoftness: '0.5'
            }
        ];
        
        let currentBgIndex = 0;
        const bgBtn = document.createElement('button');
        bgBtn.type = 'button';
        bgBtn.className = 'model-viewer-bg-btn';
        bgBtn.title = '배경 및 조명 변경';
        bgBtn.innerHTML = `
            <svg class="bg-btn-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
            </svg>
            <span class="bg-btn-text">배경</span>
        `;
        
        bgBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentBgIndex = (currentBgIndex + 1) % bgPresets.length;
            const preset = bgPresets[currentBgIndex];
            modelViewerContainer.style.background = preset.background;
            modelViewerEl.setAttribute('exposure', preset.exposure);
            modelViewerEl.setAttribute('shadow-intensity', preset.shadowIntensity);
            modelViewerEl.setAttribute('shadow-softness', preset.shadowSoftness);
        });
        
        const controlsHint = document.createElement('div');
        controlsHint.className = 'model-viewer-controls-hint';
        controlsHint.innerHTML = '<span>좌클릭 회전</span><span>우클릭 이동</span><span>휠 줌</span>';
        
        bottomBar.appendChild(bgBtn);
        bottomBar.appendChild(controlsHint);
        
        modelViewerContainer.appendChild(modelViewerEl);
        modelViewerContainer.appendChild(bottomBar);
        imageContainer.appendChild(modelViewerContainer);
    }
    
    function switchMode(to3D) {
        is3DMode = to3D;
        const btn2D = headerRow.querySelector('.gallery-mode-btn:first-child');
        const btn3D = headerRow.querySelector('.gallery-mode-btn:last-child');
        if (btn2D) btn2D.classList.toggle('active', !to3D);
        if (btn3D) btn3D.classList.toggle('active', to3D);
        
        if (to3D) {
            imgWrapper.style.display = 'none';
            arrowLeft.style.display = 'none';
            arrowRight.style.display = 'none';
            if (modelViewerContainer) modelViewerContainer.style.display = 'flex';
        } else {
            imgWrapper.style.display = 'flex';
            if (hasMultiple) {
                arrowLeft.style.display = 'flex';
                arrowRight.style.display = 'flex';
            }
            if (modelViewerContainer) modelViewerContainer.style.display = 'none';
        }
    }
    
    galleryWrapper.appendChild(imageContainer);
    return galleryWrapper;
}

// 무기 상세 정보 표시
function showWeaponDetail(weapon, categoryKey, initialGalleryIndex = 0) {
    const weaponDetail = showDetailContainer();

    // 현재 기준 무기/카테고리 갱신
    currentCategory = categoryKey;
    currentWeapon = weapon;
    lastGalleryImageIndex = initialGalleryIndex;
    saveAppState();
    // 그리드의 선택된 무기 하이라이트
    document.querySelectorAll('.grid-card').forEach(item => {
        item.classList.remove('active');
        if ((item.dataset.weaponId || item.dataset.itemId) === weapon.id) {
            item.classList.add('active');
        }
    });

    weaponDetail.innerHTML = '';

    const detailCard = document.createElement('div');
    detailCard.className = 'weapon-detail-card';
    detailCard.appendChild(createBackToGridButton());

    // 무기 이름 (로고 포함)
    const nameContainer = document.createElement('div');
    nameContainer.className = 'weapon-detail-name-container';
    
    const name = document.createElement('div');
    name.className = 'weapon-detail-name';
    
    // 제조사 로고가 있으면 표시
    if (weapon.manufacturerLogo) {
        const logoImg = document.createElement('img');
        logoImg.className = 'weapon-manufacturer-logo';
        // 특정 로고는 필터 제거 (원본 색상 유지)
        const logosWithoutFilter = ['ai-logo', 'TsNIITochMash-logo', 'hk-logo', 'radian-logo', 'milkor-logo', 'kalashnikov-logo', 'mf-logo', 'dsarms-logo', 'barrett-logo', 'cheytac-logo'];
        if (logosWithoutFilter.some(logo => weapon.manufacturerLogo.includes(logo))) {
            logoImg.classList.add('logo-no-filter');
        }
        logoImg.src = weapon.manufacturerLogo;
        logoImg.alt = weapon.manufacturer || '';
        
        // 제조사 URL이 있으면 링크로 감싸기
        if (weapon.manufacturerUrl) {
            const logoLink = document.createElement('a');
            logoLink.href = weapon.manufacturerUrl;
            logoLink.target = '_blank';
            logoLink.rel = 'noopener noreferrer';
            logoLink.appendChild(logoImg);
            logoImg.onerror = function() {
                // 로고 이미지 로드 실패 시 제조사 이름만 텍스트로 표시
                logoLink.style.display = 'none';
                if (weapon.manufacturer) {
                    const manufacturerText = document.createElement('span');
                    manufacturerText.className = 'weapon-manufacturer-text';
                    manufacturerText.textContent = weapon.manufacturer;
                    name.appendChild(manufacturerText);
                }
            };
            name.appendChild(logoLink);
        } else {
            // URL이 없으면 그냥 이미지만 추가
            logoImg.onerror = function() {
                // 로고 이미지 로드 실패 시 제조사 이름만 텍스트로 표시
                this.style.display = 'none';
                if (weapon.manufacturer) {
                    const manufacturerText = document.createElement('span');
                    manufacturerText.className = 'weapon-manufacturer-text';
                    manufacturerText.textContent = weapon.manufacturer;
                    name.appendChild(manufacturerText);
                }
            };
            name.appendChild(logoImg);
        }
    } else if (weapon.manufacturer) {
        // 로고가 없으면 제조사 이름만 텍스트로 표시
        // URL이 있으면 링크로 감싸기
        if (weapon.manufacturerUrl) {
            const manufacturerLink = document.createElement('a');
            manufacturerLink.href = weapon.manufacturerUrl;
            manufacturerLink.target = '_blank';
            manufacturerLink.rel = 'noopener noreferrer';
            manufacturerLink.className = 'weapon-manufacturer-text';
            manufacturerLink.textContent = weapon.manufacturer;
            manufacturerLink.style.textDecoration = 'none';
            manufacturerLink.style.color = 'inherit';
            name.appendChild(manufacturerLink);
        } else {
            const manufacturerText = document.createElement('span');
            manufacturerText.className = 'weapon-manufacturer-text';
            manufacturerText.textContent = weapon.manufacturer;
            name.appendChild(manufacturerText);
        }
    }
    
    const nameText = document.createElement('span');
    nameText.className = 'weapon-name-text';
    nameText.textContent = weapon.name;
    name.appendChild(nameText);
    
    nameContainer.appendChild(name);
    detailCard.appendChild(nameContainer);
    
    // 구분선
    const divider = document.createElement('div');
    divider.className = 'weapon-detail-divider';
    detailCard.appendChild(divider);
    
    // 총기 사진 (화살표로 다중 이미지 탐색)
    const weaponImagePanel = createImagePanelWithArrows(weapon, weapon.name, initialGalleryIndex, (idx) => {
        lastGalleryImageIndex = idx;
        saveAppState();
    });
    detailCard.appendChild(weaponImagePanel);
    
    // 설명란
    const descContainer = document.createElement('div');
    descContainer.className = 'weapon-detail-description-container';
    if (weapon.description) {
        const desc = document.createElement('div');
        desc.className = 'weapon-detail-description';
        desc.innerHTML = weapon.description;
        descContainer.appendChild(desc);
    } else {
        // 설명이 없을 경우 플레이스홀더
        descContainer.innerHTML = '<div class="weapon-description-placeholder">해당 총기의 설명</div>';
    }

    detailCard.appendChild(descContainer);

    // 능력치 섹션
    if (weapon.stats) {
        const statsContainer = document.createElement('div');
        statsContainer.className = 'weapon-stats-container';

        // 헤더: 제목 + 비교 버튼
        const statsHeader = document.createElement('div');
        statsHeader.className = 'weapon-stats-header';

        const statsHeaderSpacer = document.createElement('div');
        statsHeaderSpacer.className = 'weapon-stats-spacer';

        const statsTitle = document.createElement('div');
        statsTitle.className = 'weapon-stats-title';
        statsTitle.textContent = '- 능력치 -';

        const compareBtn = document.createElement('button');
        compareBtn.type = 'button';
        compareBtn.className = 'weapon-compare-btn';
        // 비교 대상이 설정되어 있으면 "비교 해제"로 표시
        const hasCompare = !!(compareTarget && compareTarget.weapon);
        compareBtn.textContent = hasCompare ? '비교 해제' : '비교';
        compareBtn.onclick = () => {
            if (compareTarget && compareTarget.weapon) {
                // 비교 해제: 비교 대상 초기화 후 현재 무기 다시 렌더링
                compareTarget = null;
                showWeaponDetail(weapon, categoryKey);
            } else {
                // 비교 시작: 모달 열기
                openCompareModal();
            }
        };

        statsHeader.appendChild(statsHeaderSpacer);
        statsHeader.appendChild(statsTitle);
        statsHeader.appendChild(compareBtn);
        statsContainer.appendChild(statsHeader);

        const statsList = document.createElement('div');
        statsList.className = 'weapon-stats-list';

        // 각 능력치별 최대값과 스케일 정의
        const statsDefs = [
            { key: 'recoil',      label: '반동',     max: 120,  invert: false },
            { key: 'sway',        label: '흔들림',   max: 210,  invert: false },
            { key: 'ergonomics',  label: '인체공학', max: 100,  invert: false },
            // DayZ 소스코드 기준: 일반 무기는 maxMOA = 25.0
            { key: 'accuracy',    label: '명중률',   max: 25.0, invert: true, isMoa: true },
            { key: 'velocity',    label: '탄속',     max: 1200, invert: false },
            { key: 'rpm',         label: 'RPM',      max: 1200, invert: false }
        ];

        statsDefs.forEach(stat => {
            const row = document.createElement('div');
            row.className = 'weapon-stat-row';

            const label = document.createElement('span');
            label.className = 'weapon-stat-label';
            label.textContent = `${stat.label}:`;

            const value = document.createElement('span');
            value.className = 'weapon-stat-value';
            const raw = weapon.stats[stat.key];
            const displayText = raw !== undefined && raw !== null && raw !== "" ? String(raw) : '-';
            value.textContent = displayText;

            row.appendChild(label);
            row.appendChild(value);
            statsList.appendChild(row);

            // 게이지 바 계산 (기준 무기)
            let numericValue = NaN;
            if (raw !== undefined && raw !== null && raw !== "") {
                if (stat.isMoa) {
                    // "1.24 MOA" 같은 문자열에서 숫자만 추출
                    const match = /([\d.]+)/.exec(String(raw));
                    if (match) numericValue = parseFloat(match[1]);
                } else {
                    numericValue = parseFloat(raw);
                }
            }

            let percent = 0;
            if (!isNaN(numericValue) && stat.max > 0) {
                if (stat.invert) {
                    // 값이 낮을수록 좋은 경우 (예: MOA)
                    percent = 100 - (numericValue / stat.max * 100);
                } else {
                    percent = (numericValue / stat.max) * 100;
                }
                percent = Math.max(0, Math.min(100, percent));
            }

            const bar = document.createElement('div');
            bar.className = 'weapon-stat-bar';

            const barFill = document.createElement('div');
            barFill.className = 'weapon-stat-bar-fill';
            barFill.style.width = `${percent}%`;

            bar.appendChild(barFill);
            statsList.appendChild(bar);

            // 비교 대상이 있는 경우, 두 번째 게이지 바 추가
            const compareWeapon = compareTarget && compareTarget.weapon ? compareTarget.weapon : null;
            if (compareWeapon && compareWeapon.stats && compareWeapon.id !== weapon.id) {
                const rawCompare = compareWeapon.stats[stat.key];
                let numericCompare = NaN;
                if (rawCompare !== undefined && rawCompare !== null && rawCompare !== "") {
                    if (stat.isMoa) {
                        const match2 = /([\d.]+)/.exec(String(rawCompare));
                        if (match2) numericCompare = parseFloat(match2[1]);
                    } else {
                        numericCompare = parseFloat(rawCompare);
                    }
                }

                let percentCompare = 0;
                if (!isNaN(numericCompare) && stat.max > 0) {
                    if (stat.invert) {
                        percentCompare = 100 - (numericCompare / stat.max * 100);
                    } else {
                        percentCompare = (numericCompare / stat.max) * 100;
                    }
                    percentCompare = Math.max(0, Math.min(100, percentCompare));
                }

                let diffClass = '';
                if (!isNaN(numericValue) && !isNaN(numericCompare)) {
                    let better = false;
                    let worse = false;

                    // 반동, 흔들림, 명중률(MOA)은 값이 낮을수록 좋음
                    // 실제 숫자 값을 비교해야 함 (percent는 invert 적용되어 있어서 잘못된 비교가 됨)
                    if (stat.key === 'recoil' || stat.key === 'sway' || stat.isMoa) {
                        better = numericCompare < numericValue;  // 비교값이 기준값보다 낮으면 좋음
                        worse = numericCompare > numericValue;   // 비교값이 기준값보다 높으면 나쁨
                    } else {
                        // 나머지(인체공학, 탄속, RPM)는 값이 높을수록 좋음
                        better = numericCompare > numericValue;  // 비교값이 기준값보다 높으면 좋음
                        worse = numericCompare < numericValue;   // 비교값이 기준값보다 낮으면 나쁨
                    }

                    if (better) {
                        diffClass = 'better';
                    } else if (worse) {
                        diffClass = 'worse';
                    } else {
                        diffClass = 'equal';
                    }
                }

                const compareBar = document.createElement('div');
                compareBar.className = 'weapon-stat-bar weapon-stat-bar-compare';

                const compareFill = document.createElement('div');
                compareFill.className = 'weapon-stat-bar-fill';
                if (diffClass) {
                    compareFill.classList.add(`stat-${diffClass}`);
                }
                compareFill.style.width = `${percentCompare}%`;

                compareBar.appendChild(compareFill);
                statsList.appendChild(compareBar);
            }
        });

        appendItemSpecRows(statsList, weapon);

        statsContainer.appendChild(statsList);

        // 설명 박스와 완전히 같은 폭으로 보이도록,
        // 설명 컨테이너 안에 능력치 섹션을 넣는다.
        const statsParent = weapon.description
            ? detailCard.querySelector('.weapon-detail-description-container')
            : detailCard;
        if (statsParent) {
            statsParent.appendChild(statsContainer);
        } else {
            detailCard.appendChild(statsContainer);
        }
    }

    const slotsSection = createAttachmentSlotsSection(weapon);
    if (slotsSection) {
        const slotsParent = weapon.description
            ? detailCard.querySelector('.weapon-detail-description-container')
            : detailCard;
        if (slotsParent) {
            slotsParent.appendChild(slotsSection);
        } else {
            detailCard.appendChild(slotsSection);
        }
    }
    
    // 관리자 모드일 경우 편집/삭제 버튼 표시
    if (isAdmin) {
        const actions = document.createElement('div');
        actions.className = 'weapon-detail-actions';
        
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = '수정';
        editBtn.onclick = () => editWeapon(weapon.id, categoryKey);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '삭제';
        deleteBtn.onclick = () => deleteWeapon(weapon.id, categoryKey);
        
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        detailCard.appendChild(actions);
    }
    
    weaponDetail.appendChild(detailCard);
}

// 기어 상세 정보 표시
function showGearDetail(gear, categoryKey, initialGalleryIndex = 0) {
    const weaponDetail = showDetailContainer();

    currentCategory = categoryKey;
    currentWeapon = gear;
    lastGalleryImageIndex = initialGalleryIndex;
    saveAppState();

    document.querySelectorAll('.grid-card').forEach(item => {
        item.classList.remove('active');
        if ((item.dataset.weaponId || item.dataset.itemId) === gear.id) {
            item.classList.add('active');
        }
    });

    weaponDetail.innerHTML = '';

    const detailCard = document.createElement('div');
    detailCard.className = 'weapon-detail-card';
    detailCard.appendChild(createBackToGridButton());

    const nameContainer = document.createElement('div');
    nameContainer.className = 'weapon-detail-name-container';

    const name = document.createElement('div');
    name.className = 'weapon-detail-name';

    if (gear.manufacturerLogo) {
        const logoImg = document.createElement('img');
        logoImg.className = 'weapon-manufacturer-logo';
        const logosWithoutFilter = [
            'avon-logo',
            '511tac-logo'
        ];
        if (logosWithoutFilter.some(logo => gear.manufacturerLogo.includes(logo))) {
            logoImg.classList.add('logo-no-filter');
        }
        logoImg.src = gear.manufacturerLogo;
        logoImg.alt = gear.manufacturer || '';
        if (gear.manufacturerUrl) {
            const logoLink = document.createElement('a');
            logoLink.href = gear.manufacturerUrl;
            logoLink.target = '_blank';
            logoLink.rel = 'noopener noreferrer';
            logoLink.appendChild(logoImg);
            name.appendChild(logoLink);
        } else {
            name.appendChild(logoImg);
        }
    } else if (gear.manufacturer) {
        if (gear.manufacturerUrl) {
            const manufacturerLink = document.createElement('a');
            manufacturerLink.href = gear.manufacturerUrl;
            manufacturerLink.target = '_blank';
            manufacturerLink.rel = 'noopener noreferrer';
            manufacturerLink.className = 'weapon-manufacturer-text';
            manufacturerLink.textContent = gear.manufacturer;
            manufacturerLink.style.textDecoration = 'none';
            manufacturerLink.style.color = 'inherit';
            name.appendChild(manufacturerLink);
        } else {
            const manufacturerText = document.createElement('span');
            manufacturerText.className = 'weapon-manufacturer-text';
            manufacturerText.textContent = gear.manufacturer;
            name.appendChild(manufacturerText);
        }
    }
    
    const nameText = document.createElement('span');
    nameText.className = 'weapon-name-text';
    nameText.textContent = gear.name;
    name.appendChild(nameText);
    
    nameContainer.appendChild(name);
    detailCard.appendChild(nameContainer);
    
    const divider = document.createElement('div');
    divider.className = 'weapon-detail-divider';
    detailCard.appendChild(divider);
    
    // 기어 사진 (화살표로 다중 이미지 탐색)
    const gearImagePanel = createImagePanelWithArrows(gear, gear.name, initialGalleryIndex, (idx) => {
        lastGalleryImageIndex = idx;
        saveAppState();
    });
    detailCard.appendChild(gearImagePanel);
    
    const descContainer = document.createElement('div');
    descContainer.className = 'weapon-detail-description-container';
    if (gear.description) {
        const desc = document.createElement('div');
        desc.className = 'weapon-detail-description';
        desc.innerHTML = gear.description;
        descContainer.appendChild(desc);
    } else {
        descContainer.innerHTML = '<div class="weapon-description-placeholder">해당 기어의 설명</div>';
    }

    detailCard.appendChild(descContainer);
    
    // 기어 능력치 및 규격 섹션
    const hasGearStats = Boolean(gear.stats);
    const hasGearSpecs = Boolean(gear.itemSize || gear.itemSlots || gear.cargoSize || gear.cargoSlots);
    if (hasGearStats || hasGearSpecs) {
        const statsContainer = document.createElement('div');
        statsContainer.className = 'weapon-stats-container';

        const statsHeader = document.createElement('div');
        statsHeader.className = 'weapon-stats-header';
        const statsHeaderSpacer = document.createElement('div');
        statsHeaderSpacer.className = 'weapon-stats-spacer';
        const statsTitle = document.createElement('div');
        statsTitle.className = 'weapon-stats-title';
        statsTitle.textContent = '- 능력치 -';
        const statsHeaderSpacerRight = document.createElement('div');
        statsHeaderSpacerRight.className = 'weapon-stats-spacer';
        statsHeader.appendChild(statsHeaderSpacer);
        statsHeader.appendChild(statsTitle);
        statsHeader.appendChild(statsHeaderSpacerRight);
        statsContainer.appendChild(statsHeader);

        const statsList = document.createElement('div');
        statsList.className = 'weapon-stats-list';

        if (gear.stats) {
            const hasProtectionStats = ['bulletDamageProtection', 'bloodDamageProtection', 'shockDamageProtection'].some(k => gear.stats[k] !== undefined);
            if (hasProtectionStats) {
                const gearStatsDefs = [
                    { key: 'bulletDamageProtection', label: '총탄 데미지 보호률' },
                    { key: 'bloodDamageProtection', label: '유혈 데미지 보호률' },
                    { key: 'shockDamageProtection', label: '충격 데미지 보호률' }
                ];

                gearStatsDefs.forEach(stat => {
                    const row = document.createElement('div');
                    row.className = 'weapon-stat-row';

                    const label = document.createElement('span');
                    label.className = 'weapon-stat-label';
                    label.textContent = `${stat.label}:`;

                    const raw = gear.stats[stat.key];
                    const displayText = raw !== undefined && raw !== null && raw !== "" ? `${String(raw)}%` : '-';

                    const value = document.createElement('span');
                    value.className = 'weapon-stat-value';
                    value.textContent = displayText;

                    row.appendChild(label);
                    row.appendChild(value);
                    statsList.appendChild(row);

                    let numericValue = NaN;
                    if (raw !== undefined && raw !== null && raw !== "") {
                        numericValue = parseFloat(String(raw));
                    }
                    const percent = (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100)
                        ? Math.min(100, Math.max(0, numericValue)) : 0;

                    const bar = document.createElement('div');
                    bar.className = 'weapon-stat-bar';

                    const barFill = document.createElement('div');
                    barFill.className = 'weapon-stat-bar-fill';
                    barFill.style.width = `${percent}%`;

                    bar.appendChild(barFill);
                    statsList.appendChild(bar);
                });
            }

            if (gear.stats.weight && gear.stats.weight !== '-') {
                const row = document.createElement('div');
                row.className = 'weapon-stat-row';
                const label = document.createElement('span');
                label.className = 'weapon-stat-label';
                label.textContent = '무게:';
                const value = document.createElement('span');
                value.className = 'weapon-stat-value';
                value.textContent = gear.stats.weight;
                row.appendChild(label);
                row.appendChild(value);
                statsList.appendChild(row);
            }
        }

        appendItemSpecRows(statsList, gear);

        statsContainer.appendChild(statsList);

        const statsParent = detailCard.querySelector('.weapon-detail-description-container') || detailCard;
        statsParent.appendChild(statsContainer);
    }
    
    // 차콜 테블릿 필터 충전 패널 (호흡기, 방독면, Gas mask, respirator - 이름 또는 설명에 포함 시)
    const filterKeywords = ['호흡기', '방독면', 'gas mask', 'respirator'];
    const gearText = `${gear.name || ''} ${gear.description || ''}`.toLowerCase();
    const hasFilterKeyword = filterKeywords.some(kw => gearText.includes(kw.toLowerCase()));
    if (hasFilterKeyword) {
        const filterPanel = document.createElement('div');
        filterPanel.className = 'gear-filter-charge-panel';
        
        const filterHeader = document.createElement('div');
        filterHeader.className = 'weapon-stats-header';
        const filterSpacer = document.createElement('div');
        filterSpacer.className = 'weapon-stats-spacer';
        const filterTitle = document.createElement('div');
        filterTitle.className = 'weapon-stats-title';
        filterTitle.textContent = '- 필터 충전 가능 여부 -';
        const filterSpacerRight = document.createElement('div');
        filterSpacerRight.className = 'weapon-stats-spacer';
        filterHeader.appendChild(filterSpacer);
        filterHeader.appendChild(filterTitle);
        filterHeader.appendChild(filterSpacerRight);
        filterPanel.appendChild(filterHeader);
        
        const charcoalRow = document.createElement('div');
        charcoalRow.className = 'gear-filter-charge-row';
        const charcoalImg = document.createElement('img');
        charcoalImg.src = 'assets/charcoal.png';
        charcoalImg.alt = '차콜 테블릿';
        charcoalImg.className = 'gear-charcoal-img';
        charcoalRow.appendChild(charcoalImg);
        
        const filterValue = document.createElement('span');
        filterValue.className = 'gear-filter-value';
        const fc = (gear.filterChargeable || '').toLowerCase();
        if (fc === 'yes') {
            filterValue.textContent = '가능';
            filterValue.classList.add('filter-yes');
        } else if (fc === 'no') {
            filterValue.textContent = '불가능';
            filterValue.classList.add('filter-no');
        } else {
            filterValue.textContent = '미설정';
            filterValue.classList.add('filter-unset');
        }
        charcoalRow.appendChild(filterValue);
        
        filterPanel.appendChild(charcoalRow);
        
        const filterParent = detailCard.querySelector('.weapon-detail-description-container') || detailCard;
        filterParent.appendChild(filterPanel);
    }

    const slotsSection = createAttachmentSlotsSection(gear);
    if (slotsSection) {
        const slotsParent = detailCard.querySelector('.weapon-detail-description-container') || detailCard;
        slotsParent.appendChild(slotsSection);
    }
    
    if (isAdmin) {
        const actions = document.createElement('div');
        actions.className = 'weapon-detail-actions';
        
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = '수정';
        editBtn.onclick = () => editGear(gear.id, categoryKey);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '삭제';
        deleteBtn.onclick = () => deleteGear(gear.id, categoryKey);
        
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        detailCard.appendChild(actions);
    }
    
    weaponDetail.appendChild(detailCard);
}

// 무기 상세 정보 초기화
function clearWeaponDetail() {
    clearDetail();
}

// 상세 정보 초기화 (무기/기어 공통)
function clearDetail() {
    const gridView = document.getElementById('gridView');
    if (gridView) gridView.style.display = 'none';
    const weaponDetail = document.getElementById('weaponDetail');
    weaponDetail.style.display = 'flex';
    const msg = currentPanel === 'gear'
        ? '상단 메뉴에서 카테고리를 선택하고 기어를 클릭하여 정보를 확인하세요.'
        : '상단 메뉴에서 카테고리를 선택하고 항목을 클릭하여 정보를 확인하세요.';
    weaponDetail.innerHTML = '<p class="empty-message">' + msg + '</p>';

    document.querySelectorAll('.grid-card').forEach(item => {
        item.classList.remove('active');
    });

    currentWeapon = null;
    currentCategory = null;
    lastGridState = null;
    preSearchView = null;
    navStack = [];
    lastGridScrollY = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}


// 이벤트 리스너 설정
function setupEventListeners() {
    // 패널 전환 버튼 (누르면 카테고리 드롭다운이 내려옴)
    // 같은 패널을 다시 누른 경우에는 드롭다운만 여닫고, 현재 표시 중인 목록/상세는 그대로 유지한다.
    document.querySelectorAll('.panel-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const panel = btn.dataset.panel;
            const dropdown = document.getElementById('categoryDropdown');
            const isOpen = dropdown && dropdown.classList.contains('open');

            if (panel !== currentPanel) {
                switchPanel(panel);
                renderItemGrid('all', panel);
                openDropdown();
            } else if (isOpen) {
                closeDropdown();
            } else {
                openDropdown();
            }
        });
    });

    // 드롭다운 바깥을 클릭하면 닫기
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('categoryDropdown');
        if (!dropdown || !dropdown.classList.contains('open')) return;
        if (dropdown.contains(e.target)) return;
        if (e.target.closest('.panel-btn')) return;
        closeDropdown();
    });

    // 관리자 로그인 버튼
    document.getElementById('adminLoginBtn').addEventListener('click', () => {
        document.getElementById('loginModal').style.display = 'block';
    });
    
    // 로그아웃 버튼
    document.getElementById('adminLogoutBtn').addEventListener('click', logout);
    
    // 로그인 폼
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // 무기 폼
    document.getElementById('weaponForm').addEventListener('submit', handleWeaponSubmit);
    
    // 기어 폼
    document.getElementById('gearForm').addEventListener('submit', handleGearSubmit);
    
    // 기어 추가 버튼
    const gearAddBtn = document.getElementById('gearAddBtn');
    if (gearAddBtn) {
        gearAddBtn.addEventListener('click', () => openGearModal(null, null));
    }
    
    // 검색창 이벤트 리스너
    const searchInput = document.getElementById('itemSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchItems(e.target.value);
        });
    }
    
    // 모달 닫기
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });
    
    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // 이미지 확대 모달 닫기
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        // 모달이 기본적으로 닫혀있도록 보장
        imageModal.style.display = 'none';
        
        const closeImageBtn = document.querySelector('.close-image');
        if (closeImageBtn) {
            closeImageBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                imageModal.style.setProperty('display', 'none', 'important');
            });
        }
        
        // 이미지 모달 외부 클릭 시 닫기
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal || e.target.classList.contains('image-modal')) {
                imageModal.style.setProperty('display', 'none', 'important');
            }
        });
    }
    
    // ESC 키로 모든 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDropdown();
            const imageModal = document.getElementById('imageModal');
            if (imageModal) {
                const computedStyle = window.getComputedStyle(imageModal);
                if (computedStyle.display !== 'none') {
                    imageModal.style.setProperty('display', 'none', 'important');
                }
            }
            // 다른 모달들도 닫기
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.id !== 'imageModal') {
                    const computedStyle = window.getComputedStyle(modal);
                    if (computedStyle.display !== 'none') {
                        modal.style.display = 'none';
                    }
                }
            });
        }
    });
}

// 이미지 확대 모달 열기
function openImageModal(imageSrc, imageAlt) {
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    if (imageModal && modalImage) {
        modalImage.src = imageSrc;
        modalImage.alt = imageAlt;
        imageModal.style.setProperty('display', 'flex', 'important');
    }
}

// 로그인 처리
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 간단한 인증 (실제로는 서버에서 처리해야 함)
    // 기본 관리자 계정: admin / 488538
    if (username === 'admin' && password === '488538') {
        isAdmin = true;
        document.getElementById('adminLoginBtn').style.display = 'none';
        document.getElementById('adminLogoutBtn').style.display = 'block';
        document.getElementById('loginModal').style.display = 'none';
        
        const gearAddWrap = document.getElementById('gearAddBtnWrap');
        if (gearAddWrap) gearAddWrap.style.display = 'block';
        
        if (currentWeapon && currentCategory) {
            if (currentPanel === 'gear') {
                showGearDetail(currentWeapon, currentCategory);
            } else {
                showWeaponDetail(currentWeapon, currentCategory);
            }
        }
        
        alert('관리자로 로그인되었습니다.');
    } else {
        alert('잘못된 사용자명 또는 비밀번호입니다.');
    }
}

// 로그아웃
function logout() {
    isAdmin = false;
    document.getElementById('adminLoginBtn').style.display = 'block';
    document.getElementById('adminLogoutBtn').style.display = 'none';
    
    const gearAddWrap = document.getElementById('gearAddBtnWrap');
    if (gearAddWrap) gearAddWrap.style.display = 'none';
    
    if (currentWeapon && currentCategory) {
        if (currentPanel === 'gear') {
            showGearDetail(currentWeapon, currentCategory);
        } else {
            showWeaponDetail(currentWeapon, currentCategory);
        }
    }
    
    alert('로그아웃되었습니다.');
}

// 무기 모달 열기
function openWeaponModal(weaponId = null, categoryKey = null) {
    editingWeaponId = weaponId;
    const modal = document.getElementById('weaponModal');
    const title = document.getElementById('weaponModalTitle');
    
    if (weaponId) {
        title.textContent = '무기 수정';
        const weapon = weaponsData[categoryKey].find(w => w.id === weaponId);
        if (weapon) {
            document.getElementById('weaponId').value = weaponId;
            document.getElementById('weaponName').value = weapon.name;
            document.getElementById('weaponCategory').value = categoryKey;
            document.getElementById('weaponManufacturer').value = weapon.manufacturer || '';
            document.getElementById('weaponManufacturerLogo').value = weapon.manufacturerLogo || '';
            document.getElementById('weaponManufacturerUrl').value = weapon.manufacturerUrl || '';
            document.getElementById('weaponItemSize').value = weapon.itemSize || '';
            document.getElementById('weaponImage').value = (weapon.images && weapon.images.length) ? weapon.images.join(', ') : (weapon.image || '');
            document.getElementById('weaponDescription').value = weapon.description || '';
        }
    } else {
        title.textContent = '무기 추가';
        document.getElementById('weaponForm').reset();
        document.getElementById('weaponId').value = '';
        if (currentCategory && currentCategory !== 'all' && currentCategory !== 'search') {
            document.getElementById('weaponCategory').value = currentCategory;
        }
    }
    
    modal.style.display = 'block';
}

// 무기 모달 닫기
function closeWeaponModal() {
    document.getElementById('weaponModal').style.display = 'none';
    editingWeaponId = null;
}

// 무기 추가/수정 처리
function handleWeaponSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('weaponName').value;
    const category = document.getElementById('weaponCategory').value;
    const manufacturer = document.getElementById('weaponManufacturer').value;
    const manufacturerLogo = document.getElementById('weaponManufacturerLogo').value;
    const manufacturerUrl = document.getElementById('weaponManufacturerUrl').value;
    const weaponItemSize = document.getElementById('weaponItemSize').value.trim();
    const imageInput = document.getElementById('weaponImage').value.trim();
    const description = document.getElementById('weaponDescription').value;
    const imagePaths = imageInput ? imageInput.split(',').map(s => s.trim()).filter(Boolean) : [];
    
    if (!category) {
        alert('카테고리를 선택해주세요.');
        return;
    }

    let weaponItemSlots;
    if (weaponItemSize && weaponItemSize.includes('x')) {
        const [w, h] = weaponItemSize.split('x').map(s => parseInt(s.trim(), 10));
        if (!isNaN(w) && !isNaN(h)) weaponItemSlots = w * h;
    }
    
    if (editingWeaponId) {
        // 수정
        const weaponIndex = weaponsData[category].findIndex(w => w.id === editingWeaponId);
        if (weaponIndex !== -1) {
            weaponsData[category][weaponIndex].name = name;
            weaponsData[category][weaponIndex].manufacturer = manufacturer;
            weaponsData[category][weaponIndex].manufacturerLogo = manufacturerLogo;
            weaponsData[category][weaponIndex].manufacturerUrl = manufacturerUrl;
            if (weaponItemSize) {
                weaponsData[category][weaponIndex].itemSize = weaponItemSize;
                if (weaponItemSlots) weaponsData[category][weaponIndex].itemSlots = weaponItemSlots;
            } else {
                delete weaponsData[category][weaponIndex].itemSize;
                delete weaponsData[category][weaponIndex].itemSlots;
            }
            if (imagePaths.length > 1) {
                weaponsData[category][weaponIndex].images = imagePaths;
                delete weaponsData[category][weaponIndex].image;
            } else if (imagePaths.length === 1) {
                weaponsData[category][weaponIndex].image = imagePaths[0];
                delete weaponsData[category][weaponIndex].images;
            } else {
                weaponsData[category][weaponIndex].image = '';
                delete weaponsData[category][weaponIndex].images;
            }
            weaponsData[category][weaponIndex].description = description;
        }
    } else {
        // 추가
        const newWeapon = {
            id: Date.now().toString(),
            name: name,
            manufacturer: manufacturer,
            manufacturerLogo: manufacturerLogo,
            manufacturerUrl: manufacturerUrl,
            description: description
        };
        if (weaponItemSize) {
            newWeapon.itemSize = weaponItemSize;
            if (weaponItemSlots) newWeapon.itemSlots = weaponItemSlots;
        }
        if (imagePaths.length > 1) {
            newWeapon.images = imagePaths;
        } else if (imagePaths.length === 1) {
            newWeapon.image = imagePaths[0];
        } else {
            newWeapon.image = '';
        }
        weaponsData[category].push(newWeapon);
    }
    
    saveData();
    renderCategories();
    refreshGridIfShowing(category, 'weapon');

    closeWeaponModal();
    
    alert(editingWeaponId ? '무기가 수정되었습니다.' : '무기가 추가되었습니다.');
    
    // 수정한 경우 현재 표시된 무기 정보 업데이트
    if (editingWeaponId) {
        const updatedWeapon = weaponsData[category].find(w => w.id === editingWeaponId);
        if (updatedWeapon) {
            showWeaponDetail(updatedWeapon, category);
        }
    }
}

// 무기 수정
function editWeapon(weaponId, categoryKey) {
    openWeaponModal(weaponId, categoryKey);
}

// 무기 삭제
function deleteWeapon(weaponId, categoryKey) {
    if (confirm('정말 이 무기를 삭제하시겠습니까?')) {
        weaponsData[categoryKey] = weaponsData[categoryKey].filter(w => w.id !== weaponId);
        saveData();
        renderCategories();
        refreshGridIfShowing(categoryKey, 'weapon');

        // 메인 영역 초기화
        clearWeaponDetail();
        alert('무기가 삭제되었습니다.');
    }
}

// 기어 모달 열기
function openGearModal(gearId = null, categoryKey = null) {
    editingGearId = gearId;
    const modal = document.getElementById('gearModal');
    const title = document.getElementById('gearModalTitle');
    
    if (gearId) {
        title.textContent = '기어 수정';
        const gear = gearData[categoryKey].find(g => g.id === gearId);
        if (gear) {
            document.getElementById('gearId').value = gearId;
            document.getElementById('gearName').value = gear.name;
            document.getElementById('gearCategory').value = categoryKey;
            document.getElementById('gearManufacturer').value = gear.manufacturer || '';
            document.getElementById('gearManufacturerLogo').value = gear.manufacturerLogo || '';
            document.getElementById('gearManufacturerUrl').value = gear.manufacturerUrl || '';
            document.getElementById('gearItemSize').value = gear.itemSize || '';
            document.getElementById('gearCargoSize').value = gear.cargoSize || '';
            document.getElementById('gearImage').value = (gear.images && gear.images.length) ? gear.images.join(', ') : (gear.image || '');
            document.getElementById('gearDescription').value = gear.description || '';
            document.getElementById('gearBulletDamageProtection').value = gear.stats?.bulletDamageProtection ?? '';
            document.getElementById('gearBloodDamageProtection').value = gear.stats?.bloodDamageProtection ?? '';
            document.getElementById('gearShockDamageProtection').value = gear.stats?.shockDamageProtection ?? '';
        }
    } else {
        title.textContent = '기어 추가';
        document.getElementById('gearForm').reset();
        document.getElementById('gearId').value = '';
        if (currentCategory && currentCategory !== 'all' && currentCategory !== 'search') {
            document.getElementById('gearCategory').value = currentCategory;
        }
    }
    
    modal.style.display = 'block';
}

// 기어 모달 닫기
function closeGearModal() {
    document.getElementById('gearModal').style.display = 'none';
    editingGearId = null;
}

// 기어 추가/수정 처리
function handleGearSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('gearName').value;
    const category = document.getElementById('gearCategory').value;
    const manufacturer = document.getElementById('gearManufacturer').value;
    const manufacturerLogo = document.getElementById('gearManufacturerLogo').value;
    const manufacturerUrl = document.getElementById('gearManufacturerUrl').value;
    const gearItemSize = document.getElementById('gearItemSize').value.trim();
    const gearCargoSize = document.getElementById('gearCargoSize').value.trim();
    const gearImageInput = document.getElementById('gearImage').value.trim();
    const description = document.getElementById('gearDescription').value;
    const gearImagePaths = gearImageInput ? gearImageInput.split(',').map(s => s.trim()).filter(Boolean) : [];
    const bulletProt = document.getElementById('gearBulletDamageProtection').value.trim();
    const bloodProt = document.getElementById('gearBloodDamageProtection').value.trim();
    const shockProt = document.getElementById('gearShockDamageProtection').value.trim();

    const stats = {};
    if (bulletProt !== '') stats.bulletDamageProtection = bulletProt;
    if (bloodProt !== '') stats.bloodDamageProtection = bloodProt;
    if (shockProt !== '') stats.shockDamageProtection = shockProt;
    
    if (!category) {
        alert('카테고리를 선택해주세요.');
        return;
    }

    let gearItemSlots;
    if (gearItemSize && gearItemSize.includes('x')) {
        const [w, h] = gearItemSize.split('x').map(s => parseInt(s.trim(), 10));
        if (!isNaN(w) && !isNaN(h)) gearItemSlots = w * h;
    }

    let gearCargoSlots;
    if (gearCargoSize && gearCargoSize.includes('x')) {
        const [cw, ch] = gearCargoSize.split('x').map(s => parseInt(s.trim(), 10));
        if (!isNaN(cw) && !isNaN(ch)) gearCargoSlots = cw * ch;
    }
    
    if (editingGearId) {
        const gearIndex = gearData[category].findIndex(g => g.id === editingGearId);
        if (gearIndex !== -1) {
            gearData[category][gearIndex].name = name;
            gearData[category][gearIndex].manufacturer = manufacturer;
            gearData[category][gearIndex].manufacturerLogo = manufacturerLogo;
            gearData[category][gearIndex].manufacturerUrl = manufacturerUrl;
            if (gearItemSize) {
                gearData[category][gearIndex].itemSize = gearItemSize;
                if (gearItemSlots) gearData[category][gearIndex].itemSlots = gearItemSlots;
            } else {
                delete gearData[category][gearIndex].itemSize;
                delete gearData[category][gearIndex].itemSlots;
            }
            if (gearCargoSize) {
                gearData[category][gearIndex].cargoSize = gearCargoSize;
                if (gearCargoSlots) gearData[category][gearIndex].cargoSlots = gearCargoSlots;
            } else {
                delete gearData[category][gearIndex].cargoSize;
                delete gearData[category][gearIndex].cargoSlots;
            }
            if (gearImagePaths.length > 1) {
                gearData[category][gearIndex].images = gearImagePaths;
                delete gearData[category][gearIndex].image;
            } else if (gearImagePaths.length === 1) {
                gearData[category][gearIndex].image = gearImagePaths[0];
                delete gearData[category][gearIndex].images;
            } else {
                gearData[category][gearIndex].image = '';
                delete gearData[category][gearIndex].images;
            }
            gearData[category][gearIndex].description = description;
            gearData[category][gearIndex].stats = Object.keys(stats).length > 0 ? stats : undefined;
        }
    } else {
        const newGear = {
            id: Date.now().toString(),
            name: name,
            manufacturer: manufacturer,
            manufacturerLogo: manufacturerLogo,
            manufacturerUrl: manufacturerUrl,
            description: description
        };
        if (gearItemSize) {
            newGear.itemSize = gearItemSize;
            if (gearItemSlots) newGear.itemSlots = gearItemSlots;
        }
        if (gearCargoSize) {
            newGear.cargoSize = gearCargoSize;
            if (gearCargoSlots) newGear.cargoSlots = gearCargoSlots;
        }
        if (gearImagePaths.length > 1) {
            newGear.images = gearImagePaths;
        } else if (gearImagePaths.length === 1) {
            newGear.image = gearImagePaths[0];
        } else {
            newGear.image = '';
        }
        if (Object.keys(stats).length > 0) {
            newGear.stats = stats;
        }
        gearData[category].push(newGear);
    }
    
    saveData();
    renderGearCategories();
    refreshGridIfShowing(category, 'gear');

    closeGearModal();
    alert(editingGearId ? '기어가 수정되었습니다.' : '기어가 추가되었습니다.');
    
    if (editingGearId) {
        const updatedGear = gearData[category].find(g => g.id === editingGearId);
        if (updatedGear) {
            showGearDetail(updatedGear, category);
        }
    }
}

// 기어 수정
function editGear(gearId, categoryKey) {
    openGearModal(gearId, categoryKey);
}

// 기어 삭제
function deleteGear(gearId, categoryKey) {
    if (confirm('정말 이 기어를 삭제하시겠습니까?')) {
        gearData[categoryKey] = gearData[categoryKey].filter(g => g.id !== gearId);
        saveData();
        renderGearCategories();
        refreshGridIfShowing(categoryKey, 'gear');

        clearDetail();
        alert('기어가 삭제되었습니다.');
    }
}

// 능력치 비교 모달 열기
function openCompareModal() {
    const modal = document.getElementById('compareModal');
    const listContainer = document.getElementById('compareWeaponList');
    const currentLabel = document.getElementById('compareCurrentWeapon');

    if (!modal || !listContainer) return;
    if (!currentWeapon) {
        alert('먼저 기준이 될 무기를 선택해주세요.');
        return;
    }

    listContainer.innerHTML = '';
    if (currentLabel) {
        // 기준 무기 표시는 이름만 사용 (이름 안에 제조사가 포함될 수 있으므로)
        currentLabel.textContent = `기준 무기: ${currentWeapon.name}`;
    }

    // 모든 카테고리의 무기 목록을 모아서 표시
    Object.keys(weaponsData).forEach(categoryKey => {
        const list = weaponsData[categoryKey] || [];
        list.forEach(w => {
            // 스탯이 있는 무기만 대상, 자기 자신 제외
            if (!w.stats || (currentWeapon && w.id === currentWeapon.id)) return;

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'compare-weapon-item';
            // 비교 목록에는 총기 이름만 표기 (이미 이름에 제조사가 포함될 수 있음)
            btn.textContent = w.name;
            btn.onclick = () => {
                compareTarget = { weapon: w, categoryKey };
                modal.style.display = 'none';
                // 현재 무기를 다시 렌더링하여 비교 바를 표시
                if (currentWeapon && currentCategory) {
                    showWeaponDetail(currentWeapon, currentCategory);
                }
            };
            listContainer.appendChild(btn);
        });
    });

    modal.style.display = 'block';
}

// 무기/기어 검색 함수 (검색 결과를 그리드로 표시)
function searchItems(query) {
    const trimmed = (query || '').trim();
    if (!trimmed) {
        // 검색창이 비면 검색 시작 전 화면으로 복귀
        if (preSearchView) {
            const view = preSearchView;
            preSearchView = null;
            restoreView(view);
        }
        return;
    }

    // 검색을 처음 시작하는 시점의 화면을 기억해둔다
    if (!preSearchView) {
        preSearchView = captureCurrentView();
    }

    const lowerQuery = trimmed.toLowerCase();
    const dataSource = currentPanel === 'gear' ? gearData : (currentPanel === 'attachment' ? attachmentData : weaponsData);

    const matches = [];
    Object.keys(dataSource).forEach(categoryKey => {
        dataSource[categoryKey].forEach(item => {
            const nameMatch = item.name.toLowerCase().includes(lowerQuery);
            const keywordMatch = item.keyword && item.keyword.toLowerCase().includes(lowerQuery);
            const manufacturerMatch = item.manufacturer && item.manufacturer.toLowerCase().includes(lowerQuery);
            if (nameMatch || keywordMatch || manufacturerMatch) {
                matches.push(item);
            }
        });
    });

    closeDropdown();
    showGridView(`"${trimmed}" 검색 결과`, matches, 'search', currentPanel);
}

