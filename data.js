// 무기 데이터 (자동 동기화 빌드)
// 이제 데이터는 이 파일에 저장됩니다
const weaponsData = {
    "돌격 소총": [
        {
            "id": "SMPZ_Weapon_ADAR2",
            "name": "ADAR 2-15",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "AR-15 설계를 기반으로 제작된 러시아의 민간용 카빈총 ADAR 2-15입니다. 이 카빈은 상트페테르부르크에서 이스라엘산 부품과 Molot Oruzhie LLC의 크롬 도금 총열을 사용하여 생산됩니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "108",
                "sway": "170",
                "ergonomics": "49",
                "accuracy": "1.66 MOA",
                "velocity": "983 m/s",
                "rpm": "800"
            }
        },
        {
            "id": "SMPZ_Weapon_AN94",
            "name": "AN-94",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "이 총기의 탄생은 당시 러시아에서 '칼라시니코프'의 대안으로서 근본적으로 새로운 돌격소총들을 시험했던 '아바칸(Abakan)'이라는 경연 대회와 관련이 있습니다. 툴라(Tula)의 개발품들을 포함한 여러 모델 중에서 G.N. 니코노프(G.N. Nikonov)의 설계안이 채택되었습니다. 이 소총은 군에서 AK-74 돌격소총과 함께 운용될 목적으로 개발되었습니다. 니코노프의 돌격소총은 5.45mm 구경을 사용했으나, 자동 작동 원리 면에서 이전의 모든 전통적인 자동화기 설계와 완전히 달랐습니다. 이 총에서는 리시버 내부에 위치하여 하우징의 특수 홈을 따라 움직이는 '가동식 총열'을 통해 재장전이 이루어집니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "30",
                "sway": "50",
                "ergonomics": "64",
                "accuracy": "1.89 MOA",
                "velocity": "792 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_ASVAL",
            "name": "AS VAL",
            "category": "돌격 소총",
            "image": "assets/asval.png",
            "images": [
                "assets/asval.png"
            ],
            "description": "AS Val(특수 돌격 소총)은 1980년대 후반 소련에서 9x39mm 구경으로 개발된 일체형 소음 돌격 소총입니다. 1987년 소련군과 KGB에 채택되었습니다. 은밀한 특수 작전 시 방탄복을 착용한 적을 무력화하기 위해 고안되었습니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "80",
                "sway": "110",
                "ergonomics": "58",
                "accuracy": "3.44 MOA",
                "velocity": "295 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "SMPZ_Weapon_ASVAL_Mod4",
            "name": "AS VAL MOD.4",
            "category": "돌격 소총",
            "image": "assets/asval.png",
            "images": [
                "assets/asval.png"
            ],
            "description": "현대 전술 레일 시스템과 조절식 스톡을 장착하여 근대화 개수된 AS VAL의 특수작전용 커스텀 개량형입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "80",
                "sway": "110",
                "ergonomics": "58",
                "accuracy": "3.44 MOA",
                "velocity": "295 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "SMPZ_Weapon_ASH12",
            "name": "ASh-12",
            "category": "돌격 소총",
            "image": "assets/ash12.png",
            "images": [
                "assets/ash12.png"
            ],
            "description": "러시아의 대구경 ASh-12(자동 소총 12)는 러시아 연방보안국(FSB) 특수부대의 요구에 맞춰 TsKIB SOO에서 개발한 돌격 소총입니다. 근접전에서 압도적인 저지력을 발휘하도록 강력한 12.7x55mm 탄약을 사용합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "150",
                "ergonomics": "65",
                "accuracy": "1.63 MOA",
                "velocity": "862 m/s",
                "rpm": "650"
            }
        },
        {
            "id": "SMPZ_Weapon_MK47",
            "name": "CMMG Mk47 Mutant",
            "category": "돌격 소총",
            "image": "assets/mk47.png",
            "images": [
                "assets/mk47.png"
            ],
            "description": "CMMG Mk47 Mutant는 미국 CMMG Inc.에서 7.62x39mm 구경으로 생산하는 카빈 소총입니다. AR-15 플랫폼의 작동 구조와 AK 탄창을 완벽히 결합하여 높은 조작성과 화력을 제공합니다.",
            "manufacturer": "CMMG",
            "manufacturerLogo": "assets/cmmg-logo.png",
            "manufacturerUrl": "https://cmmg.com/",
            "stats": {
                "recoil": "150",
                "sway": "125",
                "ergonomics": "59",
                "accuracy": "2.48 MOA",
                "velocity": "657 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_M16A1",
            "name": "Colt M16A1",
            "category": "돌격 소총",
            "image": "assets/m16a1.png",
            "images": [
                "assets/m16a1.png"
            ],
            "description": "1960년대 후반에 Colt가 개발한 5.56x45mm 돌격 소총이자 AR-15/M16의 개량형입니다. M16A1은 베트남 전쟁 중 미군의 표준 제식 소총이 되었고, 신뢰성 향상을 위한 개량이 이루어졌습니다. 현대의 기준으로는 구식이지만, 수집가나 사격 애호가에게 높이 평가되고 있습니다.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "120",
                "sway": "200",
                "ergonomics": "51",
                "accuracy": "1.24 MOA",
                "velocity": "1092 m/s",
                "rpm": "750"
            }
        },
        {
            "id": "SMPZ_Weapon_M16A2",
            "name": "Colt M16A2",
            "category": "돌격 소총",
            "image": "assets/m16a2.png",
            "images": [
                "assets/m16a2.png"
            ],
            "description": "M16 플랫폼의 후기 발전형인 M16A2는 3점사 기능과 향상된 부품을 도입하여 제어성과 내구성을 크게 개선한 모델입니다. 5.56x45mm NATO 탄을 사용하며 1980~1990년대 동안 미군의 주요 제식 소총으로 운용되었습니다.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "115",
                "sway": "200",
                "ergonomics": "47",
                "accuracy": "1.24 MOA",
                "velocity": "1092 m/s",
                "rpm": "800"
            }
        },
        {
            "id": "SMPZ_Weapon_M16A3",
            "name": "Colt M16A3",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "M16A3는 M16A2의 개량형 미국 돌격 소총으로, 1980년대 후반에 개발되어 주로 미 해군 특수부대(SEALs) 등에 지급되었습니다. M16A2와 달리 전자동(Full-Auto) 발사 모드를 탑재한 것이 특징입니다.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "108",
                "sway": "170",
                "ergonomics": "40",
                "accuracy": "1.82 MOA",
                "velocity": "1092 m/s",
                "rpm": "800"
            }
        },
        {
            "id": "SMPZ_Weapon_M4A1",
            "name": "Colt M4A1",
            "category": "돌격 소총",
            "image": "assets/m4a1.png",
            "images": [
                "assets/m4a1.png"
            ],
            "description": "Colt M4A1은 5.56x45mm NATO탄을 사용하는 AR-15를 기반으로 미국에서 개발된 돌격 소총(카빈) 입니다. 본디 일반 소총보다 가볍고 작으면서도 같은 탄약을 사용하는 소총이 필요한 차량 승무원들과 화력지원반을 위해 개발되었으나, US SOCOM이 특수작전에서도 사용하기 적합할 것이라 생각하여 곧바로 모든 하위 부대에게 M4A1을 보급하였고, 이어 미 육군 및 해병대도 사용하기 시작했습니다.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "115",
                "sway": "170",
                "ergonomics": "47",
                "accuracy": "1.82 MOA",
                "velocity": "910 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "SMPZ_Weapon_NL545",
            "name": "Custom Guns NL545",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "러시아의 커스텀 총기 부품 제조사인 Custom Guns사에서 AR-15 플랫폼을 기반으로 5.45x39mm AK 탄약을 사용하도록 특수 제작한 고정밀 커스텀 돌격소총입니다.",
            "manufacturer": "Custom Guns",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "102",
                "sway": "150",
                "ergonomics": "51",
                "accuracy": "1.38 MOA",
                "velocity": "889 m/s",
                "rpm": "800"
            }
        },
        {
            "id": "SMPZ_Weapon_SA58",
            "name": "DS Arms SA58",
            "category": "돌격 소총",
            "image": "assets/sa58.png",
            "images": [
                "assets/sa58.png"
            ],
            "description": "DS Arms사에서 전술적 운용을 위해 단축 및 개량한 FAL 기반 7.62x51mm OSW(Operational Specialist Weapon) 전투 소총입니다. 강력한 화력과 현대적 레일 확장성을 갖추었습니다.",
            "manufacturer": "DS Arms",
            "manufacturerLogo": "assets/dsarms-logo.png",
            "manufacturerUrl": "https://dsarms.com/",
            "stats": {
                "recoil": "180",
                "sway": "150",
                "ergonomics": "40",
                "accuracy": "0.90 MOA",
                "velocity": "1033 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_MDR_556",
            "name": "Desert Tech MDR 5.56",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "미국 Desert Tech LLC사에서 개발한 MDR 5.56x45mm 불펍 자동소총입니다. 불펍 특유의 컴팩트한 전장과 전방 탄피 배출 시스템을 갖추어 양손 모두에서 완벽한 사격이 가능합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "103",
                "ergonomics": "69",
                "accuracy": "1.36 MOA",
                "velocity": "1092 m/s",
                "rpm": "750"
            }
        },
        {
            "id": "SMPZ_Weapon_MDR_762",
            "name": "Desert Tech MDR 7.62",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "Desert Tech LLC사에서 개발한 MDR의 7.62x51mm 구경 버전입니다. 컴팩트한 불펍 플랫폼에서 강력한 풀사이즈 소총탄의 화력을 제공합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "103",
                "ergonomics": "69",
                "accuracy": "1.36 MOA",
                "velocity": "1008 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_F2000",
            "name": "FN F2000",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "벨기에 FN 헤르스탈(FN Herstal)에서 개발한 5.56x45mm 불펍 돌격 소총입니다. 미래지향적인 유선형 폴리머 바디와 전방 탄피 배출 튜브 시스템을 채택하여 양손잡이 사수 모두에게 최적화되었습니다.",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "recoil": "90",
                "sway": "55",
                "ergonomics": "65",
                "accuracy": "1.53 MOA",
                "velocity": "928 m/s",
                "rpm": "850"
            }
        },
        {
            "id": "SMPZ_Weapon_SCAR_H",
            "name": "FN SCAR-H",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "FN SCAR-H(특수작전부대용 전투 돌격 소총 - 중량형)는 7.62x51mm NATO 구경으로 미국 특수작전사령부(US SOCOM)의 엄격한 요구조건에 맞춰 채택된 고위력 전투 소총입니다.",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "recoil": "140",
                "sway": "120",
                "ergonomics": "54",
                "accuracy": "1.65 MOA",
                "velocity": "899 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_SCAR_L",
            "name": "FN SCAR-L",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "FN SCAR-L(특수작전부대용 전투 돌격 소총 - 경량형)은 5.56x45mm NATO 구경으로 뛰어난 반동 제어력과 모듈식 신뢰성을 자랑하는 돌격 소총입니다.",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "recoil": "115",
                "sway": "120",
                "ergonomics": "54",
                "accuracy": "1.97 MOA",
                "velocity": "910 m/s",
                "rpm": "650"
            }
        },
        {
            "id": "SMPZ_Weapon_HK337",
            "name": "HK 337",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "독일 헤클러 앤 코흐(Heckler & Koch)에서 .300 Blackout 탄약을 사용하도록 특수 설계한 소음 특화 돌격 소총입니다.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "120",
                "sway": "120",
                "ergonomics": "66",
                "accuracy": "2.37 MOA",
                "velocity": "1104 m/s",
                "rpm": "750"
            }
        },
        {
            "id": "SMPZ_Weapon_HK416A5",
            "name": "HK 416A5",
            "category": "돌격 소총",
            "image": "assets/hk416a5.png",
            "images": [
                "assets/hk416a5.png"
            ],
            "description": "HK416 A5는 헤클러 앤 코흐에서 제작한 5.56x45mm NATO 탄을 사용하는 HK416 돌격 소총의 추가 개량된 모델입니다. 소음기를 사용할 때 도구 없이 조절 가능한 가스 조절기를 탑재하였으며, 완벽한 양손 조작성과 높은 작동 신뢰성을 제공합니다.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "113",
                "sway": "135",
                "ergonomics": "64",
                "accuracy": "1.93 MOA",
                "velocity": "910 m/s",
                "rpm": "850"
            }
        },
        {
            "id": "SMPZ_Weapon_G36K",
            "name": "HK G36K",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "G36의 기동성을 향상시킨 단축형(Karabiner) 카빈 버전입니다. 5.56x45mm 저반동 탄약을 사용하며 특수부대 및 기계화 부대에 적합합니다.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "105",
                "sway": "105",
                "ergonomics": "60",
                "accuracy": "2.00 MOA",
                "velocity": "892 m/s",
                "rpm": "750"
            }
        },
        {
            "id": "SMPZ_Weapon_IWI_TavorX95",
            "name": "IWI Tavor X95",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "이스라엘 IWI(Israel Weapon Industries)에서 개발한 차세대 불펍 돌격 소총입니다. 인체공학적 설계와 뛰어난 기동성을 겸비했습니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "105",
                "sway": "55",
                "ergonomics": "65",
                "accuracy": "1.53 MOA",
                "velocity": "928 m/s",
                "rpm": "850"
            }
        },
        {
            "id": "SMPZ_Weapon_AK101",
            "name": "Kalashnikov AK-101",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "AK-101 5.56x45mm는 AK-74M 돌격 소총의 현대화 모델이자 5.56x45mm NATO 표준 탄약을 사용하도록 설계된 수출용 버전입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "100",
                "sway": "80",
                "ergonomics": "53",
                "accuracy": "1.72 MOA",
                "velocity": "910 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AK102",
            "name": "Kalashnikov AK-102",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "AK-102 5.56x45mm는 AK-74M의 현대화 단축형 버전이자 AK-101의 카빈 모델입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "115",
                "sway": "80",
                "ergonomics": "55",
                "accuracy": "1.93 MOA",
                "velocity": "855 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AK103",
            "name": "Kalashnikov AK-103",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "AK-103 7.62x39mm는 AK-74M 돌격 소총의 현대화 버전으로 7.62mm 탄약의 강력한 저지력과 접철식 폴리머 스톡을 갖추었습니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "100",
                "sway": "80",
                "ergonomics": "53",
                "accuracy": "2.13 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AK104",
            "name": "Kalashnikov AK-104",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "AK-104 7.62x39mm는 AK-103의 단축형 카빈 버전으로 근접전 및 차량 승무원용으로 최적화되었습니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "115",
                "sway": "80",
                "ergonomics": "55",
                "accuracy": "2.27 MOA",
                "velocity": "686 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AK105",
            "name": "Kalashnikov AK-105",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "AK-105 5.45x39mm는 AK-74M의 단축형 카빈 버전으로 접철식 스톡과 광학 마운트 레일을 기본 장착하고 있습니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "110",
                "sway": "80",
                "ergonomics": "55",
                "accuracy": "2.06 MOA",
                "velocity": "818 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AK12",
            "name": "Kalashnikov AK-12",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "러시아군의 차세대 보병 장비 체계인 라트니크(Ratnik) 프로그램을 위해 개발된 5.45x39mm 제식 소총입니다. 피카티니 레일과 신축식 스톡을 기본 탑재했습니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "105",
                "sway": "105",
                "ergonomics": "54",
                "accuracy": "1.58 MOA",
                "velocity": "933 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_AK15",
            "name": "Kalashnikov AK-15",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "AK-12 플랫폼에 7.62x39mm 탄약을 사용하도록 설계된 고화력 차세대 제식 돌격 소총입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "105",
                "sway": "105",
                "ergonomics": "54",
                "accuracy": "1.58 MOA",
                "velocity": "730 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_AK308",
            "name": "Kalashnikov AK-308",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "러시아 칼라시니코프 사에서 7.62x51mm(.308 Win) NATO 탄약을 사용하도록 개발한 최신 대구경 전투 소총입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "155",
                "sway": "85",
                "ergonomics": "52",
                "accuracy": "1.64 MOA",
                "velocity": "924 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_AK74",
            "name": "Kalashnikov AK-74",
            "category": "돌격 소총",
            "image": "assets/ak74.png",
            "images": [
                "assets/ak74.png"
            ],
            "description": "1970년 M. T. 칼라시니코프가 개발한 5.45x39mm 제식 돌격 소총으로, 고속 소구경 탄약을 도입하여 사격 정밀도와 반동 제어를 획기적으로 향상시켰습니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "113",
                "sway": "110",
                "ergonomics": "49",
                "accuracy": "1.99 MOA",
                "velocity": "880 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AK74M",
            "name": "Kalashnikov AK-74M",
            "category": "돌격 소총",
            "image": "assets/ak74.png",
            "images": [
                "assets/ak74.png"
            ],
            "description": "AK-74의 현대화 양산형 모델로, 검은색 유리섬유 강화 폴리머 부품과 접철식 개머리판, 사이드 스코프 레일을 표준 채택했습니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "110",
                "sway": "110",
                "ergonomics": "52",
                "accuracy": "1.89 MOA",
                "velocity": "880 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AK74N",
            "name": "Kalashnikov AK-74N",
            "category": "돌격 소총",
            "image": "assets/ak74.png",
            "images": [
                "assets/ak74.png"
            ],
            "description": "야간 투시 조준경 장착용 사이드 도브테일 레일이 기본 장착된 5.45x39mm AK-74 야간작전용 모델입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "113",
                "sway": "110",
                "ergonomics": "50",
                "accuracy": "1.96 MOA",
                "velocity": "880 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AKM",
            "name": "Kalashnikov AKM",
            "category": "돌격 소총",
            "image": "assets/akm.png",
            "images": [
                "assets/akm.png"
            ],
            "description": "1959년에 채택된 7.62x39mm 제식 돌격 소총으로, 프레스 가공 리시버와 총구 앙등 억제기를 도입하여 경량화와 명중률을 개선한 칼라시니코프의 명작입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "120",
                "sway": "115",
                "ergonomics": "47",
                "accuracy": "2.30 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AKMN",
            "name": "Kalashnikov AKMN",
            "category": "돌격 소총",
            "image": "assets/akmn.png",
            "images": [
                "assets/akmn.png"
            ],
            "description": "야간 투시 조준경 장착용 사이드 레일이 기본 장착된 7.62x39mm AKM 야간작전용 모델입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "120",
                "sway": "115",
                "ergonomics": "48",
                "accuracy": "2.27 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AKMS",
            "name": "Kalashnikov AKMS",
            "category": "돌격 소총",
            "image": "assets/akm.png",
            "images": [
                "assets/akm.png"
            ],
            "description": "AKM에 아래로 접히는 금속제 언더폴딩 개머리판을 장착하여 공수부대 및 특수부대용으로 개발된 모델입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "121",
                "sway": "115",
                "ergonomics": "46",
                "accuracy": "2.30 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AKMSN",
            "name": "Kalashnikov AKMSN",
            "category": "돌격 소총",
            "image": "assets/akm.png",
            "images": [
                "assets/akm.png"
            ],
            "description": "언더폴딩 개머리판과 야간 조준경 사이드 레일을 모두 갖춘 7.62x39mm 특수작전용 AKMS 모델입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "121",
                "sway": "115",
                "ergonomics": "75",
                "accuracy": "2.30 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_AKS74U",
            "name": "Kalashnikov AKS-74U",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "AK-74의 총열을 대폭 단축하고 특수 소염기를 장착한 단축형 돌격 소총으로, 전차병 및 특수작전용으로 운용되었습니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "85",
                "sway": "100",
                "ergonomics": "63",
                "accuracy": "3.44 MOA",
                "velocity": "748 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_AKS74UN",
            "name": "Kalashnikov AKS-74UN",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "야간 투시 조준경 장착용 사이드 레일이 추가된 AKS-74U의 야간작전용 단축형 돌격 소총입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "85",
                "sway": "100",
                "ergonomics": "63",
                "accuracy": "3.44 MOA",
                "velocity": "748 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_AS1",
            "name": "Kalashnikov AS-1",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "러시아 특수부대의 요구로 9x39mm 아음속 탄약을 사용하도록 특수 설계된 차세대 일체형 소음 돌격 소총입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "95",
                "sway": "50",
                "ergonomics": "50",
                "accuracy": "1.55 MOA",
                "velocity": "350 m/s",
                "rpm": "650"
            }
        },
        {
            "id": "SMPZ_Weapon_PDW",
            "name": "Knight's Armament Company PDW",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "미국 KAC사에서 개발한 초경량 개인방어화기(PDW)로, 뛰어난 휴대성과 강력한 근접 화력을 제공합니다.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "70",
                "sway": "108",
                "ergonomics": "68",
                "accuracy": "2.67 MOA",
                "velocity": "682 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_TX15",
            "name": "LoneStar TX-15 DML",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "TX15 Designated Marksman Light (DML)은 AR-15 플랫폼을 기반으로 제작된 고정밀 반자동 민간용 지정사수 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "93",
                "sway": "170",
                "ergonomics": "41",
                "accuracy": "1.41 MOA",
                "velocity": "1046 m/s",
                "rpm": "800"
            }
        },
        {
            "id": "SMPZ_Weapon_Masada",
            "name": "Magpul Masada",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "맥풀(Magpul)사에서 인체공학적 설계와 신속 총열 교환 시스템을 적용하여 개발한 5.56x45mm 차세대 적응형 모듈식 소총입니다.",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "105",
                "sway": "80",
                "ergonomics": "50",
                "accuracy": "1.78 MOA",
                "velocity": "937 m/s",
                "rpm": "800"
            }
        },
        {
            "id": "SMPZ_Weapon_Masada_300BLK",
            "name": "Magpul Masada .300 Blackout",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "맥풀 마사다 플랫폼에 .300 Blackout 탄약을 사용하도록 구성하여 강력한 저지력과 소음 사격 성능을 제공하는 모델입니다.",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "105",
                "sway": "80",
                "ergonomics": "50",
                "accuracy": "1.78 MOA",
                "velocity": "937 m/s",
                "rpm": "800"
            }
        },
        {
            "id": "SMPZ_Weapon_VPO101",
            "name": "Molot Arms VPO-101 Vepr-Hunter Carbine",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "러시아 몰로트(Molot) 사에서 RPK 경기관총의 견고한 리시버를 기반으로 제작한 7.62x51mm 민간 사냥용 반자동 카빈입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "200",
                "sway": "60",
                "ergonomics": "65",
                "accuracy": "2.23 MOA",
                "velocity": "756 m/s",
                "rpm": "450"
            }
        },
        {
            "id": "SMPZ_Weapon_VPO136",
            "name": "Molot Arms VPO-136 Vepr-KM",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "AKM 돌격 소총을 기반으로 몰로트 사에서 제작한 7.62x39mm 민간용 반자동 수렵 카빈입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "80",
                "sway": "100",
                "ergonomics": "51",
                "accuracy": "2.33 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_VPO209",
            "name": "Molot Arms VPO-209 Carbine",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "칼라시니코프 AKM을 기반으로 제작된 .366 TKM 구경의 패러독스 라이플링 민간 총기입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "90",
                "sway": "100",
                "ergonomics": "52",
                "accuracy": "2.23 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_JAKL",
            "name": "PSA JAKL",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "Palmetto State Armory(PSA)에서 독자적인 모놀리식 롱스트로크 가스 피스톤 시스템을 적용하여 개발한 최신 모듈식 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "131",
                "sway": "50",
                "ergonomics": "50",
                "accuracy": "2.68 MOA",
                "velocity": "828 m/s",
                "rpm": "750"
            }
        },
        {
            "id": "SMPZ_Weapon_Radian_Weapons_Model1",
            "name": "Radian Weapons Model 1",
            "category": "돌격 소총",
            "image": "assets/radianmodel1.png",
            "images": [
                "assets/radianmodel1.png"
            ],
            "description": "미국 Radian Weapons사에서 생산하는 최고급 AR-15 플랫폼 소총으로, 완벽한 완전 양손잡이(Ambidextrous) 제어 시스템과 극도의 가공 정밀도를 자랑합니다.",
            "manufacturer": "Radian Weapons",
            "manufacturerLogo": "assets/radian-logo.png",
            "manufacturerUrl": "https://www.radianweapons.com/",
            "stats": {
                "recoil": "102",
                "sway": "185",
                "ergonomics": "51",
                "accuracy": "1.66 MOA",
                "velocity": "983 m/s",
                "rpm": "850"
            }
        },
        {
            "id": "SMPZ_Weapon_Radian_Weapons_Model1_FA_Multicam",
            "name": "Radian Weapons Model 1 (Multicam)",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "The Radian Model 1, manufactured by Radian Weapons, is an AR-15 platform assault rifle chambered for 5.56x45 NATO ammunition. This rifle is positioned as a reliable, high-quality, and accurate system for professional and sporting use. Additionally, it features Radian's ADAC system, designed to allow faster and more intuitive operation of bolt hold-open manipulation. This model is equipped with a Talon selector featuring full-auto capability.",
            "manufacturer": "Radian Weapons",
            "manufacturerLogo": "assets/radian-logo.png",
            "manufacturerUrl": "https://www.radianweapons.com/",
            "stats": {
                "recoil": "102",
                "sway": "185",
                "ergonomics": "51",
                "accuracy": "1.66 MOA",
                "velocity": "983 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_RD704",
            "name": "Rifle Dynamics RD-704",
            "category": "돌격 소총",
            "image": "",
            "images": [],
            "description": "미국 Rifle Dynamics사에서 AK 플랫폼을 커스텀 빌드하여 극상의 밸런스와 반동 제어력을 갖춘 7.62x39mm 단축형 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "125",
                "sway": "85",
                "ergonomics": "52",
                "accuracy": "2.09 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_MCX",
            "name": "SIG MCX",
            "category": "돌격 소총",
            "image": "assets/mcx.png",
            "images": [
                "assets/mcx.png"
            ],
            "description": "SIG Sauer에서 설계·제작한 쇼트 스트로크 가스 피스톤 소총으로, .300 Blackout 탄약을 사용하여 소음 사격에 최적화된 성능을 발휘합니다.",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "recoil": "114",
                "sway": "120",
                "ergonomics": "62",
                "accuracy": "3.04 MOA",
                "velocity": "819 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_MCX_SPEAR",
            "name": "SIG MCX-SPEAR",
            "category": "돌격 소총",
            "image": "assets/mcxspear.png",
            "images": [
                "assets/mcxspear.png"
            ],
            "description": "미 육군 차세대 분대화기(NGSW)로 채택된 6.8x51mm(.277 FURY) 구경의 다구경 전투 소총(XM7)입니다. 압도적인 사거리와 관통력을 제공합니다.",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "recoil": "150",
                "sway": "113",
                "ergonomics": "58",
                "accuracy": "1.43 MOA",
                "velocity": "924 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_SR3M",
            "name": "SR-3M",
            "category": "돌격 소총",
            "image": "assets/sr3m.png",
            "images": [
                "assets/sr3m.png"
            ],
            "description": "러시아 TsNIITochMash에서 개발한 9x39mm 특수 돌격 소총으로, 기관단총에 필적하는 초소형 크기이면서도 강력한 방탄복 관통탄을 발사합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "70",
                "sway": "108",
                "ergonomics": "68",
                "accuracy": "5.02 MOA",
                "velocity": "295 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "SMPZ_Weapon_AUG_A3",
            "name": "Steyr AUG A3",
            "category": "돌격 소총",
            "image": "assets/auga3.png",
            "images": [
                "assets/auga3.png"
            ],
            "description": "오스트리아 Steyr사에서 개발한 불펍 돌격 소총의 현대화 개량형으로, 피카티니 레일 시스템을 탑재하여 다양한 전술 장비를 자유롭게 운용할 수 있습니다.",
            "manufacturer": "Steyr Mannlicher",
            "manufacturerLogo": "assets/steyr-logo.png",
            "manufacturerUrl": "https://www.steyr-arms.com/en/",
            "stats": {
                "recoil": "100",
                "sway": "40",
                "ergonomics": "81",
                "accuracy": "1.58 MOA",
                "velocity": "910 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_VSS",
            "name": "VSS Vintorez",
            "category": "돌격 소총",
            "image": "assets/vss.png",
            "images": [
                "assets/vss.png"
            ],
            "description": "소련 TsNIITochMash에서 개발한 9x39mm 일체형 소음 저격 소총(Vintorez)으로, 특수부대의 은밀 정밀 저격 임무에 사용됩니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "75",
                "sway": "101",
                "ergonomics": "61",
                "accuracy": "3.44 MOA",
                "velocity": "295 m/s",
                "rpm": "900"
            }
        }
    ],
    "저격 소총": [
        {
            "id": "SMPZ_Weapon_ATXC",
            "name": "Accuracy International AT-XC",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "영국 Accuracy International사의 차세대 정밀 볼트액션 저격 소총으로 극한의 환경에서도 완벽한 명중률을 보장합니다.",
            "manufacturer": "Accuracy International",
            "manufacturerLogo": "assets/ai-logo.png",
            "manufacturerUrl": "https://www.accuracyinternational.com/",
            "stats": {
                "recoil": "80",
                "sway": "100",
                "ergonomics": "50",
                "accuracy": "0.85 MOA",
                "velocity": "941 m/s",
                "rpm": "35"
            }
        },
        {
            "id": "SMPZ_Weapon_AXMC338",
            "name": "Accuracy International AXMC",
            "category": "저격 소총",
            "image": "assets/axmc.png",
            "images": [
                "assets/axmc.png"
            ],
            "description": "영국 Accuracy International사가 설계·제작한 다구경(Multi-Caliber) 볼트액션 저격 소총입니다. 신속한 총열 교체를 통해 .338 Lapua Magnum, .300 Win Mag, 7.62 NATO 등 다양한 탄약을 즉각 운용할 수 있습니다.",
            "manufacturer": "Accuracy International",
            "manufacturerLogo": "assets/ai-logo.png",
            "manufacturerUrl": "https://www.accuracyinternational.com/",
            "stats": {
                "recoil": "220",
                "sway": "150",
                "ergonomics": "33",
                "accuracy": "0.37 MOA",
                "velocity": "784 m/s",
                "rpm": "35"
            }
        },
        {
            "id": "SMPZ_Weapon_M107A1",
            "name": "Barrett M107A1",
            "category": "저격 소총",
            "image": "assets/m107a1.png",
            "images": [
                "assets/m107a1.png"
            ],
            "description": "Barrett Firearms에서 제작한 .50 BMG 반자동 대물 저격 소총입니다. 티타늄 소염기와 경량화 설계를 적용하여 소음기 장착이 가능합니다.",
            "manufacturer": "Barrett Firearms",
            "manufacturerLogo": "assets/barrett-logo.png",
            "manufacturerUrl": "https://barrett.net/",
            "stats": {
                "recoil": "212",
                "sway": "120",
                "ergonomics": "10",
                "accuracy": "0.80 MOA",
                "velocity": "758 m/s",
                "rpm": "300"
            }
        },
        {
            "id": "SMPZ_Weapon_XM109",
            "name": "Barrett XM109 AMPR",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "원래 Objective Sniper Weapon (OSW)으로 개발된 25x59mm 대구경 엄폐물 파괴 및 경장갑 관통용 정밀 대물 저격 화기(AMPR)입니다.",
            "manufacturer": "Barrett Firearms",
            "manufacturerLogo": "assets/barrett-logo.png",
            "manufacturerUrl": "https://barrett.net/",
            "stats": {
                "recoil": "270",
                "sway": "120",
                "ergonomics": "10",
                "accuracy": "0.40 MOA",
                "velocity": "765 m/s",
                "rpm": "300"
            }
        },
        {
            "id": "SMPZ_Weapon_M200",
            "name": "CheyTac M200 Intervention",
            "category": "저격 소총",
            "image": "assets/m200.png",
            "images": [
                "assets/m200.png"
            ],
            "description": "2,000m 이상의 초장거리 저격을 위해 개발된 .408 CheyTac 구경의 볼트액션 저격 시스템입니다.",
            "manufacturer": "CheyTac USA",
            "manufacturerLogo": "assets/cheytac-logo.png",
            "manufacturerUrl": "https://cheytac.com/",
            "stats": {
                "recoil": "250",
                "sway": "125",
                "ergonomics": "38",
                "accuracy": "0.30 MOA",
                "velocity": "765 m/s",
                "rpm": "35"
            }
        },
        {
            "id": "SMPZ_Weapon_HK417",
            "name": "HK 417",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "독일 헤클러 앤 코흐(Heckler & Koch)에서 제작한 7.62x51mm NATO 지정사수 및 전투 소총입니다.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "140",
                "sway": "200",
                "ergonomics": "45",
                "accuracy": "1.12 MOA",
                "velocity": "829 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_HKG28",
            "name": "HK G28",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "독일 연방군의 정밀 지정사수 소총(DMR) 요구에 맞춰 HK417을 기반으로 전장 환경에 맞게 고정밀화한 모델입니다.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "130",
                "sway": "200",
                "ergonomics": "46",
                "accuracy": "1.10 MOA",
                "velocity": "829 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_M110",
            "name": "Knight's Armament Company M110",
            "category": "저격 소총",
            "image": "assets/m110.png",
            "images": [
                "assets/m110.png"
            ],
            "description": "미 육군에 채택된 KAC사의 7.62x51mm 반자동 저격 소총 시스템(SASS)입니다.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "129",
                "sway": "98",
                "ergonomics": "52",
                "accuracy": "1.12 MOA",
                "velocity": "856 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_SR25",
            "name": "Knight's Armament Company SR-25",
            "category": "저격 소총",
            "image": "assets/sr25.png",
            "images": [
                "assets/sr25.png"
            ],
            "description": "유진 스토너가 1990년대 개발한 전설적인 7.62mm 반자동 정밀 저격 소총입니다.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "132",
                "sway": "102",
                "ergonomics": "50",
                "accuracy": "1.12 MOA",
                "velocity": "856 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_DVL10_338_Suppressed",
            "name": "Lobaev Arms DVL-10 .338 Saboteur",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "러시아 Lobaev Arms사에서 특수작전을 위해 제작한 고정밀 일체형 소음 볼트액션 저격 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "65",
                "sway": "10",
                "ergonomics": "75",
                "accuracy": "0.78 MOA",
                "velocity": "720 m/s",
                "rpm": "35"
            }
        },
        {
            "id": "SMPZ_Weapon_MXLR",
            "name": "Marlin MXLR",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "미국 마린(Marlin)사의 정밀 레버액션 수렵 및 장거리 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "175",
                "ergonomics": "75",
                "accuracy": "1.50 MOA",
                "velocity": "550 m/s",
                "rpm": "40"
            }
        },
        {
            "id": "SMPZ_Weapon_VPO215",
            "name": "Molot Arms VPO-215 Gornostay",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "몰로트 사에서 소구경 및 중형 수렵용으로 제작한 경량 볼트액션 카빈입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "107",
                "ergonomics": "67",
                "accuracy": "1.55 MOA",
                "velocity": "975 m/s",
                "rpm": "35"
            }
        },
        {
            "id": "SMPZ_Weapon_Mosin",
            "name": "Mosin Nagant",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "1891년 채택된 전설적인 3선 소총으로, 사이드 마운트 광학 조준경을 장착한 7.62x54mmR 저격 버전입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "75",
                "sway": "30",
                "ergonomics": "61",
                "accuracy": "1.37 MOA",
                "velocity": "946 m/s",
                "rpm": "30"
            }
        },
        {
            "id": "SMPZ_Weapon_MSR",
            "name": "Remington MSR",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "미 특수작전사령부(US SOCOM)의 정밀 저격소총(PSR) 사업을 위해 개발된 모듈식 장거리 저격 시스템입니다.",
            "manufacturer": "Remington Arms",
            "manufacturerLogo": "assets/remington-logo.png",
            "manufacturerUrl": "https://www.remarms.com/",
            "stats": {
                "recoil": "160",
                "sway": "140",
                "ergonomics": "50",
                "accuracy": "0.58 MOA",
                "velocity": "758 m/s",
                "rpm": "35"
            }
        },
        {
            "id": "SMPZ_Weapon_M700",
            "name": "Remington Model 700",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "미국 레밍턴사의 대표적인 정밀 볼트액션 소총으로 수많은 군/경 저격총의 기반이 되었습니다.",
            "manufacturer": "Remington Arms",
            "manufacturerLogo": "assets/remington-logo.png",
            "manufacturerUrl": "https://www.remarms.com/",
            "stats": {
                "recoil": "150",
                "sway": "100",
                "ergonomics": "65",
                "accuracy": "0.79 MOA",
                "velocity": "895 m/s",
                "rpm": "35"
            }
        },
        {
            "id": "SMPZ_Weapon_M700_MODX",
            "name": "Remington Model 700 MOD*X GEN 3",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "레밍턴 700 액션에 MOD*X Gen 3 모듈식 알루미늄 섀시 시스템을 결합한 현대식 고정밀 전술 저격총입니다.",
            "manufacturer": "Remington Arms",
            "manufacturerLogo": "assets/remington-logo.png",
            "manufacturerUrl": "https://www.remarms.com/",
            "stats": {
                "recoil": "145",
                "sway": "50",
                "ergonomics": "55",
                "accuracy": "0.79 MOA",
                "velocity": "895 m/s",
                "rpm": "35"
            }
        },
        {
            "id": "SMPZ_Weapon_RSASS",
            "name": "Remington R11 RSASS",
            "category": "저격 소총",
            "image": "assets/rsass.png",
            "images": [
                "assets/rsass.png"
            ],
            "description": "레밍턴 사와 JP 엔터프라이즈가 공동 개발한 7.62mm 고정밀 반자동 저격 소총 시스템입니다.",
            "manufacturer": "Remington Arms",
            "manufacturerLogo": "assets/remington-logo.png",
            "manufacturerUrl": "https://www.remarms.com/",
            "stats": {
                "recoil": "130",
                "sway": "120",
                "ergonomics": "49",
                "accuracy": "0.77 MOA",
                "velocity": "873 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_SV98",
            "name": "SV-98",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "러시아 이즈마쉬(Izhmash)사에서 개발한 7.62x54mmR 볼트액션 제식 저격 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "55",
                "ergonomics": "45",
                "accuracy": "0.58 MOA",
                "velocity": "929 m/s",
                "rpm": "35"
            }
        },
        {
            "id": "SMPZ_Weapon_SVD",
            "name": "SVD Dragunov",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "소련군 분대 지원을 위해 개발된 전설적인 7.62x54mmR 반자동 지정사수 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "150",
                "sway": "100",
                "ergonomics": "40",
                "accuracy": "1.03 MOA",
                "velocity": "899 m/s",
                "rpm": "400"
            }
        },
        {
            "id": "SMPZ_Weapon_SVDS",
            "name": "SVDS Dragunov",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "공수부대 및 특수작전용으로 접철식 관형 금속 개머리판과 강화 총열을 장착한 SVD의 현대화 모델입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "148",
                "sway": "100",
                "ergonomics": "42",
                "accuracy": "1.03 MOA",
                "velocity": "899 m/s",
                "rpm": "400"
            }
        },
        {
            "id": "SMPZ_Weapon_SVDS_Zryachiy",
            "name": "SVDS Zryachiy",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "타르코프 등대지기 즈랴치(Zryachiy)의 커스텀 세팅을 반영한 특수 튜닝 SVDS 지정사수 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "148",
                "sway": "100",
                "ergonomics": "42",
                "accuracy": "1.03 MOA",
                "velocity": "899 m/s",
                "rpm": "400"
            }
        },
        {
            "id": "SMPZ_Weapon_MK18Mjolnir338",
            "name": "SWORD International Mk-18 Mjölnir",
            "category": "저격 소총",
            "image": "assets/mk18.png",
            "images": [
                "assets/mk18.png"
            ],
            "description": "SWORD International사에서 .338 Lapua Magnum 탄을 반자동으로 안정 사격할 수 있도록 설계한 궁극의 고화력 저격 소총입니다.",
            "manufacturer": "SWORD International",
            "manufacturerLogo": "assets/sword-logo.png",
            "manufacturerUrl": "https://sword-int.com/",
            "stats": {
                "recoil": "235",
                "sway": "150",
                "ergonomics": "45",
                "accuracy": "0.57 MOA",
                "velocity": "758 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_TRG_M10",
            "name": "Sako TRG M10",
            "category": "저격 소총",
            "image": "assets/trgm10.png",
            "images": [
                "assets/trgm10.png"
            ],
            "description": "핀란드 Sako사에서 개발한 차세대 다구경 볼트액션 저격 소총입니다.",
            "manufacturer": "Sako",
            "manufacturerLogo": "assets/sako-logo.png",
            "manufacturerUrl": "https://www.sako.global/",
            "stats": {
                "recoil": "190",
                "sway": "130",
                "ergonomics": "41",
                "accuracy": "0.46 MOA",
                "velocity": "784 m/s",
                "rpm": "35"
            }
        },
        {
            "id": "SMPZ_Weapon_SKS",
            "name": "Simonov SKS",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "세르게이 시모노프가 설계한 소련의 7.62x39mm 반자동 카빈 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "80",
                "ergonomics": "61",
                "accuracy": "16.90 MOA",
                "velocity": "803 m/s",
                "rpm": "450"
            }
        },
        {
            "id": "SMPZ_Weapon_M1A",
            "name": "Springfield Armory M1A",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "미 군용 M14 소총을 민간 및 매치 정밀용으로 재현한 스프링필드 아머리의 7.62mm 반자동 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "120",
                "sway": "105",
                "ergonomics": "44",
                "accuracy": "1.11 MOA",
                "velocity": "873 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_AK50",
            "name": "The AK Guy AK-50",
            "category": "저격 소총",
            "image": "assets/ak50.png",
            "images": [
                "assets/ak50.png"
            ],
            "description": "브랜든 헤레라(The AK Guy)가 칼라시니코프 작동 구조를 .50 BMG 대구경 대물 탄약에 맞게 거대화하여 완성한 반자동 대물 저격 소총입니다.",
            "manufacturer": "The AK Guy",
            "manufacturerLogo": "assets/akguy-logo.png",
            "manufacturerUrl": "https://theakguy.com/",
            "stats": {
                "recoil": "275",
                "sway": "120",
                "ergonomics": "40",
                "accuracy": "0.31 MOA",
                "velocity": "736 m/s",
                "rpm": "300"
            }
        },
        {
            "id": "SMPZ_Weapon_AVT40",
            "name": "Tokarev AVT-40",
            "category": "저격 소총",
            "image": "",
            "images": [],
            "description": "화력 부족을 메우기 위해 자동 사격(Full-Auto) 기능을 추가한 토카레프의 자동 소총 개량형입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "102",
                "sway": "102",
                "ergonomics": "58",
                "accuracy": "6.88 MOA",
                "velocity": "1058 m/s",
                "rpm": "750"
            }
        },
        {
            "id": "SMPZ_Weapon_SVT40",
            "name": "Tokarev SVT-40",
            "category": "저격 소총",
            "image": "assets/svt.png",
            "images": [
                "assets/svt.png"
            ],
            "description": "제2차 세계대전 초기 소련군이 운용한 7.62x54mmR 반자동 소총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "102",
                "sway": "102",
                "ergonomics": "61",
                "accuracy": "1.72 MOA",
                "velocity": "1058 m/s",
                "rpm": "450"
            }
        }
    ],
    "기관단총": [
        {
            "id": "SMPZ_Weapon_MP9",
            "name": "B&T MP9",
            "category": "기관단총",
            "image": "",
            "images": [],
            "description": "스위스 Brügger & Thomet사에서 슈타이어 TMP를 개량하여 제작한 9x19mm 초소형 기관단총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "50",
                "sway": "50",
                "ergonomics": "90",
                "accuracy": "7.22 MOA",
                "velocity": "441 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "SMPZ_Weapon_P90",
            "name": "FN P90",
            "category": "기관단총",
            "image": "assets/p90.png",
            "images": [
                "assets/p90.png"
            ],
            "description": "벨기에 FN 헤르스탈에서 개발한 혁신적인 5.7x28mm 불펍 개인방어화기(PDW)로 50발 수평 탄창을 사용합니다.",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "recoil": "47",
                "sway": "50",
                "ergonomics": "78",
                "accuracy": "3.75 MOA",
                "velocity": "638 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "SMPZ_Weapon_MP5",
            "name": "HK MP5",
            "category": "기관단총",
            "image": "",
            "images": [],
            "description": "독일 헤클러 앤 코흐사의 롤러 지연식 블로우백 9x19mm 기관단총으로, 전 세계 대테러 부대의 표준입니다.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "80",
                "sway": "100",
                "ergonomics": "55",
                "accuracy": "1.50 MOA",
                "velocity": "418 m/s",
                "rpm": "800"
            }
        },
        {
            "id": "SMPZ_Weapon_MP7A1",
            "name": "HK MP7A1",
            "category": "기관단총",
            "image": "assets/mp7a1.png",
            "images": [
                "assets/mp7a1.png"
            ],
            "description": "독일 헤클러 앤 코흐사의 4.6x30mm 방탄복 관통 전용 초소형 개인방어화기(PDW)입니다.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "45",
                "sway": "50",
                "ergonomics": "78",
                "accuracy": "0.83 MOA",
                "velocity": "788 m/s",
                "rpm": "950"
            }
        },
        {
            "id": "SMPZ_Weapon_MP7A2",
            "name": "HK MP7A2",
            "category": "기관단총",
            "image": "",
            "images": [],
            "description": "전방 접철식 손잡이 대신 하부 피카티니 레일을 장착하여 전술 확장성을 극대화한 MP7의 개량형입니다.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "60",
                "sway": "60",
                "ergonomics": "78",
                "accuracy": "0.83 MOA",
                "velocity": "788 m/s",
                "rpm": "950"
            }
        },
        {
            "id": "SMPZ_Weapon_PP19",
            "name": "PP-19-01 Vityaz",
            "category": "기관단총",
            "image": "",
            "images": [],
            "description": "러시아 특수부대 비탸지(Vityaz)의 요구로 AK-74 구조를 기반으로 제작된 9x19mm 기관단총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "65",
                "sway": "110",
                "ergonomics": "57",
                "accuracy": "4.47 MOA",
                "velocity": "407 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_PPSH41",
            "name": "PPSh-41",
            "category": "기관단총",
            "image": "assets/ppsh41.png",
            "images": [
                "assets/ppsh41.png"
            ],
            "description": "제2차 세계대전 당시 소련군을 상징하는 7.62x25mm 대구경 71발 드럼 탄창 기관단총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "40",
                "sway": "50",
                "ergonomics": "70",
                "accuracy": "0.72 MOA",
                "velocity": "802 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "SMPZ_Weapon_MPX",
            "name": "SIG MPX",
            "category": "기관단총",
            "image": "assets/mpx.png",
            "images": [
                "assets/mpx.png"
            ],
            "description": "AR-15의 친숙한 조작계와 쇼트 스트로크 가스 피스톤을 결합한 SIG Sauer의 차세대 9mm 기관단총입니다.",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "recoil": "95",
                "sway": "120",
                "ergonomics": "72",
                "accuracy": "5.00 MOA",
                "velocity": "407 m/s",
                "rpm": "850"
            }
        },
        {
            "id": "SMPZ_Weapon_SR2M",
            "name": "SR-2M Veresk",
            "category": "기관단총",
            "image": "",
            "images": [],
            "description": "러시아 연방보안국(FSB)을 위해 강력한 9x21mm 규르자 탄을 발사하도록 특수 설계된 고관통 기관단총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "50",
                "sway": "50",
                "ergonomics": "85",
                "accuracy": "7.83 MOA",
                "velocity": "870 m/s",
                "rpm": "950"
            }
        },
        {
            "id": "SMPZ_Weapon_STM9",
            "name": "Soyuz-TM STM-9 Gen.2 Carbine",
            "category": "기관단총",
            "image": "",
            "images": [],
            "description": "러시아 소유즈-TM(Soyuz-TM)사에서 경기용 및 전술용으로 AR-15 플랫폼에 글록 탄창을 호환시켜 제작한 9mm 카빈입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "60",
                "sway": "150",
                "ergonomics": "45",
                "accuracy": "3.78 MOA",
                "velocity": "426 m/s",
                "rpm": "800"
            }
        },
        {
            "id": "SMPZ_Weapon_KRISS_Vector_Black",
            "name": "TDI KRISS Vector Gen 2 Black",
            "category": "기관단총",
            "image": "",
            "images": [],
            "description": "Chambered in 9x19mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "55",
                "sway": "95",
                "ergonomics": "76",
                "accuracy": "0.65 MOA",
                "velocity": "437 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "SMPZ_Weapon_KRISS_Vector_FDE",
            "name": "TDI KRISS Vector Gen 2 FDE",
            "category": "기관단총",
            "image": "",
            "images": [],
            "description": "Chambered in 9x19mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "55",
                "sway": "95",
                "ergonomics": "76",
                "accuracy": "0.65 MOA",
                "velocity": "437 m/s",
                "rpm": "600"
            }
        }
    ],
    "산탄총": [
        {
            "id": "SMPZ_Weapon_AA12_Gen1",
            "name": "AA-12 Gen 1",
            "category": "산탄총",
            "image": "assets/aa12.png",
            "images": [
                "assets/aa12.png"
            ],
            "description": "군용 및 특수작전을 위해 제작된 12게이지 완전 자동 전투 산탄총의 1세대 모델입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "95",
                "sway": "100",
                "ergonomics": "51",
                "accuracy": "22.35 MOA",
                "velocity": "519 m/s",
                "rpm": "300"
            }
        },
        {
            "id": "SMPZ_Weapon_AA12_Gen2",
            "name": "AA-12 Gen 2",
            "category": "산탄총",
            "image": "assets/aa12gen2.png",
            "images": [
                "assets/aa12gen2.png"
            ],
            "description": "내부 완충 스프링과 부품 내구성을 향상시킨 12게이지 완전 자동 전투 산탄총의 2세대 개량형입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "90",
                "sway": "100",
                "ergonomics": "53",
                "accuracy": "22.35 MOA",
                "velocity": "519 m/s",
                "rpm": "300"
            }
        },
        {
            "id": "SMPZ_Weapon_MP133",
            "name": "IzhMekh MP-133",
            "category": "산탄총",
            "image": "",
            "images": [],
            "description": "러시아 이즈메쉬에서 제작한 활강 다연발 12게이지 펌프액션 산탄총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "182",
                "ergonomics": "58",
                "accuracy": "21.31 MOA",
                "velocity": "505 m/s",
                "rpm": "60"
            }
        },
        {
            "id": "SMPZ_Weapon_MP155",
            "name": "IzhMekh MP-155",
            "category": "산탄총",
            "image": "",
            "images": [],
            "description": "러시아 이즈메쉬에서 제작한 신뢰성 높은 12게이지 가스압 작동식 반자동 산탄총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "210",
                "ergonomics": "57",
                "accuracy": "21.31 MOA",
                "velocity": "404 m/s",
                "rpm": "350"
            }
        },
        {
            "id": "SMPZ_Weapon_MP18",
            "name": "IzhMekh MP-18",
            "category": "산탄총",
            "image": "",
            "images": [],
            "description": "러시아의 전통적인 단발식 중절형(Break-action) 단총열 수렵용 산탄총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "175",
                "ergonomics": "60",
                "accuracy": "3.09 MOA",
                "velocity": "1075 m/s",
                "rpm": "30"
            }
        },
        {
            "id": "SMPZ_Weapon_MP43",
            "name": "IzhMekh MP-43",
            "category": "산탄총",
            "image": "assets/mp43.png",
            "images": [
                "assets/mp43.png"
            ],
            "description": "러시아의 견고하고 신뢰성 높은 전통적인 수평쌍대(Side-by-Side) 더블배럴 산탄총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "175",
                "ergonomics": "54",
                "accuracy": "13.06 MOA",
                "velocity": "505 m/s",
                "rpm": "350"
            }
        },
        {
            "id": "SMPZ_Weapon_M590A1",
            "name": "Mossberg 590A1",
            "category": "산탄총",
            "image": "",
            "images": [],
            "description": "미 군용 규격(Mil-Spec 3443E)을 통과한 중화기급 헤비월 총열과 금속 방아쇠울을 갖춘 택티컬 펌프액션 산탄총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "100",
                "sway": "182",
                "ergonomics": "59",
                "accuracy": "34.38 MOA",
                "velocity": "505 m/s",
                "rpm": "70"
            }
        },
        {
            "id": "SMPZ_Weapon_Saiga12",
            "name": "Saiga 12K ver.10",
            "category": "산탄총",
            "image": "",
            "images": [],
            "description": "AK 플랫폼을 기반으로 제작된 러시아 이즈마쉬의 12게이지 반자동 박스 탄창식 전투 산탄총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "150",
                "sway": "100",
                "ergonomics": "55",
                "accuracy": "20.63 MOA",
                "velocity": "404 m/s",
                "rpm": "350"
            }
        }
    ],
    "권총": [
        {
            "id": "SMPZ_Weapon_Beretta_92FS",
            "name": "Beretta 92FS",
            "category": "권총",
            "image": "",
            "images": [],
            "description": "미군 제식 권총(M9)으로 오랜 기간 활약한 이탈리아 베레타사의 명품 9x19mm 반자동 권총입니다.",
            "manufacturer": "Beretta",
            "manufacturerLogo": "assets/beretta-logo.png",
            "manufacturerUrl": "https://www.beretta.com/",
            "stats": {
                "recoil": "100",
                "sway": "90",
                "ergonomics": "80",
                "accuracy": "10.28 MOA",
                "velocity": "380 m/s",
                "rpm": "375"
            }
        },
        {
            "id": "SMPZ_Weapon_Beretta_M9A3",
            "name": "Beretta M9A3",
            "category": "권총",
            "image": "",
            "images": [],
            "description": "미군 모듈식 권총 사업을 위해 베레타 92FS를 현대 전술 규격(3면 레일, 나사산 총열)으로 대폭 개량한 모델입니다.",
            "manufacturer": "Beretta",
            "manufacturerLogo": "assets/beretta-logo.png",
            "manufacturerUrl": "https://www.beretta.com/",
            "stats": {
                "recoil": "100",
                "sway": "90",
                "ergonomics": "81",
                "accuracy": "10.28 MOA",
                "velocity": "380 m/s",
                "rpm": "375"
            }
        },
        {
            "id": "SMPZ_Weapon_M1911A1",
            "name": "Colt M1911A1",
            "category": "권총",
            "image": "",
            "images": [],
            "description": "미국 존 브라우닝이 설계한 100년 전통의 .45 ACP 대구경 제식 권총입니다.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "100",
                "sway": "70",
                "ergonomics": "75",
                "accuracy": "1.50 MOA",
                "velocity": "273 m/s",
                "rpm": "375"
            }
        },
        {
            "id": "SMPZ_Weapon_M45A1",
            "name": "Colt M45A1",
            "category": "권총",
            "image": "",
            "images": [],
            "description": "미 해병대 특수작전사령부(MARSOC)를 위해 현대 전술 레일과 일체형 프레임으로 제작된 최신형 1911 권총입니다.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "100",
                "sway": "70",
                "ergonomics": "75",
                "accuracy": "1.50 MOA",
                "velocity": "273 m/s",
                "rpm": "375"
            }
        },
        {
            "id": "SMPZ_Weapon_FiveSevenMK2",
            "name": "FN Five-seveN MK2",
            "category": "권총",
            "image": "",
            "images": [],
            "description": "5.7x28mm 고속 탄약을 사용하여 뛰어난 탄도 직선성과 방탄복 관통력을 자랑하는 벨기에 FN사의 초정밀 전술 권총입니다.",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "recoil": "50",
                "sway": "30",
                "ergonomics": "89",
                "accuracy": "7.50 MOA",
                "velocity": "750 m/s",
                "rpm": "400"
            }
        },
        {
            "id": "SMPZ_Weapon_Glock17",
            "name": "Glock 17",
            "category": "권총",
            "image": "",
            "images": [],
            "description": "오스트리아 글록(Glock)사의 시대를 바꾼 9x19mm 폴리머 프레임 스트라이커 격발식 제식 권총입니다.",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "recoil": "80",
                "sway": "50",
                "ergonomics": "88",
                "accuracy": "11.69 MOA",
                "velocity": "380 m/s",
                "rpm": "400"
            }
        },
        {
            "id": "SMPZ_Weapon_Glock18C",
            "name": "Glock 18C",
            "category": "권총",
            "image": "",
            "images": [],
            "description": "경찰 및 특수부대를 위해 분당 1,100발의 완전 자동(Full-Auto) 사격 기능을 탑재한 머즐 컴펜세이터 일체형 기관권총입니다.",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "recoil": "80",
                "sway": "50",
                "ergonomics": "88",
                "accuracy": "12.03 MOA",
                "velocity": "380 m/s",
                "rpm": "1100"
            }
        },
        {
            "id": "SMPZ_Weapon_UCP",
            "name": "HK UCP",
            "category": "권총",
            "image": "",
            "images": [],
            "description": "독일 헤클러 앤 코흐사에서 MP7과 동일한 4.6x30mm 탄약을 사용하도록 개발했던 범용 전투 권총(Ultimate Combat Pistol) 프로토타입입니다.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "95",
                "sway": "90",
                "ergonomics": "82",
                "accuracy": "9.63 MOA",
                "velocity": "750 m/s",
                "rpm": "400"
            }
        },
        {
            "id": "SMPZ_Weapon_USP",
            "name": "HK USP",
            "category": "권총",
            "image": "assets/usp.png",
            "images": [
                "assets/usp.png"
            ],
            "description": "독일 헤클러 앤 코흐사에서 제작한 전설적인 범용 자동장전 권총(Universelle Selbstladepistole)입니다.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "100",
                "sway": "90",
                "ergonomics": "89",
                "accuracy": "9.63 MOA",
                "velocity": "260 m/s",
                "rpm": "375"
            }
        },
        {
            "id": "SMPZ_Weapon_DeagleL5_357",
            "name": "Magnum Research Desert Eagle L5",
            "category": "권총",
            "image": "assets/deaglel5_50ae.png",
            "images": [
                "assets/deaglel5_50ae.png",
                "assets/deaglel5_357.png"
            ],
            "description": "매그넘 리서치사의 경량화 알루미늄 프레임과 컴펜세이터를 장착한 최신 5인치 매그넘 권총입니다.",
            "manufacturer": "Magnum Research",
            "manufacturerLogo": "assets/magnumresearch-logo.png",
            "manufacturerUrl": "https://www.magnumresearch.com/",
            "stats": {
                "recoil": "118",
                "sway": "117",
                "ergonomics": "87",
                "accuracy": "8.94 MOA",
                "velocity": "440 m/s",
                "rpm": "375"
            }
        },
        {
            "id": "SMPZ_Weapon_DeagleL6_50AE",
            "name": "Magnum Research Desert Eagle L6",
            "category": "권총",
            "image": "assets/deaglel6.png",
            "images": [
                "assets/deaglel6.png"
            ],
            "description": "매그넘 리서치사의 경량 알루미늄 프레임과 총구 컴펜세이터를 장착한 .50 AE 최신 매그넘 권총입니다.",
            "manufacturer": "Magnum Research",
            "manufacturerLogo": "assets/magnumresearch-logo.png",
            "manufacturerUrl": "https://www.magnumresearch.com/",
            "stats": {
                "recoil": "120",
                "sway": "117",
                "ergonomics": "85",
                "accuracy": "10.31 MOA",
                "velocity": "750 m/s",
                "rpm": "375"
            }
        },
        {
            "id": "SMPZ_Weapon_SR1MP",
            "name": "Serdyukov SR-1MP Gyurza",
            "category": "권총",
            "image": "assets/sr1mp.png",
            "images": [
                "assets/sr1mp.png"
            ],
            "description": "러시아 특수부대를 위해 강력한 9x21mm 탄을 사용하도록 설계된 일명 '규르자(독사)' 전술 권총입니다.",
            "manufacturer": "TsNIITochMash",
            "manufacturerLogo": "assets/TsNIITochMash-logo.png",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "80",
                "sway": "80",
                "ergonomics": "85",
                "accuracy": "7.49 MOA",
                "velocity": "750 m/s",
                "rpm": "375"
            }
        },
        {
            "id": "SMPZ_Weapon_Staccato",
            "name": "Staccato XC",
            "category": "권총",
            "image": "",
            "images": [],
            "description": "2011 플랫폼 기반으로 일체형 듀라텍 컴펜세이터와 최고의 사격 명중률을 제공하는 최상급 플래그십 전술 권총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "60",
                "sway": "90",
                "ergonomics": "89",
                "accuracy": "7.60 MOA",
                "velocity": "380 m/s",
                "rpm": "400"
            }
        },
        {
            "id": "SMPZ_Weapon_TT33",
            "name": "TT-33",
            "category": "권총",
            "image": "",
            "images": [],
            "description": "제2차 세계대전 당시 소련군의 7.62x25mm 제식 토카레프 권총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "80",
                "sway": "80",
                "ergonomics": "75",
                "accuracy": "1.50 MOA",
                "velocity": "750 m/s",
                "rpm": "375"
            }
        }
    ],
    "경기관총": [
        {
            "id": "SMPZ_Weapon_RPD",
            "name": "Degtyarev RPD",
            "category": "경기관총",
            "image": "",
            "images": [],
            "description": "소련군이 제2차 대전 말기 개발한 7.62x39mm 탄띠 급탄식 분대지원화기입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "80",
                "sway": "150",
                "ergonomics": "69",
                "accuracy": "1.31 MOA",
                "velocity": "876 m/s",
                "rpm": "650"
            }
        },
        {
            "id": "SMPZ_Weapon_RPDN",
            "name": "Degtyarev RPDN",
            "category": "경기관총",
            "image": "",
            "images": [],
            "description": "야간 투시 조준경 장착용 사이드 마운트가 적용된 덱탸료프 7.62x39mm 경기관총입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "80",
                "sway": "150",
                "ergonomics": "70",
                "accuracy": "1.31 MOA",
                "velocity": "876 m/s",
                "rpm": "650"
            }
        },
        {
            "id": "SMPZ_Weapon_PKM",
            "name": "Kalashnikov PKM",
            "category": "경기관총",
            "image": "assets/pkm.png",
            "images": [
                "assets/pkm.png"
            ],
            "description": "1969년 채택된 전 세계에서 가장 신뢰받는 7.62x54mmR 다목적 제식 기관총입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "191",
                "sway": "200",
                "ergonomics": "13",
                "accuracy": "1.08 MOA",
                "velocity": "1161 m/s",
                "rpm": "650"
            }
        },
        {
            "id": "SMPZ_Weapon_PKP",
            "name": "Kalashnikov PKP",
            "category": "경기관총",
            "image": "",
            "images": [],
            "description": "강제 공랭식 헤비 배럴을 탑재하여 총열 교환 없이도 지속적인 화력 투사가 가능한 러시아군의 현대식 페체네그(Pecheneg) 기관총입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "191",
                "sway": "200",
                "ergonomics": "13",
                "accuracy": "1.01 MOA",
                "velocity": "1161 m/s",
                "rpm": "650"
            }
        },
        {
            "id": "SMPZ_Weapon_RPK16",
            "name": "Kalashnikov RPK-16",
            "category": "경기관총",
            "image": "",
            "images": [],
            "description": "AK-12를 기반으로 개발된 5.45x39mm 최신 분대지원화기 겸 분대용 자동소총입니다.",
            "manufacturer": "Kalashnikov Concern",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://kalashnikovgroup.ru/en/",
            "stats": {
                "recoil": "105",
                "sway": "150",
                "ergonomics": "65",
                "accuracy": "1.65 MOA",
                "velocity": "835 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "SMPZ_Weapon_M60E6",
            "name": "U.S Ordnance M60E6",
            "category": "경기관총",
            "image": "",
            "images": [],
            "description": "경량화된 알루미늄 리시버와 인체공학적 레일 시스템을 탑재한 M60의 6세대 최신형 개량 모델입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "195",
                "sway": "150",
                "ergonomics": "30",
                "accuracy": "1.21 MOA",
                "velocity": "966 m/s",
                "rpm": "550"
            }
        }
    ],
    "유탄 발사기": [
        {
            "id": "SMPZ_Weapon_M32A1",
            "name": "Milkor M32A1 MSGL",
            "category": "유탄 발사기",
            "image": "assets/m32.png",
            "images": [
                "assets/m32.png"
            ],
            "description": "미 해병대에 제식 채택된 40mm 6연발 회전식 리볼버 다연발 유탄발사기입니다.",
            "manufacturer": "Milkor USA",
            "manufacturerLogo": "assets/milkor-logo.png",
            "manufacturerUrl": "https://milkorusa.com/",
            "stats": {
                "recoil": "500",
                "sway": "200",
                "ergonomics": "51",
                "accuracy": "16.50 MOA",
                "velocity": "750 m/s",
                "rpm": "60"
            }
        }
    ]
};

// 기어 데이터 (자동 동기화 빌드)
const gearData = {
    "헬멧": [
        {
            "id": "SMPZ_Helmet_6B47_EMR",
            "name": "6B47 Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "러시아군 라트니크(Ratnik) 체계의 제식 아라미드 복합소재 방탄 헬멧입니다. 가벼운 무게와 우수한 파편 방호력을 제공합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "55",
                "hitpoints": "100",
                "weight": "1.3 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_Altyn_Green",
            "name": "Altyn",
            "category": "헬멧",
            "image": "assets/altyn.png",
            "images": [
                "assets/altyn.png",
                "assets/altyn_2.png"
            ],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "60",
                "hitpoints": "130",
                "weight": "2.5 kg"
            }
        },
        {
            "id": "SMPZ_Visor_Altyn_Green",
            "name": "Altyn Helmet Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "60",
                "hitpoints": "100",
                "weight": "1.4 kg"
            }
        },
        {
            "id": "SMPZ_HelmetAventail_BNTI_LShZ_2DTM",
            "name": "BNTI LShZ-2DTM Aventail",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "15",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "10",
                "weight": "0.1 kg"
            }
        },
        {
            "id": "SMPZ_HelmetPlate_BNTI_LShZ_2DTM",
            "name": "BNTI LShZ-2DTM Cover",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "10",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "10",
                "weight": "0.1 kg"
            }
        },
        {
            "id": "SMPZ_Visor_BNTI_LShZ_2DTM",
            "name": "BNTI LShZ-2DTM Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "30",
                "hitpoints": "100",
                "weight": "1.0 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_BNTI_LShZ_2DTM_Black",
            "name": "BNTI LShZ-2DTM Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "75",
                "hitpoints": "120",
                "weight": "3.4 kg"
            }
        },
        {
            "id": "SMPZ_Mandible_CryePrecision_AirFrame_Chops_Black",
            "name": "Crye Precision AirFrame Chops",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Crye Precision",
            "manufacturerLogo": "assets/crye-logo.png",
            "manufacturerUrl": "https://www.cryeprecision.com/",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "15",
                "hitpoints": "100",
                "weight": "1.4 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_CryePrecision_AirFrame_Black",
            "name": "Crye Precision AirFrame Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "혁신적인 2피스 쉘 통풍 구조를 채택하여 머리의 열기를 배출하면서도 파편과 권총탄을 완벽히 방호하는 특수작전 헬멧입니다.",
            "manufacturer": "Crye Precision",
            "manufacturerLogo": "assets/crye-logo.png",
            "manufacturerUrl": "https://www.cryeprecision.com/",
            "stats": {
                "bulletDamageProtection": "73",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "70",
                "hitpoints": "110",
                "weight": "0.9 kg"
            }
        },
        {
            "id": "SMPZ_Mandible_CryePrecision_AirFrame_MLOK_Chops_Black",
            "name": "Crye Precision AirFrame M-LOK Chops",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Crye Precision",
            "manufacturerLogo": "assets/crye-logo.png",
            "manufacturerUrl": "https://www.cryeprecision.com/",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "15",
                "hitpoints": "100",
                "weight": "1.4 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_CryePrecision_AirFrame_MLOK_Black",
            "name": "Crye Precision AirFrame M-LOK Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Crye Precision",
            "manufacturerLogo": "assets/crye-logo.png",
            "manufacturerUrl": "https://www.cryeprecision.com/",
            "stats": {
                "bulletDamageProtection": "73",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "70",
                "hitpoints": "110",
                "weight": "0.9 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_DevTac_Ronin",
            "name": "DevTac Ronin Ballistic Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "얼굴 전체를 감싸는 3A 등급의 미래형 전신 방탄 마스크 헬멧으로 방탄 고글과 환기 팬이 내장되어 있습니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "83",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80",
                "hitpoints": "150",
                "weight": "1.6 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_DevTac_Ronin_Respirator_Black",
            "name": "DevTac Ronin Respirator",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "85",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80",
                "hitpoints": "160",
                "weight": "2.4 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_DA_Bastion_Black",
            "name": "Diamond Age Bastion Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "50",
                "hitpoints": "100",
                "weight": "1.1 kg"
            }
        },
        {
            "id": "SMPZ_HelmetPlate_DA_Bastion",
            "name": "Diamond Age Bastion Helmet Armor Plate",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "70",
                "hitpoints": "100",
                "weight": "0.1 kg"
            }
        },
        {
            "id": "SMPZ_Mandible_NeoSteel_Black",
            "name": "Diamond Age NeoSteel Helmet Ballistic Mandible",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "30",
                "hitpoints": "100",
                "weight": "-"
            }
        },
        {
            "id": "SMPZ_Helmet_DA_NeoSteel_Black",
            "name": "Diamond Age NeoSteel High Cut Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "70",
                "hitpoints": "140",
                "weight": "1.2 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_FORT_KiverM",
            "name": "FORT Kiver-M Bulletproof Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "45",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "50",
                "hitpoints": "70",
                "weight": "1.2 kg"
            }
        },
        {
            "id": "SMPZ_Visor_FORT_KiverM",
            "name": "FORT Kiver-M Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "30",
                "hitpoints": "100",
                "weight": "1.2 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_FORT_KiverM_Alpine",
            "name": "FORT Kiver-M Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "45",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "50",
                "hitpoints": "70",
                "weight": "1.2 kg"
            }
        },
        {
            "id": "SMPZ_HelmetPlate_Trooper_Black",
            "name": "Galac-Tac Armor Mandalorian Helmet Mask",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "20",
                "hitpoints": "100",
                "weight": "0.4 kg"
            }
        },
        {
            "id": "SMPZ_Visor_Caiman",
            "name": "Galvion Caiman Fixed Arm Visor",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "15",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "10",
                "hitpoints": "100",
                "weight": "0.3 kg"
            }
        },
        {
            "id": "SMPZ_HelmetPlate_Caiman_Gray",
            "name": "Galvion Caiman Hybrid Ballistic Applique",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "20",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "10",
                "hitpoints": "100",
                "weight": "0.7 kg"
            }
        },
        {
            "id": "SMPZ_Mandible_Caiman_Black",
            "name": "Galvion Caiman Hybrid Ballistic Mandible",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "20",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "20",
                "hitpoints": "100",
                "weight": "-"
            }
        },
        {
            "id": "SMPZ_Helmet_Caiman_Gray",
            "name": "Galvion Caiman Hybrid Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "50",
                "hitpoints": "100",
                "weight": "1.1 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_HighCom_ULACH_IIIA_Black",
            "name": "HighCom Striker ULACH IIIA Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "55",
                "hitpoints": "100",
                "weight": "1.9 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_LShZ_Green",
            "name": "LShZ Lightweight Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "55",
                "hitpoints": "100",
                "weight": "1.0 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_MTEK_FLUX_Black",
            "name": "MTEK FLUX Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "60",
                "hitpoints": "100",
                "weight": "1.0 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_Maska_Green",
            "name": "Maska-1SCH",
            "category": "헬멧",
            "image": "assets/maska.png",
            "images": [
                "assets/maska.png",
                "assets/maska_2.png",
                "assets/maska_killa.png",
                "assets/maska_killa_2.png"
            ],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "65",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "65",
                "hitpoints": "150",
                "weight": "2.6 kg"
            }
        },
        {
            "id": "SMPZ_Visor_Maska_Green",
            "name": "Maska-1SCH Helmet Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "65",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "65",
                "hitpoints": "110",
                "weight": "1.1 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_NPP_KIASS_Tor2_OD",
            "name": "NPP KIASS Tor-2 Ballistic Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "60",
                "hitpoints": "100",
                "weight": "2.4 kg"
            }
        },
        {
            "id": "SMPZ_Visor_NPP_KIASS_Tor2_Black",
            "name": "NPP KIASS Tor-2 Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "30",
                "hitpoints": "100",
                "weight": "1.1 kg"
            }
        },
        {
            "id": "SMPZ_Visor_NPP_KIASS_Tor2_OD",
            "name": "NPP KIASS Tor2 Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "30",
                "hitpoints": "100",
                "weight": "1.1 kg"
            }
        },
        {
            "id": "SMPZ_Mandible_OpsCore_FAST_Black",
            "name": "Ops-Core FAST Gunsight Mandible",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Gentex Corporation",
            "manufacturerLogo": "assets/gentex-logo.png",
            "manufacturerUrl": "https://gentexcorp.com/",
            "stats": {
                "bulletDamageProtection": "20",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "20",
                "hitpoints": "100",
                "weight": "1.2 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_OpsCore_FASTMT_Black",
            "name": "Ops-Core FAST MT Super High Cut Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "미 특수부대의 표준 하이컷 전술 헬멧입니다. 헤드셋 및 야시경 장착 편의성이 극대화된 차세대 방탄 헬멧입니다.",
            "manufacturer": "Gentex Corporation",
            "manufacturerLogo": "assets/gentex-logo.png",
            "manufacturerUrl": "https://gentexcorp.com/",
            "stats": {
                "bulletDamageProtection": "73",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "50",
                "hitpoints": "110",
                "weight": "0.9 kg"
            }
        },
        {
            "id": "SMPZ_Visor_OpsCore_FAST_MultiHit",
            "name": "Ops-Core FAST Multi-Hit Ballistic Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Gentex Corporation",
            "manufacturerLogo": "assets/gentex-logo.png",
            "manufacturerUrl": "https://gentexcorp.com/",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "50",
                "hitpoints": "100",
                "weight": "1.2 kg"
            }
        },
        {
            "id": "SMPZ_HelmetPlate_OpsCore_SLAAP",
            "name": "Ops-Core SLAAP Armor Helmet Plate",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Gentex Corporation",
            "manufacturerLogo": "assets/gentex-logo.png",
            "manufacturerUrl": "https://gentexcorp.com/",
            "stats": {
                "bulletDamageProtection": "10",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "10",
                "weight": "1.3 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_RYS_T_Black",
            "name": "Rys-T",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "60",
                "hitpoints": "140",
                "weight": "2.5 kg"
            }
        },
        {
            "id": "SMPZ_Visor_RYS_T_Black",
            "name": "Rys-T Helmet Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "50",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "50",
                "hitpoints": "90",
                "weight": "1.2 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_SSSh94_Sfera_Green",
            "name": "SSSh-94 Sfera-S Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "35",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "30",
                "hitpoints": "60",
                "weight": "3.5 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_Tagilla_WeldingMask_Gorilla",
            "name": "Tagilla's Welding Mask",
            "category": "헬멧",
            "image": "assets/tagillahelmet_gorilla.png",
            "images": [
                "assets/tagillahelmet_gorilla.png",
                "assets/tagillahelmet_gorilla_2.png",
                "assets/tagillahelmet_ubey.png",
                "assets/tagillahelmet_ubey_2.png"
            ],
            "description": "TAGILLAAAAAA!!!",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "87",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "90",
                "hitpoints": "180",
                "weight": "1.5 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_TeamWendy_Exfil_Black",
            "name": "Team Wendy EXFIL Ballistic Helmet",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "미국 팀 웬디 사의 첨단 하이브리드 탄도 헬멧으로 극강의 착용감과 충격 흡수 패드 시스템을 자랑합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "70",
                "hitpoints": "120",
                "weight": "1.2 kg"
            }
        },
        {
            "id": "SMPZ_Visor_TeamWendy_Exfil_Black",
            "name": "Team Wendy Exfil Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "30",
                "hitpoints": "100",
                "weight": "0.8 kg"
            }
        },
        {
            "id": "SMPZ_Helmet_Vulkan_Black",
            "name": "Vulkan-5 LShZ-5",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "83",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "70",
                "hitpoints": "150",
                "weight": "4.5 kg"
            }
        },
        {
            "id": "SMPZ_Visor_Vulkan",
            "name": "Vulkan-5 LShZ-5 Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "Black",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "30",
                "hitpoints": "100",
                "weight": "-"
            }
        },
        {
            "id": "SMPZ_Helmet_ZSH12M_Black",
            "name": "ZSh-1-2M",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80",
                "hitpoints": "120",
                "weight": "3.7 kg"
            }
        },
        {
            "id": "SMPZ_Visor_ZSH12M_Black",
            "name": "ZSh-1-2M Face Shield",
            "category": "헬멧",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "30",
                "hitpoints": "100",
                "weight": "-"
            }
        }
    ],
    "전신 방탄복": [
        {
            "id": "SMPZ_Vest_6B13_Black",
            "name": "6B13 Assault Armor",
            "category": "전신 방탄복",
            "image": "assets/6b13.png",
            "images": [
                "assets/6b13.png",
                "assets/6b13_2.png",
                "assets/6b13_killa.png",
                "assets/6b13_killa_2.png"
            ],
            "description": "러시아군의 중장갑 돌격용 방탄복으로 고강도 세라믹 복합 패널을 장착하여 소총탄을 효과적으로 방어합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "60",
                "hitpoints": "175",
                "weight": "9.2 kg"
            }
        },
        {
            "id": "SMPZ_Vest_6B2_EMR",
            "name": "6B2 Body Armor",
            "category": "전신 방탄복",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "30",
                "hitpoints": "110",
                "weight": "5.4 kg"
            }
        },
        {
            "id": "SMPZ_Vest_6B23_EMR",
            "name": "6B23-1 Body Armor",
            "category": "전신 방탄복",
            "image": "assets/6b23.png",
            "images": [
                "assets/6b23.png",
                "assets/6b23_2.png"
            ],
            "description": "러시아군의 표준 보병 제식 방탄복으로 가슴과 등, 측면을 아우르는 균형 잡힌 방호력을 제공합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "65",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "65",
                "hitpoints": "190",
                "weight": "10.5 kg"
            }
        },
        {
            "id": "SMPZ_Vest_6B43_EMR",
            "name": "6B43 Zabralo-Sh Body Armor",
            "category": "전신 방탄복",
            "image": "assets/6b43.png",
            "images": [
                "assets/6b43.png",
                "assets/6b43_2.png"
            ],
            "description": "러시아 6A 최고 등급의 중장갑 전신 방탄복입니다. 목, 어깨, 사타구니까지 전신을 완벽히 감싸는 요새 같은 방탄복입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "85",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "85",
                "hitpoints": "400",
                "weight": "35.0 kg"
            }
        },
        {
            "id": "SMPZ_Vest_6B45",
            "name": "6B45 Body Armor",
            "category": "전신 방탄복",
            "image": "assets/6b45.png",
            "images": [
                "assets/6b45.png"
            ],
            "description": "러시아군 라트니크 체계의 현대식 표준 방탄복으로 몰리(MOLLE) 웨빙과 신속 해체 기능을 지원합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "73",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "70",
                "hitpoints": "225",
                "weight": "9.4 kg"
            }
        },
        {
            "id": "SMPZ_Vest_BNTI_Zhuk_EMR",
            "name": "BNTI Zhuk Body Armor",
            "category": "전신 방탄복",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80",
                "hitpoints": "225",
                "weight": "5.6 kg"
            }
        },
        {
            "id": "SMPZ_Vest_FORT_GladiatorS_Multicam",
            "name": "FORT Gladiator-S Plate Carrier",
            "category": "전신 방탄복",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "65",
                "hitpoints": "225",
                "weight": "8.5 kg"
            }
        },
        {
            "id": "SMPZ_Vest_FORT_RedutM_Green",
            "name": "FORT Redut-M Body Armor",
            "category": "전신 방탄복",
            "image": "assets/redut_m.png",
            "images": [
                "assets/redut_m.png",
                "assets/redut_m_2.png",
                "assets/redut_m_3.png"
            ],
            "description": "러시아 FSB 특수부대가 대테러 작전에 애용하는 고방호력 전신 방탄복입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "78",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "78",
                "hitpoints": "225",
                "weight": "15.5 kg"
            }
        },
        {
            "id": "SMPZ_Vest_FORT_RedutT5_Smog",
            "name": "FORT Redut-T5 Body Armor",
            "category": "전신 방탄복",
            "image": "assets/redut_t5.png",
            "images": [
                "assets/redut_t5.png",
                "assets/redut_t5_2.png"
            ],
            "description": "Redut-M의 중장갑 강화 버전으로 전면 세라믹 아머 플레이트와 어깨/목 보호대를 장착한 최고급 특수전 방탄복입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80",
                "hitpoints": "285",
                "weight": "25.0 kg"
            }
        },
        {
            "id": "SMPZ_Vest_IOTV_Gen4_Multicam",
            "name": "IOTV Gen4 Full Protection Body Armor",
            "category": "전신 방탄복",
            "image": "assets/iotv.png",
            "images": [
                "assets/iotv.png"
            ],
            "description": "미 육군의 차세대 표준 통합 전술 방탄복(Gen4)으로 무게를 대폭 줄이면서도 전방위 소총탄 방호력을 제공합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "78",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "78",
                "hitpoints": "225",
                "weight": "20.0 kg"
            }
        },
        {
            "id": "SMPZ_Vest_NFM_Thor",
            "name": "NFM THOR Integrated Carrier Body Armor",
            "category": "전신 방탄복",
            "image": "assets/thor.png",
            "images": [
                "assets/thor.png",
                "assets/thor_2.png"
            ],
            "description": "노르웨이 NFM Group 사의 통합 전술 방탄 플랫폼입니다. 360도 전방위 소프트 아머와 하드 플레이트를 결합하여 완벽한 방호력을 선사합니다.",
            "manufacturer": "NFM Group",
            "manufacturerLogo": "assets/nfm-logo.png",
            "manufacturerUrl": "https://nfm.no/",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80",
                "hitpoints": "225",
                "weight": "25.0 kg"
            }
        },
        {
            "id": "SMPZ_Vest_NPP_KIASS_KoraKulon_Black",
            "name": "NPP KIASS Kora-Kulon Body Armor",
            "category": "전신 방탄복",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "35",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "35",
                "hitpoints": "120",
                "weight": "11.1 kg"
            }
        }
    ],
    "플레이트 캐리어": [
        {
            "id": "SMPZ_Vest_511_Tactical_Hexgrid_Black",
            "name": "5.11 Tactical Hexgrid Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "5.11 사의 혁신적인 헥사곤 멀티 앵글 그리드가 적용되어 다양한 각도로 파우치를 부착할 수 있는 전술 방탄조끼입니다.",
            "manufacturer": "5.11 Tactical",
            "manufacturerLogo": "assets/511tac-logo.png",
            "manufacturerUrl": "https://www.511tactical.com/",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80",
                "hitpoints": "225",
                "weight": "5.9 kg"
            }
        },
        {
            "id": "SMPZ_ChestRig_ANA_Tactical_Alpha_OD",
            "name": "ANA Tactical Alpha Chest Rig",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "러시아 ANA 사의 고용량 전술 체스트 리그로 탄창 및 무전기 파우치가 일체형으로 배치되어 있습니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "500",
                "weight": "1.7 kg"
            }
        },
        {
            "id": "SMPZ_Vest_ArsArma_A18_Skanda_Black",
            "name": "Ars Arma A-18 Skanda Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "assets/a18.png",
            "images": [
                "assets/a18.png"
            ],
            "description": "",
            "manufacturer": "Ars Arma",
            "manufacturerLogo": "assets/arsarma-logo.png",
            "manufacturerUrl": "https://arsarma.ru/",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "67",
                "hitpoints": "225",
                "weight": "11.0 kg"
            }
        },
        {
            "id": "SMPZ_Vest_Tagilla_AVS",
            "name": "Crye Precision AVS",
            "category": "플레이트 캐리어",
            "image": "assets/tagillaavs.png",
            "images": [
                "assets/tagillaavs.png",
                "assets/tagillaavs_2.png"
            ],
            "description": "특수작전 환경에 맞춰 하네스 시스템과 플레이트 백을 자유자재로 조합할 수 있는 크라이 사의 어댑티브 베스트 시스템(AVS)입니다.",
            "manufacturer": "Crye Precision",
            "manufacturerLogo": "assets/crye-logo.png",
            "manufacturerUrl": "https://www.cryeprecision.com/",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80",
                "hitpoints": "260",
                "weight": "9.2 kg"
            }
        },
        {
            "id": "SMPZ_Vest_JPC_Maritime_Multicam",
            "name": "Crye Precision JPC 2.0 Maritime Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "assets/jpc20.png",
            "images": [
                "assets/jpc20.png"
            ],
            "description": "",
            "manufacturer": "Crye Precision",
            "manufacturerLogo": "assets/crye-logo.png",
            "manufacturerUrl": "https://www.cryeprecision.com/",
            "stats": {
                "bulletDamageProtection": "50",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "60",
                "hitpoints": "155",
                "weight": "5.5 kg"
            }
        },
        {
            "id": "SMPZ_Vest_JPC_Multicam",
            "name": "Crye Precision JPC Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "assets/jpc.png",
            "images": [
                "assets/jpc.png"
            ],
            "description": "",
            "manufacturer": "Crye Precision",
            "manufacturerLogo": "assets/crye-logo.png",
            "manufacturerUrl": "https://www.cryeprecision.com/",
            "stats": {
                "bulletDamageProtection": "45",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "60",
                "hitpoints": "145",
                "weight": "5.5 kg"
            }
        },
        {
            "id": "SMPZ_ChestRig_Triton_M43A_Black",
            "name": "Dynaforce Triton M43-A Chest Harness",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "Manufactured by Dynaforce",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "500",
                "weight": "1.3 kg"
            }
        },
        {
            "id": "SMPZ_Vest_EagleIndustries_MMAC_RangerGreen",
            "name": "Eagle Industries MMAC Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "65",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "50",
                "hitpoints": "190",
                "weight": "8.0 kg"
            }
        },
        {
            "id": "SMPZ_Vest_FerroConcepts_FCPC_V5_FDE",
            "name": "Ferro Concepts FCPC V5 Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "assets/fcpcv5.png",
            "images": [
                "assets/fcpcv5.png"
            ],
            "description": "",
            "manufacturer": "Ferro Concepts",
            "manufacturerLogo": "assets/ferro-logo.png",
            "manufacturerUrl": "https://ferroconcepts.com/",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "65",
                "hitpoints": "225",
                "weight": "7.2 kg"
            }
        },
        {
            "id": "SMPZ_Vest_FirstSPEAR_SiegeR_MASS",
            "name": "First Spear Siege-R Optimized M.A.S.S. Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "assets/mass.png",
            "images": [
                "assets/mass.png",
                "assets/mass_2.png",
                "assets/mass_3.png"
            ],
            "description": "",
            "manufacturer": "FirstSpear",
            "manufacturerLogo": "assets/firstspear-logo.png",
            "manufacturerUrl": "https://www.first-spear.com/",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80",
                "hitpoints": "255",
                "weight": "25.0 kg"
            }
        },
        {
            "id": "SMPZ_Vest_FirstSPEAR_Strandhogg_RangerGreen",
            "name": "First Spear StrandhÃ¶gg Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "미국 퍼스트스피어 사의 튜브(Tubes) 퀵릴리즈 시스템이 적용된 최고급 전신 방호 플레이트 캐리어입니다.",
            "manufacturer": "FirstSpear",
            "manufacturerLogo": "assets/firstspear-logo.png",
            "manufacturerUrl": "https://www.first-spear.com/",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "75",
                "hitpoints": "225",
                "weight": "13.5 kg"
            }
        },
        {
            "id": "SMPZ_ChestRig_LBT1961A_Gray",
            "name": "LBT-1961A Load Bearing Chest Rig",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "Manufactured by London Bridge Trading",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "500",
                "weight": "1.4 kg"
            }
        },
        {
            "id": "SMPZ_Vest_LBT6094A_Slick_ISB",
            "name": "LBT-6094A Slick",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "50",
                "hitpoints": "225",
                "weight": "6.2 kg"
            }
        },
        {
            "id": "SMPZ_Vest_NPP_KIASS_KorundVM_Black",
            "name": "NPP KIASS KorundVM Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80",
                "hitpoints": "225",
                "weight": "9.8 kg"
            }
        },
        {
            "id": "SMPZ_ChestRig_PoyasAB_Green",
            "name": "Poyas-A + Poyas-B Gear Chest Rig",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "500",
                "weight": "1.7 kg"
            }
        },
        {
            "id": "SMPZ_Vest_SpiritusSystems_LV119_Black",
            "name": "Spiritus Systems LV-119 Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "70",
                "hitpoints": "225",
                "weight": "12.1 kg"
            }
        },
        {
            "id": "SMPZ_Vest_Tasmanian_Tiger_MK3_Coyote",
            "name": "Tasmanian Tiger MKIII Plate Carrier",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "55",
                "hitpoints": "225",
                "weight": "8.0 kg"
            }
        },
        {
            "id": "SMPZ_ChestRig_WARTECH_MK3_Multicam",
            "name": "WARTECH MK3 TV-104 Chest Rig",
            "category": "플레이트 캐리어",
            "image": "",
            "images": [],
            "description": "Manufactured by WARTECH",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "500",
                "weight": "1.6 kg"
            }
        }
    ],
    "마스크": [
        {
            "id": "SMPZ_Mask_CQCM",
            "name": "Atomic Defense CQCM Balistic Mask",
            "category": "마스크",
            "image": "",
            "images": [],
            "description": "얼굴 전면을 권총탄과 파편으로부터 방어하는 고강도 케블라 탄도 안면 마스크입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "70",
                "hitpoints": "225",
                "weight": "2.1 kg"
            }
        },
        {
            "id": "SMPZ_Mask_M53A1_GasMask",
            "name": "Avon M53A1 Gas Mask",
            "category": "마스크",
            "image": "assets/m53a1.png",
            "images": [
                "assets/m53a1.png",
                "assets/m53a1_2.png"
            ],
            "description": "미 특수작전사령부(US SOCOM)의 표준 CBRN 전술 방독면입니다. 넓은 파노라마 시야각과 음성 전달 장치, 필터 좌우 전환 기능을 갖추고 있습니다.",
            "manufacturer": "Avon Protection",
            "manufacturerLogo": "assets/avon-logo.png",
            "manufacturerUrl": "https://www.avon-protection.com/",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "1500",
                "weight": "0.7 kg"
            }
        },
        {
            "id": "SMPZ_Mask_ColdFear_Balaclava",
            "name": "Cold Fear Infrared Balaclava",
            "category": "마스크",
            "image": "",
            "images": [],
            "description": "적외선 야시장비의 열 감지를 분산시키고 체온을 보온해 주는 특수부대용 전술 바라클라바입니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "3000",
                "weight": "0.1 kg"
            }
        },
        {
            "id": "SMPZ_Mask_Balaclava_Crow",
            "name": "Crow Balaclava",
            "category": "마스크",
            "image": "",
            "images": [],
            "description": "kkak kkak",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "3000",
                "weight": "0.1 kg"
            }
        },
        {
            "id": "SMPZ_Mask_DeathShadow_Black",
            "name": "Death Shadow Airsoft Mask",
            "category": "마스크",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "5",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "700",
                "weight": "0.2 kg"
            }
        },
        {
            "id": "SMPZ_Mask_Samurai_Half_Black",
            "name": "DevTac Samurai Menpo Half-Mask",
            "category": "마스크",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "3000",
                "weight": "0.1 kg"
            }
        },
        {
            "id": "SMPZ_Mask_Gentex_OpsCore_SOTR_Respirator",
            "name": "Gentex Ops-Core SOTR Respirator",
            "category": "마스크",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Gentex Corporation",
            "manufacturerLogo": "assets/gentex-logo.png",
            "manufacturerUrl": "https://gentexcorp.com/",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "1500",
                "weight": "0.1 kg"
            }
        },
        {
            "id": "SMPZ_Mask_Ghost_Half",
            "name": "Ghost Half-Mask",
            "category": "마스크",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "3000",
                "weight": "0.2 kg"
            }
        },
        {
            "id": "SMPZ_Mask_HalfMask_Black",
            "name": "Half-Mask",
            "category": "마스크",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "3000",
                "weight": "0.1 kg"
            }
        },
        {
            "id": "SMPZ_Mask_Momex_Balaclava",
            "name": "Momex Balaclava",
            "category": "마스크",
            "image": "assets/momex.png",
            "images": [
                "assets/momex.png",
                "assets/momex_2.png"
            ],
            "description": "This is cool, no?",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "3000",
                "weight": "0.1 kg"
            }
        },
        {
            "id": "SMPZ_Mask_Zryachiy_Balaclava",
            "name": "Zryachiy's Balaclava",
            "category": "마스크",
            "image": "",
            "images": [],
            "description": "See you next time...",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "bulletDamageProtection": "50",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0",
                "hitpoints": "3000",
                "weight": "0.1 kg"
            }
        }
    ],
    "백팩": [
        {
            "id": "SMPZ_Backpack_511_Tactical_RUSH100_Black",
            "name": "5.11 Tactical RUSH 100 Backpack",
            "category": "백팩",
            "image": "assets/rush100.png",
            "images": [
                "assets/rush100.png"
            ],
            "description": "미국 5.11 사의 60L급 초대용량 장거리 원정 전술 배낭입니다. 튼튼한 500D/1050D 나일론과 조절식 프레임 하네스를 갖췄습니다.",
            "manufacturer": "5.11 Tactical",
            "manufacturerLogo": "assets/511tac-logo.png",
            "manufacturerUrl": "https://www.511tactical.com/",
            "stats": {
                "weight": "2.6 kg"
            }
        },
        {
            "id": "SMPZ_Backpack_6Sh118_Black",
            "name": "6Sh118 Raid Backpack",
            "category": "백팩",
            "image": "assets/6sh118.png",
            "images": [
                "assets/6sh118.png",
                "assets/6sh118_2.png",
                "assets/6sh118_3.png",
                "assets/6sh118_4.png",
                "assets/6sh118_5.png",
                "assets/6sh118_6.png",
                "assets/6sh118_7.png"
            ],
            "description": "러시아군 라트니크 체계의 60L 제식 대형 강습 레이드 배낭입니다. 가혹한 동유럽 야전 환경에서도 뛰어난 내구성을 발휘합니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "3.5 kg"
            }
        },
        {
            "id": "SMPZ_Backpack_F4_Terminator_Black",
            "name": "Eberlestock F4 Terminator Load Bearing Backpack",
            "category": "백팩",
            "image": "assets/terminator.png",
            "images": [
                "assets/terminator.png",
                "assets/terminator_2.png",
                "assets/terminator_3.png"
            ],
            "description": "에벌리스톡 사의 장거리 저격수 및 정찰대용 대용량 백팩으로 무기 수납 공간과 전면 개폐식 패널을 지원합니다.",
            "manufacturer": "Eberlestock",
            "manufacturerLogo": "assets/eberlestock-logo.png",
            "manufacturerUrl": "https://eberlestock.com/",
            "stats": {
                "weight": "4.2 kg"
            }
        },
        {
            "id": "SMPZ_Backpack_F5_SwitchBlade_DryEarth",
            "name": "F5 SwitchBlade Backpack",
            "category": "백팩",
            "image": "",
            "images": [],
            "description": "컴팩트한 전술 데이팩으로 은닉 총기 수납 및 신속 개폐 지퍼 시스템이 적용되었습니다.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "1.6 kg"
            }
        },
        {
            "id": "SMPZ_Backpack_Hazard4_Takedown_Sling_Black",
            "name": "Hazard 4 Takedown Sling Backpack",
            "category": "백팩",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "1.6 kg"
            }
        },
        {
            "id": "SMPZ_Backpack_2Day_AssaultPack_Black",
            "name": "Mystery Ranch 2 Day Assault Pack",
            "category": "백팩",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Mystery Ranch",
            "manufacturerLogo": "assets/mystery-logo.png",
            "manufacturerUrl": "https://www.mysteryranch.com/",
            "stats": {
                "weight": "1.5 kg"
            }
        },
        {
            "id": "SMPZ_Backpack_Blackjack50_Black",
            "name": "Mystery Ranch Blackjack 50 Backpack",
            "category": "백팩",
            "image": "assets/blackjack.png",
            "images": [
                "assets/blackjack.png",
                "assets/blackjack_2.png",
                "assets/blackjack_3.png",
                "assets/blackjack_4.png",
                "assets/blackjack_5.png"
            ],
            "description": "",
            "manufacturer": "Mystery Ranch",
            "manufacturerLogo": "assets/mystery-logo.png",
            "manufacturerUrl": "https://www.mysteryranch.com/",
            "stats": {
                "weight": "3.3 kg"
            }
        },
        {
            "id": "SMPZ_Backpack_SATL_Foliage",
            "name": "Mystery Ranch SATL Bridger Assault Pack",
            "category": "백팩",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Mystery Ranch",
            "manufacturerLogo": "assets/mystery-logo.png",
            "manufacturerUrl": "https://www.mysteryranch.com/",
            "stats": {
                "weight": "3.0 kg"
            }
        },
        {
            "id": "SMPZ_Vest_NPP_KIASS_Bagariy_Black",
            "name": "NPP KIASS Bagariy Plate Carrier",
            "category": "백팩",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "10.8 kg"
            }
        },
        {
            "id": "SMPZ_Backpack_Tasmanian_Tiger_Trooper35_Black",
            "name": "Tasmanian Tiger Trooper 35 Backpack",
            "category": "백팩",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "1.0 kg"
            }
        }
    ]
};

// 부착물 데이터 (자동 동기화 빌드)
const attachmentData = {
    "가스 블록": [
        {
            "id": "SMPZ_Attachments_AR15_Windham_Weaponry_Rail_Gasblock",
            "name": "AR-15 Windham Weaponry Rail Gas Block",
            "category": "가스 블록",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "weight": "120g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Precision_Reflex_Mk12_Gasblock",
            "name": "AR-15 Precision Reflex Mk12 Gen.1 Flip-Up Frontsight Gas Block",
            "category": "가스 블록",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-2%",
                "weight": "140g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_GS5B_Gasblock",
            "name": "AR-15 JP Enterprises Gas System-5B",
            "category": "가스 블록",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "64g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_LoPro_Gasblock",
            "name": "AR-15 Ballistic Advantage Lo-Pro Gas Block",
            "category": "가스 블록",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "53g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Sentry7_Gasblock",
            "name": "AR-15 SLR Rifleworks Sentry 7 Gas Block",
            "category": "가스 블록",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-2%",
                "weight": "40g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_KAC_M110_Gasblock",
            "name": "AR-10 KAC M110 Double High Picatinny Gas Block",
            "category": "가스 블록",
            "image": "",
            "images": [],
            "description": "Can be attached on SR-25 only.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-2%",
                "weight": "116g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_KAC_M110_Gasblock_Taupe",
            "name": "AR-10 KAC M110 Double High Picatinny Gas Block - Taupe",
            "category": "가스 블록",
            "image": "",
            "images": [],
            "description": "Can be attached on SR-25 only.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-2%",
                "weight": "116g"
            }
        },
        {
            "id": "SMPZ_Attachments_Mk12_Gasblock",
            "name": "AR-15 Daniel Defense MK12 Low Profile Gas Block",
            "category": "가스 블록",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-2%",
                "weight": "53g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_VDM_Gasblock",
            "name": "AK Kiba arms VDM CS gas tube",
            "category": "가스 블록",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifle only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "120g"
            }
        }
    ],
    "개머리판": [
        {
            "id": "SMPZ_Attachments_590A1_Magpul_Buttstock",
            "name": "Mossberg 590A1 Magpul SGA stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-15%",
                "sway": "-15%",
                "weight": "680g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_AK100_Skeleton_Buttstock",
            "name": "AK 100-series metal skeletonized stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Fits on AK-74M & AK-100 Series",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-19%",
                "sway": "-20%",
                "weight": "264g"
            }
        },
        {
            "id": "SMPZ_Attachments_CMMG_RipStock_Buttstock",
            "name": "AR-15 CMMG RipStock buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by CMMG",
            "manufacturer": "CMMG",
            "manufacturerLogo": "assets/cmmg-logo.png",
            "manufacturerUrl": "https://cmmg.com/",
            "stats": {
                "recoil": "-24%",
                "sway": "-25%",
                "weight": "700g"
            }
        },
        {
            "id": "SMPZ_Attachments_Viper_Mod1_Buttstock",
            "name": "AR-15 Strike Industries Viper Mod 1 stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Strike Industries",
            "manufacturer": "Strike Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.strikeindustries.com/",
            "stats": {
                "recoil": "-40%",
                "sway": "-30%",
                "weight": "700g"
            }
        },
        {
            "id": "SMPZ_Attachments_TROY_M7A1_PDW_Buttstock",
            "name": "AR-15 TROY M7A1 PDW stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Troy Industries",
            "manufacturer": "Troy Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://worldoftroy.com/",
            "stats": {
                "recoil": "-37%",
                "sway": "-45%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_B5_System_Precision_Buttstock",
            "name": "B5 Systems Precision buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by B5 Systems",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-30%",
                "sway": "-25%",
                "weight": "160g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Colt_N1_Buttstock",
            "name": "AR-15 Colt N1 Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-17%",
                "sway": "-29%",
                "weight": "126g"
            }
        },
        {
            "id": "SMPZ_Attachments_Magpul_ACS_Stock",
            "name": "AR-15 Magpul ACS Carbine Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-34%",
                "sway": "-30%",
                "weight": "327g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Colt_M16A2_Buttstock",
            "name": "AR-15 Colt M16A2 Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-31%",
                "sway": "-30%",
                "weight": "126g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_SASS_Stock",
            "name": "AR-15 KAC SASS Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-31%",
                "sway": "-30%",
                "weight": "580g"
            }
        },
        {
            "id": "SMPZ_Attachments_Magpul_UCS_Stock",
            "name": "Magpul UCS Buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-35%",
                "sway": "-30%",
                "weight": "467g"
            }
        },
        {
            "id": "SMPZ_Attachments_Magpul_UCS_CheekRiser",
            "name": "Magpul UCS Stock Cheek Riser",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-10%",
                "weight": "43g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_LeadStarArms_Ravage_Stock",
            "name": "AR-15 Lead Star Arms Ravage Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-29%",
                "sway": "-40%",
                "weight": "170g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_LeadStarArms_Ravage_Stock_Yellow",
            "name": "AR-15 Lead Star Arms Ravage Stock (Yellow)",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-29%",
                "sway": "-40%",
                "weight": "170g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Phase5_Universal_Mini_Stock",
            "name": "AR-15 Phase5 Universal Mini Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-28%",
                "sway": "-45%",
                "weight": "170g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Phase5_Universal_Mini_Stock_Yellow",
            "name": "AR-15 Phase5 Universal Mini Stock (Yellow)",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-28%",
                "sway": "-45%",
                "weight": "170g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Baskak_Stock",
            "name": "Armacon Baskak Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-35%",
                "sway": "-40%",
                "weight": "270g"
            }
        },
        {
            "id": "SMPZ_Attachments_M60E4_Buttstock",
            "name": "M60E6 Buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on M60 LMGs only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-20%",
                "sway": "-20%",
                "weight": "253g"
            }
        },
        {
            "id": "SMPZ_Attachments_M700_MODX_Chassis",
            "name": "Remington Model 700 MOD*X GEN 3 Chassis",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Remington Arms",
            "manufacturerLogo": "assets/remington-logo.png",
            "manufacturerUrl": "https://www.remarms.com/",
            "stats": {}
        },
        {
            "id": "SMPZ_Attachments_Masada_Folding_Buttstock",
            "name": "Magpul Masada Polymer Folding Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-20%",
                "sway": "-30%",
                "weight": "511g"
            }
        },
        {
            "id": "SMPZ_Attachments_Masada_PDW_Buttstock",
            "name": "Magpul Masada PDW Collapsing Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-17%",
                "sway": "-25%",
                "weight": "557g"
            }
        },
        {
            "id": "SMPZ_Attachments_MCX_MPX_MaximDefense_Buttstock",
            "name": "MPX/MCX Maxim Defense CQB Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Maxim Defense",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-21%",
                "sway": "-20%",
                "weight": "501g"
            }
        },
        {
            "id": "SMPZ_Attachments_SVT_AVT_SVD_Style_Stock",
            "name": "SVT-40 SVD Style Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-22%",
                "sway": "-45%",
                "weight": "1217g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP7_ARS_Stock",
            "name": "FAB Defense FX-KPOS ARS Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "sway": "-1%",
                "weight": "520g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP133_Plastic_Buttstock",
            "name": "MP-133/153 plastic stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "good",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-15%",
                "sway": "-15%",
                "weight": "460g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP133_Plastic_Short_Buttstock",
            "name": "MP-133/153 plastic pistol grip",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "bad",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+50%",
                "sway": "+50%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP18_Polymer_Buttstock",
            "name": "MP-18 Polymer Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by IzhMekh",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "sway": "-20%",
                "weight": "470g"
            }
        },
        {
            "id": "SMPZ_Att_MP5_A3_Buttstock",
            "name": "HK MP5 A3 Old Model Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on HK MP5 only",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-21%",
                "sway": "-50%",
                "weight": "430g"
            }
        },
        {
            "id": "SMPZ_Attachments_RPD_DSARMS_Buttstock",
            "name": "RPD DS Arms Butttock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "DS Arms",
            "manufacturerLogo": "assets/dsarms-logo.png",
            "manufacturerUrl": "https://dsarms.com/",
            "stats": {
                "sway": "-20%",
                "weight": "1230g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_Humpback_Polymer_Stock",
            "name": "SA58 humpback polymer stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Fits on SA58",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-29%",
                "sway": "-30%",
                "weight": "800g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_BRS_Stock",
            "name": "SA58 BRS stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Fits On SA58",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-32%",
                "sway": "-31%",
                "weight": "950g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_SPR_Stock",
            "name": "SA58 SPR stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Fits On SA58",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-32%",
                "sway": "-31%",
                "weight": "950g"
            }
        },
        {
            "id": "SMPZ_Attachments_CTR_Buttstock",
            "name": "AR-15 Magpul CTR Carbine stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-33%",
                "sway": "-30%",
                "weight": "700g"
            }
        },
        {
            "id": "SMPZ_Attachments_ECB_Buttstock",
            "name": "AR-15 Daniel Defense Enhanced Collapsible Buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-22%",
                "sway": "-30%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_GLCore_Buttstock",
            "name": "AR-15 FAB Defense GL-CORE buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by FAB Defense",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-20%",
                "sway": "-22%",
                "weight": "271g"
            }
        },
        {
            "id": "SMPZ_Attachments_GLCore_Buttstock_Black",
            "name": "AR-15 FAB Defense GL-CORE buttstock Black",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by FAB Defense",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-20%",
                "sway": "-22%",
                "weight": "271g"
            }
        },
        {
            "id": "SMPZ_Attachments_M4_Standard_Buttstock",
            "name": "AR-15 High Standard M4SS Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-18%",
                "sway": "-30%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_MOE_Buttstock",
            "name": "AR-15 Magpul MOE Carbine stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-32%",
                "sway": "-30%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_PRS_Bttstck",
            "name": "AR 15 stock Magpul PRS GEN3",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-45%",
                "sway": "-45%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_PRS_Bttstck_Black",
            "name": "AR 15 stock Magpul PRS GEN3 Black",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-45%",
                "sway": "-45%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_PRS_Gen2_Bttstck",
            "name": "AR 15 stock Magpul PRS GEN2",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-40%",
                "sway": "-45%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_SLK_Buttstock",
            "name": "AR-15 Magpul MOE SL-K buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-27%",
                "sway": "-30%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_SLM_Buttstock_Black",
            "name": "AR-15 Magpul MOE SL-M buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-20%",
                "sway": "-22%",
                "weight": "148g"
            }
        },
        {
            "id": "SMPZ_Attachments_MCX_MPX_TFS_Buttstock",
            "name": "MPX/MCX Telescoping/Folding Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on SIG MPX & MCX & MCX-Spear only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-15%",
                "sway": "-25%",
                "weight": "336g"
            }
        },
        {
            "id": "SMPZ_Attachments_MCX_MPX_CTS_Buttstock",
            "name": "MPX/MCX Collapsing/Telescoping Stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on SIG MPX & MCX & MCX-Spear only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-18%",
                "sway": "-26%",
                "weight": "396g"
            }
        },
        {
            "id": "SMPZ_Attachments_GLR_Buttstock",
            "name": "Glock FAB Defense GLR-17 stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 & Glock 18C only",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "recoil": "-45%",
                "sway": "-45%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Zenit_PT1_Buttstock",
            "name": "AK Zenit PT-1 Klassika stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-30%",
                "sway": "-30%",
                "weight": "290g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Zenit_PT3_Buttstock",
            "name": "AK Zenit PT-3 Klassika stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-32%",
                "sway": "-30%",
                "weight": "210g"
            }
        },
        {
            "id": "SMPZ_Attachments_ACE_SOCOM_Buttstock",
            "name": "AR-15 DoubleStar ACE SOCOM Gen.4 stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by DoubleStar",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-33%",
                "sway": "-35%",
                "weight": "470g"
            }
        },
        {
            "id": "SMPZ_Attachments_UBR_Gen2_Buttstock",
            "name": "AR-15 Magpul UBR GEN2 stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Black",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-34%",
                "sway": "-40%",
                "weight": "610g"
            }
        },
        {
            "id": "SMPZ_Attachments_PKM_PKP_Zenit_PT2_Buttstock",
            "name": "PK Zenit PT-2 Klassika stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on PKM & PKP only",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-30%",
                "weight": "643g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Arcangel_AA47_Buttstock",
            "name": "AKM/AK-74 ProMag Archangel OPFOR AA47 buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only. ! NO NEED AK BUFFER !",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-29%",
                "sway": "-40%",
                "weight": "390g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_ZhukovS_Buttstock",
            "name": "AKM/AK-74 Magpul Zhukov-S stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AK-74N & AKMN only",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-28%",
                "sway": "-29%",
                "weight": "425g"
            }
        },
        {
            "id": "SMPZ_Attachments_G36_KV_Adjustable_Buttstock",
            "name": "HK G36 KV adjustable stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on HK G36 only",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-22%",
                "sway": "-30%",
                "weight": "907g"
            }
        },
        {
            "id": "SMPZ_Attachments_G36_IDZ_Adjustable_Buttstock",
            "name": "HK G36 IDZ adjustable stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on HK G36 only",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-27%",
                "sway": "-30%",
                "weight": "419g"
            }
        },
        {
            "id": "SMPZ_Attachments_Mosin_ATI_Monte_Carlo_Stock",
            "name": "Mosin ATI Monte Carlo stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on Mosin Nagant only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-20%",
                "sway": "-20%",
                "weight": "1200g"
            }
        },
        {
            "id": "SMPZ_Attachments_SKS_ATI_Monte_Carlo_Stock",
            "name": "SKS ATI Monte Carlo stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on SKS only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-5%",
                "weight": "1100g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_EVO_Buttstock",
            "name": "AK AK-EVO stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AK-74M & AK 100 series rifle only. ! NO NEED BUFFER !",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-27%",
                "sway": "-30%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK_E1_Buttstock",
            "name": "AR-15 HK E1 buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-30%",
                "sway": "-25%",
                "weight": "390g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK_Slimline_Buttstock",
            "name": "AR-15 HK Slim Line Buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-27%",
                "sway": "-25%",
                "weight": "700g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK_Slimline_Buttstock_RAL8000",
            "name": "AR-15 HK Slim Line buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-27%",
                "sway": "-25%",
                "weight": "700g"
            }
        },
        {
            "id": "SMPZ_Attachments_LMT_Sopmod_Buttstock",
            "name": "AR-15 LMT Defense SOPMOD stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-25%",
                "sway": "-25%",
                "weight": "140g"
            }
        },
        {
            "id": "SMPZ_Attachments_SBA3_Buttstock",
            "name": "AR-15 SB Tactical SBA3 brace",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-20%",
                "sway": "-30%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_DS150_Buttstock",
            "name": "AR-15 KRISS Defiance DS150 stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-26%",
                "sway": "-30%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_DS150_Buttstock_FDE",
            "name": "AR-15 KRISS Defiance DS150 stock FDE",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-26%",
                "sway": "-30%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1A_Archangel_Chassis",
            "name": "M1A ProMag Archangel chassis",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on M1A only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-30%",
                "sway": "-55%",
                "weight": "1900g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP155_Ultima_Stock",
            "name": "MP-155 Ultima polymer stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Kalashnikov Concern(Group)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-30%",
                "sway": "-30%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_SV98_CNC_OV_Chassis",
            "name": "SV-98 CNC Guns OV-SV98 chassis",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on SV-98 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-15%",
                "sway": "-20%",
                "weight": "550g"
            }
        },
        {
            "id": "SMPZ_Attachments_SV98_CNC_OV_Stock",
            "name": "CNC Guns OV-SV98 M12B stock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on SV-98 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-20%",
                "sway": "-20%",
                "weight": "1004g"
            }
        },
        {
            "id": "SMPZ_Attachments_Vltor_EMOD_Buttstock",
            "name": "AR-15 Vltor EMOD Buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Vltor Weapon Systems",
            "manufacturer": "VLTOR Weapon Systems",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.vltor.com/",
            "stats": {
                "recoil": "-29%",
                "sway": "-30%",
                "weight": "390g"
            }
        },
        {
            "id": "SMPZ_Attachments_Vltor_EMOD_Buttstock_FDE",
            "name": "AR-15 Vltor EMOD Buttstock FDE",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Vltor Weapon Systems",
            "manufacturer": "VLTOR Weapon Systems",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.vltor.com/",
            "stats": {
                "recoil": "-29%",
                "sway": "-30%",
                "weight": "390g"
            }
        },
        {
            "id": "SMPZ_Attachments_SCAR_Retractable_Buttstock",
            "name": "FN SCAR retractable polymer stock black",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on FN SCAR L & H",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "recoil": "-30%",
                "sway": "-30%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_SCAR_Retractable_Buttstock_FDE",
            "name": "FN SCAR retractable polymer stock FDE",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on FN SCAR L & H",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "recoil": "-30%",
                "sway": "-30%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_SCAR_Vltor_VSS11_Buttstock",
            "name": "FN SCAR Vltor VSS-11 polymer stock black",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on FN SCAR L & H",
            "manufacturer": "VLTOR Weapon Systems",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.vltor.com/",
            "stats": {
                "recoil": "-32%",
                "sway": "-25%",
                "weight": "220g"
            }
        },
        {
            "id": "SMPZ_Attachments_SCAR_Vltor_VSS11_Buttstock_FDE",
            "name": "FN SCAR Vltor VSS-11 polymer stock FDE",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Can be attached on FN SCAR L & H",
            "manufacturer": "VLTOR Weapon Systems",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.vltor.com/",
            "stats": {
                "recoil": "-32%",
                "sway": "-25%",
                "weight": "220g"
            }
        },
        {
            "id": "SMPZ_Attachments_CQR_pistolgrip",
            "name": "AR-15 Hera Arms CQR pistol grip/buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Hera Arms",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-35%",
                "sway": "-45%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_CQR47_pistolgrip",
            "name": "AKM/AK-74 Hera Arms CQR47 pistol grip/buttstock",
            "category": "개머리판",
            "image": "",
            "images": [],
            "description": "Manufactured by Hera Arms",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-34%",
                "sway": "-45%",
                "weight": "525g"
            }
        }
    ],
    "광학 조준경": [
        {
            "id": "SMPZ_Optics_EOTECH_HHS",
            "name": "EOTech HHS",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by EOTech",
            "manufacturer": "EOTech",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.eotechinc.com/",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Optics_Leupold_Mark4_LR_65_20x50",
            "name": "Leupold Mark 4 LR 6.5-20x50 30mm riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Leupold",
            "manufacturer": "Leupold & Stevens",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.leupold.com/",
            "stats": {
                "weight": "814g"
            }
        },
        {
            "id": "SMPZ_Optics_HK_PM_II_12x50",
            "name": "Schmidt & Bender PM II 3-12x50 34mm riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Schmidt & Bender",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "1150g"
            }
        },
        {
            "id": "SMPZ_Optics_SIG_Bravo4",
            "name": "SIG Sauer BRAVO4 4x30 scope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Optics_SIG_Bravo5",
            "name": "SIG Sauer BRAVO5 5x32 scope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Optics_SIG_Romeo7",
            "name": "SIG Sauer ROMEO7 1x30 reflex sight (Prototype)",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "weight": "354g"
            }
        },
        {
            "id": "SMPZ_Optics_SIG_Romeo8T",
            "name": "SIG Sauer ROMEO8T reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "weight": "388g"
            }
        },
        {
            "id": "SMPZ_Optics_Elcan_Specter_HCO",
            "name": "ELCAN Specter HCO holographic sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by ELCAN",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "433g"
            }
        },
        {
            "id": "SMPZ_Optics_Aimpoint_CompM4",
            "name": "Aimpoint CompM4 reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Aimpoint",
            "manufacturer": "Aimpoint",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aimpoint.com/",
            "stats": {
                "weight": "470g"
            }
        },
        {
            "id": "SMPZ_Optics_OKP7",
            "name": "OKP-7 reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "255g"
            }
        },
        {
            "id": "SMPZ_Optics_OKP7_Dovetail",
            "name": "OKP-7 dovetail reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "295g"
            }
        },
        {
            "id": "SMPZ_Optics_MRS",
            "name": "Walther MRS reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "255g"
            }
        },
        {
            "id": "SMPZ_Optics_SwampFox_Prism",
            "name": "SwampFox Trihawk Prism Scope 3x30",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by SwampFox",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "436g"
            }
        },
        {
            "id": "SMPZ_Optics_SVT_AVT_PUScope",
            "name": "PU 3.5x riflescope For SVT-40",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "this is can be used on SVT-40 & AVT-40 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "800g"
            }
        },
        {
            "id": "SMPZ_Optics_Valday_PK120",
            "name": "Valday PK-120 (1P87) reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "300g"
            }
        },
        {
            "id": "SMPZ_Optics_EOTECH_553",
            "name": "EOTech 553 holographic sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "EOTech",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.eotechinc.com/",
            "stats": {
                "weight": "349g"
            }
        },
        {
            "id": "SMPZ_Optics_Burris_FastFire3_FFP",
            "name": "Burris FastFire 3 Reflex Sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Burris",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "53g"
            }
        },
        {
            "id": "SMPZ_Optics_Aimpoint_T1",
            "name": "Aimpoint Micro T-1 reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Aimpoint",
            "manufacturer": "Aimpoint",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aimpoint.com/",
            "stats": {
                "weight": "84g"
            }
        },
        {
            "id": "SMPZ_Optics_Aimpoint_H2",
            "name": "Aimpoint H-2 reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Aimpoint",
            "manufacturer": "Aimpoint",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aimpoint.com/",
            "stats": {
                "weight": "94g"
            }
        },
        {
            "id": "SMPZ_Optics_SIG_Romeo4",
            "name": "SIG Sauer ROMEO 4 reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "weight": "90g"
            }
        },
        {
            "id": "SMPZ_Optics_EOTECH_G33_Magnifier",
            "name": "EOTech G33 Magnifier",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by EOTech",
            "manufacturer": "EOTech",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.eotechinc.com/",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Optics_Nightforce_ATACR_35x56",
            "name": "Nightforce ATACR 7-35x56 riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Nightforce",
            "manufacturer": "Nightforce Optics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.nightforceoptics.com/",
            "stats": {
                "weight": "1339g"
            }
        },
        {
            "id": "SMPZ_Optics_Helsoldt_FF4_16x56",
            "name": "Hensoldt ZF 4-16x56 FF LT riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Helsoldt",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "1126g"
            }
        },
        {
            "id": "SMPZ_Optics_SwampFox_Justice",
            "name": "SwampFox Justice Reflex Sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by SwampFox",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "25g"
            }
        },
        {
            "id": "SMPZ_Optics_Trijicon_SRO",
            "name": "Trijicon SRO Reflex Sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Trijicon",
            "manufacturer": "Trijicon",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.trijicon.com/",
            "stats": {
                "weight": "25g"
            }
        },
        {
            "id": "SMPZ_Optics_Steiner_R1X",
            "name": "Steiner R1X Reflex Sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Steiner",
            "manufacturer": "Steiner Optics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.steiner-optics.com/",
            "stats": {
                "weight": "272g"
            }
        },
        {
            "id": "SMPZ_Optics_VOMZ_Pilad_P1x42",
            "name": "VOMZ Pilad P1x42 Weaver Reflex Sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by VOMZ",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "160g"
            }
        },
        {
            "id": "SMPZ_Optics_Aimpoint_ACRO_P1",
            "name": "Aimpoint ACRO P-1 reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Aimpoint",
            "manufacturer": "Aimpoint",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aimpoint.com/",
            "stats": {
                "weight": "60g"
            }
        },
        {
            "id": "SMPZ_Flashlights_WMX",
            "name": "Insight WMX200 tactical flashlight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Max light distance: 100m",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "210g"
            }
        },
        {
            "id": "SMPZ_Attachments_Saiga_CSS_Rail",
            "name": "Saiga-12 CSS rear sight rail mount",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Can be attached on Saiga only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "30g"
            }
        },
        {
            "id": "SMPZ_Attachments_TigerShark_SightMount",
            "name": "Glock Aimtech Tiger Shark sight mount",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 only.",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_G36_Flip_up_Rail",
            "name": "HK G36 optic rail with flip-up sights",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Can be attached on HK G36 only",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "453g"
            }
        },
        {
            "id": "SMPZ_Attachments_AUG_M1_High_Mount",
            "name": "Steyr AUG A3 M1 high sight mount",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Can be attached on AUG A3 only",
            "manufacturer": "Steyr Mannlicher",
            "manufacturerLogo": "assets/steyr-logo.png",
            "manufacturerUrl": "https://www.steyr-arms.com/en/",
            "stats": {
                "weight": "154g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1A_Arms18_Scope_Mount",
            "name": "M14 A.R.M.S. #18 scope mount",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Can be attached on M1A only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Optics_Vortex_UH1",
            "name": "Vortex Razor AMG UH-1 holographic sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Vortex",
            "manufacturer": "Vortex Optics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://vortexoptics.com/",
            "stats": {
                "weight": "330g"
            }
        },
        {
            "id": "SMPZ_Optics_SIG_Tango6T",
            "name": "SIG TANGO6T 1-6x24 30mm riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "weight": "570g"
            }
        },
        {
            "id": "SMPZ_Optics_Vortex_Razor",
            "name": "Vortex Razor HD Gen.2 1-6x24 30mm riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Vortex",
            "manufacturer": "Vortex Optics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://vortexoptics.com/",
            "stats": {
                "weight": "570g"
            }
        },
        {
            "id": "SMPZ_Optics_Vortex_Razor_Black",
            "name": "Vortex Razor HD Gen.2 1-6x24 30mm riflescope Black",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Vortex",
            "manufacturer": "Vortex Optics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://vortexoptics.com/",
            "stats": {
                "weight": "570g"
            }
        },
        {
            "id": "SMPZ_Optics_Vortex_Razor_MountFDE",
            "name": "Vortex Razor HD Gen.2 1-6x24 30mm riflescope Mount FDE",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Vortex",
            "manufacturer": "Vortex Optics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://vortexoptics.com/",
            "stats": {
                "weight": "570g"
            }
        },
        {
            "id": "SMPZ_Optics_RMR",
            "name": "Trijicon RMR reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Trijicon",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.trijicon.com/",
            "stats": {
                "weight": "25g"
            }
        },
        {
            "id": "SMPZ_Optics_M4_CarryHandle",
            "name": "AR-15 rear sight carry handle",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Can be attached on AR15 series Rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Optics_EOTECH_Vudu",
            "name": "EOTech Vudu 1-6x24 30mm riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by EOTech",
            "manufacturer": "EOTech",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.eotechinc.com/",
            "stats": {
                "weight": "570g"
            }
        },
        {
            "id": "SMPZ_Optics_EOTECH_Vudu_MountFDE",
            "name": "EOTech Vudu 1-6x24 30mm riflescope Mount FDE",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by EOTech",
            "manufacturer": "EOTech",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.eotechinc.com/",
            "stats": {
                "weight": "570g"
            }
        },
        {
            "id": "SMPZ_Optics_EOTECH_EXPS3",
            "name": "EOTech EXPS3 holographic sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by EOTech",
            "manufacturer": "EOTech",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.eotechinc.com/",
            "stats": {
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Optics_EOTECH_XPS3",
            "name": "EOTech XPS3-0 holographic sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by EOTech",
            "manufacturer": "EOTech",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.eotechinc.com/",
            "stats": {
                "weight": "225g"
            }
        },
        {
            "id": "SMPZ_Optics_BOSS",
            "name": "Wilcox BOSS Xe reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "250g"
            }
        },
        {
            "id": "SMPZ_Optics_HK_PM_II_8x24",
            "name": "Schmidt & Bender PM II 1-8x24 30mm riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Schmidt & Bender",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "1114g"
            }
        },
        {
            "id": "SMPZ_Optics_HK_PM_II_8x24_MountFDE",
            "name": "Schmidt & Bender PM II 1-8x24 30mm riflescope Mount FDE",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Schmidt & Bender",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "1114g"
            }
        },
        {
            "id": "SMPZ_Optics_PSO_1M2_Optic",
            "name": "BelOMO PSO-1M2 4x24 scope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type Rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "600g"
            }
        },
        {
            "id": "SMPZ_Optics_NPZ_Obzor",
            "name": "NPZ PK1 Obzor dovetail reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type Rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "520g"
            }
        },
        {
            "id": "SMPZ_Optics_PKAA",
            "name": "BelOMO PK-AA dovetail reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "450g"
            }
        },
        {
            "id": "SMPZ_Optics_EKP_1S",
            "name": "Axion Kobra EKP-1S-03 dovetail reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "273g"
            }
        },
        {
            "id": "SMPZ_Optics_Leupold_HAMR",
            "name": "Leupold Mark 4 HAMR 4x24 DeltaPoint hybrid assault scope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Leupold & Stevens",
            "manufacturer": "Leupold & Stevens",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.leupold.com/",
            "stats": {
                "weight": "411g"
            }
        },
        {
            "id": "SMPZ_Optics_Elcan_Specter",
            "name": "ELCAN SpecterDR 1x/4x scope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by ELCAN",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "640g"
            }
        },
        {
            "id": "SMPZ_Optics_Elcan_Specter_FDE",
            "name": "ELCAN SpecterDR 1x/4x scope FDE",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by ELCAN",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "640g"
            }
        },
        {
            "id": "SMPZ_Optics_Elcan_Specter_Tan",
            "name": "ELCAN SpecterDR 1x/4x scope Tan",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by ELCAN",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "640g"
            }
        },
        {
            "id": "SMPZ_Optics_Burris_FullField_TAC30",
            "name": "Burris FullField TAC30 1-4x24 30mm riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Burris",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "570g"
            }
        },
        {
            "id": "SMPZ_Optics_MarchTactical_3x24_FFP",
            "name": "March Tactical 3-24x42 FFP 30mm riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by March Tactical",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "854g"
            }
        },
        {
            "id": "SMPZ_Optics_HK_PM_II_25x56",
            "name": "Schmidt & Bender PM II 5-25x56 34mm riflescope",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Schmidt & Bender",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "1310g"
            }
        },
        {
            "id": "SMPZ_Optics_Milkor_M32_M2A1_Reflex",
            "name": "Milkor M2A1 grenade launcher reflex sight",
            "category": "광학 조준경",
            "image": "",
            "images": [],
            "description": "Manufactured by Milkor USA inc",
            "manufacturer": "Milkor USA",
            "manufacturerLogo": "assets/milkor-logo.png",
            "manufacturerUrl": "https://milkorusa.com/",
            "stats": {
                "weight": "600g"
            }
        }
    ],
    "권총 손잡이": [
        {
            "id": "SMPZ_Attachments_SA58_FAB_Defense_AG_FAL_pistolgrip",
            "name": "SA58 FAB Defense AG-FAL pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Fits on SA58",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "sway": "-23%",
                "weight": "88g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_SAW_Style_pistolgrip",
            "name": "SA58 SAW-style pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Fits on SA58",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "sway": "-20%",
                "weight": "88g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_PUFGUN_SG_M2_pistolgrip",
            "name": "AK PUFGUN SG-M2 pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "sway": "-22%",
                "weight": "132g"
            }
        },
        {
            "id": "SMPZ_Attachments_Orion_pistolgrip",
            "name": "AR-15 Aeroknox Orion pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Aeroknox",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-20%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_TD_HEX_pistolgrip",
            "name": "AR-15 Tactical Dynamics Hexgrip pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Tactical Dynamics",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-24%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_Colt_A1_pistolgrip",
            "name": "AR-15 Colt A1 pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Colt Manufacturing",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "sway": "-1%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_TD_Skeletonzied_pistolgrip",
            "name": "AR-15 Tactical Dynamics Skeletonzied pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Tactical Dynamics",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-23%",
                "weight": "38g"
            }
        },
        {
            "id": "SMPZ_Attachments_Sierra_Precision_SPR_pistolgrip",
            "name": "AR-15 Sierra Precision SPR pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Sierra Precision",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-20%",
                "weight": "90g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK_BattleGrip_Beavertail_pistolgrip",
            "name": "AR-15 HK Battle Grip Beavertail pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Heckler & Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "sway": "-10%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_B5_System_PGrip23_pistolgrip",
            "name": "AR-15 B5 Systems P-Grip 23 pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by B5 Systems",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-9%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_Magpul_MOE_K2_pistolgrip",
            "name": "AR-15 Magpul MOE-K2 pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-21%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_SIG_MCX_pistolgrip",
            "name": "AR-15 SIG MCX pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "sway": "-15%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_SIG_MPX_pistolgrip",
            "name": "AR-15 SIG MPX pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "sway": "-15%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Gladman_Skeleton_pistolgrip",
            "name": "AK Gladman Skeleton pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "sway": "-35%",
                "weight": "130g"
            }
        },
        {
            "id": "SMPZ_Attachments_TyrantDesigns_Chevron_pistolgrip",
            "name": "AR-15 Tyrant Designs MOD Chevron pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Tyrant Designs",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-43%",
                "weight": "112g"
            }
        },
        {
            "id": "SMPZ_Attachments_TyrantDesigns_Chevron_pistolgrip_Yellow",
            "name": "AR-15 Tyrant Designs MOD Chevron pistol grip (Yellow)",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Tyrant Designs",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-43%",
                "weight": "112g"
            }
        },
        {
            "id": "SMPZ_Attachments_ASVAL_Zenit_RK3_pistolgrip",
            "name": "AS VAL Zenit RK-3 Pistol Grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-5%",
                "sway": "-35%",
                "weight": "212g"
            }
        },
        {
            "id": "SMPZ_Attachments_M60E6_Pistolgrip_Group",
            "name": "M60E6 Trigger Group",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_M60E4_Pistolgrip_Group",
            "name": "M60E4 Trigger Group",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_M60E4_Pistolgrip",
            "name": "M60E4 Pistol Grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on M60 LMGs only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {}
        },
        {
            "id": "SMPZ_Attachments_DanielDefense_Enhanced_pistolgrip",
            "name": "AR-15 Daniel Defense Enhanced pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "sway": "-40%",
                "weight": "90g"
            }
        },
        {
            "id": "SMPZ_Attachments_DanielDefense_Enhanced_pistolgrip_MilSpec",
            "name": "AR-15 Daniel Defense Enhanced pistol grip (Mil Spec+)",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "sway": "-40%",
                "weight": "90g"
            }
        },
        {
            "id": "SMPZ_Attachments_CQR_Grip_UCP",
            "name": "AR-15 Hera Arms CQR pistol grip/buttstock",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Hera Arms",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-45%",
                "sway": "-55%",
                "weight": "167g"
            }
        },
        {
            "id": "SMPZ_Attachments_AGS74_pistolgrip",
            "name": "AK Custom Arms AGS-74 PRO + Sniper Kit pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-25%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_Ergo_pistolgrip",
            "name": "AR 15 HK Ergo PSG-1 style pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "sway": "-25%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_F1_Skeletonized_STY1_pistolgrip",
            "name": "AR-15 F1 Firearms Skeletonized Style 1 pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Made by SH00TM3P1Z(SMPZ)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-21%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_F1_Skeletonized_STY2_pistolgrip",
            "name": "AR-15 F1 Firearms Skeletonized Style 2 pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Made by SH00TM3P1Z(SMPZ)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-22%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_F1_Skeletonized_STY2_PC_pistolgrip",
            "name": "AR-15 F1 Firearms Skeletonized Style 2 PC pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Made by SH00TM3P1Z(SMPZ)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-23%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_MOE_pistolgrip",
            "name": "AR-15 Magpul MOE pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-20%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_Naroh_pistolgrip",
            "name": "AR-15 Naroh Arms GRAL-S pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Naroh Arms",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-25%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_RK3_pistolgrip",
            "name": "AK Zenit RK-3 pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "sway": "-22%",
                "weight": "225g"
            }
        },
        {
            "id": "SMPZ_Attachments_Hogue_pistolgrip",
            "name": "Hogue OverMolded Rubber Grip Black",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-19%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_Hogue_pistolgrip_FDE",
            "name": "Hogue OverMolded Rubber Grip FDE",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-19%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_Hogue_pistolgrip_GE",
            "name": "Hogue OverMolded Rubber Grip Ghillie Earth",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-19%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_Hogue_pistolgrip_GG",
            "name": "Hogue OverMolded Rubber Grip Ghillie Green",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-19%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_Hogue_pistolgrip_OD",
            "name": "Hogue OverMolded Rubber Grip Olive Drab",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-19%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_HG15_pistolgrip",
            "name": "AR-15 Hera Arms HG-15 pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Made by SH00TM3P1Z(SMPZ)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-20%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_SAW_pistolgrip",
            "name": "AK TAPCO SAW-Style pistol grip Black",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-21%",
                "weight": "130g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_SAW_pistolgrip_FDE",
            "name": "AK TAPCO SAW-Style pistol grip FDE",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-21%",
                "weight": "130g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_EPG_pistolgrip",
            "name": "AK Strike Industries Enhanced Pistol Grip Black",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "Strike Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.strikeindustries.com/",
            "stats": {
                "sway": "-18%",
                "weight": "91g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_EPG_pistolgrip_FDE",
            "name": "AK Strike Industries Enhanced Pistol Grip FDE",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "Strike Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.strikeindustries.com/",
            "stats": {
                "sway": "-18%",
                "weight": "91g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_MOE_pistolgrip",
            "name": "AK Magpul MOE pistol grip Black",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-22%",
                "weight": "130g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_AGR47_pistolgrip",
            "name": "AK FAB Defense AGR-47 pistol grip FDE",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-17%",
                "weight": "120g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP155_Ultima_pistolgrip",
            "name": "MP-155 Ultima pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Kalashnikov Concern(Group)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-19%",
                "weight": "130g"
            }
        },
        {
            "id": "SMPZ_Attachments_Stark_pistolgrip",
            "name": "AR-15 Stark AR Rifle Grip Black",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Stark Equipment Corp",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-21%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_Stark_pistolgrip_FDE",
            "name": "AR-15 Stark AR Rifle Grip FDE",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Stark Equipment Corp",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-21%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_DLG123_pistolgrip",
            "name": "AR-15 DLG Tactical DLG-123 pistol grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by DLG Tactical",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-15%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_MIAD_pistolgrip",
            "name": "AR-15 Magpul MIAD pistol grip FDE",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-18%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_MIAD_pistolgrip_Black",
            "name": "AR-15 Magpul MIAD pistol grip Black",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-18%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_SIG_Reduced_Angle_pistolgrip",
            "name": "AR-15 SIG Sauer Reduced Angle Pistol Grip",
            "category": "권총 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "sway": "-26%",
                "weight": "80g"
            }
        }
    ],
    "기계식 조준기": [
        {
            "id": "SMPZ_Attachments_Leapers_UTG_A2_Frontsight",
            "name": "AR-15 Leapers UTG Low Profile A2 front sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Leapers",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_Colt_A2_Rearsight",
            "name": "AR-15 Colt A2 rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Colt Manufacturing",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP7_Frontsight",
            "name": "HK MP7 flip-up frontsight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Heckler&Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP7_Rearsight",
            "name": "HK MP7 flip-up rearsight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Heckler&Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_M60E4_Frontsight",
            "name": "M60E4 Front Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Can be attached on M60 LMGs only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "84g"
            }
        },
        {
            "id": "SMPZ_Attachments_M60_Rearsight",
            "name": "M60 Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-3%",
                "weight": "92g"
            }
        },
        {
            "id": "SMPZ_Attachments_M60E6_Frontsight_Rail",
            "name": "M60E6 Front Sight Rail",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Can be attached on M60 LMGs only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "78g"
            }
        },
        {
            "id": "SMPZ_Attachments_MBUS_Gen3_Frontsight",
            "name": "Magpul MBUS Gen3 flip-up front sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-3%",
                "weight": "34g"
            }
        },
        {
            "id": "SMPZ_Attachments_MBUS_Gen3_Frontsight_FDE",
            "name": "Magpul MBUS Gen3 flip-up front sight FDE",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-3%",
                "weight": "34g"
            }
        },
        {
            "id": "SMPZ_Attachments_MBUS_Gen3_Rearsight",
            "name": "Magpul MBUS Gen3 flip-up rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-3%",
                "weight": "34g"
            }
        },
        {
            "id": "SMPZ_Attachments_MBUS_Gen3_Rearsight_FDE",
            "name": "Magpul MBUS Gen3 flip-up rear sight FDE",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-3%",
                "weight": "34g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK417_Frontsight",
            "name": "HK 417 font sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Heckler&Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "sway": "-3%",
                "weight": "34g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK417_Rearsight",
            "name": "HK 417 rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Heckler&Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "sway": "-3%",
                "weight": "34g"
            }
        },
        {
            "id": "SMPZ_Attachments_ARMS_40_Rearsight",
            "name": "A.R.M.S. #40 Flip-Up Rearsight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by A.R.M.S. Inc",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-3%",
                "weight": "70g"
            }
        },
        {
            "id": "SMPZ_Attachments_Matech_BUIS_Rearsight",
            "name": "MaTech BUIS Rearsight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by MaTech",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-3%",
                "weight": "95g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_RD_ERS_Rearsight",
            "name": "AK RD Enhanced V2 Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "26g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK12_Rearsight",
            "name": "AK-12 Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "25g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK74_Rearsight",
            "name": "AK-74 Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "25g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKM_Rearsight",
            "name": "AKM Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "25g"
            }
        },
        {
            "id": "SMPZ_Attachments_RPK16_Rearsight",
            "name": "RPK-16 Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "25g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Enhanced_Rearsight",
            "name": "AK Enhanced CQB Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-10%",
                "weight": "70g"
            }
        },
        {
            "id": "SMPZ_Attachments_Mosin_Rearsight",
            "name": "Mosin Nagant Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-10%",
                "weight": "70g"
            }
        },
        {
            "id": "SMPZ_Attachments_SKS_Rearsight",
            "name": "SKS Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-10%",
                "weight": "70g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Tula_TT01_Rail_Rearsight",
            "name": "AK Taktika Tula TT01 Rail Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_G36_KAC_Frontsight",
            "name": "HK G36 KAC Front Flip UP Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "sway": "-3%",
                "weight": "68g"
            }
        },
        {
            "id": "SMPZ_Attachments_G36_KAC_Rearsight",
            "name": "HK G36 KAC 600m Rear Sight Rail",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "weight": "108g"
            }
        },
        {
            "id": "SMPZ_Attachments_DanielDefense_Fixed_Frontsight",
            "name": "AR-15 Daniel Defense Fixed Front Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "sway": "-3%",
                "weight": "30g"
            }
        },
        {
            "id": "SMPZ_Attachments_DanielDefense_Fixed_Rearsight",
            "name": "AR-15 Daniel Defense Fixed Rear Sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "sway": "-3%",
                "weight": "40g"
            }
        },
        {
            "id": "SMPZ_Attachments_Defiance_Frontsight",
            "name": "KRISS Defiance low profile flip-up front sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by KRISS",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_Defiance_Rearsight",
            "name": "KRISS Defiance low profile flip-up rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by KRISS",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_Frontsight",
            "name": "KAC Folding front sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_Rearsight",
            "name": "KAC Folding rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_Micro_Frontsight",
            "name": "KAC Folding Micro front sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_Micro_Rearsight",
            "name": "KAC Folding Micro rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_MBUS_Frontsight",
            "name": "Magpul MBUS Gen2 flip-up front sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_MBUS_Rearsight",
            "name": "Magpul MBUS Gen2 flip-up rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_MCX_Frontsight",
            "name": "MCX flip-up front sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_MCX_Rearsight",
            "name": "MCX flip-up rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_Frontsight",
            "name": "MPX flip-up front sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_Rearsight",
            "name": "MPX flip-up rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_SCAR_Rearsight",
            "name": "FN SCAR flip-up rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by FN Firearms",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_Rearsight",
            "name": "HK 416A5 flip-up rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Heckler & Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "sway": "-3%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_TFX_Frontsight",
            "name": "Glock TruGlo TFX front sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 & Glock 18C only",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "weight": "7g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_TFX_Rearsight",
            "name": "Glock TruGlo TFX rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 & Glock 18C only",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "weight": "7g"
            }
        },
        {
            "id": "SMPZ_Attachments_Saiga_Chaos_Frontsight",
            "name": "Chaos HK Style front sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Chaos USA",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "sway": "-3%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_Saiga_Chaos_Rearsight",
            "name": "Chaos HK Style rear sight",
            "category": "기계식 조준기",
            "image": "",
            "images": [],
            "description": "Manufactured by Chaos USA",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "sway": "-3%",
                "weight": "100g"
            }
        }
    ],
    "레이저 표적기": [
        {
            "id": "SMPZ_Lasers_NcSTAR_TBL",
            "name": "NcSTAR Tactical Blue Laser",
            "category": "레이저 표적기",
            "image": "",
            "images": [],
            "description": "Blue laser beam",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Lasers_Wilcox_RAID_XE_Black",
            "name": "Wilcox RAID XE Tactical Laser",
            "category": "레이저 표적기",
            "image": "",
            "images": [],
            "description": "Red laser beam",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Lasers_BE_Meyers_MAWL",
            "name": "B.E. Meyers MAWL-C1+ tactical device",
            "category": "레이저 표적기",
            "image": "",
            "images": [],
            "description": "Green laser beam",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Lasers_Insight_Anpeq2_IR",
            "name": "Insight AN/PEQ-2 tactical laser",
            "category": "레이저 표적기",
            "image": "",
            "images": [],
            "description": "IR Laser",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Lasers_Steiner_DBAL_A4",
            "name": "Steiner DBAL-A4 Dual Beam Aiming Laser",
            "category": "레이저 표적기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Steiner Optics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.steiner-optics.com/",
            "stats": {
                "recoil": "-3%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Lasers_Anpeq15",
            "name": "L3Harris AN/PEQ-15 tactical device",
            "category": "레이저 표적기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Lasers_Perst3",
            "name": "Zenit Perst-3 tactical device",
            "category": "레이저 표적기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-3%",
                "weight": "200g"
            }
        }
    ],
    "리시버": [
        {
            "id": "SMPZ_Attachments_AR15_Radian_Weapons_Model1_Receiver",
            "name": "AR-15 Radian Weapons Model 1 Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "A precision CNC machined upper receiver for the AR-15 platform. Manufactured by Radian Weapons. Note: This receiver cannot be installed on the Radian Model 1.",
            "manufacturer": "Radian Weapons",
            "manufacturerLogo": "assets/radian-logo.png",
            "manufacturerUrl": "https://www.radianweapons.com/",
            "stats": {
                "recoil": "-5%",
                "weight": "300g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_M16A1_Standard_Receiver",
            "name": "AR-15 Colt M16A1E1 Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "An upper receiver for the M16A1E1 assault rifle manufactured by Colt. A prototype variant between the M16A1 and M16A2, which also served as the basis for the Canadian C7. Widely fitted to various special carbines produced by Colt during the 1980s. Note: This receiver cannot be installed on the M16A1.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-3%",
                "weight": "370g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_M16A2_Standard_Receiver",
            "name": "AR-15 Colt M16A2 Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "An upper receiver for the M16A2 assault rifle manufactured by Colt. Note: This receiver cannot be installed on the M16A2.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-3%",
                "weight": "390g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_WOS_Receiver",
            "name": "AR-15 Singuard Arms Wages of Sin Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-6%",
                "weight": "188g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_BCM_MK2_Receiver",
            "name": "AR-15 BCM Mk.2 Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Manufactured by Bravo Company Manufacturing",
            "manufacturer": "Bravo Company MFG",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://bravocompanyusa.com/",
            "stats": {
                "recoil": "-7%",
                "weight": "440g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_ADAR2_Standard_Receiver",
            "name": "ADAR 2-15 Standard Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+1%",
                "weight": "270g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_TTI_MUR_Receiver",
            "name": "AR-15 Vltor MUR-1S Upper Receiver With Forward Assist",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Manufactured by Vltor Systems and Collaborated with TTI",
            "manufacturer": "VLTOR Weapon Systems",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.vltor.com/",
            "stats": {
                "recoil": "-5%",
                "weight": "271g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_AX15_Receiver",
            "name": "AR-15 Aeroknox AX-15 Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "285g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Gen3_Receiver",
            "name": "AR-15 Noveske Gen.3 Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-2%",
                "weight": "212g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_MUR_Receiver",
            "name": "AR-15 Vltor MUR-1S Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 rifles only",
            "manufacturer": "VLTOR Weapon Systems",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.vltor.com/",
            "stats": {
                "recoil": "-5%",
                "weight": "246g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_M4_Standard_Receiver",
            "name": "Colt M4A1 Standard Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 rifles only",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-1%",
                "weight": "270g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Zenit_B33_Receiver",
            "name": "AK Zenit B-33 dust cover",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifle only.",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_DogLeg_Receiver",
            "name": "AK TWS Dog Leg Rail dust cover",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifle only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "195g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_PDC_Receiver",
            "name": "AK FAB Defense PDC dust cover",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifle only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "202g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKS74U_Pilgrim_Receiver",
            "name": "AKS-74U Legal Arsenal Pilgrim Railed Dust Cover",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "120g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_Moto_Receiver",
            "name": "Glock Moto Cut pistol slide",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Attached on Glock17 only.",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "weight": "190g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_Viper_Receiver",
            "name": "Glock Viper Cut pistol slide",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Attached on Glock17 only.",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "weight": "190g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_ZT_RMR_Receiver",
            "name": "Glock ZEV Tech HEX Gen3 RMR pistol slide",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Attached on Glock17 only.",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "weight": "190g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_ZT_Spartan_Receiver",
            "name": "Glock ZEV Tech HEX Spartan RMR pistol slide",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Attached on Glock17 only.",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "weight": "190g"
            }
        },
        {
            "id": "SMPZ_Attachments_P90_Effen90_Upper_Receiver",
            "name": "FN P90 EFFEN 90 Upper Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on FN P90 only.",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "weight": "250g"
            }
        },
        {
            "id": "SMPZ_Attachments_AUG_Vltor_Receiver_with_Rail",
            "name": "Steyr AUG A3 Vltor receiver with Rail",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on AUG A3 only",
            "manufacturer": "Steyr Mannlicher",
            "manufacturerLogo": "assets/steyr-logo.png",
            "manufacturerUrl": "https://www.steyr-arms.com/en/",
            "stats": {
                "recoil": "-5%",
                "weight": "1400g"
            }
        },
        {
            "id": "SMPZ_Attachments_SCAR_H_X17_Lower_Receiver",
            "name": "X17 SCAR-H Lower Receiver",
            "category": "리시버",
            "image": "",
            "images": [],
            "description": "Can be attached on FN SCAR-H only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "500g"
            }
        }
    ],
    "마운트": [
        {
            "id": "SMPZ_Attachments_Leapers_UTG_Universal_Shotgun_Mount",
            "name": "Leapers UTG Universal Shotgun Barrel Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on Shotguns",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "125g"
            }
        },
        {
            "id": "SMPZ_Attachments_DeltaTek_Pump_Shotgun_Sprut_Mount",
            "name": "Delta-Tek Sprut mount for pump-action shotguns",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on Pump-Shotguns",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "96g"
            }
        },
        {
            "id": "SMPZ_Attachments_SVD_CAA_DRG_Mount",
            "name": "SVD CAA DRG L-1 barrel mount rail",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on SVD & SVDS",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "75g"
            }
        },
        {
            "id": "SMPZ_Attachments_M590A1_Top_Rail_Mount",
            "name": "Mossberg 590A1 Tactical rail",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on 590A1",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "450g"
            }
        },
        {
            "id": "SMPZ_Attachments_LaRue_LT101_Riser_Mount",
            "name": "LaRue LT101 QD Tactical Picatinny Riser Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "110g"
            }
        },
        {
            "id": "SMPZ_Attachments_GBRS_Hydra_Riser_Mount",
            "name": "GBRS Aimpoint Hydra Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Aimpoint",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aimpoint.com/",
            "stats": {
                "weight": "140g"
            }
        },
        {
            "id": "SMPZ_Attachments_Unity_FAST_Riser_Mount",
            "name": "Unity FAST Optic Riser Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "140g"
            }
        },
        {
            "id": "SMPZ_Attachments_Scalarworks_LEAP_Riser_Mount",
            "name": "Scalarworks LEAP/01 Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Manufactured by Scalarworks",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_Precision_Reflex_GEN3_SPR_Rail",
            "name": "Precision Reflex GEN III SPR Top Rail",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "disgusting -_ -",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "300g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_URX_Long_Panel",
            "name": "KAC URX 3/3.1 Long Panel",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "weight": "5g"
            }
        },
        {
            "id": "SMPZ_Attachments_SVT_AVT_APS_ScopeMount",
            "name": "SVT-40 Addley Precision Steel Scope Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on SVT-40",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "300g"
            }
        },
        {
            "id": "SMPZ_Attachments_Elcan_Specter_RMR_Mount",
            "name": "Elcan SpecterDR Mounting Plate for Trijicon",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Trijicon",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.trijicon.com/",
            "stats": {
                "weight": "16g"
            }
        },
        {
            "id": "SMPZ_Attachments_Aimpoint_Standard_Mount",
            "name": "Aimpoint Micro Standard Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Aimpoint",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aimpoint.com/",
            "stats": {
                "weight": "15g"
            }
        },
        {
            "id": "SMPZ_Attachments_Aimpoint_Spacer_High_Mount",
            "name": "Aimpoint Micro Spacer High Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Aimpoint",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aimpoint.com/",
            "stats": {
                "weight": "15g"
            }
        },
        {
            "id": "SMPZ_Attachments_RMR_Mount",
            "name": "Trijicon RMR Low Profile Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Trijicon",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.trijicon.com/",
            "stats": {
                "weight": "17g"
            }
        },
        {
            "id": "SMPZ_Attachments_FiveSeven_RMR_Mount",
            "name": "FN Five-seveN MK2 RMR Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "weight": "17g"
            }
        },
        {
            "id": "SMPZ_Attachments_ROF90_RMR_Mount",
            "name": "Reptilia ROF-90 RMR mount for Geissele scope mounts",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "weight": "20g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPR45_Backup_Mount",
            "name": "NcSTAR MPR45 Backup Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "40g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_RSA55_Stock_Adapter",
            "name": "AK JMAC Customs RSA-5.5 Stock Adapter",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "30g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_AK74M_Zenit_PT_Lock_Stock_Adapter",
            "name": "AK-74M/AK-100 Zenit PT Lock",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "weight": "30g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_AKM_Zenit_PT_Lock_Stock_Adapter",
            "name": "AKM/AK-74 Zenit PT Lock",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "weight": "30g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_AKS74U_Zenit_PT_Lock_Stock_Adapter",
            "name": "AKS-74/AKS-74U Zenit PT Lock",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "weight": "30g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKM_RD_AKtoM4_Buffer_Adapter",
            "name": "AKM/AK-74 RD AK to M4 Buffer Tube Adapter",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKM_ME4_Buffer_Adapter",
            "name": "AKM/AK-74 ME4 Buffer Tube Adapter",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-1%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_SIG_Knuckle_Stock_Adapter",
            "name": "SIG Sauer Folding Knuckle Stock Adapter",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_SIG_LSHA_Stock_Adapter",
            "name": "SIG Sauer Locking Stock Hinge Assembly",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK12_Rearsight_Base_Mount",
            "name": "AK-12 Rear sight Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_RPK16_Rearsight_Base_Mount",
            "name": "RPK-16 Rear sight Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_MWS_Bipod_Adapter",
            "name": "KAC MWS Bipod Adapter",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can attach Harris HBR Bipod only.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "weight": "42g"
            }
        },
        {
            "id": "SMPZ_Attachments_Magpul_MLOK_Bipod_Adapter",
            "name": "Magpul M-LOK Bipod Adapter",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can attach Harris HBR Bipod only.",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "42g"
            }
        },
        {
            "id": "SMPZ_Attachments_AXMC_KeySlot_Bipod_Adapter",
            "name": "AI AXMC KeySlot Harris Bipod Adapter",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can attach Harris HBR Bipod only.",
            "manufacturer": "Accuracy International",
            "manufacturerLogo": "assets/ai-logo.png",
            "manufacturerUrl": "https://www.accuracyinternational.com/",
            "stats": {
                "weight": "42g"
            }
        },
        {
            "id": "SMPZ_Attachments_OdinWorks_KeyMod_Bipod_Adapter",
            "name": "Odin Works K-POD KeyMod Bipod Adapter",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can attach Harris HBR Bipod only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "42g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKS74U_Zenit_B18_Mount",
            "name": "AKS-74U Zenit B-18 Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_SVDS_Stock_Adapter",
            "name": "SVDS Lynx Arms Hinge Buffer Tube Adapter",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "127g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_ZEV_Cap",
            "name": "Glock ZEV Tech Sight Mount Cap",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "weight": "5g"
            }
        },
        {
            "id": "SMPZ_Attachments_Burris_FastFire_Weaver_Mount",
            "name": "Burris FastFire Weaver Base",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "17g"
            }
        },
        {
            "id": "SMPZ_Attachments_ProMag_Delta_Scope_Mount",
            "name": "AR-15 ProMag Delta Style Scope Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "70g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1911_NcSTAR_Mount",
            "name": "M1911A1 NcSTAR Trigger Guard Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "40g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1911_Weig_SightMount",
            "name": "M1911A1 Weigand Weig-A-Tinny Rail Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "120g"
            }
        },
        {
            "id": "SMPZ_Attachments_PKM_PKP_Zenit_B51_Mount",
            "name": "Zenitco B-51 PKM Top Rail Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "weight": "900g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP5_MTI_Scope_Mount",
            "name": "HK MP5 MFI HK Universal Scope Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "70g"
            }
        },
        {
            "id": "SMPZ_Attachments_OMM_Riser_Mount",
            "name": "Irregular Defense OMM Picatinny Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Manufactured by Irregular Defense",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "110g"
            }
        },
        {
            "id": "SMPZ_Attachments_DanielDefense_25mm_Ring_Mount",
            "name": "Daniel Defense 25mm Accessory Ring Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "weight": "60g"
            }
        },
        {
            "id": "SMPZ_Attachments_KibaArms_25mm_Ring_Mount",
            "name": "Kiba Arms 25mm Accessory Ring Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Manufactured by Kiba Arms",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_EraTac_Sunshade_Mount",
            "name": "Recknagel Era-Tac Sunshade Mount for Aimpoint-T1",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Aimpoint",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aimpoint.com/",
            "stats": {
                "weight": "15g"
            }
        },
        {
            "id": "SMPZ_Attachments_BT_QD_NAR_ACRO_Mount",
            "name": "B&T QD NAR Mount for Aimpoint ACRO P-1",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Aimpoint",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aimpoint.com/",
            "stats": {
                "weight": "15g"
            }
        },
        {
            "id": "SMPZ_Attachments_Geissele_SMR_HK_Rail_Mount",
            "name": "Geissele SMR HK Long Rail Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Manufactured by Geissele Automatics",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "weight": "70g"
            }
        },
        {
            "id": "SMPZ_Attachments_Geissele_SMR_HK_Short_Rail_Mount",
            "name": "Geissele SMR HK Short Rail Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Manufactured by Geissele Automatics",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_UCP_Mount",
            "name": "HK UCP Rear Sight Rail Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "For HK UCP",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_USP_Mount",
            "name": "HK USP Red Dot Sight Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "For HK USP",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_M9A3_Mount",
            "name": "M9A3 Sight Mount Rear Sight Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "For Beretta M9A3",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "28g"
            }
        },
        {
            "id": "SMPZ_Attachments_PKM_PKP_Zveno_Buffer_Adapter",
            "name": "PK Front Zveno Buffer Tube Adapter",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Manufactured by Front",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+3%",
                "weight": "250g"
            }
        },
        {
            "id": "SMPZ_Attachments_DanielDefense_Hndgrd_Cover",
            "name": "AR-15 Daniel Defense Rail Panel",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "weight": "5g"
            }
        },
        {
            "id": "SMPZ_Attachments_Zenit_B13V_Sidemount",
            "name": "Zenit B-13V Klassika dovetail rail platform",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "weight": "175g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Axion_Kobra_Sidemount",
            "name": "Axion Kobra dovetail sidemount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "165g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_AK303_Sidemount",
            "name": "RS Regulate AK-303M Full Length Dovetail Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "166g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_SAG_SVD_Low_Sidemount",
            "name": "SAG SVD Low Profile Dovetail Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "165g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_SVD_CAA_RGL_Sidemount",
            "name": "SVD CAA XD RGL Dovetail Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "225g"
            }
        },
        {
            "id": "SMPZ_Attachments_ASVAL_VSS_6P29M_Mount",
            "name": "VSS/VAL TOZ 6P29M mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on VSS/VAL only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "95g"
            }
        },
        {
            "id": "SMPZ_Attachments_SAG_Sidemount",
            "name": "SAG AK dovetail sidemount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "165g"
            }
        },
        {
            "id": "SMPZ_Attachments_Zenit_B13_Sidemount",
            "name": "Zenit B-13 Klassika dovetail rail platform",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "weight": "175g"
            }
        },
        {
            "id": "SMPZ_Attachments_ASVAL_VSS_SR3MP_SideMount",
            "name": "SR-3MP Dovetail Mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "110g"
            }
        },
        {
            "id": "SMPZ_Attachments_P90_Top_Rail_Mount",
            "name": "FN P90 upper receiver top rail",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on FN P90 only",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "weight": "270g"
            }
        },
        {
            "id": "SMPZ_Attachments_Mosin_Patriot_Rail_Mount",
            "name": "Mosin Arbalet Patriot rail mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on Mosin Nagant only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "220g"
            }
        },
        {
            "id": "SMPZ_Attachments_SKS_MTU017_Cover_Mount",
            "name": "SKS Leapers UTG PRO MTU017 receiver cover mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on SKS only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "220g"
            }
        },
        {
            "id": "SMPZ_Attachments_SKS_UTG_SOCOM_Mount",
            "name": "SKS Leapers UTG SOCOM rail mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on SKS only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1A_DCSB_Mount",
            "name": "M14 SAGE International DCSB mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on M1A only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1A_Vltor_CASV_Rail_Mount",
            "name": "M14 Vltor CASV-14 rail system",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on M1A only",
            "manufacturer": "VLTOR Weapon Systems",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.vltor.com/",
            "stats": {
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1A_Leapers_UTG4_Scope_Mount",
            "name": "M14 Leapers UTG-4-Point Locking Deluxe mount",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Can be attached on M1A only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "250g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP155_Ultima_Mount",
            "name": "MP-155 Ultima top rail",
            "category": "마운트",
            "image": "",
            "images": [],
            "description": "Manufactured by Kalashnikov Concern(Group)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "450g"
            }
        }
    ],
    "방아쇠": [
        {
            "id": "SMPZ_Attachments_M1911_Trik_Trigger",
            "name": "M1911A1 Caspian Arms Trik Trigger",
            "category": "방아쇠",
            "image": "",
            "images": [],
            "description": "Can be attached on M1911A1 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1911_M45A1_Trigger",
            "name": "M45A1 trigger",
            "category": "방아쇠",
            "image": "",
            "images": [],
            "description": "Can be attached on M1911A1 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "50g"
            }
        }
    ],
    "버퍼 튜브": [
        {
            "id": "SMPZ_Attachments_Colt_A2_TubeBuffer",
            "name": "AR-15 Colt A2 buffer tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-3%",
                "weight": "162g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKMS_TubeBuffer",
            "name": "AKMS FAB Defense M4-AKMS P stock adapter",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AKMS rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "436g"
            }
        },
        {
            "id": "SMPZ_Attachments_CGNL_TubeBuffer",
            "name": "AR-15 Custom Guns Buffer Tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only",
            "manufacturer": "Custom Guns",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-6%",
                "weight": "132g"
            }
        },
        {
            "id": "SMPZ_Attachments_Phase5_Hexone_TubeBuffer",
            "name": "AR-15 Phase5 Hexone buffer tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-7%",
                "weight": "180g"
            }
        },
        {
            "id": "SMPZ_Attachments_MCX_MPX_SIG_LPT_TubeBuffer",
            "name": "SIG Sauer Stock Adapter Low Profile Tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "recoil": "-4%",
                "weight": "162g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK12_TubeBuffer",
            "name": "AK-12 buffer tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "142g"
            }
        },
        {
            "id": "SMPZ_Attachments_ASVAL_NB_TubeBuffer",
            "name": "AS VAL NB Buffer Tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "161g"
            }
        },
        {
            "id": "SMPZ_Attachments_RPK16_TubeBuffer",
            "name": "RPK-16 buffer tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AK type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "weight": "142g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKM_AK74_CAA_AKTS_TubeBuffer",
            "name": "AKM/AK-74 CAA AKTS buffer tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AKMN & AK-74N & RD-704 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "weight": "240g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK74M_AK74_CAA_AKTS_TubeBuffer",
            "name": "AK-74M CAA AKTS AK74 buffer tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AK-12 & AK-15 & AK-74M only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "weight": "240g"
            }
        },
        {
            "id": "SMPZ_Attachments_Colt_Carbine_TubeBuffer",
            "name": "AR-15 Colt Carbine buffer tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-3%",
                "weight": "162g"
            }
        },
        {
            "id": "SMPZ_Attachments_ATP_TubeBuffer",
            "name": "AR-15 RTM ATP buffer tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-4%",
                "weight": "115g"
            }
        },
        {
            "id": "SMPZ_Attachments_ARE_TubeBuffer",
            "name": "AR-15 Strike Industries Advanced Receiver Extension Buffer Tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only",
            "manufacturer": "Strike Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.strikeindustries.com/",
            "stats": {
                "recoil": "-8%",
                "weight": "110g"
            }
        },
        {
            "id": "SMPZ_Attachments_ASVAL_Rotor43_Pistolgrip_Adapter",
            "name": "AS VAL Rotor 43 pistol grip with buffer tube",
            "category": "버퍼 튜브",
            "image": "",
            "images": [],
            "description": "Can be attached on AS VAL only",
            "manufacturer": "Rotor 43",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://rotor43.ru/",
            "stats": {
                "recoil": "-3%",
                "sway": "-3%",
                "weight": "65g"
            }
        }
    ],
    "소염기 / 머즐": [
        {
            "id": "SMPZ_Attachments_AK_CNC_Warrior_556_Muzzle_Device_Adapter",
            "name": "AK CNC Warrior 5.56x45 muzzle device adapter",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can attach 5.56x45 muzzle & suppressor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-1%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_AKM_KibaArms_308_Muzzle_Device_Adapter",
            "name": "AKM 7.62x39 Kiba Arms .308 muzzle device adapter",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can attach .308(7.62x51mm) muzzle & suppressor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-1%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_Fortis_RED_762x51_Muzzle",
            "name": "AR-10 Fortis RED Brake 7.62x51 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Manufactured by Fortis Manufacturing",
            "manufacturer": "Fortis Manufacturing",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://fortismfg.com/",
            "stats": {
                "recoil": "-11%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_12ga_GK02_Muzzle",
            "name": "GK-02 12ga muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on 12ga Shotguns only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "weight": "340g"
            }
        },
        {
            "id": "SMPZ_Attachments_MSR_DualPort_MuzzleBrake",
            "name": "Remigton MSR dual-port muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on MSR",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-8%",
                "weight": "70g"
            }
        },
        {
            "id": "SMPZ_Attachments_Cadex_Defense_MX1_Multi_Caliber_MuzzleBrake",
            "name": "Cadex Defense MX1 Muzzle Brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on 7.62x51mm & .338 Lapua Magnum rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-14%",
                "weight": "281g"
            }
        },
        {
            "id": "SMPZ_Attachments_SilencerCo_AC858_338_MuzzleBrake",
            "name": "SilencerCo AC-858 ASR muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on .338 Lapua Magnum rifles",
            "manufacturer": "SilencerCo",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://silencerco.com/",
            "stats": {
                "recoil": "-6%",
                "weight": "110g"
            }
        },
        {
            "id": "SMPZ_Attachments_AseUltra_BoreLock_338_MuzzleBrake",
            "name": "Ase Utra BoreLock muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on .338 Lapua Magnum rifles",
            "manufacturer": "Ase Utra",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aseutra.fi/",
            "stats": {
                "recoil": "-5%",
                "weight": "192g"
            }
        },
        {
            "id": "SMPZ_Attachments_Noveske_KX3_556_Muzzle",
            "name": "AR-15 Noveske KX3 5.56x45 flash hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on 5.56x45 rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_Colt_USGI_A1_3Prong_556_Muzzle",
            "name": "AR-15 Colt USGI A1 3-Prong 5.56 Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Manufactured by Colt Manufacturing",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-4%",
                "weight": "64g"
            }
        },
        {
            "id": "SMPZ_Attachments_Colt_USGI_A2_556_Muzzle",
            "name": "AR-15 Colt USGI A2 5.56 Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on 5.56x45 rifles",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-5%",
                "weight": "64g"
            }
        },
        {
            "id": "SMPZ_Attachments_Ferfrans_CQB_556_Muzzle",
            "name": "AR-15 Ferfrans CQB 5.56 Muzzle Brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on 5.56x45 rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-8%",
                "weight": "300g"
            }
        },
        {
            "id": "SMPZ_Attachments_Ferfrans_556_CRD",
            "name": "Ferfrans CQB 5.56 Concussion Reduction Device",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on Ferfrans CQB Muzzle Brake",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-8%",
                "weight": "140g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_FSK_762x51_Muzzle",
            "name": "AR-10 KAC QDC 7.62x51 Flash Hider Suppressor Kit",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-6%",
                "weight": "110g"
            }
        },
        {
            "id": "SMPZ_Attachments_PotomacArmory_M110_762x51_Muzzle",
            "name": "AR-10 Potomac Armory M110 7.62x51 Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-8%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_M82A1_Muzzle",
            "name": "Barrett M82A1 Muzzle Brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Barrett Firearms",
            "manufacturerLogo": "assets/barrett-logo.png",
            "manufacturerUrl": "https://barrett.net/",
            "stats": {
                "recoil": "-13%",
                "weight": "620g"
            }
        },
        {
            "id": "SMPZ_Attachments_SureFire_Warden_FastAttach_Multi_Caliber_Muzzle",
            "name": "SureFire Warden Fast-Attach Blast Regulator",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on 5.56x45 & 7.62x51 rifles",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "-10%",
                "weight": "281g"
            }
        },
        {
            "id": "SMPZ_Attachments_SureFire_SF3P_556_Muzzle",
            "name": "AR-15 SureFire SF3P 5.56x45 Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on 5.56x45 rifles",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "-6%",
                "weight": "60g"
            }
        },
        {
            "id": "SMPZ_Attachments_SureFire_SF4P_556_Muzzle",
            "name": "AR-15 SureFire SF4P 5.56x45 Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on 5.56x45 rifles",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "-6%",
                "weight": "60g"
            }
        },
        {
            "id": "SMPZ_Attachments_SCAR_L_556_Muzzle",
            "name": "FN SCAR-L 5.56x45 Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on 5.56x45 rifles",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "recoil": "-2%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_SCAR_H_762x51_Muzzle",
            "name": "AR-10 AAC SCAR-SD 51T 7.62x51 Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Advanced Armament Corporation",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://advanced-armament.com/",
            "stats": {
                "recoil": "-2%",
                "weight": "160g"
            }
        },
        {
            "id": "SMPZ_Attachments_HKG28_762x51_Muzzle",
            "name": "HK Prolonged 7.62x51 Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-2%",
                "weight": "122g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_QDC_762x51_Muzzle",
            "name": "AR-10 KAC QDC 7.62x51 Muzzle Brake Kit",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-9%",
                "weight": "145g"
            }
        },
        {
            "id": "SMPZ_Attachments_AAC_51T_762x51_Muzzle",
            "name": "AR-10 AAC Blackout 51T 7.62x51 Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Advanced Armament Corporation",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://advanced-armament.com/",
            "stats": {
                "recoil": "-5%",
                "weight": "122g"
            }
        },
        {
            "id": "SMPZ_Attachments_SPR_556_Muzzle",
            "name": "AR-15 Allen Engineering SPR Brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on 5.56x45 rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-9%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_Masada_Muzzle",
            "name": "Magpul Masada Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-6%",
                "weight": "70g"
            }
        },
        {
            "id": "SMPZ_Attachments_ASVAL_Mod4_JailBreak_Muzzle_Device",
            "name": "AS VAL NB MOD.4 JailBrake Muzzle Device",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "weight": "73g"
            }
        },
        {
            "id": "SMPZ_Attachments_ASVAL_Mod4_Suppressor_Cap",
            "name": "AS VAL NB MOD.4 Suppressor Cap",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-2%",
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1911_AO_Muzzle",
            "name": "M1911 Anarchy Outdoors .45 ACP Muzzle Brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "weight": "105g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP7_SureFire_Muzzle",
            "name": "HK MP7 SureFire SF3P 4.6x30 Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Manufactured by SureFire",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "-2%",
                "weight": "72g"
            }
        },
        {
            "id": "SMPZ_Attachments_XM109_DualPort_Muzzle",
            "name": "Barrett XM109 Dual-Port Muzzle Brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Manufactured by Barrett Firearms",
            "manufacturer": "Barrett Firearms",
            "manufacturerLogo": "assets/barrett-logo.png",
            "manufacturerUrl": "https://barrett.net/",
            "stats": {
                "recoil": "-10%",
                "weight": "670g"
            }
        },
        {
            "id": "SMPZ_Attachments_RPD_Thread_Protector_Muzzle",
            "name": "RPD Barrel Thread Protector",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "10g"
            }
        },
        {
            "id": "SMPZ_Attachments_PKM_Muzzle",
            "name": "PKM Muzzle Brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-6%",
                "weight": "63g"
            }
        },
        {
            "id": "SMPZ_Attachments_HUXWRX_762x51_Muzzle",
            "name": "AR-10 HUXWRX 7.62x51 Flash Hider-QD",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Manufactured by HUman eXposure WORKShop Safety Co (HUXWRX)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "weight": "140g"
            }
        },
        {
            "id": "SMPZ_Attachments_Aero556_Muzzle",
            "name": "AR-15 Aeroknox Butterfly 5.56x45 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "weight": "70g"
            }
        },
        {
            "id": "SMPZ_Attachments_Alien556_Muzzle",
            "name": "AR-15 AlienTech 5.56x45 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-11%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_ASR556_Muzzle",
            "name": "AR-15 SilencerCo ASR 5.56x45 flash hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "SilencerCo",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://silencerco.com/",
            "stats": {
                "recoil": "-9%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_blitz556_Muzzle",
            "name": "AR-15 HK BLITZ 5.56x45 flash hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-11%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_bulletec556_Muzzle",
            "name": "AR-15 Bulletec ST-6012 5.56x45 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_cc450_556_Muzzle",
            "name": "AR-15 DoubleStar Carlson Tac Comp 5.56x45 compensator",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-9%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_12ga_Claw_Muzzle",
            "name": "Tromix Monster Claw 12ga muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on 12ga Shotguns only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-17%",
                "weight": "340g"
            }
        },
        {
            "id": "SMPZ_Attachments_claymore556_Muzzle",
            "name": "AR-15 TROY Claymore 5.56x45 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "Troy Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://worldoftroy.com/",
            "stats": {
                "recoil": "-9%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_cqb556_Muzzle",
            "name": "AR-15 Ferfrans CQB 5.56x45 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-9%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_dtk556_Muzzle",
            "name": "AR-15 Delta-Tek DTK-M16 5.56x45 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-11%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_G3P_Muzzle",
            "name": "Glock CARVER Custom Decelerator 3 Port compensator",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 & Glock 18C only",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "recoil": "-11%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_G4P_Muzzle",
            "name": "Glock CARVER Custom 4 Port compensator",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 & Glock 18C only",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "recoil": "-11%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_G4_SlideComp_Compensator",
            "name": "Glock Strike Industries G4 SlideComp compensator",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 & Glock 18C only",
            "manufacturer": "Strike Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.strikeindustries.com/",
            "stats": {
                "recoil": "-10%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_gate556_Muzzle",
            "name": "AR-15 Griffin Armament Gate-LOK Hammer 5.56x45 flash hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-9%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_jailbreak556_Muzzle",
            "name": "AR-15 SAI JailBrake 5.56x45 muzzle device",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR15 SAI Handguards only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-20%",
                "weight": "64g"
            }
        },
        {
            "id": "SMPZ_Attachments_nero556_Muzzle",
            "name": "AR-15 WDR NERO 556 5.56x45 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_phantom556_Muzzle",
            "name": "AR-15 Yankee Hill Phantom 5.56x45 flash hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-8%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_PSR_Multi_Caliber_Muzzle",
            "name": "AWC PSR Multi-Caliber muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Fits on 5.56x45 & 7.62x51 & .338 LM",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_pws556_Muzzle",
            "name": "AR-15 PWS CQB 5.56x45 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-11%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_qdc556_Muzzle",
            "name": "KAC QDC 5.56x45 3-Prong Flash Eliminator",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-7%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_vette556_Muzzle",
            "name": "AR-15 Nordic Components Corvette 5.56x45 compensator",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-11%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_vp09556_Muzzle",
            "name": "AR-15 Vendetta Precision VP-09 Interceptor 5.56x45 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-9%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_war556_Muzzle",
            "name": "AR-15 SureFire WarComp 5.56x45 flash hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "-8%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_wave556_Muzzle",
            "name": "AR-15 Daniel Defense WAVE 5.56x45 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-9%",
                "weight": "85g"
            }
        },
        {
            "id": "SMPZ_Attachments_ZK38_Muzzle",
            "name": "AR-10 TAA ZK-38 muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AR type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-9%",
                "weight": "35g"
            }
        },
        {
            "id": "SMPZ_Attachments_TMB_338_Muzzle",
            "name": "AI .338 LM Tactical Muzzle Brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on .338 LM rifles only.",
            "manufacturer": "Accuracy International",
            "manufacturerLogo": "assets/ai-logo.png",
            "manufacturerUrl": "https://www.accuracyinternational.com/",
            "stats": {
                "weight": "230g"
            }
        },
        {
            "id": "SMPZ_Attachments_Venom_762x39_Muzzle",
            "name": "AK Venom Tactical Antidote 7.62x39 muzzle brake-compensator",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AKM & AKMN, VPO-136 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-12%",
                "weight": "96g"
            }
        },
        {
            "id": "SMPZ_Attachments_Zenit_DTK545_Muzzle",
            "name": "AK Zenit DTK-1 muzzle brake-compensator",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Can be attached on AK-74 & AK-74N & AK-74M & AKS-74U & AKS-74UN",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-12%",
                "weight": "128g"
            }
        },
        {
            "id": "SMPZ_Attachments_Lantac_DGN_762x51_Muzzle",
            "name": "AR-10 Lantac Dragon muzzle brake-compensator",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Manufactured by Lantac USA",
            "manufacturer": "LANTAC USA",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.lantac-usa.com/",
            "stats": {
                "recoil": "-11%",
                "weight": "90g"
            }
        },
        {
            "id": "SMPZ_Attachments_Lantac_BMD_with_DGN_762x51_Muzzle",
            "name": "AR-10 Lantac BMD Blast Mitigation with Dragon muzzle",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Manufactured by Lantac USA",
            "manufacturer": "LANTAC USA",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.lantac-usa.com/",
            "stats": {
                "recoil": "-18%",
                "weight": "90g"
            }
        },
        {
            "id": "SMPZ_Attachments_Keymount_762x51_Muzzle",
            "name": "AR-10 Dead Air Keymount muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Manufactured by Dead Air Silencers",
            "manufacturer": "Dead Air Silencers",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://deadairsilencers.com/",
            "stats": {
                "recoil": "-10%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_M11_762x51_Muzzle",
            "name": "AR-10 Precision Armanent M11 Severe-Duty muzzle brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Manufactured by Precision Armanent",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_MK47_762x51_Muzzle",
            "name": "AR-10 CMMG SV Brake 762x51 Muzzle Brake",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "CMMG",
            "manufacturerLogo": "assets/cmmg-logo.png",
            "manufacturerUrl": "https://cmmg.com/",
            "stats": {
                "recoil": "-3%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_Prong_Muzzle",
            "name": "SureFire SOCOM 3 Prong Flash Hider",
            "category": "소염기 / 머즐",
            "image": "",
            "images": [],
            "description": "Made by SH00TM3P1Z(SMPZ)",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "-30%",
                "sway": "+15%",
                "weight": "50g"
            }
        }
    ],
    "소음기": [
        {
            "id": "SMPZ_Attachments_PP19_Suppressor",
            "name": "PP-19-01 Vityaz sound suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by Izhmash (Kalashnikov Group)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-9%",
                "weight": "530g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_QDC_NT4_556_Suppressor",
            "name": "KAC QDSS NT4 5.56x45 suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 rifles",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-13%",
                "weight": "743g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_QDC_NT4_556_Suppressor_FDE",
            "name": "KAC QDSS NT4 5.56x45 suppressor FDE",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 rifles",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-13%",
                "weight": "743g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_QDC_CQB_556_Suppressor",
            "name": "KAC QDC-CQB 5.56x45 suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 rifles",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-13%",
                "weight": "477g"
            }
        },
        {
            "id": "SMPZ_Attachments_Salvo12_12ga_Suppressor",
            "name": "SilencerCo Salvo 12 12ga suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by SilencerCo",
            "manufacturer": "SilencerCo",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://silencerco.com/",
            "stats": {
                "recoil": "-17%",
                "weight": "1080g"
            }
        },
        {
            "id": "SMPZ_Attachments_Rotor43_366TKM_Suppressor",
            "name": "Rotor 43 .366 TKM suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Fits on VPO-209 & VPO-215",
            "manufacturer": "Rotor 43",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://rotor43.ru/",
            "stats": {
                "recoil": "-10%",
                "weight": "570g"
            }
        },
        {
            "id": "SMPZ_Attachments_MSR_300Winchester_Suppressor",
            "name": "MSR suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-16%",
                "weight": "327g"
            }
        },
        {
            "id": "SMPZ_Attachments_AseUltra_BoreLock_338_Suppressor",
            "name": "Ase Utra SL7i-BL BoreLock suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Fits on .338 Lapua Magnum rifles",
            "manufacturer": "Ase Utra",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aseutra.fi/",
            "stats": {
                "recoil": "-15%",
                "weight": "832g"
            }
        },
        {
            "id": "SMPZ_Attachments_Hekate_338_Suppressor",
            "name": "CGS Hekate DT suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Fits on .338 Lapua Magnum rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "weight": "507g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_PRS_QDC_762x51_Suppressor",
            "name": "KAC PRS/QDC 7.62x51 suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-15%",
                "weight": "700g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_Mk11_762x51_Suppressor",
            "name": "KAC SR-25/Mk.11 7.62x51 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-17%",
                "weight": "848g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_Mk11_762x51_Suppressor_Taupe",
            "name": "KAC SR-25/Mk.11 7.62x51 Suppressor - Taupe",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-17%",
                "weight": "848g"
            }
        },
        {
            "id": "SMPZ_Attachments_Barrett_50BMG_Suppressor",
            "name": "Barrett QDL .50 BMG Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by Barrett Firearms",
            "manufacturer": "Barrett Firearms",
            "manufacturerLogo": "assets/barrett-logo.png",
            "manufacturerUrl": "https://barrett.net/",
            "stats": {
                "recoil": "-18%",
                "weight": "2290g"
            }
        },
        {
            "id": "SMPZ_Attachments_AMF_408_Suppressor",
            "name": "Elite Iron Windtalker AMF .408 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by Elite Iron",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-11%",
                "weight": "2000g"
            }
        },
        {
            "id": "SMPZ_Attachments_AAC_SDN6_Multi_Caliber_Suppressor",
            "name": "AAC 762-SDN-6 Multi-Caliber Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 & 7.62x51",
            "manufacturer": "Advanced Armament Corporation",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://advanced-armament.com/",
            "stats": {
                "recoil": "-15%",
                "sway": "+15%",
                "weight": "689g"
            }
        },
        {
            "id": "SMPZ_Attachments_SureFire_SOCOM762_RC2_762x51_Suppressor",
            "name": "SureFire SOCOM762-RC2 7.62x51 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 7.62x51",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "-14%",
                "sway": "+13%",
                "weight": "659g"
            }
        },
        {
            "id": "SMPZ_Attachments_AEM5_556_Suppressor",
            "name": "Allen Engineering AEM-5 5.56x45 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-15%",
                "sway": "+15%",
                "weight": "700g"
            }
        },
        {
            "id": "SMPZ_Attachments_SilencerCo_Osprey45_Suppressor",
            "name": "SilencerCo Osprey 45 2.0 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on .45 ACP Firearms",
            "manufacturer": "SilencerCo",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://silencerco.com/",
            "stats": {
                "recoil": "-10%",
                "sway": "+10%",
                "weight": "270g"
            }
        },
        {
            "id": "SMPZ_Attachments_PKM_DTKP_Suppressor",
            "name": "PKM Hexagon DTKP 7.62x54 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "For PKM only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-7%",
                "sway": "+10%",
                "weight": "990g"
            }
        },
        {
            "id": "SMPZ_Attachments_PKP_DTKP_Suppressor",
            "name": "PKP Hexagon DTKP 7.62x54 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "For PKP only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-7%",
                "sway": "+10%",
                "weight": "990g"
            }
        },
        {
            "id": "SMPZ_Attachments_HUXWRX_762x51_Suppressor",
            "name": "HUXWRX HX-QD 7.62x51 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by HUman eXposure WORKShop Safety Co (HUXWRX)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-11%",
                "sway": "+15%",
                "weight": "690g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_QDC_Multi_Caliber_Suppressor_FDE",
            "name": "KAC QDC Multi-Caliber suppressor FDE",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 & 7.62x51 rifles",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-13%",
                "sway": "+10%",
                "weight": "453g"
            }
        },
        {
            "id": "SMPZ_Attachments_AAC_9x19_Suppressor",
            "name": "AAC Illusion 9 9x19 sound suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 9x19 guns only.",
            "manufacturer": "Advanced Armament Corporation",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://advanced-armament.com/",
            "stats": {
                "recoil": "-8%",
                "sway": "+10%",
                "weight": "300g"
            }
        },
        {
            "id": "SMPZ_Attachments_AUG_SL7i_Suppressor",
            "name": "Steyr AUG Ase Utra S Series SL7i sound suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on AUG only",
            "manufacturer": "Ase Utra",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.aseutra.fi/",
            "stats": {
                "recoil": "-10%",
                "sway": "+10%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_AWC_Multi_Caliber_Suppressor",
            "name": "AWC Thor PSR XL multi-caliber suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 & 7.62x51",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-19%",
                "sway": "+10%",
                "weight": "850g"
            }
        },
        {
            "id": "SMPZ_Attachments_Mosin_Bramit_Suppressor",
            "name": "Mosin Bramit suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on Mosin Nagant only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "+10%",
                "weight": "1100g"
            }
        },
        {
            "id": "SMPZ_Attachments_FD917_Suppressor",
            "name": "Glock 9x19 Fischer Development FD917 sound suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock series only.",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "recoil": "-16%",
                "sway": "+10%",
                "weight": "350g"
            }
        },
        {
            "id": "SMPZ_Attachments_Hexagon_12ga_Suppressor",
            "name": "Hexagon 12K 12ga sound suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 12/70 Shotguns only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-11%",
                "sway": "+10%",
                "weight": "493g"
            }
        },
        {
            "id": "SMPZ_Attachments_Hybrid46Suppressor",
            "name": "SilencerCo Hybrid 46 Black",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Universal Suppressor",
            "manufacturer": "SilencerCo",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://silencerco.com/",
            "stats": {
                "recoil": "-10%",
                "sway": "+10%",
                "weight": "200g"
            }
        },
        {
            "id": "SMPZ_Attachments_Hybrid46Suppressor_FDE",
            "name": "SilencerCo Hybrid 46 FDE",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Universal Suppressor",
            "manufacturer": "SilencerCo",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://silencerco.com/",
            "stats": {
                "recoil": "-10%",
                "sway": "+10%",
                "weight": "1500g"
            }
        },
        {
            "id": "SMPZ_Attachments_M4SD_556_Suppressor",
            "name": "AR-15 Griffin Armament M4SD-K 5.56x45 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-18%",
                "sway": "+10%",
                "weight": "397g"
            }
        },
        {
            "id": "SMPZ_Attachments_SureFire_Monster556_Mini_Suppressor",
            "name": "SureFire SOCOM556-MINI MONSTER 5.56x45 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by SureFire",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "-11%",
                "sway": "+10%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_SureFire_SOCOM556_RC2_556x45_Suppressor",
            "name": "SureFire SOCOM556-RC2 5.56x45 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by SureFire",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "-13%",
                "sway": "+10%",
                "weight": "546g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_SD_Suppressor",
            "name": "MPX-SD integrated suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 203mm barrel of MPX only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-11%",
                "sway": "+10%",
                "weight": "600g"
            }
        },
        {
            "id": "SMPZ_Attachments_Omega_45ACP_Suppressor",
            "name": "SilencerCo Omega 45k .45 ACP suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by SilencerCo",
            "manufacturer": "SilencerCo",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://silencerco.com/",
            "stats": {
                "recoil": "-9%",
                "sway": "+10%",
                "weight": "411g"
            }
        },
        {
            "id": "SMPZ_Attachments_Gemtech_ONE_Multi_Caliber_Suppressor",
            "name": "Gemtech ONE multi-caliber suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 & 7.62x51 rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-9%",
                "sway": "+10%",
                "weight": "850g"
            }
        },
        {
            "id": "SMPZ_Attachments_Osprey9_9x19_Suppressor",
            "name": "SilencerCo Osprey 9 suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 9x19 rifles",
            "manufacturer": "SilencerCo",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://silencerco.com/",
            "stats": {
                "recoil": "-10%",
                "sway": "+10%",
                "weight": "270g"
            }
        },
        {
            "id": "SMPZ_Attachments_P90_Suppressor",
            "name": "FN P90 Attenuator sound suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on FN P90 only",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "recoil": "-11%",
                "sway": "+15%",
                "weight": "677g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_PBS1_762x39_Suppressor",
            "name": "AKM PBS-1 7.62x39 suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Fits on AKM Series & AK-103 & AK-104",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-11%",
                "sway": "+10%",
                "weight": "435g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_PBS4_545x39_Suppressor",
            "name": "AKS-74U PBS-4 5.45x39 suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Fits on AK-74 Series & AKS-74U Series & AK-105",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "+10%",
                "weight": "700g"
            }
        },
        {
            "id": "SMPZ_Attachments_Saker_ASR556_Suppressor",
            "name": "SilencerCo Saker ASR 5.56 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 rifles",
            "manufacturer": "SilencerCo",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://silencerco.com/",
            "stats": {
                "recoil": "-16%",
                "sway": "+10%",
                "weight": "510g"
            }
        },
        {
            "id": "SMPZ_Attachments_SRD762QD",
            "name": "SIG Sauer SRD762-QD 7.62x51 sound suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "recoil": "-12%",
                "sway": "+10%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_SRD762TI",
            "name": "SIG Sauer SRD762Ti 7.62x51 sound suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "recoil": "-11%",
                "sway": "+10%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_SV98_Suppressor",
            "name": "SV-98 suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufactured by Izhmash",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-8%",
                "sway": "+10%",
                "weight": "330g"
            }
        },
        {
            "id": "SMPZ_Attachments_TSM_338_Suppressor",
            "name": "Accuracy International .338 LM Tactical Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Manufauctured by Accuracy International",
            "manufacturer": "Accuracy International",
            "manufacturerLogo": "assets/ai-logo.png",
            "manufacturerUrl": "https://www.accuracyinternational.com/",
            "stats": {
                "recoil": "-19%",
                "sway": "+10%",
                "weight": "665g"
            }
        },
        {
            "id": "SMPZ_Attachments_Ultra5_Multi_Caliber_556Suppressor",
            "name": "Thunder Beast Arms Ultra 5 multi-caliber suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 & 7.62x51 rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-16%",
                "sway": "+10%",
                "weight": "210g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Hexagon_Waffle_545x39_Suppressor",
            "name": "AK-74 Hexagon Wafflemaker 5.45x39 suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Fits on AK-74 & AK-74N & AK-74M & AKS-74U & AKS-74UN & AK-105",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-19%",
                "sway": "+10%",
                "weight": "385g"
            }
        },
        {
            "id": "SMPZ_Attachments_WAVE_Multi_Caliber_Suppressor",
            "name": "Daniel Defense WAVE QD multi-caliber suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "Can be attached on 5.56x45 & 7.62x51 rifles",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-15%",
                "sway": "+10%",
                "weight": "600g"
            }
        },
        {
            "id": "SMPZ_Attachments_338Suppressor",
            "name": "Accuracy International Tactical 338 Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Accuracy International",
            "manufacturerLogo": "assets/ai-logo.png",
            "manufacturerUrl": "https://www.accuracyinternational.com/",
            "stats": {
                "recoil": "-30%",
                "sway": "+10%",
                "weight": "1500g"
            }
        },
        {
            "id": "Slot_338Suppressor",
            "name": "Suppressor",
            "category": "소음기",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {}
        }
    ],
    "양각대": [
        {
            "id": "SMPZ_Bipod_BT10_V8_Atlas",
            "name": "BT10 V8 Atlas Bipod",
            "category": "양각대",
            "image": "",
            "images": [],
            "description": "Can be folded & unfolded",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-70%",
                "sway": "-95%",
                "weight": "312g"
            }
        },
        {
            "id": "SMPZ_Bipod_Harris_HBR",
            "name": "Harris S-BRM 6-9 Bipod",
            "category": "양각대",
            "image": "",
            "images": [],
            "description": "Can be folded & unfolded",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-70%",
                "sway": "-95%",
                "weight": "277g"
            }
        },
        {
            "id": "SMPZ_Bipod_SV98",
            "name": "SV-98 Bipod",
            "category": "양각대",
            "image": "",
            "images": [],
            "description": "Can be folded & unfolded",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-70%",
                "sway": "-95%",
                "weight": "472g"
            }
        },
        {
            "id": "SMPZ_Bipod_M60",
            "name": "M60 Bipod",
            "category": "양각대",
            "image": "",
            "images": [],
            "description": "Can be folded & unfolded",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-70%",
                "sway": "-95%",
                "weight": "472g"
            }
        },
        {
            "id": "SMPZ_Bipod_PKM_PKP",
            "name": "PK Bipod",
            "category": "양각대",
            "image": "",
            "images": [],
            "description": "Can be folded & unfolded",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-70%",
                "sway": "-95%",
                "weight": "472g"
            }
        },
        {
            "id": "SMPZ_Bipod_M107A1",
            "name": "Barrett M107A1 Bipod",
            "category": "양각대",
            "image": "",
            "images": [],
            "description": "Can be folded & unfolded",
            "manufacturer": "Barrett Firearms",
            "manufacturerLogo": "assets/barrett-logo.png",
            "manufacturerUrl": "https://barrett.net/",
            "stats": {
                "recoil": "-70%",
                "sway": "-95%",
                "weight": "472g"
            }
        },
        {
            "id": "SMPZ_Bipod_M200",
            "name": "CheyTac M200 Intervention Bipod",
            "category": "양각대",
            "image": "",
            "images": [],
            "description": "Can be folded & unfolded",
            "manufacturer": "CheyTac USA",
            "manufacturerLogo": "assets/cheytac-logo.png",
            "manufacturerUrl": "https://cheytac.com/",
            "stats": {
                "recoil": "-70%",
                "sway": "-95%",
                "weight": "870g"
            }
        }
    ],
    "장전 손잡이": [
        {
            "id": "SMPZ_Attachments_AR15_Radian_Weapons_Raptor_SD_ChargingHandle",
            "name": "AR-15 Radian Weapons Raptor SD charging handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AR15 type Rifles only.",
            "manufacturer": "Radian Weapons",
            "manufacturerLogo": "assets/radian-logo.png",
            "manufacturerUrl": "https://www.radianweapons.com/",
            "stats": {
                "recoil": "-3%",
                "sway": "-15%",
                "weight": "40g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Noveske_SBA_ChargingHandle",
            "name": "AR-15 Noveske Super Badass Airborne charging handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AR15 type Rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-4%",
                "sway": "-10%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_HK_Latch_ChargingHandle",
            "name": "AR-15 HK Extended Latch Charging Handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AR15 type Rifles only.",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-1%",
                "sway": "-10%",
                "weight": "64g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_ACH_ChargingHandle",
            "name": "AR-15 Geissele ACH charging handle DDC",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AR15 type Rifles only.",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-4%",
                "sway": "-10%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Avalanche_ChargingHandle",
            "name": "AR-15 Rainier Arms Avalanche MOD2 charging handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AR15 type Rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-15%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Raptor_ChargingHandle",
            "name": "AR-15 Radian Weapons Raptor charging handle Tungsten Grey",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AR15 type Rifles only.",
            "manufacturer": "Radian Weapons",
            "manufacturerLogo": "assets/radian-logo.png",
            "manufacturerUrl": "https://www.radianweapons.com/",
            "stats": {
                "recoil": "-3%",
                "sway": "-12%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Raptor_ChargingHandle_FDE",
            "name": "AR-15 Radian Weapons Raptor charging handle FDE",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AR15 type Rifles only.",
            "manufacturer": "Radian Weapons",
            "manufacturerLogo": "assets/radian-logo.png",
            "manufacturerUrl": "https://www.radianweapons.com/",
            "stats": {
                "recoil": "-3%",
                "sway": "-12%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Daniel_Defense_ChargingHandle",
            "name": "AR-15 Custom Daniel Defense Ambidextrous charging handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "I don't know",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-3%",
                "sway": "-12%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Daniel_Defense_GRIP_N_RIP_ChargingHandle",
            "name": "AR-15 Daniel Defense GRIP-N-RIP charging handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-3%",
                "sway": "-11%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Badger_Ordnance_ChargingHandle",
            "name": "AR-15 Badger Ordnance Tactical Charging Handle Latch",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Badger Ordnance",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-2%",
                "sway": "-8%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_MASP_Battle_ChargingHandle",
            "name": "AR-15 MASP Industries Ambidextrous Battle Charging Handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by MASP Industries",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "sway": "-7%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Zenit_RP1_ChargingHandle",
            "name": "AK Zenit RP-1 charging handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-10%",
                "sway": "-10%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_SCH_ChargingHandle",
            "name": "MPX Geissele SCH charging handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on SIG MPX only",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "sway": "-10%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_Gen2_ChargingHandle",
            "name": "MPX GEN 2 ambidextrous charging handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on SIG MPX only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-9%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_Latch_ChargingHandle",
            "name": "MPX single latch charging handle",
            "category": "장전 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on SIG MPX only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "sway": "-11%",
                "weight": "50g"
            }
        }
    ],
    "전방 손잡이": [
        {
            "id": "SMPZ_Attachments_BCM_GUNFIGHTER_Grip",
            "name": "BCM GUNFIGHTER MOD 3 vertical foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Bravo Company Manufacturing",
            "manufacturer": "Bravo Company MFG",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://bravocompanyusa.com/",
            "stats": {
                "recoil": "-35%",
                "sway": "-55%",
                "weight": "28g"
            }
        },
        {
            "id": "SMPZ_Attachments_BCM_GUNFIGHTER_MLOK_Grip",
            "name": "BCM GUNFIGHTER MOD 3 M-LOK foregrip Black",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Bravo Company Manufacturing",
            "manufacturer": "Bravo Company MFG",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://bravocompanyusa.com/",
            "stats": {
                "recoil": "-35%",
                "sway": "-55%",
                "weight": "28g"
            }
        },
        {
            "id": "SMPZ_Attachments_BCM_GUNFIGHTER_MLOK_Grip_FDE",
            "name": "BCM GUNFIGHTER MOD 3 M-LOK foregrip FDE",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Bravo Company Manufacturing",
            "manufacturer": "Bravo Company MFG",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://bravocompanyusa.com/",
            "stats": {
                "recoil": "-35%",
                "sway": "-55%",
                "weight": "28g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_URX_Stopper_Panel",
            "name": "KAC URX 3/3.1 Stopper Panel",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-10%",
                "sway": "-18%",
                "weight": "5g"
            }
        },
        {
            "id": "SMPZ_Attachments_KAC_Vertical_Grip",
            "name": "KAC Vertical ForeGrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-30%",
                "sway": "-52%",
                "weight": "72g"
            }
        },
        {
            "id": "SMPZ_Attachments_BGV_QDITI_Grip",
            "name": "TangoDown Stubby BGV-MK46K foregrip Black",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by TangoDown",
            "manufacturer": "TangoDown",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://tangodown.com/",
            "stats": {
                "recoil": "-31%",
                "sway": "-30%",
                "weight": "136g"
            }
        },
        {
            "id": "SMPZ_Attachments_BGV_QDITI_Grip_FDE",
            "name": "TangoDown Stubby BGV-MK46K foregrip FDE",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by TangoDown",
            "manufacturer": "TangoDown",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://tangodown.com/",
            "stats": {
                "recoil": "-31%",
                "sway": "-30%",
                "weight": "136g"
            }
        },
        {
            "id": "SMPZ_Attachments_IRBIS_30AL_Grip",
            "name": "IRBIS-GUN 30AL ForeGrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by IRBIS-GUN",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-55%",
                "weight": "151g"
            }
        },
        {
            "id": "SMPZ_Attachments_IRBIS_45AL_Grip",
            "name": "IRBIS-GUN 45AL ForeGrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by IRBIS-GUN",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-15%",
                "sway": "-30%",
                "weight": "151g"
            }
        },
        {
            "id": "SMPZ_Attachments_DanielDefense_Vertical_Grip",
            "name": "Daniel Defense Vertical ForeGrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-35%",
                "sway": "-50%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_DanielDefense_Vertical_Grip_MilSpec",
            "name": "Daniel Defense Vertical ForeGrip (Mil Spec+)",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-35%",
                "sway": "-50%",
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Attachments_SE5_Grip",
            "name": "Stark SE-5 Express Forward foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Stark Equipment Corp",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-12%",
                "sway": "-30%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_SE5_Grip_FDE",
            "name": "Stark SE-5 Express Forward foregrip FDE",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Stark Equipment Corp",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-12%",
                "sway": "-30%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_Cobra_Grip",
            "name": "Strike Industries Cobra Tactical foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Strike Industries",
            "manufacturer": "Strike Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.strikeindustries.com/",
            "stats": {
                "recoil": "-11%",
                "sway": "-30%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_Cobra_Grip_FDE",
            "name": "Strike Industries Cobra Tactical foregrip FDE",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Strike Industries",
            "manufacturer": "Strike Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.strikeindustries.com/",
            "stats": {
                "recoil": "-11%",
                "sway": "-30%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_CQR_Grip",
            "name": "Hera Arms CQR tactical foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Hera Arms",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-45%",
                "sway": "-55%",
                "weight": "167g"
            }
        },
        {
            "id": "SMPZ_Attachments_DD_MLOK_Grip",
            "name": "Daniel Defense Enhanced M-LOK Vertical Foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-25%",
                "sway": "-30%",
                "weight": "28g"
            }
        },
        {
            "id": "SMPZ_Attachments_RTM_Pillau_P2_Grip_RED",
            "name": "RTM Pillau P-2 tactical foregrip Red",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by RTM",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-30%",
                "sway": "-30%",
                "weight": "67g"
            }
        },
        {
            "id": "SMPZ_Attachments_RVG_Grip",
            "name": "Magpul RVG foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-16%",
                "sway": "-32%",
                "weight": "82g"
            }
        },
        {
            "id": "SMPZ_Attachments_RVG_Grip_FDE",
            "name": "Magpul RVG foregrip FDE",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-16%",
                "sway": "-32%",
                "weight": "82g"
            }
        },
        {
            "id": "SMPZ_Attachments_Shift_Grip",
            "name": "Fortis Shift tactical foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Fortis MFG",
            "manufacturer": "Fortis Manufacturing",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://fortismfg.com/",
            "stats": {
                "recoil": "-12%",
                "sway": "-29%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_Sturmgriff_Grip_Black",
            "name": "HK Sturmgriff foregrip Black",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Hekler & Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-34%",
                "sway": "-35%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_Sturmgriff_Grip_FDE",
            "name": "HK Sturmgriff foregrip FDE",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Hekler & Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-34%",
                "sway": "-35%",
                "weight": "80g"
            }
        },
        {
            "id": "SMPZ_Attachments_Magpul_AFG_Black",
            "name": "Magpul AFG tactical foregrip Black",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-22%",
                "sway": "-30%",
                "weight": "82g"
            }
        },
        {
            "id": "SMPZ_Attachments_Magpul_AFG_FDE",
            "name": "Magpul AFG tactical foregrip FDE",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-22%",
                "sway": "-30%",
                "weight": "82g"
            }
        },
        {
            "id": "SMPZ_Attachments_Magpul_AFG_FG",
            "name": "Magpul AFG tactical foregrip Forest Green",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-22%",
                "sway": "-30%",
                "weight": "82g"
            }
        },
        {
            "id": "SMPZ_Attachments_Magpul_AFG_OD",
            "name": "Magpul AFG tactical foregrip Olive Drab",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Magpul",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-22%",
                "sway": "-30%",
                "weight": "82g"
            }
        },
        {
            "id": "SMPZ_Attachments_BGV_MK46K_Grip_SG",
            "name": "TangoDown Stubby BGV-MK46K foregrip Stealth Grey",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by TangoDown",
            "manufacturer": "TangoDown",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://tangodown.com/",
            "stats": {
                "recoil": "-30%",
                "sway": "-30%",
                "weight": "82g"
            }
        },
        {
            "id": "SMPZ_Attachments_Zenit_B25U_Grip",
            "name": "Zenit RK-1 tactical foregrip on B-25U mount",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Zenitco",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-42%",
                "sway": "-45%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_Zenit_RK0_Grip",
            "name": "Zenit RK-0 tactical foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Zenitco",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-17%",
                "sway": "-10%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_Zenit_RK1_Grip",
            "name": "Zenit RK-1 tactical foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Zenitco",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-34%",
                "sway": "-27%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_Zenit_RK2_Grip",
            "name": "Zenit RK-2 tactical foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Zenitco",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-40%",
                "sway": "-50%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_Zenit_RK4_Grip",
            "name": "Zenit RK-4 tactical foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Zenitco",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-12%",
                "sway": "-11%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_Zenit_RK5_Grip",
            "name": "Zenit RK-5 tactical foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Zenitco",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-24%",
                "sway": "-22%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_Zenit_RK6_Grip",
            "name": "Zenit RK-6 tactical foregrip",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by Zenitco",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-11%",
                "sway": "-10%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_SIG_Vertical_KeyMod_Foregrip",
            "name": "SIG Sauer Vertical Foregrip KeyMod",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Manufactured by SIG Sauer",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "recoil": "-30%",
                "sway": "-23%",
                "weight": "55g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_GripGlove",
            "name": "Glock Pachmayr Tactical Grip Glove",
            "category": "전방 손잡이",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 & Glock 18C only",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "sway": "-10%",
                "weight": "80g"
            }
        }
    ],
    "전술 플래시": [
        {
            "id": "SMPZ_Flashlights_SureFire_XC1",
            "name": "SureFire XC1 tactical flashlight",
            "category": "전술 플래시",
            "image": "",
            "images": [],
            "description": "Max light distance: 100m",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "weight": "50g"
            }
        },
        {
            "id": "SMPZ_Flashlights_Zenit_Klesch2U_Extreme_HighBeam",
            "name": "Zenit Klesch-2U flashlight",
            "category": "전술 플래시",
            "image": "",
            "images": [],
            "description": "Max light distance: 300m",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "weight": "259g"
            }
        },
        {
            "id": "SMPZ_Flashlights_SureFire_M600",
            "name": "SureFire M600 Scout Light",
            "category": "전술 플래시",
            "image": "",
            "images": [],
            "description": "Manufactured by SureFire",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "weight": "250g"
            }
        },
        {
            "id": "SMPZ_Flashlights_Armytek_XHP35",
            "name": "Armytek Predator Pro v3 XHP35 HI Flashlight",
            "category": "전술 플래시",
            "image": "",
            "images": [],
            "description": "Manufactured by Armytek",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "120g"
            }
        },
        {
            "id": "SMPZ_Flashlights_X400U",
            "name": "SureFire X400 Ultra tactical flashlight",
            "category": "전술 플래시",
            "image": "",
            "images": [],
            "description": "Max light distance: 100m",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "weight": "130g"
            }
        },
        {
            "id": "SMPZ_Flashlights_UltraFire_WF501B_HighBeam",
            "name": "Ultrafire WF-501B flashlight",
            "category": "전술 플래시",
            "image": "",
            "images": [],
            "description": "Max light distance: 150m",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "210g"
            }
        },
        {
            "id": "SMPZ_Flashlights_Olight_Baldr_Pro",
            "name": "Olight Baldr Pro tactical flashlight",
            "category": "전술 플래시",
            "image": "",
            "images": [],
            "description": "Max light distance: 100m",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "130g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_LoneStar_Receiver",
            "name": "TX-15 5.56x45 Lightweight Upper Receiver",
            "category": "전술 플래시",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-4%",
                "weight": "190g"
            }
        }
    ],
    "총열": [
        {
            "id": "SMPZ_Misc_M203_UBGL",
            "name": "M203 40mm underbarrel grenade launcher",
            "category": "총열",
            "image": "",
            "images": [],
            "description": "this is currently being developed by SH00TM3P1Z",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-20%",
                "weight": "2920g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_AlphaWolf_Barrel",
            "name": "Glock Lone Wolf AlphaWolf threaded barrel",
            "category": "총열",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 & Glock 18C only",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "recoil": "-4%",
                "weight": "180g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_SAI_114_Barrel",
            "name": "Glock SAI threaded barrel",
            "category": "총열",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 & Glock 18C only",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "recoil": "-8%",
                "weight": "180g"
            }
        },
        {
            "id": "SMPZ_Attachments_Glock_DoubleDiamond_Barrel",
            "name": "Glock Double Diamond threaded barrel",
            "category": "총열",
            "image": "",
            "images": [],
            "description": "Can be attached on Glock 17 & Glock 18C only",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "recoil": "-3%",
                "weight": "180g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_14inch_Barrel",
            "name": "SIG MPX 14 inch barrel",
            "category": "총열",
            "image": "",
            "images": [],
            "description": "355mm barrel. Can be attached on SIG MPX only",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "stats": {
                "weight": "350g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1911_Threaded_Barrel",
            "name": "M1911A1 141mm threaded barrel",
            "category": "총열",
            "image": "",
            "images": [],
            "description": "Can be attached on M1911A1 & M45A1 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "120g"
            }
        }
    ],
    "탄창": [
        {
            "id": "SMPZ_Mag_PP19_Banana_30Rnd",
            "name": "PP-19-01 Vityaz PUFGUN SG-919 30 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 9x19mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "109g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_PP19_Drum_50Rnd",
            "name": "PP-19-01 F5 MFG 50-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 9x19mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+5%",
                "weight": "680g",
                "capacity": "50발"
            }
        },
        {
            "id": "SMPZ_Mag_M700_10Rnd",
            "name": "M700 Wyatt's Outdoor 10-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x51mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "500g",
                "capacity": "10발"
            }
        },
        {
            "id": "SMPZ_Mag_M700_PMAG_10Rnd",
            "name": "M700 Magpul PMAG AC 10-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x51mm",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "120g",
                "capacity": "10발"
            }
        },
        {
            "id": "SMPZ_Mag_SA58_XFAL_Drum_50Rnd",
            "name": "SA58/FAL X Products X-FAL 50-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x51mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+10%",
                "weight": "236g",
                "capacity": "50발"
            }
        },
        {
            "id": "SMPZ_Mag_SA58_MMW_20Rnd",
            "name": "SA58/FAL MMW polymer 20-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x51mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "290g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_SA58_30Rnd",
            "name": "SA58/FAL 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x51mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "500g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_SA58_L1A1_30Rnd",
            "name": "SA58/FAL L1A1 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x51mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "500g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_Drum_Proamg_AKA16_762x39_73Rnd",
            "name": "AK ProMag AK-A-16 73-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+14%",
                "weight": "729g",
                "capacity": "73발"
            }
        },
        {
            "id": "SMPZ_Mag_MP7_20Rnd",
            "name": "HK MP7 20-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 4.6x30mm",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "100g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_MP7_30Rnd",
            "name": "HK MP7 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 4.6x30mm",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "100g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_PPSH41_71Rnd",
            "name": "PPSh-41 71-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x25mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+5%",
                "weight": "900g",
                "capacity": "71발"
            }
        },
        {
            "id": "SMPZ_Mag_AA12_20Rnd",
            "name": "AA-12 20-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 12/70 shells",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "1130g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_Saiga_MD_Arms_Drum_20Rnd",
            "name": "Saiga-12 MD Arms 20-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 12/70 shells",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "660g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_SVT_AVT_15Rnd",
            "name": "SVT-40 15-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x54mm R",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "130g",
                "capacity": "15발"
            }
        },
        {
            "id": "SMPZ_Mag_MSR_FMJ_10Rnd",
            "name": "Remington MSR 10-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in .300 Winchester Magnum",
            "manufacturer": "Remington Arms",
            "manufacturerLogo": "assets/remington-logo.png",
            "manufacturerUrl": "https://www.remarms.com/",
            "stats": {
                "weight": "160g",
                "capacity": "10발"
            }
        },
        {
            "id": "SMPZ_Mag_Beretta_M9A3_CX4_30Rnd",
            "name": "M9A3 CX4 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 9x19mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "91g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_TROY_BattleMag_STANAG_30Rnd",
            "name": "TROY BattleMag STANAG 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by TROY Industries",
            "manufacturer": "Troy Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://worldoftroy.com/",
            "stats": {
                "weight": "138g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_TROY_BattleMag_STANAG_M62_Tracer_30Rnd",
            "name": "AR-15 TROY BattleMag STANAG 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.56x45mm & .300 Blackout",
            "manufacturer": "Troy Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://worldoftroy.com/",
            "stats": {
                "weight": "138g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_HK_Steel_STANAG_30Rnd",
            "name": "HK Steel Maritime STANAG 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by Hekler & Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "320g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_HK_MR556_STANAG_556_30Rnd",
            "name": "HK PM Gen.3 MR556 STANAG 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by Hekler & Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "138g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_PMAG_40Rnd",
            "name": "Magpul PMAG 40 GEN M3 STANAG 40-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "200g",
                "capacity": "40발"
            }
        },
        {
            "id": "SMPZ_Mag_PMAG_40Rnd_FDE",
            "name": "Magpul PMAG 40 GEN M3 STANAG 40-round magazine FDE",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "200g",
                "capacity": "40발"
            }
        },
        {
            "id": "SMPZ_Mag_SR3M_30Rnd",
            "name": "VSS/VAL 9x39 SR3M.130 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "400g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_SR2M_30Rnd",
            "name": "SR-2M 20-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "150g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_Fostech_Barrett_Drum_20Rnd",
            "name": "Fostech Barrett .50 BMG 20-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by Fostech",
            "manufacturer": "Barrett Firearms",
            "manufacturerLogo": "assets/barrett-logo.png",
            "manufacturerUrl": "https://barrett.net/",
            "stats": {
                "weight": "1960g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_PMAG_762x51_25Rnd",
            "name": "Magpul PMAG 25 SR-LR Gen M3 25-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "350g",
                "capacity": "25발"
            }
        },
        {
            "id": "SMPZ_Mag_L5AWM_556_30Rnd",
            "name": "AR-15 Lancer L5AWM 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by Lancer Systems",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "138g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_AK308_24Rnd",
            "name": "Saiga-308/AK-308 ProMag 24-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "260g",
                "capacity": "24발"
            }
        },
        {
            "id": "SMPZ_Mag_MP5_30Rnd",
            "name": "HK MP5 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 9x19mm",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "170g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_MP5_X5_50Rnd",
            "name": "HK MP5 X Products X-5 50-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 9x19mm",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "640g",
                "capacity": "50발"
            }
        },
        {
            "id": "SMPZ_Mag_AK12_30Rnd",
            "name": "AK-12 5.45x39 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.45x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "190g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_AKMS_30Rnd",
            "name": "AKMS 7.62x39 aluminium 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "170g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_AKMS_Aluminium_10Rnd",
            "name": "AK 7.62x39 aluminium 10-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "170g",
                "capacity": "10발"
            }
        },
        {
            "id": "SMPZ_Mag_L7AWM_762x51_20Rnd",
            "name": "AR-10 Lancer L7AWM 20-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by Lancer Systems",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "300g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_L7AWM_762x51_25Rnd",
            "name": "AR-10 Lancer L7AWM 25-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by Lancer Systems",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "350g",
                "capacity": "25발"
            }
        },
        {
            "id": "SMPZ_Mag_DrumPMAG556_60Rnd",
            "name": "Magpul PMAG D-60 STANAG 60-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "+20%",
                "weight": "580g",
                "capacity": "60발"
            }
        },
        {
            "id": "SMPZ_Mag_PM2_30Rnd",
            "name": "HK PM Gen.2 STANAG 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Hekler & Koch",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "weight": "160g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_PMAG_556x45_W_30Rnd",
            "name": "Magpul PMAG 30 GEN M3 W STANAG 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "100g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_Saiga_Powermag_12ga_20Rnd",
            "name": "Saiga-12 12ga MaxRounds Powermag 20-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 12/70 Shells",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "660g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_PMAG_762x51_20Rnd",
            "name": "Magpul PMAG 20 SR-LR Gen M3 20-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "350g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_PMAG_68x51_20Rnd",
            "name": "20rd Magpul PMAG Gen M3",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "350g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_Saiga_Pro_12ga_10Rnd",
            "name": "Saiga-12 SAI-02 10-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 12/70 Shells",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "210g",
                "capacity": "10발"
            }
        },
        {
            "id": "SMPZ_Mag_STANAG_30Rnd",
            "name": "Colt AR-15 STANAG 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by Colt Manufacturing",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "weight": "117g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_Ultimag_762_30Rnd",
            "name": "AK 7.62x39 FAB Defense Ultimag 30R 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "156g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_STANAG_60Rnd",
            "name": "SureFire MAG5-60 STANAG 60-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by SureFire",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "+15%",
                "weight": "180g",
                "capacity": "60발"
            }
        },
        {
            "id": "SMPZ_Mag_STANAG_100Rnd",
            "name": "SureFire MAG5-100 STANAG 100-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by SureFire",
            "manufacturer": "SureFire",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.surefire.com/",
            "stats": {
                "recoil": "+40%",
                "weight": "270g",
                "capacity": "100발"
            }
        },
        {
            "id": "SMPZ_Mag_6L10_762_30Rnd",
            "name": "AK 7.62x39 6L10 bakelite 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "370g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_6P2_762_40Rnd",
            "name": "AK 7.62x39 6P2 bakelite 40-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "320g",
                "capacity": "40발"
            }
        },
        {
            "id": "SMPZ_Mag_6L18_545_45Rnd",
            "name": "AK-74 5.45x39 6L18 45-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.45x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "300g",
                "capacity": "45발"
            }
        },
        {
            "id": "SMPZ_Mag_6L23_545_30Rnd",
            "name": "AK-74 5.45x39 6L23 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.45x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "215g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_6L23_545_30Rnd_Plum",
            "name": "AK-74 5.45x39 6L23 30-round magazine Plum",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.45x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "215g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_6L26_545_45Rnd",
            "name": "AK-74 5.45x39 6L26 45-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.45x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "300g",
                "capacity": "45발"
            }
        },
        {
            "id": "SMPZ_Mag_6L31_545_60Rnd",
            "name": "AK-74 5.45x39 6L31 60-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.45x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+13%",
                "weight": "300g",
                "capacity": "60발"
            }
        },
        {
            "id": "SMPZ_Mag_6L35_9x39_50Rnd",
            "name": "Special 9x39 6L35 50-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 9x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "300g",
                "capacity": "50발"
            }
        },
        {
            "id": "SMPZ_Mag_RPK16_Drum_545_95Rnd",
            "name": "RPK-16 5.45x39 95-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.45x39mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "680g",
                "capacity": "95발"
            }
        },
        {
            "id": "SMPZ_Mag_PMAG_Gen3_545_30Rnd",
            "name": "AK-74 5.45x39 Magpul PMAG 30 GEN M3 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.45x39mm",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "200g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_PMAG_Gen3_545_30Rnd_FDE",
            "name": "AK-74 5.45x39 Magpul PMAG 30 GEN M3 30-round magazine FDE",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.45x39mm",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "200g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_PMAG_Gen3_762x39_30Rnd",
            "name": "AK Magpul PMAG 30 GEN M3 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "200g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_PMAG_Gen3_762x39_30Rnd_FDE",
            "name": "AK Magpul PMAG 30 GEN M3 30-round magazine FDE",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "weight": "200g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_AK101_SLR556_30Rnd",
            "name": "SLR-106/AK 5.56x45 Circle 10 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 5.56x45mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "450g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_Drum_X47_762x39_50Rnd",
            "name": "AK X Products X-47 50-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by X Products",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+10%",
                "weight": "700g",
                "capacity": "50발"
            }
        },
        {
            "id": "SMPZ_Mag_Drum_X25_762x51_50Rnd",
            "name": "X Products X-25 50-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by X Products",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+10%",
                "weight": "690g",
                "capacity": "50발"
            }
        },
        {
            "id": "SMPZ_Mag_M1A_20Rnd",
            "name": "M14 20-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x51mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "80g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_M1A_30Rnd",
            "name": "M14 30-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 7.62x51mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "80g",
                "capacity": "30발"
            }
        },
        {
            "id": "SMPZ_Mag_Beta_CMAG_556_100Rnd",
            "name": "Beta C-Mag 100-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by Beta Company",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+50%",
                "weight": "1000g",
                "capacity": "100발"
            }
        },
        {
            "id": "SMPZ_Mag_KAC_Steel_762x51_20Rnd",
            "name": "AR-10 KAC 20-round steel magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Manufactured by Knight's Armament Company",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "weight": "520g",
                "capacity": "20발"
            }
        },
        {
            "id": "SMPZ_Mag_MPX_Drum_50Rnd",
            "name": "MPX F5 MFG 50-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 9x19mm",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "+10%",
                "weight": "650g",
                "capacity": "50발"
            }
        },
        {
            "id": "SMPZ_Mag_Glock_Drum_50Rnd",
            "name": "Glock SGM Tactical 50-round drum magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in 9x19mm",
            "manufacturer": "Glock",
            "manufacturerLogo": "assets/glock-logo.png",
            "manufacturerUrl": "https://us.glock.com/",
            "stats": {
                "recoil": "+10%",
                "weight": "600g",
                "capacity": "50발"
            }
        },
        {
            "id": "SMPZ_Mag_M1911_MecGar_11Rnd",
            "name": "M1911A1 Mec-Gar 11-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "Chambered in .45 ACP (11.43x23mm)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "240g",
                "capacity": "11발"
            }
        },
        {
            "id": "SMPZ_Mag_Daniel_Defense_X_556_37Rnd",
            "name": "Daniel Defense TTI Base Pad 37-round magazine",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "weight": "138g",
                "capacity": "37발"
            }
        },
        {
            "id": "SMPZ_Mag_Daniel_Defense_X_556_37Rnd_FDE",
            "name": "Daniel Defense TTI Base Pad 37-round magazine FDE",
            "category": "탄창",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "weight": "138g",
                "capacity": "37발"
            }
        }
    ],
    "해머": [
        {
            "id": "SMPZ_Attachments_M1911_M45A1_Hammer",
            "name": "M45A1 hammer",
            "category": "해머",
            "image": "",
            "images": [],
            "description": "Can be attached on M1911A1",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1911_STI_HEX_Hammer",
            "name": "M1911A1 STI HEX hammer",
            "category": "해머",
            "image": "",
            "images": [],
            "description": "Can be attached on M1911A1",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1911_Wilson_Retro_Hammer",
            "name": "M1911A1 Wilson Retro Commander hammer",
            "category": "해머",
            "image": "",
            "images": [],
            "description": "Can be attached on M1911A1",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_M1911_Wilson_Skeletonized_Hammer",
            "name": "M1911A1 Wilson Ultralight skeletonized hammer",
            "category": "해머",
            "image": "",
            "images": [],
            "description": "Can be attached on M1911A1",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "100g"
            }
        }
    ],
    "핸드가드": [
        {
            "id": "SMPZ_Attachments_HK416A7_G95K_10inch_Hndgrd",
            "name": "HK 416A7/G95K Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-2%",
                "sway": "-8%",
                "weight": "280g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416A7_G95K_13inch_Hndgrd",
            "name": "HK 416A7/G95K 13 inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "390g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_Geissele_SMR_10inch_Hndgrd",
            "name": "HK 416 Geissele SMR HK 10.5 inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Geissele Automatics",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "367g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_Geissele_SMR_10inch_Hndgrd_DDC",
            "name": "HK 416 Geissele SMR HK 10.5 inch Handguard (DDC)",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Geissele Automatics",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "367g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_Geissele_SMR_14inch_Hndgrd",
            "name": "HK 416 Geissele SMR HK 14.5 inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Geissele Automatics",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "462g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_Geissele_SMR_14inch_Hndgrd_DDC",
            "name": "HK 416 Geissele SMR HK 14.5 inch Handguard (DDC)",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Geissele Automatics",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "462g"
            }
        },
        {
            "id": "SMPZ_Attachments_PP19_Vector_VR_LPS_Hndgrd",
            "name": "PP-19-01 Vityaz Vector VR-LPS handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Vector 7.62",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-20%",
                "weight": "502g"
            }
        },
        {
            "id": "SMPZ_Attachments_PP19_SAG_MK1_MLOK_Hndgrd",
            "name": "PP-19-01 Vityaz SAG MK1 M-LOK handguard with gas tube",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Sureshot Armament Group",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-10%",
                "weight": "502g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK12_Rotor43_Hndgrd",
            "name": "AK-12 Rotor43 handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK-12 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "sway": "-15%",
                "weight": "164g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK12_N4_Hndgrd",
            "name": "AK-12 Tactical Ideas N-4 Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK-12 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-15%",
                "weight": "470g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_CNC_OV_Hndgrd",
            "name": "AK CNC Guns OV GP handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-20%",
                "weight": "586g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_TDI_X47_Hndgrd",
            "name": "AK TDI X47 tactical handguard rail system",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifle only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-20%",
                "weight": "420g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_SWS_Split_Hndgrd",
            "name": "AR-10 Noveske SWS N6 Split handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-8%",
                "weight": "502g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_Lancer_LCH7_Hndgrd",
            "name": "AR-10 Lancer LCH7 12.5 M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "360g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_Midwest_308_CombatRail_15inch_Hndgrd",
            "name": "AR-10 Midwest Industries 308 Combat Rail 15 inch M-LOK Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only",
            "manufacturer": "Midwest Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://midwestindustriesinc.com/",
            "stats": {
                "recoil": "-6%",
                "sway": "-11%",
                "weight": "411g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_KAC_URX_2_12inch_Hndgrd",
            "name": "AR-10 KAC URX 2 12.5 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-6%",
                "sway": "-10%",
                "weight": "431g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_KAC_URX_2_12inch_Hndgrd_Taupe",
            "name": "AR-10 KAC URX 2 12.5 inch handguard (Taupe)",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-6%",
                "sway": "-10%",
                "weight": "431g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_KAC_URX_3_13inch_Hndgrd",
            "name": "AR-10 KAC URX 3.1 13.5 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "431g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_KAC_URX_3_13inch_Hndgrd_Taupe",
            "name": "AR-10 KAC URX 3.1 13.5 inch handguard (Taupe)",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "431g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Geissele_SMR_MK4_13_Hndgrd",
            "name": "AR-15 Geissele SMR MK4 13.5 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Geissele Automatics",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "450g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Daniel_Defense_RIS_II_12_FSP",
            "name": "AR-15 Daniel Defense RIS II FSP 12.25 handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-7%",
                "sway": "-7%",
                "weight": "450g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Daniel_Defense_RIS_III_13_FSP",
            "name": "AR-15 Daniel Defense RIS III FSP 13 handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-7%",
                "sway": "-5%",
                "weight": "450g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_DanielDefense_RIS_III_9_Hndgrd",
            "name": "AR-15 Daniel Defense RIS III 9.5 Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-1%",
                "sway": "-5%",
                "weight": "250g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_DanielDefense_RIS_III_9_Lower_Hndgrd",
            "name": "AR-15 Daniel Defense RIS III 9.5 Lower Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-1%",
                "sway": "-5%",
                "weight": "116g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_DanielDefense_RIS_III_12_Hndgrd",
            "name": "AR-15 Daniel Defense RIS III 12.5 Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-1%",
                "sway": "-5%",
                "weight": "300g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_DanielDefense_RIS_III_12_Lower_Hndgrd",
            "name": "AR-15 Daniel Defense RIS III 12.5 Lower Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-1%",
                "sway": "-5%",
                "weight": "170g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Precision_Reflex_Gen3_Delta_Hndgrd",
            "name": "AR-15 Precision Reflex GEN III Delta Carbon handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Precision Reflex",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-7%",
                "sway": "-11%",
                "weight": "450g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Magpul_MOE_SL_Carbine_Hndgrd",
            "name": "AR-15 Magpul MOE SL carbine length M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "190g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_BCM_KMR_KeyMod_7inch_Hndgrd",
            "name": "AR-15 BCM KMR Alpha KeyMod 7 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Bravo Company Manufacturing",
            "manufacturer": "Bravo Company MFG",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://bravocompanyusa.com/",
            "stats": {
                "recoil": "-8%",
                "sway": "-8%",
                "weight": "410g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_BCM_KMR_KeyMod_9inch_Hndgrd",
            "name": "AR-15 BCM KMR Alpha KeyMod 9 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Bravo Company Manufacturing",
            "manufacturer": "Bravo Company MFG",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://bravocompanyusa.com/",
            "stats": {
                "recoil": "-8%",
                "sway": "-8%",
                "weight": "410g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_BCM_KMR_KeyMod_13inch_Hndgrd",
            "name": "AR-15 BCM KMR Alpha KeyMod 13 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Bravo Company Manufacturing",
            "manufacturer": "Bravo Company MFG",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://bravocompanyusa.com/",
            "stats": {
                "recoil": "-8%",
                "sway": "-8%",
                "weight": "480g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_BCM_KMR_KeyMod_15inch_Hndgrd",
            "name": "AR-15 BCM KMR Alpha KeyMod 15 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Bravo Company Manufacturing",
            "manufacturer": "Bravo Company MFG",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://bravocompanyusa.com/",
            "stats": {
                "recoil": "-8%",
                "sway": "-8%",
                "weight": "540g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_AlexanderArms_MK10_Hndgrd",
            "name": "AR-15 Alexander Arms MK10 rifle length handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Alexander Arms",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "514g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_AX15_10inch_Hndgrd",
            "name": "AR-15 Aeroknox AX-15 10.5 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Aeroknox",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "355g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Radian_Weapons_Model1_Hndgrd",
            "name": "AR-15 Radian Model 1 14 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "A precision CNC machined 14 inch handguard, equipped with an M-LOK interface for installation of additional equipment. Manufactured by Radian Weapons.",
            "manufacturer": "Radian Weapons",
            "manufacturerLogo": "assets/radian-logo.png",
            "manufacturerUrl": "https://www.radianweapons.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "470g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Radian_Weapons_Model1_Hndgrd_Multicam",
            "name": "AR-15 Radian Model 1 14 inch handguard (Multicam)",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "A precision CNC machined 14 inch handguard, equipped with an M-LOK interface for installation of additional equipment. Manufactured by Radian Weapons.",
            "manufacturer": "Radian Weapons",
            "manufacturerLogo": "assets/radian-logo.png",
            "manufacturerUrl": "https://www.radianweapons.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "470g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_StrikeIndustries_GRIDLOK_Hndgrd",
            "name": "AR-15 Strike Industries GRIDLOK 15 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Strike Industries",
            "manufacturer": "Strike Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.strikeindustries.com/",
            "stats": {
                "recoil": "-8%",
                "sway": "-10%",
                "weight": "670g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_StrikeIndustries_GRIDLOK_Hndgrd_Yellow",
            "name": "AR-15 Strike Industries GRIDLOK 15 inch handguard (Yellow)",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Strike Industries",
            "manufacturer": "Strike Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.strikeindustries.com/",
            "stats": {
                "recoil": "-8%",
                "sway": "-10%",
                "weight": "670g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_KAC_FF_RAS_Hndgrd",
            "name": "AR-15 KAC Free Float Rifle RAS 12 inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "A quad-rail 12 inch handguard for the AR-15 platform. Manufactured by Knight's Armament Company.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-6%",
                "sway": "-6%",
                "weight": "462g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_KAC_M5_RAS_Hndgrd",
            "name": "AR-15 KAC M5 RAS Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "A quad-rail handguard manufactured by Knight's Armament Company. Standard-issue handguard for the M16A4 rifle.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-11%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Precision_Reflex_Gen3_Round_Hndgrd",
            "name": "AR-15 Precision Reflex GEN III Round Carbon 12inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Precision Reflex",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-6%",
                "sway": "-12%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_CAR15_Skinny_Hndgrd",
            "name": "AR-15 CAR-15 Skinny Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "An old-style carbine length \"Skinny\" handguard manufactured by Colt.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-18%",
                "weight": "125g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Colt_M16A2_Hndgrd",
            "name": "AR-15 Colt M16A2 Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "A polymer rifle handguard manufactured by Colt. Standard-issue handguard for M16A2 rifles.",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-18%",
                "weight": "125g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_AeroPrecision_Gen2_Enhanced_9inch_Hndgrd",
            "name": "AR-15 Aero Precision Gen.2 Enhanced 9.3 inch M-LOK Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Aero Precision",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-8%",
                "sway": "-8%",
                "weight": "204g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_AeroPrecision_Gen2_Enhanced_12inch_Hndgrd",
            "name": "AR-15 Aero Precision Gen.2 Enhanced 12.7 inch M-LOK Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Aero Precision",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-8%",
                "sway": "-8%",
                "weight": "272g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_KAC_URX_3_13inch_Hndgrd",
            "name": "AR-15 KAC URX 3.1 13.5 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-8%",
                "sway": "-10%",
                "weight": "362g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Javelin_12inch_Hndgrd",
            "name": "AR-15 SOTMFG Javelin 12 inch M-LOK Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by SOTMFG",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-15%",
                "weight": "295g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Javelin_14inch_Hndgrd",
            "name": "AR-15 SOTMFG Javelin 14 inch M-LOK Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by SOTMFG",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-15%",
                "weight": "295g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Javelin_16inch_Hndgrd",
            "name": "AR-15 SOTMFG Javelin 16 inch M-LOK Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by SOTMFG",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-15%",
                "weight": "295g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Remington_14inch_Hndgrd",
            "name": "AR-15 Remington Defense 14 inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "SUCKS",
            "manufacturer": "Remington Arms",
            "manufacturerLogo": "assets/remington-logo.png",
            "manufacturerUrl": "https://www.remarms.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-20%",
                "weight": "333g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Remington_16inch_Hndgrd",
            "name": "AR-15 Remington Defense 16 inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "SUCKS",
            "manufacturer": "Remington Arms",
            "manufacturerLogo": "assets/remington-logo.png",
            "manufacturerUrl": "https://www.remarms.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-20%",
                "weight": "410g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_STM9_15inch_Hndgrd",
            "name": "AR-15 Soyuz-TM STM-9 15 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Soyuz-TM",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-15%",
                "weight": "155g"
            }
        },
        {
            "id": "SMPZ_Attachments_F2000_Tri_Rail_Hndgrd",
            "name": "FN F2000 Tri-Rail Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on FN F2000 rifles only",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://fnherstal.com/",
            "stats": {
                "recoil": "-10%",
                "sway": "-15%",
                "weight": "310g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK417_M110A1_MLOK_Hndgrd",
            "name": "HK417/G28 Geissele M110A1 M-LOK Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on HK417 & HK G28 rifles only",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-20%",
                "weight": "600g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK417_M110A1_14inch_MLOK_Hndgrd",
            "name": "HK417/G28 Geissele M110A1 14.5 inch M-LOK Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on HK417 & HK G28 rifles only",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-20%",
                "weight": "600g"
            }
        },
        {
            "id": "SMPZ_Attachments_M590A1_MOE_Hndgrd",
            "name": "Mossberg 590A1 Magpul MOE forestock",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-10%",
                "sway": "-10%",
                "weight": "670g"
            }
        },
        {
            "id": "SMPZ_Attachments_M60E4_Hndgrd",
            "name": "M60E4 Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on M60 LMGs only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-9%",
                "sway": "-10%",
                "weight": "479g"
            }
        },
        {
            "id": "SMPZ_Attachments_Masada_Polymer_Hndgrd",
            "name": "Magpul Masada Polymer Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-2%",
                "sway": "-10%",
                "weight": "380g"
            }
        },
        {
            "id": "SMPZ_Attachments_Masada_Extended_KeyMod_Hndgrd",
            "name": "ACR Extended Square-Drop keyMod Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-15%",
                "weight": "663g"
            }
        },
        {
            "id": "SMPZ_Attachments_Masada_Extended_QuadRail_Hndgrd",
            "name": "Masada Custom Extended Quad Rail Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-20%",
                "weight": "682g"
            }
        },
        {
            "id": "SMPZ_Attachments_Masada_Extended_ACR_Enhanced_Hndgrd",
            "name": "Remington ACR-E Extended Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Remington Arms",
            "manufacturerLogo": "assets/remington-logo.png",
            "manufacturerUrl": "https://www.remarms.com/",
            "stats": {
                "recoil": "-4%",
                "sway": "-17%",
                "weight": "682g"
            }
        },
        {
            "id": "SMPZ_Attachments_MCX_LVAW_Hndgrd",
            "name": "MCX GEN1 LVAW 10.5 inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Low Visibility Assault Weapon, Manufactured by SIG Sauer",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-11%",
                "weight": "517g"
            }
        },
        {
            "id": "SMPZ_Attachments_MCX_Lancer_CarbonFiber_105_Hndgrd",
            "name": "MCX GEN1 Lancer Carbon Fiber M-LOK 10.5 inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Lancer Systems",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-6%",
                "sway": "-11%",
                "weight": "380g"
            }
        },
        {
            "id": "SMPZ_Attachments_MCX_Lancer_CarbonFiber_12_Hndgrd",
            "name": "MCX GEN1 Lancer Carbon Fiber M-LOK 12 inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Lancer Systems",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-6%",
                "sway": "-12%",
                "weight": "390g"
            }
        },
        {
            "id": "SMPZ_Attachments_MCX_Lancer_CarbonFiber_18_Hndgrd",
            "name": "MCX GEN1 Lancer Carbon Fiber M-LOK 18 inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Lancer Systems",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_MDR_LBL_ALX_MLOK_16_Hndgrd_Black",
            "name": "MDR BLK LBL ALX 16inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on MDR only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-11%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_MDR_LBL_ALX_MLOK_20_Hndgrd_Black",
            "name": "MDR BLK LBL ALX 20inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on MDR only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-7%",
                "sway": "-11%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_MDR_LBL_ALX_Bipod_16_Hndgrd_Black",
            "name": "MDR BLK LBL ALX Bipod 16inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Where is the bipod!?",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-6%",
                "sway": "-10%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_MDR_LBL_ALX_Bipod_20_Hndgrd_Black",
            "name": "MDR BLK LBL ALX Bipod 20inch Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Where is the bipod!?",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-7%",
                "sway": "-11%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_MDR_Micron_Hndgrd_Black",
            "name": "MDR Micron M-LOK Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Desert Tech",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-30%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP133_Plastic_Rail_Hndgrd",
            "name": "MP-133 custom plastic forestock with rails",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "good",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-10%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP18_Polymer_Hndgrd",
            "name": "MP-18 Polymer Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by IzhMekh",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-1%",
                "sway": "-5%",
                "weight": "130g"
            }
        },
        {
            "id": "SMPZ_Att_MP5_CAA_HX5_Hndgrd",
            "name": "HK MP5 CAA HX-5 Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on MP5 only",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-2%",
                "sway": "-11%"
            }
        },
        {
            "id": "SMPZ_Attachments_RPD_DSARMS_Hndgrd",
            "name": "RPD DS Arms Railed Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "is it good? yes it is, maybe...",
            "manufacturer": "DS Arms",
            "manufacturerLogo": "assets/dsarms-logo.png",
            "manufacturerUrl": "https://dsarms.com/",
            "stats": {
                "sway": "-10%",
                "weight": "250g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_Original_Hndgrd",
            "name": "FAL original handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on SA58",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-4%",
                "sway": "-7%",
                "weight": "610g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_AIM_Sports_KeyMod_Hndgrd",
            "name": "SA58/FAL AIM Sports Universal KeyMod handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on SA58",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "610g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_AIM_Sports_MLOK_Hndgrd",
            "name": "SA58/FAL AIM Sports Universal M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on SA58",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "610g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_Quad_Rail_Full_Length_Hndgrd",
            "name": "SA58 quad rail full length handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on SA58",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-6%",
                "weight": "610g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_Quad_Rail_Short_Length_Hndgrd",
            "name": "SA58 quad rail handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on SA58",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-8%",
                "weight": "480g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_Vltor_CASV_Hndgrd",
            "name": "SA58/FAL Vltor CASV-FAL handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on SA58",
            "manufacturer": "VLTOR Weapon Systems",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.vltor.com/",
            "stats": {
                "recoil": "-10%",
                "sway": "-10%",
                "weight": "444g"
            }
        },
        {
            "id": "SMPZ_Attachments_SA58_Vltor_CASV_Short_Hndgrd",
            "name": "SA58/FAL Vltor CASV-FAL Short handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on SA58",
            "manufacturer": "VLTOR Weapon Systems",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.vltor.com/",
            "stats": {
                "recoil": "-8%",
                "sway": "-12%",
                "weight": "232g"
            }
        },
        {
            "id": "SMPZ_Attachments_Saiga_HedonS_Hndgrd",
            "name": "Saiga-12 Custom Guns Hedon S Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Custom Guns",
            "manufacturer": "Custom Guns",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-20%",
                "weight": "455g"
            }
        },
        {
            "id": "SMPZ_Attachments_TRG_M10_MLOK_Hndgrd",
            "name": "Sako TRG M10 M-LOK 15 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on Sako TRG M10",
            "manufacturer": "Sako",
            "manufacturerLogo": "assets/sako-logo.png",
            "manufacturerUrl": "https://www.sako.global/",
            "stats": {
                "recoil": "-6%",
                "sway": "-20%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Troy_Hndgrd_with_Gastube",
            "name": "AK TROY Full Length Rail handguard with gas tube",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifle only.",
            "manufacturer": "Troy Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://worldoftroy.com/",
            "stats": {
                "recoil": "-4%",
                "sway": "-17%",
                "weight": "550g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_VS_Combo_Hndgrd_with_Gastube_White",
            "name": "AK Vezhlivyy Strelok VS-24 + VS-33c handguard with gas tube",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Vezhlivyy Strelok",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-3%",
                "sway": "-17%",
                "weight": "590g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_AX15_15inch_Hndgrd",
            "name": "AR-15 Aeroknox AX-15 15.8 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Aeroknox",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-15%",
                "weight": "343g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Zenit_B30B31_Hndgrd",
            "name": "AK Zenit B-30 handguard with B-31S upper handguard rail",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifle only.",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-10%",
                "sway": "-10%",
                "weight": "390g"
            }
        },
        {
            "id": "SMPZ_Attachments_Saiga_Bravo_Hndgrd",
            "name": "Saiga-12 Bravo-18 aluminium handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on Saiga only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-10%",
                "weight": "370g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_CRUX_Hndgrd",
            "name": "HK 416A5 Strike Industries CRUX 15 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on HK 416A5 with 505mm Barrel only",
            "manufacturer": "Strike Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.strikeindustries.com/",
            "stats": {
                "recoil": "-10%",
                "sway": "-13%",
                "weight": "440g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Daniel_Defense_RIS_II_9inch_Hndgrd",
            "name": "AR-15 Daniel Defense RIS II 9.5 handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Deniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-6%",
                "sway": "-14%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Daniel_Defense_RIS_II_12inch_Hndgrd",
            "name": "AR-15 Daniel Defense RIS II 12.25 handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Deniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-7%",
                "sway": "-14%",
                "weight": "502g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Daniel_Defense_MFR_15inch_Hndgrd",
            "name": "AR-15 Daniel Defense MFR 15 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Daniel Defense",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-7%",
                "sway": "-15%",
                "weight": "286g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Lonestar_Ion_Hndgrd",
            "name": "AR-15 Lone Star Ion Lite handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles with 457mm Barrel",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-14%",
                "weight": "380g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_LVOA_S_Hndgrd",
            "name": "AR-15 War Sport LVOA-S handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by War Sport Industries",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-14%",
                "weight": "500g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_LVOA_C_Hndgrd",
            "name": "AR-15 War Sport LVOA-C handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by War Sport Industries",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-9%",
                "sway": "-14%",
                "weight": "580g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_Midwest_9inch_Hndgrd",
            "name": "HK 416A5 Midwest Industries 9 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "Midwest Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://midwestindustriesinc.com/",
            "stats": {
                "recoil": "-4%",
                "sway": "-15%",
                "weight": "280g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_Midwest_13inch_Hndgrd",
            "name": "HK 416A5 Midwest Industries 13.5 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on HK 416A5 with 505mm Barrel only",
            "manufacturer": "Midwest Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://midwestindustriesinc.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-15%",
                "weight": "370g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_Extended_Hndgrd",
            "name": "HK 416 Quad Rail Extended handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on HK 416A5 with 505mm Barrel only",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-8%",
                "sway": "-10%",
                "weight": "540g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_MRS_KeyMod_Hndgrd",
            "name": "HK 416 MRS KeyMod 14 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on HK 416A5 with 505mm Barrel only",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-10%",
                "sway": "-10%",
                "weight": "390g"
            }
        },
        {
            "id": "SMPZ_Attachments_HK416_Troy_Hndgrd",
            "name": "HK 416 TROY M-LOK 13 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on HK 416A5 with 505mm Barrel only",
            "manufacturer": "Troy Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://worldoftroy.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-15%",
                "weight": "250g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Daniel_Defense_RIS_FSP_Hndgrd",
            "name": "AR-15 Daniel Defense RIS II FSP 9.5 handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles",
            "manufacturer": "Daniel Defense",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://danieldefense.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-12%",
                "weight": "300g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_CMMG_MK3_RML_9inch_Hndgrd",
            "name": "AR-10 CMMG MK3 RML9 9 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only",
            "manufacturer": "CMMG",
            "manufacturerLogo": "assets/cmmg-logo.png",
            "manufacturerUrl": "https://cmmg.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "155g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_CMMG_MK3_RML_15inch_Hndgrd",
            "name": "AR-10 CMMG MK3 RML15 15 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only",
            "manufacturer": "CMMG",
            "manufacturerLogo": "assets/cmmg-logo.png",
            "manufacturerUrl": "https://cmmg.com/",
            "stats": {
                "recoil": "-6%",
                "sway": "-10%",
                "weight": "156g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_SAI_Hndgrd",
            "name": "AR-15 SAI 10 inch QD Rail handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Salient Arms International",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-15%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_SAI_145_Hndgrd",
            "name": "AR-15 SAI 14.5 inch QD Rail handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Salient Arms International",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-13%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_Skull_Hndgrd",
            "name": "AR-15 Unique-ARs Wing & Skull 12 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-15%",
                "weight": "250g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_SMR_9inch_Hndgrd",
            "name": "AR-15 Geissele SMR MK16 9.5 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-13%",
                "weight": "335g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_SMR_9inch_Hndgrd_Silver",
            "name": "AR-15 Geissele SMR MK16 9.5 inch M-LOK handguard (Silver)",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-13%",
                "weight": "335g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_SMR_13inch_Hndgrd",
            "name": "AR-15 Geissele SMR MK16 13.5 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-6%",
                "sway": "-15%",
                "weight": "480g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_SMR_13inch_Hndgrd_Silver",
            "name": "AR-15 Geissele SMR MK16 13.5 inch M-LOK handguard (Silver)",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "Geissele Automatics",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://geissele.com/",
            "stats": {
                "recoil": "-6%",
                "sway": "-15%",
                "weight": "480g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_SWS_Hndgrd",
            "name": "AR-10 Noveske SWS N6 10.5 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-13%",
                "weight": "502g"
            }
        },
        {
            "id": "SMPZ_Attachments_Saiga_Type340_Hndgrd",
            "name": "SOK-12 Custom Guns Type-340 handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on Saiga only",
            "manufacturer": "Custom Guns",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-7%",
                "sway": "-14%",
                "weight": "240g"
            }
        },
        {
            "id": "SMPZ_Attachments_Saiga_Chaos_Hndgrd",
            "name": "SOK-12 Chaos Titan Quad Rail handguard with rail top cover",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Chaos USA",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-10%",
                "weight": "568g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_URX_10inch_Hndgrd",
            "name": "AR-15 KAC URX 3.1 10.75 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-8%",
                "sway": "-10%",
                "weight": "224g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR10_URX_14inch_Hndgrd",
            "name": "AR-10 KAC URX 4 14.5 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-10 type rifles only.",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "420g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_VYPR_Hndgrd",
            "name": "AR-15 STNGR VYPR 10 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only.",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-14%",
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKS74U_Goliaf_Hndgrd",
            "name": "AKS-74U Alfa Arms Goliaf handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on AKS-74U Series",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "150g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKS74U_Goliaf_Mlok_Hndgrd",
            "name": "AKS-74U Alfa Arms Goliaf M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on AKS-74U Series",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-15%",
                "weight": "250g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKS74U_B11_B12_Hndgrd",
            "name": "AKS-74U Zenit B-11 handguard with B-12 Mount",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on AKS-74U Series",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-5%",
                "sway": "-10%",
                "weight": "237g"
            }
        },
        {
            "id": "SMPZ_Attachments_AKS74U_XRSU47_Hndgrd",
            "name": "AKS-74U CAA XRSU47SU Tactical Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-2%",
                "sway": "-20%",
                "weight": "520g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Zenit_B10_B19_Hndgrd",
            "name": "AK Zenit B-10M handguard with B-19 upper mount",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "Zenitco",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://zenitco.ru/",
            "stats": {
                "recoil": "-8%",
                "sway": "-14%",
                "weight": "260g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Vltor_CMRD_KeyMod_Hndgrd",
            "name": "AK Vltor CMRD KeyMod handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "VLTOR Weapon Systems",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://www.vltor.com/",
            "stats": {
                "recoil": "-12%",
                "sway": "-15%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_TDI_AKML_Hndgrd_Black",
            "name": "AK TDI AKM-L handguard Black",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-13%",
                "weight": "221g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_TDI_AKML_Hndgrd_Gold",
            "name": "AK TDI AKM-L handguard Gold",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-13%",
                "weight": "221g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_TDI_AKML_Hndgrd_Red",
            "name": "AK TDI AKM-L handguard Red",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-5%",
                "sway": "-13%",
                "weight": "221g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Zhukov_U_Hndgrd_Black",
            "name": "AK Magpul Zhukov-U handguard Black",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-12%",
                "weight": "310g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Zhukov_U_Hndgrd_FDE",
            "name": "AK Magpul Zhukov-U handguard FDE",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-12%",
                "weight": "310g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Zhukov_U_Hndgrd_Plum",
            "name": "AK Magpul Zhukov-U handguard Plum",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AK series rifles only",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-12%",
                "weight": "310g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_UFM_Keymod_Hndgrd",
            "name": "AK Krebs Custom UFM KeyMod handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "need VDM Gastube to attach",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-11%",
                "weight": "465g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_Agressor_Hndgrd",
            "name": "AK 5.45 Design Aggressor handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on AK rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-11%",
                "weight": "260g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_ASPID_Hndgrd",
            "name": "AK Alfa Arms ASPID handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Fits on AK rifles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-10%",
                "sway": "-8%",
                "weight": "370g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_M4_Carbine_Hndgrd",
            "name": "AR-15 Colt M4 Carbine Length handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-15%",
                "weight": "193g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_M4_KAC_RIS_Hndgrd",
            "name": "AR-15 KAC RIS handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on AR-15 type rifles only",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-12%",
                "weight": "226g"
            }
        },
        {
            "id": "SMPZ_Attachments_G36_Slimline_Hndgrd",
            "name": "HK G36 Slim Line HKey Handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on HK G36 only",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "stats": {
                "recoil": "-7%",
                "sway": "-15%",
                "weight": "440g"
            }
        },
        {
            "id": "SMPZ_Attachments_G36_KAC_Quadrail_Hndgrd",
            "name": "HK G36 KAC Quad Rail handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on HK G36 only",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "stats": {
                "recoil": "-10%",
                "sway": "-14%",
                "weight": "510g"
            }
        },
        {
            "id": "SMPZ_Attachments_SKS_ATI_Monte_Carlo_Hndgrd",
            "name": "SKS ATI Monte Carlo gas tube cover",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on SKS only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "100g"
            }
        },
        {
            "id": "SMPZ_Attachments_MP155_Ultima_Hndgrd",
            "name": "MP-155 Ultima polymer forestock",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Kalashnikov Concern(Group)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "weight": "300g"
            }
        },
        {
            "id": "SMPZ_Attachments_SV98_CNC_OV_Hndgrd",
            "name": "SV-98 CNC Guns OV-SV98 KeyMod handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on SV-98 only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-8%",
                "sway": "-14%",
                "weight": "400g"
            }
        },
        {
            "id": "SMPZ_Attachments_AR15_BCM_MCMR_10inch_Hndgrd",
            "name": "AR-15 BCM MCMR-10 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by Bravo Company Manufacturing",
            "manufacturer": "Bravo Company MFG",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://bravocompanyusa.com/",
            "stats": {
                "recoil": "-5%",
                "sway": "-15%",
                "weight": "279g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_MOE_Hndgrd_Black",
            "name": "AK Magpul MOE AKM handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-7%",
                "sway": "-12%",
                "weight": "221g"
            }
        },
        {
            "id": "SMPZ_Attachments_AK_MOE_Hndgrd_Plum",
            "name": "AK Magpul MOE AKM handguard (Plum)",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Manufactured by MAGPUL",
            "manufacturer": "Magpul Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://magpul.com/",
            "stats": {
                "recoil": "-7%",
                "sway": "-12%",
                "weight": "221g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_Gen2_6inch_Hndgrd",
            "name": "MPX GEN2 6 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on SIG MPX only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-20%",
                "sway": "-20%",
                "weight": "482g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_Gen2_8inch_Hndgrd",
            "name": "MPX GEN2 8 inch handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on SIG MPX only",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "stats": {
                "recoil": "-20%",
                "sway": "-20%",
                "weight": "503g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_Midwest_6inch_Hndgrd",
            "name": "MPX Midwest Industries 6.5 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on SIG MPX only",
            "manufacturer": "Midwest Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://midwestindustriesinc.com/",
            "stats": {
                "recoil": "-20%",
                "sway": "-20%",
                "weight": "480g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_Midwest_10inch_Hndgrd",
            "name": "MPX Midwest Industries 10.5 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on SIG MPX only",
            "manufacturer": "Midwest Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://midwestindustriesinc.com/",
            "stats": {
                "recoil": "-20%",
                "sway": "-20%",
                "weight": "600g"
            }
        },
        {
            "id": "SMPZ_Attachments_MPX_Midwest_14inch_Hndgrd",
            "name": "MPX Midwest Industries 14 inch M-LOK handguard",
            "category": "핸드가드",
            "image": "",
            "images": [],
            "description": "Can be attached on SIG MPX only",
            "manufacturer": "Midwest Industries",
            "manufacturerLogo": "",
            "manufacturerUrl": "https://midwestindustriesinc.com/",
            "stats": {
                "recoil": "-20%",
                "sway": "-20%",
                "weight": "600g"
            }
        }
    ]
};
