// 데이터 저장소 (실제로는 서버나 로컬스토리지 사용)
let weaponsData = {
    "권총": [
        {
            "id": "13",
            "keyword": "",
            "name": "Beretta 92FS",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "이탈리아 피에트로 베레타 사에서 개발한 9x19mm 제식 권총입니다. 미군 제식 권총(M9)으로 오랜 기간 채택되어 뛰어난 신뢰성과 부드러운 작동성을 검증받았습니다.",
            "stats": {
                "recoil": "100",
                "sway": "72",
                "ergonomics": "89",
                "accuracy": "10.28 MOA",
                "velocity": "380 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "14",
            "keyword": "",
            "name": "Beretta M9A3",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "베레타 92FS의 현대화 개량형 권총입니다. 베르텍(Vertec) 슬림 그립, 나사산 총열(소음기 장착용), 피카티니 레일 및 FDE 도색을 적용하여 특수작전에 최적화되었습니다.",
            "stats": {
                "recoil": "100",
                "sway": "72",
                "ergonomics": "89",
                "accuracy": "10.28 MOA",
                "velocity": "380 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "20",
            "keyword": "",
            "name": "Colt M1911A1",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "존 브라우닝이 설계하고 콜트 사가 제작한 전설적인 .45 ACP 대구경 싱글액션 권총입니다. 100년이 넘는 세월 동안 압도적인 저지력과 클래식한 완성도를 인정받았습니다.",
            "stats": {
                "recoil": "100",
                "sway": "56",
                "ergonomics": "87",
                "accuracy": "3.50 MOA",
                "velocity": "273 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "21",
            "keyword": "",
            "name": "Colt M45A1",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "미 해병대 특수작전사령부(MARSOC)의 요구에 맞춰 현대화된 M1911 플랫폼 권총입니다. 레일 일체형 프레임, 듀얼 리코일 스프링, 아이언사이트를 개량하여 내구성을 극대화했습니다.",
            "stats": {
                "recoil": "100",
                "sway": "56",
                "ergonomics": "87",
                "accuracy": "3.50 MOA",
                "velocity": "273 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "30",
            "keyword": "",
            "name": "FN Five-seveN MK2",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "벨기에 FN 에르스탈(FN Herstal) 사의 명품 화기입니다.",
            "stats": {
                "recoil": "50",
                "sway": "24",
                "ergonomics": "90",
                "accuracy": "7.5 MOA",
                "velocity": "715 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "36",
            "keyword": "",
            "name": "Glock 17",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/gl.png",
            "description": "오스트리아 글록(Glock) 사의 혁신적인 폴리머 프레임 9x19mm 스트라이커 권총입니다. 단순한 내부 구조로 인한 극강의 내구성과 신뢰성으로 전 세계 군경의 표준이 되었습니다.",
            "stats": {
                "recoil": "80",
                "sway": "40",
                "ergonomics": "88",
                "accuracy": "11.69 MOA",
                "velocity": "380 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "37",
            "keyword": "",
            "name": "Glock 18C",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/gl.png",
            "description": "글록 17을 기반으로 개발된 분당 1,200발의 압도적인 전자동 연사가 가능한 9mm 기관권총입니다. 슬라이드 상부에 반동 제어용 컴펜세이터 포트가 뚫려 있습니다.",
            "stats": {
                "recoil": "80",
                "sway": "40",
                "ergonomics": "88",
                "accuracy": "12.03 MOA",
                "velocity": "380 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "46",
            "keyword": "",
            "name": "HK UCP",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The HK UCP (Universal Combat Pistol) is a new tactical pistol developed by Germany's Heckler & Koch to meet the U.S. military's next-generation pistol system requirements. The UCP pursued weight reduction based on a polymer frame and features adjustable large controls and an ambidextrous structure. To reliably handle high-pressure 4.6mm ammunition, it adopted reinforced slide and locking mechanisms, and features a design optimized for straight-line recoil flow and rapid continuous fire control suited to low-recoil, high-velocity cartridge characteristics. Additionally, barrel structure designed with suppressor operation in mind, rails for mounting tactical lights and optical equipment, and ergonomic design for operational compatibility with the MP7 are evaluated as key technical features.",
            "stats": {
                "recoil": "95",
                "sway": "72",
                "ergonomics": "90",
                "accuracy": "9.63 MOA",
                "velocity": "720 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "47",
            "keyword": "",
            "name": "HK USP",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "image": "assets/usp.png",
            "description": "독일 헤클러 앤 코흐(H&K) 사의 강력한 군경용 대형 권총입니다. 브라우닝식 개량 쇼트 리코일과 폴리머 프레임을 채택하여 혹독한 환경에서도 완벽한 작동을 보장합니다.",
            "stats": {
                "recoil": "100",
                "sway": "72",
                "ergonomics": "89",
                "accuracy": "9.63 MOA",
                "velocity": "260 m/s",
                "rpm": "480"
            }
        },
        {
            "id": "79",
            "keyword": "데저트 이글 엘5 데저트 이글 엘식 엘식 엘식 데글 디글",
            "name": "Magnum Research Desert Eagle L5",
            "manufacturer": "Magnum Research",
            "manufacturerLogo": "assets/magnumresearch-logo.png",
            "manufacturerUrl": "https://www.magnumresearch.com/",
            "image": "assets/deaglel5_50ae.png",
            "description": "데저트 이글 L5는 Magnum Research가 제작한 .50 액션 익스프레스(.50 AE) 탄을 사용하는 스포츠·헌팅용 권총의 개량형입니다. 이 권총은 크고 무거우며, 실사용 면에서 가장 실용적이지는 않지만, 다른 어떤 권총과도 비교할 수 없는 독특한 형태를 지녀 그 거대한 외형과 위압감 덕분에 수많은 비디오 게임에서 자주 등장하는 아이콘이 되었습니다. 군용 채택에는 실패했지만, 세계에서 가장 유명한 권총 중 하나라는 명성은 충분히 누리고 있습니다.",
            "stats": {
                "recoil": "118",
                "sway": "93",
                "ergonomics": "84",
                "accuracy": "8.94 MOA",
                "velocity": "440 m/s",
                "rpm": "375"
            }
        },
        {
            "id": "80",
            "keyword": "데저트 이글 엘6 데저트 이글 엘식 엘식 엘식 데글 디글",
            "name": "Magnum Research Desert Eagle L6",
            "manufacturer": "Magnum Research",
            "manufacturerLogo": "assets/magnumresearch-logo.png",
            "manufacturerUrl": "https://www.magnumresearch.com/",
            "image": "assets/deaglel6.png",
            "description": "데저트 이글 L6는 Magnum Research가 제작한 .50 액션 익스프레스(.50 AE) 탄을 사용하는 스포츠·헌팅용 권총의 개량형입니다. 이 권총은 크고 무거우며, 실사용 면에서 가장 실용적이지는 않지만, 다른 어떤 권총과도 비교할 수 없는 독특한 형태를 지녀 그 거대한 외형과 위압감 덕분에 수많은 비디오 게임에서 자주 등장하는 아이콘이 되었습니다. 군용 채택에는 실패했지만, 세계에서 가장 유명한 권총 중 하나라는 명성은 충분히 누리고 있습니다.",
            "stats": {
                "recoil": "120",
                "sway": "93",
                "ergonomics": "84",
                "accuracy": "10.31 MOA",
                "velocity": "440 m/s",
                "rpm": "375"
            }
        },
        {
            "id": "112",
            "keyword": "세르듀코프 규르자 굴자 결자 ",
            "name": "Serdyukov SR-1MP Gyurza",
            "manufacturer": "Serdyukov",
            "manufacturerLogo": "assets/TsNIITochMash-logo.png",
            "manufacturerUrl": "",
            "image": "assets/sr1mp.png",
            "description": "SR-1MP 권총(그라우 지수 6P53)은 ‘규르자(Gyurza, 독사)’ 또는 SPS(Serdyukov Semiautomatic Pistol)로도 알려져 있으며, 세르듀코프(P. Serdyukov)와 벨랴예프(I. Belyaev)가 강력한 9x21mm 탄을 사용하도록 설계한 모델입니다. 이 권총은 러시아 연방 특수부대가 사용하던 APS 기관권총을 대체하기 위해 개발되었습니다. SR-1MP는 추가 장비를 장착하기 위한 마운트 세트를 부착할 수 있으며, 소음기 설치용 기반으로도 활용될 수 있습니다.",
            "stats": {
                "recoil": "80",
                "sway": "64",
                "ergonomics": "89",
                "accuracy": "7.49 MOA",
                "velocity": "413 m/s",
                "rpm": "480"
            }
        },
        {
            "id": "116",
            "keyword": "",
            "name": "Staccato XC",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "",
            "stats": {
                "recoil": "60",
                "sway": "72",
                "ergonomics": "87",
                "accuracy": "7.6 MOA",
                "velocity": "380 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "120",
            "keyword": "",
            "name": "TT-33",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "7.62x25mm TT 탄약을 사용하는 화기입니다.",
            "stats": {
                "recoil": "80",
                "sway": "64",
                "ergonomics": "89",
                "accuracy": "3.50 MOA",
                "velocity": "700 m/s",
                "rpm": "600"
            }
        }
    ],
    "돌격 소총": [
        {
            "id": "3",
            "keyword": "",
            "name": "ADAR 2-15",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "AR-15 설계를 기반으로 제작된 러시아의 민간용 카빈총 ADAR 2-15입니다. 이 카빈은 상트페테르부르크에서 이스라엘산 부품과 Molot Oruzhie LLC의 크롬 도금 총열을 사용하여 생산됩니다.",
            "stats": {
                "recoil": "108",
                "sway": "136",
                "ergonomics": "82",
                "accuracy": "1.66 MOA",
                "velocity": "983 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "4",
            "keyword": "",
            "name": "AN-94",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "이 총기의 탄생은 당시 러시아에서 '칼라시니코프'의 대안으로서 근본적으로 새로운 돌격소총들을 시험했던 '아바칸(Abakan)'이라는 경연 대회와 관련이 있습니다. 툴라(Tula)의 개발품들을 포함한 여러 모델 중에서 G.N. 니코노프(G.N. Nikonov)의 설계안이 채택되었습니다. 이 소총은 군에서 AK-74 돌격소총과 함께 운용될 목적으로 개발되었습니다. 니코노프의 돌격소총은 5.45mm 구경을 사용했으나, 자동 작동 원리 면에서 이전의 모든 전통적인 자동화기 설계와 완전히 달랐습니다. 이 총에서는 리시버 내부에 위치하여 하우징의 특수 홈을 따라 움직이는 '가동식 총열'을 통해 재장전이 이루어집니다.",
            "stats": {
                "recoil": "30",
                "sway": "40",
                "ergonomics": "69",
                "accuracy": "1.89 MOA",
                "velocity": "792 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "5",
            "keyword": "",
            "name": "AS VAL",
            "manufacturer": "TsNIITochMash",
            "manufacturerLogo": "assets/TsNIITochMash-logo.png",
            "manufacturerUrl": "",
            "image": "assets/asval.png",
            "description": "AS VAL(Avtomat Specialniy VAL - '특수 자동 소총', 코드명 'Shaft')은 1980년대 후반 소련에서 9x39mm 구경으로 개발된 소음 돌격소총입니다. 1987년 소련군과 KGB에 채택되었습니다. 은밀한 저소음 사격과 방탄복 관통 능력을 갖추고 있습니다.",
            "stats": {
                "recoil": "80",
                "sway": "88",
                "ergonomics": "81",
                "accuracy": "3.44 MOA",
                "velocity": "310 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "6",
            "keyword": "",
            "name": "AS VAL MOD.4",
            "manufacturer": "TsNIITochMash",
            "manufacturerLogo": "assets/TsNIITochMash-logo.png",
            "manufacturerUrl": "",
            "image": "assets/asval.png",
            "description": "현대 전술 레일 시스템과 조절식 스톡을 장착하여 근대화 개수된 AS VAL의 특수작전용 커스텀 개량형입니다.",
            "stats": {
                "recoil": "80",
                "sway": "88",
                "ergonomics": "82",
                "accuracy": "3.44 MOA",
                "velocity": "310 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "7",
            "keyword": "",
            "name": "ASh-12",
            "manufacturer": "Izhmash",
            "manufacturerLogo": "assets/izhmash-logo.png",
            "manufacturerUrl": "",
            "image": "assets/ash12.png",
            "description": "ASh-12.7 (Avtomat Shturmovoy 12 - \"Assault Automatic Rifle 12\") 불펍 돌격소총은 CQB 및 시가전을 위해 개발된 소총으로, 러시아 연방보안국의 요청으로 Tula의 KBP 디자인 관리국의 자회사인 TsKIB SOO (총기 디자인 및 연구 중앙 관리국)에서 설계하고 이즈마쉬(Izhmash)에서 생산되었습니다. FSB 요원들이 시가전에서 수월하게 교전할 수 있도록 대인 저지력을 극대화했습니다.<br>12.7×55mm STs-130이라는 전용 대구경 탄환을 사용하여 최대 100~300m 거리에서 압도적인 저지력을 발휘합니다. 또한, 일반적인 돌격소총과 달리 가스 작동식이 아닌 쇼트 리코일(Short Recoil) 방식으로 작동하여 반동 제어에 도움을 줍니다. 안전장치와 사격 모드 선택 레버가 분리되어 있어, 사수는 원하는 사격 모드를 빠르게 선택할 수 있습니다.",
            "stats": {
                "recoil": "100",
                "sway": "120",
                "ergonomics": "50",
                "accuracy": "1.63 MOA",
                "velocity": "345 m/s",
                "rpm": "650"
            }
        },
        {
            "id": "15",
            "keyword": "",
            "name": "CMMG Mk47 Mutant",
            "manufacturer": "CMMG",
            "manufacturerLogo": "assets/cmmg-logo.png",
            "manufacturerUrl": "https://cmmg.com/",
            "image": "assets/mk47.png",
            "description": "AR-15의 인체공학적 조작계와 AK-47의 7.62x39mm 탄약 및 탄창을 완벽히 결합한 하이브리드 돌격소총입니다.",
            "stats": {
                "recoil": "150",
                "sway": "100",
                "ergonomics": "82",
                "accuracy": "2.48 MOA",
                "velocity": "657 m/s",
                "rpm": "650"
            }
        },
        {
            "id": "17",
            "keyword": "콜트 칼트 엠심육에이원 예비군",
            "name": "Colt M16A1",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "image": "assets/m16a1.png",
            "description": "1960년대 후반에 Colt가 개발한 5.56x45mm 돌격 소총이자 AR-15/M16의 개량형입니다. M16A1은 베트남 전쟁 중 미군의 표준 제식 소총이 되었고, 신뢰성 향상을 위한 개량이 이루어졌습니다. 현대의 기준으로는 구식이지만, 수집가나 사격 애호가에게 높이 평가되고 있습니다. 또한 대한민국에서는 일부 예비군 부대에서 M16A1이 아직도 운용되고 있는 것으로 알려져 있습니다.",
            "stats": {
                "recoil": "120",
                "sway": "160",
                "ergonomics": "82",
                "accuracy": "1.24 MOA",
                "velocity": "1092 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "18",
            "keyword": "콜트 칼트 엠심육에이투 예비군",
            "name": "Colt M16A2",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "image": "assets/m16a2.png",
            "description": "M16 플랫폼의 후기 발전형인 M16A2는 3점사 기능과 향상된 부품을 도입하여 제어성과 내구성을 크게 개선한 모델입니다. 5.56x45mm NATO 탄을 사용하며 1980~1990년대 동안 미군의 주요 제식 소총으로 운용되었습니다. 높은 정확도와 신뢰성으로 잘 알려져 있으며, 현대 돌격 소총 설계의 기준점으로 평가받고 있습니다.",
            "stats": {
                "recoil": "115",
                "sway": "160",
                "ergonomics": "83",
                "accuracy": "1.24 MOA",
                "velocity": "1092 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "19",
            "keyword": "",
            "name": "Colt M16A3",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The M16A3 is an American assault rifle, a modification of the M16A2, developed in the late 1980s and adopted in the 1990s. Its key differences include the return of full-automatic fire mode (like the M16A1) instead of the M16A2's three-round burst, and the installation of a Picatinny rail on the upper receiver instead of an integrated carrying handle. This allowed for the attachment of various optical and collimator equipment.",
            "stats": {
                "recoil": "108",
                "sway": "136",
                "ergonomics": "82",
                "accuracy": "1.82 MOA",
                "velocity": "1092 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "22",
            "keyword": "콜트 칼트 엠포 엠포에이원",
            "name": "Colt M4A1",
            "manufacturer": "Colt",
            "manufacturerLogo": "assets/colt-logo.png",
            "manufacturerUrl": "https://www.colt.com/",
            "image": "assets/m4a1.png",
            "description": "M4A1은 5.56x45mm NATO 탄약을 사용하는 미국의 가스 직동식 카빈 소총입니다. 높은 모듈성과 신뢰성으로 미군의 주력 개인화기로 운용됩니다.",
            "stats": {
                "recoil": "115",
                "sway": "136",
                "ergonomics": "83",
                "accuracy": "1.82 MOA",
                "velocity": "910 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "23",
            "keyword": "",
            "name": "Custom Guns NL545",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "",
            "stats": {
                "recoil": "102",
                "sway": "120",
                "ergonomics": "82",
                "accuracy": "1.38 MOA",
                "velocity": "889 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "24",
            "keyword": "",
            "name": "DS Arms SA58",
            "manufacturer": "DS Arms",
            "manufacturerLogo": "assets/dsarms-logo.png",
            "manufacturerUrl": "https://dsarms.com/",
            "image": "assets/sa58.png",
            "description": "SA58 OSW(Operations Specialist Weapon)는 미국 회사 DSA(또는 DS Arms, David Selvaggio Arms)가 제조한 소총으로, FAL의 합법적인 복제 모델입니다. 이 소총은 과거 StG-58에 사용된 것과 동일한 Steyr-Daimler-Puch 생산 설비로 제작되어 높은 신뢰성을 자랑합니다. 총열 길이는 여러 가지로 제공되며, 알루미늄 합금 하부 리시버와 유리섬유 강화 나일론 재질의 개량된 스톡과 핸드가드를 갖추고 있습니다. 민수용 모델은 반자동 전용이지만, 군과 법 집행 기관용으로는 분당 750발의 완전 자동 연사 속도를 지닌 선택 사격(Select-fire) 모델도 조달할 수 있습니다. DSA58은 모든 미터 규격의 FAL 탄창을 사용할 수 있습니다.",
            "stats": {
                "recoil": "180",
                "sway": "120",
                "ergonomics": "75",
                "accuracy": "0.9 MOA",
                "velocity": "1033 m/s",
                "rpm": "750"
            }
        },
        {
            "id": "27",
            "keyword": "",
            "name": "Desert Tech MDR 5.56",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The MDR 5.56x45 bullpup automatic rifle, developed by the American company Desert Tech LLC. This rifle in its basic version will be a modular, multi-caliber automatic weapon designed to arm police and army special forces units.",
            "stats": {
                "recoil": "100",
                "sway": "83",
                "ergonomics": "64",
                "accuracy": "1.36 MOA",
                "velocity": "1092 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "28",
            "keyword": "",
            "name": "Desert Tech MDR 7.62",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The MDR 5.56x45 bullpup automatic rifle, developed by the American company Desert Tech LLC. This rifle in its basic version will be a modular, multi-caliber automatic weapon designed to arm police and army special forces units.",
            "stats": {
                "recoil": "100",
                "sway": "83",
                "ergonomics": "64",
                "accuracy": "1.36 MOA",
                "velocity": "1008 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "29",
            "keyword": "",
            "name": "FN F2000",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "",
            "stats": {
                "recoil": "90",
                "sway": "44",
                "ergonomics": "74",
                "accuracy": "1.53 MOA",
                "velocity": "928 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "32",
            "keyword": "",
            "name": "FN SCAR-H",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "FN SCAR-H(특수작전부대용 전투 돌격소총 - 중량형)는 7.62x51mm NATO 구경으로 미국 특수작전사령부(US SOCOM)에 채택된 전투소총입니다.",
            "stats": {
                "recoil": "140",
                "sway": "96",
                "ergonomics": "69",
                "accuracy": "1.65 MOA",
                "velocity": "899 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "33",
            "keyword": "",
            "name": "FN SCAR-L",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "FN SCAR-L(특수작전부대용 전투 돌격소총 - 경량형)은 5.56x45mm NATO 구경으로 미국 특수작전사령부(US SOCOM)의 요구에 맞춰 개발되었습니다.",
            "stats": {
                "recoil": "115",
                "sway": "96",
                "ergonomics": "69",
                "accuracy": "1.97 MOA",
                "velocity": "910 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "34",
            "keyword": "",
            "name": "FN SCAR-L (Black)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "FN SCAR-L(특수작전부대용 전투 돌격소총 - 경량형)은 5.56x45mm NATO 구경으로 미국 특수작전사령부(US SOCOM)의 요구에 맞춰 개발되었습니다.",
            "stats": {
                "recoil": "117",
                "sway": "96",
                "ergonomics": "69",
                "accuracy": "2.68 MOA",
                "velocity": "860 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "35",
            "keyword": "",
            "name": "FN SCAR-L (FDE)",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "FN SCAR-L(특수작전부대용 전투 돌격소총 - 경량형)은 5.56x45mm NATO 구경으로 미국 특수작전사령부(US SOCOM)의 요구에 맞춰 개발되었습니다.",
            "stats": {
                "recoil": "117",
                "sway": "96",
                "ergonomics": "69",
                "accuracy": "2.68 MOA",
                "velocity": "860 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "38",
            "keyword": "",
            "name": "HK 337",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "독일 헤클러 앤 코흐(Heckler & Koch) 사의 정밀 전술 화기입니다.",
            "stats": {
                "recoil": "120",
                "sway": "96",
                "ergonomics": "83",
                "accuracy": "2.37 MOA",
                "velocity": "1104 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "39",
            "keyword": "에이치케이 흥국 흥국416 김흥국 헤클러 앤 코흐",
            "name": "HK 416A5",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "image": "assets/hk416a5.png",
            "description": "HK416 A5는 헤클러 앤 코흐에서 제작한 5.56x45 mm NATO 탄을 사용하는 HK416 돌격 소총의 추가 개량된 모델입니다. 이전 버전과 비교하여 가장 인상적인 변화는 시장성이 좋은 AR 플랫폼을 탑재했다는 점입니다. 소음기를 사용할 때 도구 없이 가스 조절이 가능하게 개선된 가스 조절기를 탑재하였으며, 사용자를 위하여 재설계된 하부 총몸은 완벽한 양손 조작이 가능하게 최적화되었습니다. 또한 실제 작동 조건에서 사용자의 안전, 신뢰성, 탄창의 호환성 및 내구성 등 기술적인 부분이 많이 개선되었습니다.",
            "stats": {
                "recoil": "113",
                "sway": "108",
                "ergonomics": "76",
                "accuracy": "1.93 MOA",
                "velocity": "910 m/s",
                "rpm": "1000"
            }
        },
        {
            "id": "42",
            "keyword": "",
            "name": "HK G36K",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "G36은 5.56x45mm NATO 저충격 탄약을 사용하는 독일의 자동소총입니다. 1990년대 초 헤클러 앤 코흐(Heckler & Koch)에서 7.62mm G3 소총의 대체품으로 개발되었습니다.",
            "stats": {
                "recoil": "105",
                "sway": "84",
                "ergonomics": "82",
                "accuracy": "2.0 MOA",
                "velocity": "892 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "48",
            "keyword": "",
            "name": "IWI Tavor X95",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "",
            "stats": {
                "recoil": "105",
                "sway": "44",
                "ergonomics": "66",
                "accuracy": "1.53 MOA",
                "velocity": "928 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "53",
            "keyword": "",
            "name": "Kalashnikov AK-101",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "AK-101 5.56x45mm는 AK-74M 돌격소총의 수출용 버전입니다. 5.56x45mm NATO 표준 탄약을 사용하도록 설계되었습니다.",
            "stats": {
                "recoil": "100",
                "sway": "64",
                "ergonomics": "74",
                "accuracy": "1.72 MOA",
                "velocity": "910 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "54",
            "keyword": "",
            "name": "Kalashnikov AK-102",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "AK-102 5.56x45mm는 AK-74M의 수출용 버전이자 AK-101의 단축형 카빈 버전입니다.",
            "stats": {
                "recoil": "115",
                "sway": "64",
                "ergonomics": "78",
                "accuracy": "1.93 MOA",
                "velocity": "855 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "55",
            "keyword": "",
            "name": "Kalashnikov AK-103",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "AK-103 7.62x39mm는 AK-74M 돌격소총의 현대화 버전입니다. 접철식 폴리머 개머리판과 조준경 장착용 표준 마운팅 레일이 장착되어 있습니다.",
            "stats": {
                "recoil": "100",
                "sway": "64",
                "ergonomics": "78",
                "accuracy": "2.13 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "56",
            "keyword": "",
            "name": "Kalashnikov AK-104",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "AK-104 7.62x39mm는 AK-74M의 현대화 모델이자 AK-103의 단축형 카빈 버전입니다. 접철식 폴리머 개머리판이 장착되어 있습니다.",
            "stats": {
                "recoil": "115",
                "sway": "64",
                "ergonomics": "78",
                "accuracy": "2.27 MOA",
                "velocity": "686 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "57",
            "keyword": "",
            "name": "Kalashnikov AK-105",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "AK-105 5.45x39mm는 AK-74M 돌격소총의 단축형 카빈 버전입니다. 접철식 폴리머 개머리판과 조준경용 표준 마운팅 레일을 갖추고 있습니다.",
            "stats": {
                "recoil": "110",
                "sway": "64",
                "ergonomics": "78",
                "accuracy": "2.06 MOA",
                "velocity": "818 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "58",
            "keyword": "",
            "name": "Kalashnikov AK-12",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "AK-12는 러시아 육군의 차세대 보병 장비 체계인 라트니크(Ratnik) 프로그램을 위해 개발된 5.45x39mm 제식 소총입니다. 인체공학적 피카티니 레일과 신축식 개머리판을 채택했습니다.",
            "stats": {
                "recoil": "105",
                "sway": "84",
                "ergonomics": "75",
                "accuracy": "1.58 MOA",
                "velocity": "933 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "59",
            "keyword": "",
            "name": "Kalashnikov AK-15",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "AK-15는 7.62x39mm 탄약을 사용하도록 설계된 AK-12 플랫폼의 고위력 돌격소총 버전입니다.",
            "stats": {
                "recoil": "105",
                "sway": "84",
                "ergonomics": "75",
                "accuracy": "1.58 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "60",
            "keyword": "",
            "name": "Kalashnikov AK-308",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "",
            "stats": {
                "recoil": "155",
                "sway": "68",
                "ergonomics": "73",
                "accuracy": "1.64 MOA",
                "velocity": "924 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "61",
            "keyword": "",
            "name": "Kalashnikov AK-74",
            "manufacturer": "Izhmash",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://en.kalashnikovgroup.ru/",
            "image": "assets/ak74.png",
            "description": "AK-74(Avtomat Kalashnikova 74 – ‘칼라시니코프 자동소총 74’) 5.45x39mm 돌격 소총은 군에서 새로운 5.45x39 탄약을 채용함에 따라, 1970년 미하일 칼라시니코프에 의해 AKM을 더욱 발전시킨 형태로 개발되었습니다. AK-74는 새로운 개머리판과 핸드가드(기존 AKM과 동일한 손가락 굴곡부 유지), 그리고 가스 실린더가 적용되었습니다. 개머리판은 AKM과는 다른 형태의 어깨받침을 사용하며, 고무 재질에 톱니 형태의 표면 처리가 되어 사수가 어깨에 더 안정적으로 고정할 수 있게 설계했습니다. 또한 개머리판 양측에는 경량화를 위한 컷이 존재합니다. 초기에는 개머리판, 하부 핸드가드, 상부 히트가드가 적층 목재로 제작되었으나, 이후 자주빛 또는 짙은 갈색의 합성 섬유(유리섬유) 재질로 변경되었습니다.",
            "stats": {
                "recoil": "113",
                "sway": "88",
                "ergonomics": "78",
                "accuracy": "1.99 MOA",
                "velocity": "880 m/s",
                "rpm": "612"
            }
        },
        {
            "id": "62",
            "keyword": "",
            "name": "Kalashnikov AK-74M",
            "manufacturer": "Izhmash",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://en.kalashnikovgroup.ru/",
            "image": "assets/ak74.png",
            "description": "AK-74M 5.45x39mm는 소련/러시아군의 표준 제식 돌격소총입니다. 접철식 폴리머 개머리판과 사이드 마운트 레일을 기본 장착하여 우수한 내구성과 범용성을 제공합니다.",
            "stats": {
                "recoil": "110",
                "sway": "88",
                "ergonomics": "75",
                "accuracy": "1.89 MOA",
                "velocity": "880 m/s",
                "rpm": "612"
            }
        },
        {
            "id": "63",
            "keyword": "",
            "name": "Kalashnikov AK-74N",
            "manufacturer": "Izhmash",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://en.kalashnikovgroup.ru/",
            "image": "assets/ak74.png",
            "description": "AK-74(Avtomat Kalashnikova 74 – ‘칼라시니코프 자동소총 74’) 5.45x39mm 돌격 소총은 군에서 새로운 5.45x39 탄약을 채용함에 따라, 1970년 미하일 칼라시니코프에 의해 AKM을 더욱 발전시킨 형태로 개발되었습니다. AK-74는 새로운 개머리판과 핸드가드(기존 AKM과 동일한 손가락 굴곡부 유지), 그리고 가스 실린더가 적용되었습니다. 개머리판은 AKM과는 다른 형태의 어깨받침을 사용하며, 고무 재질에 톱니 형태의 표면 처리가 되어 사수가 어깨에 더 안정적으로 고정할 수 있게 설계했습니다. 또한 개머리판 양측에는 경량화를 위한 컷이 존재합니다. 초기에는 개머리판, 하부 핸드가드, 상부 히트가드가 적층 목재로 제작되었으나, 이후 자주빛 또는 짙은 갈색의 합성 섬유(유리섬유) 재질로 변경되었습니다.",
            "stats": {
                "recoil": "113",
                "sway": "88",
                "ergonomics": "77",
                "accuracy": "1.96 MOA",
                "velocity": "880 m/s",
                "rpm": "612"
            }
        },
        {
            "id": "64",
            "keyword": "",
            "name": "Kalashnikov AKM",
            "manufacturer": "Izhmash",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://en.kalashnikovgroup.ru/",
            "image": "assets/akm.png",
            "description": "AKM(Avtomat Kalashnikova Modernizirovanniy)은 1959년에 채택된 7.62x39mm 제식 돌격소총으로, 프레스 가공 리시버를 도입하여 경량화와 생산성을 향상시킨 모델입니다.",
            "stats": {
                "recoil": "120",
                "sway": "92",
                "ergonomics": "77",
                "accuracy": "2.3 MOA",
                "velocity": "730 m/s",
                "rpm": "612"
            }
        },
        {
            "id": "65",
            "keyword": "",
            "name": "Kalashnikov AKMN",
            "manufacturer": "Izhmash",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://en.kalashnikovgroup.ru/",
            "image": "assets/akmn.png",
            "description": "AKM(Avtomat Kalashnikova Modernizirovanniy)은 1959년에 채택된 7.62x39mm 제식 돌격소총으로, 프레스 가공 리시버를 도입하여 경량화와 생산성을 향상시킨 모델입니다.",
            "stats": {
                "recoil": "120",
                "sway": "92",
                "ergonomics": "77",
                "accuracy": "2.27 MOA",
                "velocity": "730 m/s",
                "rpm": "612"
            }
        },
        {
            "id": "66",
            "keyword": "",
            "name": "Kalashnikov AKMS",
            "manufacturer": "Izhmash",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://en.kalashnikovgroup.ru/",
            "image": "assets/akm.png",
            "description": "AKM(Avtomat Kalashnikova Modernizirovanniy)은 1959년에 채택된 7.62x39mm 제식 돌격소총으로, 프레스 가공 리시버를 도입하여 경량화와 생산성을 향상시킨 모델입니다.",
            "stats": {
                "recoil": "121",
                "sway": "92",
                "ergonomics": "77",
                "accuracy": "2.3 MOA",
                "velocity": "730 m/s",
                "rpm": "612"
            }
        },
        {
            "id": "67",
            "keyword": "",
            "name": "Kalashnikov AKMSN",
            "manufacturer": "Izhmash",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://en.kalashnikovgroup.ru/",
            "image": "assets/akm.png",
            "description": "AKM(Avtomat Kalashnikova Modernizirovanniy)은 1959년에 채택된 7.62x39mm 제식 돌격소총으로, 프레스 가공 리시버를 도입하여 경량화와 생산성을 향상시킨 모델입니다.",
            "stats": {
                "recoil": "121",
                "sway": "92",
                "ergonomics": "77",
                "accuracy": "2.3 MOA",
                "velocity": "730 m/s",
                "rpm": "612"
            }
        },
        {
            "id": "68",
            "keyword": "",
            "name": "Kalashnikov AKS-74U",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The AKS-74U (Kalashnikov Folding Assault Rifle 74 Shortened) is a shortened variant of the AKS-74, developed in the early 1980s for arming vehicle crews and paratroopers. Also popular in law enforcement and special forces units due to its compact size.",
            "stats": {
                "recoil": "85",
                "sway": "80",
                "ergonomics": "79",
                "accuracy": "3.44 MOA",
                "velocity": "748 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "69",
            "keyword": "",
            "name": "Kalashnikov AKS-74UN",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The AKS-74UN (Kalashnikov Folding Assault Rifle 74 Shortened Night) is a shortened variant of the AKS-74, developed in the early 1980s for arming vehicle crews and paratroopers. Also popular in law enforcement and special forces units due to its compact size. The N (Night) modification is equipped with a dovetail mount for installing night sights.",
            "stats": {
                "recoil": "85",
                "sway": "80",
                "ergonomics": "79",
                "accuracy": "3.44 MOA",
                "velocity": "748 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "70",
            "keyword": "",
            "name": "Kalashnikov AS-1",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "",
            "stats": {
                "recoil": "95",
                "sway": "40",
                "ergonomics": "66",
                "accuracy": "1.55 MOA",
                "velocity": "350 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "75",
            "keyword": "",
            "name": "Knight's Armament Company PDW",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "A lightweight personal defense weapon developed by Knight's Armament Company, using .300 Blackout (7.62x35mm) ammunition to provide high stopping power and agile handling at close range.",
            "stats": {
                "recoil": "70",
                "sway": "86",
                "ergonomics": "77",
                "accuracy": "2.67 MOA",
                "velocity": "614 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "78",
            "keyword": "",
            "name": "LoneStar TX-15 DML",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "The TX15 Designated Marksman Light (DML) is a high-precision semi-automatic civilian rifle, based on the AR-15 system, in 5.56x45 caliber. Manufactured by Lone Star Armory.",
            "stats": {
                "recoil": "93",
                "sway": "136",
                "ergonomics": "82",
                "accuracy": "1.41 MOA",
                "velocity": "1046 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "81",
            "keyword": "",
            "name": "Magpul Masada",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "5.56x45mm 탄약을 사용하는 화기입니다.",
            "stats": {
                "recoil": "105",
                "sway": "64",
                "ergonomics": "80",
                "accuracy": "1.78 MOA",
                "velocity": "937 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "82",
            "keyword": "",
            "name": "Magpul Masada .300 Blackout",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": ".300 Blackout 탄약을 사용하는 화기입니다.",
            "stats": {
                "recoil": "105",
                "sway": "64",
                "ergonomics": "80",
                "accuracy": "1.78 MOA",
                "velocity": "937 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "85",
            "keyword": "",
            "name": "Molot Arms VPO-101 Vepr-Hunter Carbine",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "A semi-automatic hunting carbine in 7.62x51mm caliber, created based on the Kalashnikov Light Machine Gun (RPK), with identical appearance, weight, and dimensions. Designed for commercial and recreational hunting of medium and large game, as well as sporting use.",
            "stats": {
                "recoil": "200",
                "sway": "48",
                "ergonomics": "67",
                "accuracy": "2.23 MOA",
                "velocity": "756 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "86",
            "keyword": "",
            "name": "Molot Arms VPO-136 Vepr-KM",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "A semi-automatic hunting carbine in 7.62x39mm caliber, created based on the Kalashnikov Assault Rifle (AKM), with identical appearance, weight, and dimensions. Designed for commercial and recreational hunting of medium and large game, as well as sporting use.",
            "stats": {
                "recoil": "80",
                "sway": "80",
                "ergonomics": "77",
                "accuracy": "2.33 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "87",
            "keyword": "",
            "name": "Molot Arms VPO-209 Carbine",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "VPO-209 .366 TKM은 유명한 칼라시니코프 돌격소총(AKM)을 기반으로 제작된 활강 총열의 민간용 총기입니다.",
            "stats": {
                "recoil": "90",
                "sway": "80",
                "ergonomics": "77",
                "accuracy": "2.23 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "93",
            "keyword": "",
            "name": "PSA JAKL",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "",
            "stats": {
                "recoil": "131",
                "sway": "40",
                "ergonomics": "78",
                "accuracy": "2.68 MOA",
                "velocity": "828 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "94",
            "keyword": "",
            "name": "Radian Weapons Model 1",
            "manufacturer": "Radian Weapons",
            "manufacturerLogo": "assets/radian-logo.png",
            "manufacturerUrl": "https://www.radianweapons.com/",
            "image": "assets/radianmodel1.png",
            "description": "Radian Weapons에서 제작한 Radian Model 1은 5.56x45 NATO탄을 사용하는 AR-15 플랫폼 돌격 소총입니다. 이 라이플은 전문가 및 스포츠 용도를 위한 신뢰성이 높고 고품질의 정확한 시스템으로 평가됩니다. 또한 Radian의 ADAC 시스템이 채택되어 있어 노리쇠 후퇴 고정 조작을 보다 신속하고 직관적으로 수행할 수 있도록 설계되었습니다. 이 시스템의 핵심은 오른손 검지 만으로 탄창 멈치와 노리쇠 멈치를 동시에 조작할 수 있다는 점입니다. 특히 탄 걸림(기능 고장) 발생 시, 사격 자세를 유지한 채 최소한의 움직임으로 안전하게 약실을 개방할 수 있어 극한의 전술 상황에서 진가가 발휘됩니다. 또한, 완전한 양손잡이(Ambidextrous) 설계로 왼손잡이 유저도 불편함 없이 모든 조작이 가능합니다.",
            "stats": {
                "recoil": "102",
                "sway": "148",
                "ergonomics": "81",
                "accuracy": "1.66 MOA",
                "velocity": "983 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "99",
            "keyword": "",
            "name": "Rifle Dynamics RD-704",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/sr.png",
            "description": "",
            "stats": {
                "recoil": "125",
                "sway": "68",
                "ergonomics": "78",
                "accuracy": "2.09 MOA",
                "velocity": "730 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "100",
            "keyword": "시그 시그 사우어 지그 사우어 지그 자우어 엠씨엑스 블랙아웃",
            "name": "SIG MCX",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "image": "assets/mcx.png",
            "description": "SIG Sauer 사의 쇼트 스트로크 피스톤 기반 모듈러 카빈입니다. 버퍼 튜브가 필요 없는 설계로 접철식 개머리판을 사용하며 다양한 총열 길이를 지원합니다.",
            "stats": {
                "recoil": "114",
                "sway": "96",
                "ergonomics": "73",
                "accuracy": "3.04 MOA",
                "velocity": "819 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "101",
            "keyword": "시그 시그 사우어 지그 사우어 지그 자우어 스피어 68 육팔 퓨리",
            "name": "SIG MCX-SPEAR",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "image": "assets/mcxspear.png",
            "description": "MCX SPEAR는 SIG Sauer가 MCX 돌격 소총을 기반으로 설계·제작한 다구경 돌격 소총입니다. 기본적으로 새로운 6.8x51mm(.277 FURY) 탄을 사용하도록 제작되었으며, M4 카빈을 대체하도록 미군이 요구한 기준에 맞춰 특별히 설계되었습니다.",
            "stats": {
                "recoil": "150",
                "sway": "90",
                "ergonomics": "84",
                "accuracy": "1.43 MOA",
                "velocity": "924 m/s",
                "rpm": "900"
            }
        },
        {
            "id": "104",
            "keyword": "",
            "name": "SR-3M",
            "manufacturer": "TsNIITochMash",
            "manufacturerLogo": "assets/TsNIITochMash-logo.png",
            "manufacturerUrl": "",
            "image": "assets/sr3m.png",
            "description": "SR-3M은 TsNIITochMash(츠니토치마쉬)에서 AS VAL 돌격 소총을 기반으로 개발된 강력한 돌격소총으로, 기관단총과 비슷할 정도로 매우 컴팩트한 크기를 갖고 있지만, 특수 철갑 탄약을 사용하기 때문에 화력 면에서는 확연히 더 뛰어난 특징이 있습니다. 또한 SR-3M은 러시아 특수부대가 은닉 휴대용 무기 사용 목적으로 사용하고 있습니다.",
            "stats": {
                "recoil": "70",
                "sway": "86",
                "ergonomics": "81",
                "accuracy": "5.02 MOA",
                "velocity": "310 m/s",
                "rpm": "923"
            }
        },
        {
            "id": "117",
            "keyword": "",
            "name": "Steyr AUG A3",
            "manufacturer": "Steyr Mannlicher",
            "manufacturerLogo": "assets/steyr-logo.png",
            "manufacturerUrl": "https://www.steyr-arms.com/en/",
            "image": "assets/auga3.png",
            "description": "오스트리아 슈타이어 사의 대표적인 불펍식 돌격소총입니다. 긴 총열을 유지하면서도 컴팩트한 전장을 유지하여 명중률과 기동성을 겸비했습니다.",
            "stats": {
                "recoil": "100",
                "sway": "32",
                "ergonomics": "71",
                "accuracy": "1.58 MOA",
                "velocity": "910 m/s",
                "rpm": "715"
            }
        },
        {
            "id": "125",
            "keyword": "",
            "name": "VSS Vintorez",
            "manufacturer": "TsNIITochMash",
            "manufacturerLogo": "assets/TsNIITochMash-logo.png",
            "manufacturerUrl": "",
            "image": "assets/vss.png",
            "description": "9x39mm 아음속 탄약을 사용하는 특수 일체형 소음 저격소총으로, 은밀한 특수작전에 널리 사용됩니다.",
            "stats": {
                "recoil": "75",
                "sway": "81",
                "ergonomics": "81",
                "accuracy": "3.44 MOA",
                "velocity": "310 m/s",
                "rpm": "900"
            }
        }
    ],
    "기관단총": [
        {
            "id": "10",
            "keyword": "",
            "name": "B&T MP9",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "Brügger & Thomet MP9(Maschinenpistole 9)는 9x19mm 파라블럼 기관단총입니다. 회전 노리쇠 쇼트 리코일 방식을 사용하며 매우 컴팩트하고 높은 연사력을 지녔습니다.",
            "stats": {
                "recoil": "50",
                "sway": "40",
                "ergonomics": "84",
                "accuracy": "7.22 MOA",
                "velocity": "441 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "31",
            "keyword": "",
            "name": "FN P90",
            "manufacturer": "FN Herstal",
            "manufacturerLogo": "assets/fnherstal-logo.png",
            "manufacturerUrl": "https://www.fnherstal.com/",
            "image": "assets/p90.png",
            "description": "FN Project 1990으로도 알려진 FN P90은 소형 개인방어화기(PDW)로 개발된 5.7x28mm 불펍 기관단총입니다. 독특한 상부 50발 수평 탄창을 사용합니다.",
            "stats": {
                "recoil": "47",
                "sway": "40",
                "ergonomics": "77",
                "accuracy": "3.75 MOA",
                "velocity": "608 m/s",
                "rpm": "923"
            }
        },
        {
            "id": "43",
            "keyword": "",
            "name": "HK MP5",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "독일 헤클러 앤 코흐(Heckler & Koch) 사에서 제작한 9x19mm 롤러 지연식 블로우백 기관단총입니다. 극도의 정확도와 신뢰성으로 유명합니다.",
            "stats": {
                "recoil": "80",
                "sway": "80",
                "ergonomics": "83",
                "accuracy": "3.50 MOA",
                "velocity": "418 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "44",
            "keyword": "",
            "name": "HK MP7A1",
            "manufacturer": "Heckler & Koch",
            "manufacturerLogo": "assets/hk-logo.png",
            "manufacturerUrl": "https://www.heckler-koch.com/en",
            "image": "assets/mp7a1.png",
            "description": "독일 헤클러 앤 코흐(Heckler & Koch) 사에서 제작한 4.6x30mm 개인방어화기(PDW)입니다. 가볍고 반동이 적으며 방탄복 관통 능력이 뛰어납니다.",
            "stats": {
                "recoil": "45",
                "sway": "40",
                "ergonomics": "82",
                "accuracy": "0.83 MOA",
                "velocity": "756 m/s",
                "rpm": "949"
            }
        },
        {
            "id": "45",
            "keyword": "",
            "name": "HK MP7A2",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "",
            "stats": {
                "recoil": "60",
                "sway": "48",
                "ergonomics": "82",
                "accuracy": "0.83 MOA",
                "velocity": "756 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "91",
            "keyword": "",
            "name": "PP-19-01 Vityaz",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "AK-74 플랫폼을 기반으로 러시아 내무부 특수부대를 위해 개발된 9x19mm 기관단총입니다.",
            "stats": {
                "recoil": "65",
                "sway": "88",
                "ergonomics": "78",
                "accuracy": "4.47 MOA",
                "velocity": "407 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "92",
            "keyword": "",
            "name": "PPSh-41",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ppsh41.png",
            "description": "PPSh-41(Pistolet-Pulemyot Shpagina, \"슈파긴의 기관단총\")은 소련의 기관단총으로, 게오르기 슈파긴이 PPD-40의 값비싸고 복잡한 구조를 대체하기 위해 저렴하고 신뢰성이 높으며 단순화된 설계로 개발한 무기입니다.",
            "stats": {
                "recoil": "40",
                "sway": "40",
                "ergonomics": "66",
                "accuracy": "0.72 MOA",
                "velocity": "749 m/s",
                "rpm": "1000"
            }
        },
        {
            "id": "102",
            "keyword": "",
            "name": "SIG MPX",
            "manufacturer": "SIG Sauer",
            "manufacturerLogo": "assets/sigsauer-logo.png",
            "manufacturerUrl": "https://www.sigsauer.com/",
            "image": "assets/mpx.png",
            "description": "SIG MPX는 SIG Sauer가 제작한 빠른 발사속도를 자랑하고, 기존의 AR 계열 총기와 유사한 외형을 지닌 기관단총입니다. SIG MPX는 쇼트-스트로크 가스 피스톤 작동 방식을 사용하여 가스 조절기의 조정 없이 다양한 9mm 탄종 사용이 가능합니다. 풀사이즈의 마운트는 다양한 종류의 조준경과 조준기 장치들을 설치할 수 있게 해줍니다.",
            "stats": {
                "recoil": "95",
                "sway": "96",
                "ergonomics": "82",
                "accuracy": "5.0 MOA",
                "velocity": "407 m/s",
                "rpm": "923"
            }
        },
        {
            "id": "103",
            "keyword": "",
            "name": "SR-2M Veresk",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/sr.png",
            "description": "SR-2M Veresk is a compact submachine gun designed for a powerful 9x21mm armor-piercing cartridge by order of the FSB and the FSO of the Russian Federation. This submachine gun is part of a high-performance rifle complex designed for special forces. Equipped with a folding foregrip. Developed by TsNIItochmash.",
            "stats": {
                "recoil": "50",
                "sway": "40",
                "ergonomics": "83",
                "accuracy": "7.83 MOA",
                "velocity": "479 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "114",
            "keyword": "",
            "name": "Soyuz-TM STM-9 Gen.2 Carbine",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "",
            "stats": {
                "recoil": "60",
                "sway": "120",
                "ergonomics": "85",
                "accuracy": "3.78 MOA",
                "velocity": "426 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "118",
            "keyword": "",
            "name": "TDI KRISS Vector Gen 2 Black",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "9x19mm 탄약을 사용하는 화기입니다.",
            "stats": {
                "recoil": "55",
                "sway": "76",
                "ergonomics": "82",
                "accuracy": "0.65 MOA",
                "velocity": "437 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "119",
            "keyword": "",
            "name": "TDI KRISS Vector Gen 2 FDE",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "9x19mm 탄약을 사용하는 화기입니다.",
            "stats": {
                "recoil": "55",
                "sway": "76",
                "ergonomics": "82",
                "accuracy": "0.65 MOA",
                "velocity": "437 m/s",
                "rpm": "600"
            }
        }
    ],
    "저격 소총": [
        {
            "id": "8",
            "keyword": "",
            "name": "Accuracy International AT-XC",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "영국 Accuracy International 사의 정밀 볼트액션 저격소총으로 최고의 사격 명중률과 내구성을 제공합니다.",
            "stats": {
                "recoil": "80",
                "sway": "80",
                "ergonomics": "49",
                "accuracy": "0.85 MOA",
                "velocity": "941 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "9",
            "keyword": "",
            "name": "Accuracy International AXMC",
            "manufacturer": "Accuracy International",
            "manufacturerLogo": "assets/ai-logo.png",
            "manufacturerUrl": "https://www.accuracyinternational.com/",
            "image": "assets/axmc.png",
            "description": "영국 Accuracy International 사가 설계·제작한 다구경 볼트액션 저격소총입니다. .338 Lapua Magnum, .300 Winchester Magnum, 7.62x51mm NATO 등 다양한 구경으로 신속하게 변환할 수 있습니다.",
            "stats": {
                "recoil": "220",
                "sway": "120",
                "ergonomics": "49",
                "accuracy": "0.37 MOA",
                "velocity": "956 m/s",
                "rpm": "60"
            }
        },
        {
            "id": "11",
            "keyword": "",
            "name": "Barrett M107A1",
            "manufacturer": "Barrett Firearms",
            "manufacturerLogo": "assets/barrett-logo.png",
            "manufacturerUrl": "https://barrett.net/",
            "image": "assets/m107a1.png",
            "description": "Barrett Firearms에서 제작한 M107A1은 .50 BMG 탄을 사용하는 반자동 대물 저격소총입니다. 이전 모델보다 경량화되었으며 소음기 장착에 최적화되었습니다.",
            "stats": {
                "recoil": "212",
                "sway": "96",
                "ergonomics": "40",
                "accuracy": "0.8 MOA",
                "velocity": "937 m/s",
                "rpm": "500"
            }
        },
        {
            "id": "12",
            "keyword": "",
            "name": "Barrett XM109 AMPR",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "원래 Objective Sniper Weapon (OSW)으로 알려졌던 Barrett XM109는 대물 정밀 화기입니다. 25x59mm 유탄을 발사하여 장갑 표적 및 엄폐물을 파괴합니다.",
            "stats": {
                "recoil": "270",
                "sway": "96",
                "ergonomics": "40",
                "accuracy": "0.4 MOA",
                "velocity": "714 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "16",
            "keyword": "",
            "name": "CheyTac M200 Intervention",
            "manufacturer": "CheyTac",
            "manufacturerLogo": "assets/cheytac-logo.png",
            "manufacturerUrl": "https://cheytac.com/",
            "image": "assets/m200.png",
            "description": "2km 이상의 극초장거리 표적을 정밀 타격하기 위해 개발된 .408 CheyTac 구경의 볼트액션 저격소총입니다.",
            "stats": {
                "recoil": "250",
                "sway": "100",
                "ergonomics": "40",
                "accuracy": "0.3 MOA",
                "velocity": "969 m/s",
                "rpm": "60"
            }
        },
        {
            "id": "40",
            "keyword": "",
            "name": "HK 417",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "독일 헤클러 앤 코흐(Heckler & Koch) 사의 정밀 전술 화기입니다.",
            "stats": {
                "recoil": "140",
                "sway": "160",
                "ergonomics": "81",
                "accuracy": "1.12 MOA",
                "velocity": "829 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "41",
            "keyword": "",
            "name": "HK G28",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The HK G28 rifle was developed by Heckler & Koch specifically at the request of the Bundeswehr, as a support weapon for small infantry units. The G28 is based on the HK MR308 sport-hunting semi-automatic rifle, which, in turn, is a civilian version of the HK 417 automatic rifle. Despite a number of differences, the HK G28 is 75% parts interchangeable with the HK 417 in its design. This rifle allows infantry to conduct effective firing at distances inaccessible to standard 5.56mm assault rifles.",
            "stats": {
                "recoil": "130",
                "sway": "160",
                "ergonomics": "81",
                "accuracy": "1.1 MOA",
                "velocity": "829 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "74",
            "keyword": "",
            "name": "Knight's Armament Company M110",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "image": "assets/m110.png",
            "description": "M110은 나이츠 아머먼트 컴퍼니에서 개발한 반자동 저격 시스템입니다. 기존 볼트액션 M24를 보완하기 위해 미 육군에 채택되었으며<br>신뢰성 높은 SR-25 플랫폼을 기반으로 개발되었습니다. 시가전 등 빠른 대응이 필요한 전장에서 저격수와 지정사수에게 운용됩니다.<br>FDE 색상과 전용 소음기 시스템이 특징입니다.",
            "stats": {
                "recoil": "129",
                "sway": "78",
                "ergonomics": "71",
                "accuracy": "1.12 MOA",
                "velocity": "856 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "76",
            "keyword": "",
            "name": "Knight's Armament Company SR-25",
            "manufacturer": "Knight's Armament Company",
            "manufacturerLogo": "assets/kac-logo.png",
            "manufacturerUrl": "https://www.knightarmco.com/",
            "image": "assets/sr25.png",
            "description": "SR-25 정밀 소총은 유진 스토너가 설계하고 나이츠 아머먼트 컴퍼니에서 제작한 7.62mm NATO 반자동 정밀 소총의 최신 발전형입니다. SR-25의 약 60%의 부품이 AR-15와 호환되고, 양손잡이용 노리쇠 멈치, 조정간, 탄창 분리 장치를 갖춰 왼손잡이 사용자도 AR-15 기반 조작계의 인체공학적 이점을 그대로 활용할 수 있습니다. 오른손잡이 사용자에게는 조작 효율을 높일 수 있는 추가적인 조작 방법을 제공합니다. 드롭-인 2단 방아쇠는 장거리 정밀 사격에 도움을 주며, 안정적이고 높은 명중률을 자랑합니다. E2 노리쇠와 가스 시스템은 소음기 장착 여부와 관계없이 우수한 신뢰성을 제공합니다.<br><em>\"아 아, 유진 스토너 그는 신이야...\"</em>",
            "stats": {
                "recoil": "132",
                "sway": "82",
                "ergonomics": "71",
                "accuracy": "1.12 MOA",
                "velocity": "856 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "77",
            "keyword": "",
            "name": "Lobaev Arms DVL-10 .338 Saboteur",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "The DVL-10 is a light, compact, and silent rifle for new and existing subsonic ammunition. It was developed for special service and combat tasks requiring particular accuracy and range. Equipped with a folding stock unified with other SVL models. It comes with a match-grade Lobaev Hummer Barrels stainless steel barrel.",
            "stats": {
                "recoil": "65",
                "sway": "8",
                "ergonomics": "56",
                "accuracy": "0.78 MOA",
                "velocity": "878 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "83",
            "keyword": "",
            "name": "Marlin MXLR",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "",
            "stats": {
                "recoil": "100",
                "sway": "140",
                "ergonomics": "72",
                "accuracy": "3.50 MOA",
                "velocity": "550 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "88",
            "keyword": "",
            "name": "Molot Arms VPO-215 Gornostay",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "The bolt-action VPO-215 Gornostay carbine in .366 TKM caliber is designed for hunting small and medium game, as well as recreational shooting.",
            "stats": {
                "recoil": "100",
                "sway": "86",
                "ergonomics": "71",
                "accuracy": "1.55 MOA",
                "velocity": "910 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "89",
            "keyword": "",
            "name": "Mosin Nagant",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The Mosin rifle Model 1891, also known as the Three-Line Rifle. A sniper variant equipped with a side mount for installing optical sights. Widely used by Soviet snipers during the Great Patriotic War.",
            "stats": {
                "recoil": "75",
                "sway": "24",
                "ergonomics": "55",
                "accuracy": "1.37 MOA",
                "velocity": "946 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "95",
            "keyword": "",
            "name": "Remington MSR",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/sr.png",
            "description": "The Remington MSR (Modular Sniper Rifle) is a modular long-range precision sniper rifle developed for the PSR (Precision Sniper Rifle) program, the next-generation sniper rifle project of the U.S. Special Operations Command. This rifle is designed to quickly switch between multiple calibers on a single platform, and by replacing the barrel, bolt, and magazine, it can operate various ammunition types including .308 Winchester, .300 Winchester Magnum, and .338 Lapua Magnum. Equipped with a fully adjustable stock, monolithic rail system, and various accessory compatibility structures, it can be configured for various battlefield environments. Thanks to high-precision machining and a stable receiver structure, it provides excellent accuracy at extreme long ranges. The MSR later evolved into an improved version that met the final requirements of the PSR program and was officially adopted by the military under the designation Remington PSR.",
            "stats": {
                "recoil": "160",
                "sway": "112",
                "ergonomics": "63",
                "accuracy": "0.58 MOA",
                "velocity": "708 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "96",
            "keyword": "",
            "name": "Remington Model 700",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "7.62x51mm 탄약을 사용하는 화기입니다.",
            "stats": {
                "recoil": "150",
                "sway": "80",
                "ergonomics": "66",
                "accuracy": "0.79 MOA",
                "velocity": "895 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "97",
            "keyword": "",
            "name": "Remington Model 700 MOD*X GEN 3",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "7.62x51mm 탄약을 사용하는 화기입니다.",
            "stats": {
                "recoil": "145",
                "sway": "40",
                "ergonomics": "69",
                "accuracy": "0.79 MOA",
                "velocity": "895 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "98",
            "keyword": "",
            "name": "Remington R11 RSASS",
            "manufacturer": "Remington",
            "manufacturerLogo": "assets/remington-logo.png",
            "manufacturerUrl": "https://www.remarms.com/",
            "image": "assets/rsass.png",
            "description": "레밍턴 반자동 저격 시스템은 레밍턴 암즈와 JP 엔터프라이즈가 공동으로 개발한, 매우 정확하고 탁월한 완성도를 가진 고속 발사 저격소총의 결정체입니다. 이 무기는 반자동 플랫폼이 주는 전술적 이점을 유지하면서, 800미터 이상에서도 서브 MOA급의 정확도를 제공합니다.",
            "stats": {
                "recoil": "130",
                "sway": "96",
                "ergonomics": "71",
                "accuracy": "0.77 MOA",
                "velocity": "873 m/s",
                "rpm": "700"
            }
        },
        {
            "id": "105",
            "keyword": "",
            "name": "SV-98",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "러시아군 제식 7.62x54mmR 볼트액션 저격소총입니다. 자작나무 합판 스톡과 프리플로팅 총열을 갖춰 저격수들에게 높은 신뢰를 받고 있습니다.",
            "stats": {
                "recoil": "100",
                "sway": "44",
                "ergonomics": "59",
                "accuracy": "0.58 MOA",
                "velocity": "929 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "106",
            "keyword": "",
            "name": "SVD Dragunov",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "SVD는 일반 보병에게 더 긴 거리의 표적과 교전할 수 있는 능력을 제공하기 위해 분대 지원 화기로 개발된 7.62x54mmR 반자동 지정사수소총입니다.",
            "stats": {
                "recoil": "150",
                "sway": "80",
                "ergonomics": "63",
                "accuracy": "1.03 MOA",
                "velocity": "899 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "107",
            "keyword": "",
            "name": "SVDS Dragunov",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "공수부대 및 특수부대용으로 개발된 접철식 관형 금속 개머리판과 강화 총열을 갖춘 SVD의 현대화 단축형 버전입니다.",
            "stats": {
                "recoil": "148",
                "sway": "80",
                "ergonomics": "66",
                "accuracy": "1.03 MOA",
                "velocity": "899 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "108",
            "keyword": "",
            "name": "SVDS Zryachiy",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "공수부대 및 특수부대용으로 개발된 접철식 관형 금속 개머리판과 강화 총열을 갖춘 SVD의 현대화 단축형 버전입니다.",
            "stats": {
                "recoil": "148",
                "sway": "80",
                "ergonomics": "66",
                "accuracy": "1.03 MOA",
                "velocity": "899 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "109",
            "keyword": "",
            "name": "SWORD International Mk-18 Mjölnir",
            "manufacturer": "SWORD Defense Systems",
            "manufacturerLogo": "assets/sword-logo.png",
            "manufacturerUrl": "https://sworddefense.com/",
            "image": "assets/mk18.png",
            "description": "Mk-18 Mod 1 Extreme Distance Capable Semi-Automatic Rifle은 SWORD Defense Systems(구 SWORD International)이 제작한 .338 라푸아 매그넘, .338 노르마 매그넘, .300 노르마 매그넘 탄의 탄도 성능을 최대한 활용하도록 설계된 반자동 소총입니다. 이 시스템은 경량이면서도 기동성이 뛰어난 반자동 플랫폼에서 극장거리 사격 능력을 제공합니다. SWORD 고유의 쇼트 스트로크 가스 피스톤 시스템을 적용해 높은 정밀도, 신뢰성, 내구성을 갖추었으며, 양손 조작이 가능한 컨트롤과 인체공학적 설계, 모듈화 구조를 특징으로 합니다. Mk-18은 사냥꾼, 장거리 사격 애호가, 경기 사수들에게 훌륭한 선택지로 평가됩니다.",
            "stats": {
                "recoil": "235",
                "sway": "120",
                "ergonomics": "51",
                "accuracy": "0.57 MOA",
                "velocity": "925 m/s",
                "rpm": "380"
            }
        },
        {
            "id": "111",
            "keyword": "",
            "name": "Sako TRG M10",
            "manufacturer": "Sako",
            "manufacturerLogo": "assets/sako-logo.png",
            "manufacturerUrl": "https://www.sako.global/",
            "image": "assets/trgm10.png",
            "description": "TRG M10은 Beretta Defense Technologies 그룹에 속한 Sako가 제작한 .338 라푸아 매그넘 탄을 사용하는 정밀 볼트액션 저격소총입니다. TRG M10은 매우 다재다능한 플랫폼으로, 본격적인 장거리 소총에서 더 컴팩트한 무기로 쉽게 전환할 수 있습니다. 이 소총은 여러 국가의 군, 경찰, 그리고 다양한 특수부대에서 사용하도록 설계되었습니다.",
            "stats": {
                "recoil": "190",
                "sway": "104",
                "ergonomics": "49",
                "accuracy": "0.46 MOA",
                "velocity": "956 m/s",
                "rpm": "60"
            }
        },
        {
            "id": "113",
            "keyword": "",
            "name": "Simonov SKS",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The Soviet semi-automatic carbine designed by Sergei Simonov for the 7.62x39 cartridge, also known abroad as the SKS-45. An incredibly popular weapon in CIS countries and the West, still in service in various countries in the form of different clones and modifications. This specific example is from the Tula Arms Plant's long-term storage, which has not yet undergone the procedure to bring it to civilian market standards.",
            "stats": {
                "recoil": "100",
                "sway": "64",
                "ergonomics": "65",
                "accuracy": "16.9 MOA",
                "velocity": "803 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "115",
            "keyword": "",
            "name": "Springfield Armory M1A",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "The M1A is a civilian version of the M14 rifle manufactured by Springfield Armory. For the most part identical to the M14. The most notable difference is the removal of the fire selector from the M14, making the M1A permanently semi-automatic. The bayonet mount has also been removed from the weapon.",
            "stats": {
                "recoil": "120",
                "sway": "84",
                "ergonomics": "65",
                "accuracy": "1.11 MOA",
                "velocity": "873 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "121",
            "keyword": "",
            "name": "The AK Guy AK-50",
            "manufacturer": "Brandon Herrera",
            "manufacturerLogo": "assets/akguy-logo.png",
            "manufacturerUrl": "https://www.theakguy.com/",
            "image": "assets/ak50.png",
            "description": "AK-50 반자동 대물 저격 소총은 칼라시니코프 플랫폼에 .50 BMG 탄약을 사용하도록 개조한 최초의 실험적 프로젝트입니다. AK-50은 뛰어난 관통력과 사거리를 가지고 있어, 매우 강력한 저격 소총입니다. 이 프로토타입은 총기 제조업체이자 유튜브 블로거인 브랜든 헤레라와 The AK Guy LTD의 일원으로 개발되었습니다.",
            "stats": {
                "recoil": "275",
                "sway": "96",
                "ergonomics": "78",
                "accuracy": "0.31 MOA",
                "velocity": "910 m/s",
                "rpm": "500"
            }
        },
        {
            "id": "122",
            "keyword": "",
            "name": "Tokarev AVT-40",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/svt.png",
            "description": "AVT-40은 제2차 세계대전 초기 권총과 기관단총의 부족을 부분적으로 보완했습니다. AVT-40은 설계 면에서 SVT-40과 유사하지만, 안전 장치 레버가 발사 모드 선택기의 역할을 수행하기 때문에 단발 사격과 연발 사격 모두 가능합니다.",
            "stats": {
                "recoil": "102",
                "sway": "82",
                "ergonomics": "62",
                "accuracy": "1.37 MOA",
                "velocity": "1058 m/s",
                "rpm": "750"
            }
        },
        {
            "id": "123",
            "keyword": "",
            "name": "Tokarev SVT-40",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/svt.png",
            "description": "표도르 바실리예비치 토카레프가 개발한 SVT-40은 기관단총의 대량 생산이 시작되기 전 제2차 세계대전 초기 소련군 내에서 대량 보급을 시도했던 최초의 반자동 소총이였습니다. 병사들은 이 소총을 애정을 담아 '스베타(Sveta)'라고 불렀습니다. '스베타'가 부대에 배치되자, 모든 붉은 군대 병사들이 이 무기를 진정으로 숙달할 수 있는 것은 아니라는 것이 드러났습니다. SVT는 해병 보병 부대와 저격수들이 가장 잘 활용했습니다. SVT-40의 생산은 전쟁이 끝날 때까지 계속되었으며, 이 반자동 소총은 전체 승리에 중요한 기여를 했습니다.",
            "stats": {
                "recoil": "102",
                "sway": "82",
                "ergonomics": "62",
                "accuracy": "1.37 MOA",
                "velocity": "1058 m/s",
                "rpm": "750"
            }
        }
    ],
    "산탄총": [
        {
            "id": "1",
            "keyword": "",
            "name": "AA-12 Gen 1",
            "manufacturer": "",
            "manufacturerLogo": "assets/mf-logo.png",
            "manufacturerUrl": "https://www.militaryfactory.com/smallarms/manufacturer.php?thisCompany=Military%20Police%20Systems",
            "image": "assets/aa12.png",
            "description": "AA-12 (Auto Assault-12)는 높은 신뢰성을 지닌 전자동 12게이지 산탄총입니다. 1차 설계 단계에서 확립된 일체형 스테인리스 스틸 하우징과 극도로 완화된 반동이 특징입니다.",
            "stats": {
                "recoil": "95",
                "sway": "80",
                "ergonomics": "62",
                "accuracy": "22.35 MOA",
                "velocity": "514 m/s",
                "rpm": "330"
            }
        },
        {
            "id": "2",
            "keyword": "",
            "name": "AA-12 Gen 2",
            "manufacturer": "",
            "manufacturerLogo": "assets/mf-logo.png",
            "manufacturerUrl": "https://www.militaryfactory.com/smallarms/manufacturer.php?thisCompany=Military%20Police%20Systems",
            "image": "assets/aa12gen2.png",
            "description": "AA-12 산탄총의 2세대 개량형 모델로, 부품 내구성이 더욱 보강되었으며 20발 드럼 탄창을 완벽 지원합니다.",
            "stats": {
                "recoil": "90",
                "sway": "80",
                "ergonomics": "62",
                "accuracy": "22.35 MOA",
                "velocity": "514 m/s",
                "rpm": "330"
            }
        },
        {
            "id": "49",
            "keyword": "",
            "name": "IzhMekh MP-133",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "MP-133은 러시아 이즈메쉬(Izhevsky Mechanical Plant)에서 생산한 활강 다연발 12게이지 펌프액션 산탄총입니다.",
            "stats": {
                "recoil": "100",
                "sway": "145",
                "ergonomics": "69",
                "accuracy": "21.31 MOA",
                "velocity": "500 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "50",
            "keyword": "",
            "name": "IzhMekh MP-155",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "러시아 이즈메쉬(Izhevsky Mechanical Plant)에서 제조한 12게이지 가스압 작동식 활강 다연발 반자동 산탄총입니다.",
            "stats": {
                "recoil": "100",
                "sway": "168",
                "ergonomics": "66",
                "accuracy": "21.31 MOA",
                "velocity": "400 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "51",
            "keyword": "",
            "name": "IzhMekh MP-18",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The MP-18 is a legendary Soviet single-barrel shotgun. This shotgun performs excellently in any weather conditions, with no breakdowns or failures identified.",
            "stats": {
                "recoil": "100",
                "sway": "140",
                "ergonomics": "69",
                "accuracy": "3.09 MOA",
                "velocity": "1075 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "52",
            "keyword": "",
            "name": "IzhMekh MP-43",
            "manufacturer": "",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://en.kalashnikovgroup.ru/",
            "image": "assets/mp43.png",
            "description": "이즈메흐에서 제작한 심플하고 우아한 클래식 더블-배럴 12게이지 샷건입니다. 모델에 따라 두 개의 방아쇠가 각각의 총열에 대응하는 방식과, 하나의 방아쇠로 발사 순서를 선택하는 단일 선택식 방아쇠 방식이 있습니다. 총열 내부는 부식 방지를 위해 크롬 도금 처리되어 내구성이 뛰어납니다.<br><em>\"더블배럴 샷건이야말로 훌륭한 대화 수단이지.\"</em>",
            "stats": {
                "recoil": "100",
                "sway": "140",
                "ergonomics": "66",
                "accuracy": "13.06 MOA",
                "velocity": "500 m/s",
                "rpm": "기록되지않음"
            }
        },
        {
            "id": "90",
            "keyword": "",
            "name": "Mossberg 590A1",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "12/70 shells 탄약을 사용하는 화기입니다.",
            "stats": {
                "recoil": "100",
                "sway": "145",
                "ergonomics": "67",
                "accuracy": "16.98 MOA",
                "velocity": "500 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "110",
            "keyword": "",
            "name": "Saiga 12K ver.10",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "A 12-gauge semi-automatic carbine with a folding stock, equipped with a trigger mechanism lock that allows firing only with the stock unfolded. The barrel is shortened, with a length of 430mm.",
            "stats": {
                "recoil": "150",
                "sway": "80",
                "ergonomics": "73",
                "accuracy": "20.63 MOA",
                "velocity": "400 m/s",
                "rpm": "600"
            }
        }
    ],
    "경기관총": [
        {
            "id": "25",
            "keyword": "",
            "name": "Degtyarev RPD",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "7.62x39mm 구경의 덱탸료프(Degtyarev) 경기관총입니다. 소련군 분대지원 화기로 운용되었습니다.",
            "stats": {
                "recoil": "80",
                "sway": "120",
                "ergonomics": "46",
                "accuracy": "1.31 MOA",
                "velocity": "876 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "26",
            "keyword": "",
            "name": "Degtyarev RPDN",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "assets/ar.png",
            "description": "야간 조준경(NSPU) 장착용 사이드 도브테일 레일이 추가된 덱탸료프 7.62x39mm 경기관총의 야간작전용 버전입니다.",
            "stats": {
                "recoil": "80",
                "sway": "120",
                "ergonomics": "46",
                "accuracy": "1.31 MOA",
                "velocity": "876 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "71",
            "keyword": "",
            "name": "Kalashnikov PKM",
            "manufacturer": "V.A. Degtyarev",
            "manufacturerLogo": "assets/kalashnikov-logo.png",
            "manufacturerUrl": "https://en.kalashnikovgroup.ru/",
            "image": "assets/pkm.png",
            "description": "PKM(Pulemyot Kalashnikova Modernizirovanniy)은 1969년 채택된 7.62x54mmR 다목적 기관총으로, 전 세계에서 가장 널리 사용되는 신뢰성 높은 중기관총입니다.",
            "stats": {
                "recoil": "191",
                "sway": "160",
                "ergonomics": "40",
                "accuracy": "1.08 MOA",
                "velocity": "1161 m/s",
                "rpm": "649"
            }
        },
        {
            "id": "72",
            "keyword": "",
            "name": "Kalashnikov PKP",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "7.62mm PKP 페체네그(Pecheneg)는 러시아군의 현대식 경기관총입니다. 강제 공랭식 총열을 채택하여 지속 사격 능력이 극대화되었습니다.",
            "stats": {
                "recoil": "191",
                "sway": "160",
                "ergonomics": "40",
                "accuracy": "1.01 MOA",
                "velocity": "1161 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "73",
            "keyword": "",
            "name": "Kalashnikov RPK-16",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The Russian unified light machine gun RPK-16 in 5.45x39mm caliber, developed to replace the obsolete RPK-74. Key features of this weapon include quick-change barrels, improved ergonomics, as well as a handguard and receiver cover with Weaver-type rails.",
            "stats": {
                "recoil": "105",
                "sway": "120",
                "ergonomics": "78",
                "accuracy": "1.65 MOA",
                "velocity": "835 m/s",
                "rpm": "600"
            }
        },
        {
            "id": "124",
            "keyword": "",
            "name": "U.S Ordnance M60E6",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "image": "",
            "description": "The M60E4 (Mk 43 Mod 1) is a modification of the M60E3 machine gun in 7.62x51mm caliber, featuring a more reliable trigger mechanism, the ability to mount optical sights, and a number of other improvements. The M60 earned the nickname The Pig due to its bulky size and design flaws. Despite its shortcomings, M60 modifications are still used in some units. Manufactured by U.S. Ordnance.",
            "stats": {
                "recoil": "195",
                "sway": "120",
                "ergonomics": "40",
                "accuracy": "1.21 MOA",
                "velocity": "966 m/s",
                "rpm": "600"
            }
        }
    ],
    "유탄 발사기": [
        {
            "id": "84",
            "keyword": "",
            "name": "Milkor M32A1 MSGL",
            "manufacturer": "Milkor USA",
            "manufacturerLogo": "assets/milkor-logo.png",
            "manufacturerUrl": "https://www.milkorusa.com/",
            "image": "assets/m32.png",
            "description": "M32A1 MSGL은 Milkor USA에서 제조한 40mm 6연발 회전식 다연발 유탄발사기입니다.",
            "stats": {
                "recoil": "500",
                "sway": "160",
                "ergonomics": "52",
                "accuracy": "16.5 MOA",
                "velocity": "76 m/s",
                "rpm": "750"
            }
        }
    ],
    "특수": []
};

// 기어 데이터 (SMPZ ServerPack 1.0 #2 최신 동기화)
let gearData = {
    "헬멧": [
        {
            "id": "9",
            "keyword": "",
            "name": "6B47 Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "러시아군 라트니크(Ratnik) 체계의 제식 아라미드 복합소재 방탄 헬멧입니다. 가벼운 무게와 우수한 파편 방호력을 제공합니다.",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "55"
            }
        },
        {
            "id": "10",
            "keyword": "",
            "name": "6B47 Helmet - ATACS",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "55"
            }
        },
        {
            "id": "11",
            "keyword": "",
            "name": "6B47 Helmet - EMR Artic",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "55"
            }
        },
        {
            "id": "12",
            "keyword": "",
            "name": "6B47 Helmet - EMR Spring",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "55"
            }
        },
        {
            "id": "13",
            "keyword": "",
            "name": "6B47 Helmet - EMR Syria",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "55"
            }
        },
        {
            "id": "14",
            "keyword": "",
            "name": "6B47 Helmet - RUSS Partizan",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "55"
            }
        },
        {
            "id": "17",
            "keyword": "",
            "name": "Altyn",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/altyn.png",
                "assets/altyn_2.png"
            ],
            "description": "알틴 헬멧은 1980년대 초반 소련 KGB(국가보안위원회)의 요청에 따라 NII Stali(강철 과학 연구소)에서 개발된 특수 작전용 티타늄<br>헬멧입니다. 스위스의 TIG PSH-77 헬멧을 모체로 하여 러시아의 작전 환경에 맞춰 독자적으로 개량되었으며, 1980년대 아프가니스탄<br>전쟁부터 2000년대 초반까지 알파(Alfa) 및 빔펠(Vympel) 등 최정예 스페츠나츠 부대의 상징적인 장비로 운용되었습니다.",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "60"
            }
        },
        {
            "id": "18",
            "keyword": "",
            "name": "Altyn Helmet Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/altyn.png",
                "assets/altyn_2.png"
            ],
            "description": "알틴 헬멧은 1980년대 초반 소련 KGB(국가보안위원회)의 요청에 따라 NII Stali(강철 과학 연구소)에서 개발된 특수 작전용 티타늄<br>헬멧입니다. 스위스의 TIG PSH-77 헬멧을 모체로 하여 러시아의 작전 환경에 맞춰 독자적으로 개량되었으며, 1980년대 아프가니스탄<br>전쟁부터 2000년대 초반까지 알파(Alfa) 및 빔펠(Vympel) 등 최정예 스페츠나츠 부대의 상징적인 장비로 운용되었습니다.",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "60"
            }
        },
        {
            "id": "22",
            "keyword": "",
            "name": "BNTI LShZ-2DTM Aventail",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "15",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "10"
            }
        },
        {
            "id": "23",
            "keyword": "",
            "name": "BNTI LShZ-2DTM Cover",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "10",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "10"
            }
        },
        {
            "id": "24",
            "keyword": "",
            "name": "BNTI LShZ-2DTM Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "30"
            }
        },
        {
            "id": "25",
            "keyword": "",
            "name": "BNTI LShZ-2DTM Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "75"
            }
        },
        {
            "id": "27",
            "keyword": "",
            "name": "BOSS Cap",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "31",
            "keyword": "",
            "name": "Crye Precision AirFrame Chops",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "15"
            }
        },
        {
            "id": "32",
            "keyword": "",
            "name": "Crye Precision AirFrame Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "혁신적인 2피스 쉘 통풍 구조를 채택하여 머리의 열기를 배출하면서도 파편과 권총탄을 완벽히 방호하는 특수작전 헬멧입니다.",
            "stats": {
                "bulletDamageProtection": "73",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "70"
            }
        },
        {
            "id": "33",
            "keyword": "",
            "name": "Crye Precision AirFrame M-LOK Chops",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "15"
            }
        },
        {
            "id": "34",
            "keyword": "",
            "name": "Crye Precision AirFrame M-LOK Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "73",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "70"
            }
        },
        {
            "id": "38",
            "keyword": "",
            "name": "DevTac Ronin Ballistic Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "얼굴 전체를 감싸는 3A 등급의 미래형 전신 방탄 마스크 헬멧으로 방탄 고글과 환기 팬이 내장되어 있습니다.",
            "stats": {
                "bulletDamageProtection": "83",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "39",
            "keyword": "",
            "name": "DevTac Ronin Respirator",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "85",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "44",
            "keyword": "",
            "name": "Diamond Age Bastion Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "50"
            }
        },
        {
            "id": "45",
            "keyword": "",
            "name": "Diamond Age Bastion Helmet Armor Plate",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "70"
            }
        },
        {
            "id": "46",
            "keyword": "",
            "name": "Diamond Age NeoSteel Helmet Ballistic Mandible",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "30"
            }
        },
        {
            "id": "47",
            "keyword": "",
            "name": "Diamond Age NeoSteel High Cut Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "70"
            }
        },
        {
            "id": "58",
            "keyword": "",
            "name": "FORT Kiver-M Bulletproof Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "45",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "50"
            }
        },
        {
            "id": "59",
            "keyword": "",
            "name": "FORT Kiver-M Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "30"
            }
        },
        {
            "id": "60",
            "keyword": "",
            "name": "FORT Kiver-M Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "45",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "50"
            }
        },
        {
            "id": "67",
            "keyword": "",
            "name": "Galvion Caiman Fixed Arm Visor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "15",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "10"
            }
        },
        {
            "id": "68",
            "keyword": "",
            "name": "Galvion Caiman Hybrid Ballistic Applique",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "20",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "10"
            }
        },
        {
            "id": "69",
            "keyword": "",
            "name": "Galvion Caiman Hybrid Ballistic Mandible",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "20",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "20"
            }
        },
        {
            "id": "70",
            "keyword": "",
            "name": "Galvion Caiman Hybrid Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "50"
            }
        },
        {
            "id": "75",
            "keyword": "",
            "name": "HighCom Striker ULACH IIIA Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "55"
            }
        },
        {
            "id": "83",
            "keyword": "",
            "name": "LShZ Lightweight Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "55"
            }
        },
        {
            "id": "84",
            "keyword": "",
            "name": "MTEK FLUX Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "60"
            }
        },
        {
            "id": "85",
            "keyword": "",
            "name": "Maska-1SCH",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/maska.png",
                "assets/maska_2.png"
            ],
            "description": "마스카-1SCH 헬멧은 1990년대 초반 러시아 NII Stali에서 개발된 강철제 중장갑 헬멧입니다. 값비싼 티타늄 대신 2.5mm~3mm 두께의 강철을 사용하여 제작되었으며, 시야를 극도로 제한하는 대신 안면 전체를 완벽하게 보호하는 강철 바이저가 가장 큰 시각적 특징입니다. 주로 내무반(MVD) 산하 특수부대에서 건물 진입 및 폭동 진압용으로 사용되었으며, 특유의 투박하고 위압적인 외형 덕분에 오늘날 러시아 스페츠나츠를 상징하는 대표적인 장비로 알려져 있습니다.",
            "stats": {
                "bulletDamageProtection": "65",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "65"
            }
        },
        {
            "id": "86",
            "keyword": "",
            "name": "Maska-1SCH Helmet Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/maska.png",
                "assets/maska_2.png"
            ],
            "description": "마스카-1SCH 헬멧은 1990년대 초반 러시아 NII Stali에서 개발된 강철제 중장갑 헬멧입니다. 값비싼 티타늄 대신 2.5mm~3mm 두께의 강철을 사용하여 제작되었으며, 시야를 극도로 제한하는 대신 안면 전체를 완벽하게 보호하는 강철 바이저가 가장 큰 시각적 특징입니다. 주로 내무반(MVD) 산하 특수부대에서 건물 진입 및 폭동 진압용으로 사용되었으며, 특유의 투박하고 위압적인 외형 덕분에 오늘날 러시아 스페츠나츠를 상징하는 대표적인 장비로 알려져 있습니다.",
            "stats": {
                "bulletDamageProtection": "65",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "65"
            }
        },
        {
            "id": "95",
            "keyword": "",
            "name": "NPP KIASS Tor-2 Ballistic Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "60"
            }
        },
        {
            "id": "96",
            "keyword": "",
            "name": "NPP KIASS Tor-2 Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "30"
            }
        },
        {
            "id": "97",
            "keyword": "",
            "name": "NPP KIASS Tor2 Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "30"
            }
        },
        {
            "id": "99",
            "keyword": "",
            "name": "Ops-Core FAST Gunsight Mandible",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "20",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "20"
            }
        },
        {
            "id": "100",
            "keyword": "",
            "name": "Ops-Core FAST MT Super High Cut Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "미 특수부대의 표준 하이컷 전술 헬멧입니다. 헤드셋 및 야시경 장착 편의성이 극대화된 차세대 방탄 헬멧입니다.",
            "stats": {
                "bulletDamageProtection": "73",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "50"
            }
        },
        {
            "id": "101",
            "keyword": "",
            "name": "Ops-Core FAST Multi-Hit Ballistic Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "50"
            }
        },
        {
            "id": "103",
            "keyword": "",
            "name": "Ops-Core SLAAP Armor Helmet Plate",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "10",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "10"
            }
        },
        {
            "id": "111",
            "keyword": "",
            "name": "Proxy2DTM_Aventail",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "112",
            "keyword": "",
            "name": "ProxyAirFrame_MLOK_Chops",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "116",
            "keyword": "",
            "name": "ProxyFASTMT_Mandible",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "118",
            "keyword": "",
            "name": "ProxyNeoSteel_Mandible",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "120",
            "keyword": "",
            "name": "ProxyPlate",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "121",
            "keyword": "",
            "name": "Proxyaltyn_visor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/altyn.png",
                "assets/altyn_2.png"
            ],
            "description": "알틴 헬멧은 1980년대 초반 소련 KGB(국가보안위원회)의 요청에 따라 NII Stali(강철 과학 연구소)에서 개발된 특수 작전용 티타늄<br>헬멧입니다. 스위스의 TIG PSH-77 헬멧을 모체로 하여 러시아의 작전 환경에 맞춰 독자적으로 개량되었으며, 1980년대 아프가니스탄<br>전쟁부터 2000년대 초반까지 알파(Alfa) 및 빔펠(Vympel) 등 최정예 스페츠나츠 부대의 상징적인 장비로 운용되었습니다.",
            "stats": {
                "bulletDamageProtection": "90",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "90"
            }
        },
        {
            "id": "125",
            "keyword": "",
            "name": "Rys-T",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "60"
            }
        },
        {
            "id": "126",
            "keyword": "",
            "name": "Rys-T Helmet Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "50",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "50"
            }
        },
        {
            "id": "128",
            "keyword": "",
            "name": "SSSh-94 Sfera-S Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "35",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "30"
            }
        },
        {
            "id": "129",
            "keyword": "",
            "name": "Santa Hat",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "NEXTDOOR, Merry Christmas!",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "133",
            "keyword": "",
            "name": "Tagilla's Welding Mask - Gorilla",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/tagillahelmet_gorilla.png",
                "assets/tagillahelmet_gorilla_2.png"
            ],
            "description": "타길라가 사용하던 용접면입니다.<br>해당 모델은 타길라의 전투 방식에서 드러나는 난폭함과 압박감을 상징하는 듯한 고릴라로 도색되어있습니다.<br>현재까지도 그의 포효가 끊임없이 울리는 것 같습니다.",
            "stats": {
                "bulletDamageProtection": "87",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "90"
            }
        },
        {
            "id": "134",
            "keyword": "",
            "name": "Tagilla's Welding Mask - UBEY",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/tagillahelmet_ubey.png",
                "assets/tagillahelmet_ubey_2.png"
            ],
            "description": "타길라가 사용하던 용접면입니다.<br>해당 모델은 타길라의 광기 어린 성격과 무자비함이 적나라하게 드러나는 도색이 특징입니다.<br><em>\"УБЕЙ, УБЕЙ!\"</em>",
            "stats": {
                "bulletDamageProtection": "87",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "90"
            }
        },
        {
            "id": "137",
            "keyword": "",
            "name": "Team Wendy EXFIL Ballistic Helmet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "미국 팀 웬디 사의 첨단 하이브리드 탄도 헬멧으로 극강의 착용감과 충격 흡수 패드 시스템을 자랑합니다.",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "70"
            }
        },
        {
            "id": "138",
            "keyword": "",
            "name": "Team Wendy Exfil Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "30"
            }
        },
        {
            "id": "140",
            "keyword": "",
            "name": "Vulkan-5 LShZ-5",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "83",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "70"
            }
        },
        {
            "id": "141",
            "keyword": "",
            "name": "Vulkan-5 LShZ-5 Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "Black",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "30"
            }
        },
        {
            "id": "144",
            "keyword": "",
            "name": "ZSh-1-2M",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "145",
            "keyword": "",
            "name": "ZSh-1-2M Face Shield",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "30"
            }
        }
    ],
    "전신 방탄복": [
        {
            "id": "3",
            "keyword": "",
            "name": "6B13 Assault Armor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/6b13.png",
                "assets/6b13_2.png"
            ],
            "description": "2000년대 초반 도입된 러시아군 표준 돌격용 방탄복입니다. 높은 목 보호대와 세라믹 복합 패널을 장착하여 소총탄에 대한 높은 방호력을 제공합니다.",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "60"
            }
        },
        {
            "id": "5",
            "keyword": "",
            "name": "6B23-1 Body Armor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/6b23.png",
                "assets/6b23_2.png"
            ],
            "description": "6B13을 개선하여 2000년대 중반부터 보급된 러시아군 제식 방탄복입니다. 균형 잡힌 면적 방호력을 제공합니다.",
            "stats": {
                "bulletDamageProtection": "65",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "65"
            }
        },
        {
            "id": "7",
            "keyword": "",
            "name": "6B43 Zabralo-Sh Body Armor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/6b43.png",
                "assets/6b43_2.png"
            ],
            "description": "6B43 자브랄로 전신 방탄복은 러시아의 Techinkom사에서 개발한 6A 최고 등급의 중장갑 전신 방탄복입니다. 목, 어깨, 사타구니까지 완벽히 감쌉니다.",
            "stats": {
                "bulletDamageProtection": "85",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "85"
            }
        },
        {
            "id": "8",
            "keyword": "",
            "name": "6B45 Body Armor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/6b45.png"
            ],
            "description": "러시아군의 차세대 보병 장비 체계인 라트니크(Ratnik)의 핵심 방탄복으로 몰리(MOLLE) 시스템과 퀵릴리즈 기능을 탑재했습니다.",
            "stats": {
                "bulletDamageProtection": "73",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "70"
            }
        },
        {
            "id": "61",
            "keyword": "",
            "name": "FORT Redut-M Body Armor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/redut_m.png",
                "assets/redut_m_2.png",
                "assets/redut_m_3.png"
            ],
            "description": "러시아 FSB 특수부대가 대테러 작전에 애용하는 고방호력 전신 방탄복입니다.",
            "stats": {
                "bulletDamageProtection": "78",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "78"
            }
        },
        {
            "id": "62",
            "keyword": "",
            "name": "FORT Redut-T5 Body Armor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/redut_t5.png",
                "assets/redut_t5_2.png"
            ],
            "description": "Redut-M의 중장갑 강화 버전으로 전면 세라믹 아머 플레이트와 어깨/목 보호대를 장착한 최고급 특수전 방탄복입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "65",
            "keyword": "",
            "name": "First Spear StrandhÃ¶gg Plate Carrier",
            "manufacturer": "First Spear",
            "manufacturerLogo": "assets/firstspear-logo.png",
            "manufacturerUrl": "https://www.first-spear.com/",
            "images": [
                "assets/strandhogg.png",
                "assets/strandhogg_2.png",
                "assets/strandhogg_3.png"
            ],
            "description": "미국 퍼스트스피어 사의 튜브(Tubes) 퀵릴리즈 시스템이 적용된 최고급 전신 방호 플레이트 캐리어입니다.",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "75"
            }
        },
        {
            "id": "76",
            "keyword": "",
            "name": "IOTV Gen4 Full Protection Body Armor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "미 육군의 차세대 표준 통합 전술 방탄복(Gen4)으로 무게를 대폭 줄이면서도 전방위 소총탄 방호력을 제공합니다.",
            "stats": {
                "bulletDamageProtection": "78",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "78"
            }
        },
        {
            "id": "91",
            "keyword": "",
            "name": "NFM THOR Integrated Carrier Body Armor",
            "manufacturer": "NFM Group",
            "manufacturerLogo": "assets/nfm-logo.png",
            "manufacturerUrl": "https://nfm.no/",
            "images": [
                "assets/thor.png",
                "assets/thor_2.png"
            ],
            "description": "NFM Group사의 THOR Integrated Carrier (THOR IC)는 노르웨이 국방부와의 협업을 통해 개발된 전술 방탄복입니다. 'Integrated(통합)'는 소프트 아머와 하드 방탄판을 하나의 시스템으로 결합했다는 의미를 뜻합니다. 사용자의 몸을 360도 전 방향에서 감싸는 설계를 통해 파편 및 권총탄으로부터 전신을 보호하며, 전·후면 및 측면 포켓에 하드 플레이트를 삽입하여 소총탄까지 방어할 수 있습니다. 인체공학적 설계와 조절 가능한 커머번드를 통해 중량급 장비임에도 기동성을 유지하며, 퀵 릴리즈 시스템을 갖춰 비상시 신속한 탈착이 가능한 현대적 전방위 방호 플랫폼입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "80"
            }
        }
    ],
    "플레이트 캐리어": [
        {
            "id": "1",
            "keyword": "",
            "name": "5.11 Tactical Hexgrid Plate Carrier",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "5.11 사의 혁신적인 헥사곤 멀티 앵글 그리드가 적용되어 다양한 각도로 파우치를 부착할 수 있는 전술 방탄조끼입니다.",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "4",
            "keyword": "",
            "name": "6B2 Body Armor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "30"
            }
        },
        {
            "id": "16",
            "keyword": "",
            "name": "ANA Tactical Alpha Chest Rig",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "러시아 ANA 사의 고용량 전술 체스트 리그로 탄창 및 무전기 파우치가 일체형으로 배치되어 있습니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "19",
            "keyword": "",
            "name": "Ars Arma A-18 Skanda Plate Carrier",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/a18.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "67"
            }
        },
        {
            "id": "26",
            "keyword": "",
            "name": "BNTI Zhuk Body Armor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "30",
            "keyword": "",
            "name": "Crye Precision AVS",
            "manufacturer": "Crye Precision",
            "manufacturerLogo": "assets/crye-logo.png",
            "manufacturerUrl": "https://www.cryeprecision.com/",
            "images": [
                "assets/tagillaavs.png",
                "assets/tagillaavs_2.png"
            ],
            "description": "특수작전 환경에 맞춰 하네스 시스템과 플레이트 백을 자유자재로 조합할 수 있는 크라이 사의 어댑티브 베스트 시스템(AVS)입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "35",
            "keyword": "",
            "name": "Crye Precision JPC 2.0 Maritime Plate Carrier",
            "manufacturer": "Crye Precision",
            "manufacturerLogo": "assets/crye-logo.png",
            "manufacturerUrl": "https://www.cryeprecision.com/",
            "images": [
                "assets/jpc.png"
            ],
            "description": "미국 Crye Precision사가 낙하산 강습 등 고도의 기동 작전을 위해 개발한 초경량 플레이트 캐리어입니다. 독자적인 스켈레탈(Skeletal™)<br>커머번드를 적용하여 통기성을 극대화하고 무게를 극한으로 줄인 미니멀리즘 설계가 특징입니다. 특수 소재의 어깨 스트랩으로 얇은<br>두께에도 안정적인 하중 분산을 제공하며, 후면 지퍼를 통한 Zip-on 패널 확장성과 신속 탈착 기능을 갖춰 전 세계 특수부대의 표준 장비로 자리 잡았습니다.",
            "stats": {
                "bulletDamageProtection": "50",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "60"
            }
        },
        {
            "id": "36",
            "keyword": "",
            "name": "Crye Precision JPC Plate Carrier",
            "manufacturer": "Crye Precision",
            "manufacturerLogo": "assets/crye-logo.png",
            "manufacturerUrl": "https://www.cryeprecision.com/",
            "images": [
                "assets/jpc.png"
            ],
            "description": "미국 Crye Precision사가 낙하산 강습 등 고도의 기동 작전을 위해 개발한 초경량 플레이트 캐리어입니다. 독자적인 스켈레탈(Skeletal™)<br>커머번드를 적용하여 통기성을 극대화하고 무게를 극한으로 줄인 미니멀리즘 설계가 특징입니다. 특수 소재의 어깨 스트랩으로 얇은<br>두께에도 안정적인 하중 분산을 제공하며, 후면 지퍼를 통한 Zip-on 패널 확장성과 신속 탈착 기능을 갖춰 전 세계 특수부대의 표준 장비로 자리 잡았습니다.",
            "stats": {
                "bulletDamageProtection": "45",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "60"
            }
        },
        {
            "id": "48",
            "keyword": "",
            "name": "Dynaforce Triton M43-A Chest Harness",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "Dynaforce 사에서 제작된 고성능 전술 장비입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "50",
            "keyword": "",
            "name": "Eagle Industries MMAC Plate Carrier",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "65",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "50"
            }
        },
        {
            "id": "57",
            "keyword": "",
            "name": "FORT Gladiator-S Plate Carrier",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "65"
            }
        },
        {
            "id": "63",
            "keyword": "",
            "name": "Ferro Concepts FCPC V5 Plate Carrier",
            "manufacturer": "Ferro Concepts",
            "manufacturerLogo": "assets/ferro-logo.png",
            "manufacturerUrl": "https://ferroconcepts.com/",
            "images": [
                "assets/fcpcv5.png"
            ],
            "description": "경량 라미네이트 소재와 인체공학적 설계를 결합한 5세대 플레이트 캐리어로, ADAPT 시스템을 통해 극대화된 모듈성과 기동성을 제공하는 현대적 전술 장비의 정점입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "65"
            }
        },
        {
            "id": "64",
            "keyword": "",
            "name": "First Spear Siege-R Optimized M.A.S.S. Plate Carrier",
            "manufacturer": "First Spear",
            "manufacturerLogo": "assets/firstspear-logo.png",
            "manufacturerUrl": "https://www.first-spear.com/",
            "images": [
                "assets/mass.png",
                "assets/mass_2.png",
                "assets/mass_3.png"
            ],
            "description": "First Spear Siege-R Optimized M.A.S.S. 플레이트 캐리어는 미국의 전술 장비 제조사인 First Spear에서 개발한 혁신적인 중량급 플레이트 캐리어입니다. 이 제품은 기존의 무거운 웨빙 대신 레이저 커팅 기술인 6/12™ 시스템을 적용하여 전체 무게를 획기적으로 줄였으며<br>독자적인 Tubes™ 퀵 릴리즈 시스템을 통해 단 한 번의 조작으로 신속한 착용과 탈거가 가능합니다. 특히 M.A.S.S. 옵션을 선택할 경우<br>목, 어깨, 사타구니 등 전신 방호 파츠를 추가로 결합할 수 있어, 경량화와 최대 수준의 방호력을 동시에 요구하는 특수부대 및 법 집행 기관의 중갑 대원들에게 최적화된 장비입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "81",
            "keyword": "",
            "name": "LBT-1961A Load Bearing Chest Rig",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "London Bridge Trading 사에서 제작된 고성능 전술 장비입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "82",
            "keyword": "",
            "name": "LBT-6094A Slick",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "50"
            }
        },
        {
            "id": "92",
            "keyword": "",
            "name": "NPP KIASS Bagariy Plate Carrier",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "60",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "50"
            }
        },
        {
            "id": "93",
            "keyword": "",
            "name": "NPP KIASS Kora-Kulon Body Armor",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "35",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "35"
            }
        },
        {
            "id": "94",
            "keyword": "",
            "name": "NPP KIASS KorundVM Plate Carrier",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "75",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "110",
            "keyword": "",
            "name": "Poyas-A + Poyas-B Gear Chest Rig",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "122",
            "keyword": "",
            "name": "Proxychestrig",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "130",
            "keyword": "",
            "name": "Spiritus Systems LV-119 Plate Carrier",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "70"
            }
        },
        {
            "id": "135",
            "keyword": "",
            "name": "Tasmanian Tiger MKIII Plate Carrier",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "55"
            }
        },
        {
            "id": "142",
            "keyword": "",
            "name": "WARTECH MK3 TV-104 Chest Rig",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "WARTECH 사에서 제작된 고성능 전술 장비입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "143",
            "keyword": "",
            "name": "WARTECH MK3 TV-104 Chest Rig - Moss",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "WARTECH 사에서 제작된 고성능 전술 장비입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        }
    ],
    "마스크": [
        {
            "id": "6",
            "keyword": "",
            "name": "6B34 Ratnik Goggles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/gl.png"
            ],
            "description": "러시아 라트니크 체계의 제식 탄도 고글로 파편과 먼지로부터 사수의 눈을 완벽히 보호합니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "20",
            "keyword": "",
            "name": "Atomic Defense CQCM Balistic Mask",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "얼굴 전면을 권총탄과 파편으로부터 방어하는 고강도 케블라 탄도 안면 마스크입니다.",
            "stats": {
                "bulletDamageProtection": "70",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "70"
            }
        },
        {
            "id": "21",
            "keyword": "",
            "name": "Avon M53A1 Gas Mask",
            "manufacturer": "Avon Protection",
            "manufacturerLogo": "assets/avon-logo.png",
            "manufacturerUrl": "https://www.avon-protection.com/",
            "images": [
                "assets/m53a1.png",
                "assets/m53a1_2.png"
            ],
            "description": "Avon Protection 사의 M53A1 방독면은 JSGPM(Joint Service General Purpose Mask) 프로그램의 일환으로 미 특수작전사령부(US SOCOM)를 위해 개발된 전술 방독면입니다.",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0"
            }
        },
        {
            "id": "28",
            "keyword": "",
            "name": "Cold Fear Infrared Balaclava",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "적외선 야시장비의 열 감지를 분산시키고 체온을 보온해 주는 특수부대용 전술 바라클라바입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "29",
            "keyword": "",
            "name": "Crow Balaclava",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/crow.png"
            ],
            "description": "까마귀와 흡사한 발라클라바입니다. 과연, 오늘은 어떤 사체를 찾으러 나서는 것일까요?",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0"
            }
        },
        {
            "id": "37",
            "keyword": "",
            "name": "Death Shadow Airsoft Mask",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "5",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "100"
            }
        },
        {
            "id": "40",
            "keyword": "",
            "name": "DevTac Samurai Menpo Half-Mask",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "41",
            "keyword": "",
            "name": "DevTac Samurai Menpo Half-Mask - Gold",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "42",
            "keyword": "",
            "name": "DevTac Samurai Menpo Half-Mask - Violet",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "43",
            "keyword": "",
            "name": "DevTac Samurai Menpo Half-Mask - White",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "49",
            "keyword": "",
            "name": "ESS Crossbow Tactical Glasses",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/gl.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "66",
            "keyword": "",
            "name": "Galac-Tac Armor Mandalorian Helmet Mask",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "30",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "20"
            }
        },
        {
            "id": "71",
            "keyword": "",
            "name": "Gentex Ops-Core SOTR Respirator",
            "manufacturer": "Gentex",
            "manufacturerLogo": "assets/gentex-logo.png",
            "manufacturerUrl": "https://www.gentex.com/",
            "images": [
                "assets/sotr.png",
                "assets/sotr_2.png"
            ],
            "description": "Gentex에서 제작한 SOTR 호흡기는 지상 작전 전용으로 개발되었으며, 위험한 공중 유해 화합물 및 입자로부터 작업자를 보호하기 위해<br>설계되었습니다. 이 제품은 납, 석면, 윤활유, 가연성 물질의 연기 등 대부분의 유해 입자에 대해 신뢰할 수 있는 여과 기능을 제공합니다.",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0"
            }
        },
        {
            "id": "72",
            "keyword": "",
            "name": "Ghost Half-Mask",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "73",
            "keyword": "",
            "name": "Half-Mask",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "87",
            "keyword": "",
            "name": "Momex Balaclava",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/momex.png",
                "assets/momex_2.png"
            ],
            "description": "택티컬을 선호하는 사용자에게 딱 맞는 발라클라바입니다.",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0"
            }
        },
        {
            "id": "98",
            "keyword": "",
            "name": "Oakley SI Gascan Glasses",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/gl.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "124",
            "keyword": "",
            "name": "Revision ShadowStrike Glasses",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/gl.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "146",
            "keyword": "",
            "name": "Zryachiy's Balaclava",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "See you next time...",
            "stats": {
                "bulletDamageProtection": "50",
                "bloodDamageProtection": "100",
                "shockDamageProtection": "100"
            }
        }
    ],
    "백팩": [
        {
            "id": "2",
            "keyword": "",
            "name": "5.11 Tactical RUSH 100 Backpack",
            "manufacturer": "5.11 Tactical",
            "manufacturerLogo": "assets/511tac-logo.png",
            "manufacturerUrl": "https://www.511tactical.com/",
            "images": [
                "assets/rush100.png"
            ],
            "description": "미국 5.11 사의 60L급 초대용량 장거리 원정 전술 배낭입니다. 튼튼한 500D/1050D 나일론과 조절식 프레임 하네스를 갖췄습니다.",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0"
            }
        },
        {
            "id": "15",
            "keyword": "",
            "name": "6Sh118 Raid Backpack",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
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
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0"
            }
        },
        {
            "id": "51",
            "keyword": "",
            "name": "Eberlestock F4 Terminator Load Bearing Backpack",
            "manufacturer": "Eberlestock",
            "manufacturerLogo": "assets/eberlestock-logo.png",
            "manufacturerUrl": "https://www.mysteryranch.com/",
            "images": [
                "assets/terminator.png",
                "assets/terminator_2.png",
                "assets/terminator_3.png"
            ],
            "description": "에벌리스톡 사의 장거리 저격수 및 정찰대용 대용량 백팩으로 무기 수납 공간과 전면 개폐식 패널을 지원합니다.",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0"
            }
        },
        {
            "id": "52",
            "keyword": "",
            "name": "F5 SwitchBlade Backpack - Badlands",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/switchblade.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "53",
            "keyword": "",
            "name": "F5 SwitchBlade Backpack - CetreEurope",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/switchblade.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "54",
            "keyword": "",
            "name": "F5 SwitchBlade Backpack - DryEarth",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "55",
            "keyword": "",
            "name": "F5 SwitchBlade Backpack - Lizard",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "56",
            "keyword": "",
            "name": "F5 SwitchBlade Backpack - Multitarn",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "74",
            "keyword": "",
            "name": "Hazard 4 Takedown Sling Backpack",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "88",
            "keyword": "",
            "name": "Mystery Ranch 2 Day Assault Pack",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "89",
            "keyword": "",
            "name": "Mystery Ranch Blackjack 50 Backpack",
            "manufacturer": "Mystery Ranch",
            "manufacturerLogo": "assets/mystery-logo.png",
            "manufacturerUrl": "https://www.mysteryranch.com/",
            "images": [
                "assets/blackjack.png",
                "assets/blackjack_2.png",
                "assets/blackjack_3.png",
                "assets/blackjack_4.png",
                "assets/blackjack_5.png"
            ],
            "description": "미국 미군 특수부대(USSOCOM)의 요구 사항에 맞춰 개발된 대용량 전술 배낭입니다. 매우 튼튼한 소재와 하중 분산 기술로 유명하며, 거친 환경에서도 장비를 안정적으로 운반할 수 있습니다. 메인 수납공간은 지퍼를 통해 빠르게 열 수 있어 물품 접근성이 뛰어납니다.",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0"
            }
        },
        {
            "id": "90",
            "keyword": "",
            "name": "Mystery Ranch SATL Bridger Assault Pack",
            "manufacturer": "Mystery Ranch",
            "manufacturerLogo": "assets/mystery-logo.png",
            "manufacturerUrl": "https://www.mysteryranch.com/",
            "images": [
                "assets/satl.png",
                "assets/satl_2.png",
                "assets/satl_3.png",
                "assets/satl_4.png",
                "assets/satl_5.png"
            ],
            "description": "미국 특수작전사령부(USSOCOM)의 표준 장비로 채택되어 오랜 기간 전장에서 검증된 전설적인 공격용 배낭입니다.<br>특수부대원들이 공수 작전과 장거리 정찰 시 필요한 탄약과 보급품을 효율적으로 운반할 수 있도록 설계되었습니다.",
            "stats": {
                "bulletDamageProtection": "0",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "0"
            }
        },
        {
            "id": "132",
            "keyword": "",
            "name": "THYRM DarkVault Comms Critical Gear Case",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "THYRM 사에서 제작된 고성능 전술 장비입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "136",
            "keyword": "",
            "name": "Tasmanian Tiger Trooper 35 Backpack",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        }
    ],
    "기어 부품": [
        {
            "id": "77",
            "keyword": "",
            "name": "L3Harris AN/PVS-14 Night Vision Monocular",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "미군 및 NATO 표준 단안식 3세대 야간투시경(NVG)입니다. 신뢰성이 높고 헬멧 마운트나 단독 관측용으로 널리 쓰입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "78",
            "keyword": "",
            "name": "L3Harris AN/PVS-31 Night Vision Goggles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "미 특수부대의 표준 양안식 초경량 3세대 야간투시경(BNVD)입니다. 좌우 안구를 개별 회전할 수 있어 상황 인식이 매우 뛰어납니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "79",
            "keyword": "",
            "name": "L3Harris AN/PVS-31A Night Vision Goggles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "백색 형광체(White Phosphor) 튜브를 적용하여 기존 녹색보다 훨씬 선명하고 자연스러운 흑백 고해상도 시야를 제공하는 최신 AN/PVS-31A입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "80",
            "keyword": "",
            "name": "L3Harris GPNVG-18 Night Vision Goggles",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "4개의 렌즈 튜브를 통해 인간의 자연 시야각에 근접한 97도 파노라마 시야를 제공하는 최강의 지상 파노라마 야간투시경(GPNVG)입니다.",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "102",
            "keyword": "",
            "name": "Ops-Core FAST RAC Headset",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "104",
            "keyword": "",
            "name": "Patch - Blackbeard's Flag",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "Can be attached on compatible equipment",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "105",
            "keyword": "",
            "name": "Patch - Hound Wolf Squad",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "This patch is used by the Hound Wolf Squad",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "106",
            "keyword": "",
            "name": "Patch - Republic of Korea",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "Can be attached on compatible equipment",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "107",
            "keyword": "",
            "name": "Patch - Republic of Korea Black",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "Can be attached on compatible equipment",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "108",
            "keyword": "",
            "name": "Patch - Thailand",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "Can be attached on compatible equipment",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "109",
            "keyword": "",
            "name": "Peltor ComTac VI Headset",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "113",
            "keyword": "",
            "name": "ProxyCAT",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "114",
            "keyword": "",
            "name": "ProxyDarkVault",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/ar.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "115",
            "keyword": "",
            "name": "ProxyExfil_ComtacVi",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "117",
            "keyword": "",
            "name": "ProxyGPNVG",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "119",
            "keyword": "",
            "name": "ProxyPatch",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "123",
            "keyword": "",
            "name": "Proxyheadset",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "127",
            "keyword": "",
            "name": "SMPZ_Headset_TeamWendy_Exfil_ComtacVI_ColorBase",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "131",
            "keyword": "",
            "name": "T-7 Thermal Goggles with a Night Vision mount",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [
                "assets/gl.png"
            ],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        },
        {
            "id": "139",
            "keyword": "",
            "name": "Team Wendy Exfil Peltor ComTac VI Headset",
            "manufacturer": "",
            "manufacturerLogo": "",
            "manufacturerUrl": "",
            "images": [],
            "description": "",
            "stats": {
                "bulletDamageProtection": "80",
                "bloodDamageProtection": "0",
                "shockDamageProtection": "80"
            }
        }
    ]
};

let isAdmin = false;
let currentPanel = 'weapon';  // 'weapon' | 'gear'
let currentCategory = null;
let currentWeapon = null;           // 현재 선택된 무기
let compareTarget = null;           // 비교 대상 무기 (선택 시)
let editingWeaponId = null;
let editingGearId = null;

// 페이지 로드 시 초기화
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
    setupEventListeners();
    restoreAppState();
});

// 로컬스토리지에서 데이터 로드
function loadData() {
    const saved = localStorage.getItem('weaponsData');
    if (saved) {
        const loadedData = JSON.parse(saved);
        Object.keys(weaponsData).forEach(key => {
            if (loadedData[key] && loadedData[key].length > 0) {
                weaponsData[key] = loadedData[key];
            }
        });
    }
    const savedGear = localStorage.getItem('gearData');
    if (savedGear) {
        const loadedGear = JSON.parse(savedGear);
        Object.keys(gearData).forEach(key => {
            if (loadedGear[key] && loadedGear[key].length > 0) {
                gearData[key] = loadedGear[key];
            }
        });
    }
}

// 로컬스토리지에 데이터 저장
function saveData() {
    localStorage.setItem('weaponsData', JSON.stringify(weaponsData));
    localStorage.setItem('gearData', JSON.stringify(gearData));
}

// 앱 상태 저장 (새로고침 시 복원용)
const APP_STATE_KEY = 'smpz_appState';
function saveAppState() {
    const state = {
        panel: currentPanel,
        categoryKey: currentCategory || null,
        selectedItemId: currentWeapon ? currentWeapon.id : null,
        galleryImageIndex: typeof lastGalleryImageIndex === 'number' ? lastGalleryImageIndex : 0
    };
    try {
        localStorage.setItem(APP_STATE_KEY, JSON.stringify(state));
    } catch (e) { /* ignore */ }
}

// 앱 상태 복원
let lastGalleryImageIndex = 0;
function restoreAppState() {
    try {
        const raw = localStorage.getItem(APP_STATE_KEY);
        if (!raw) return;
        const state = JSON.parse(raw);
        if (!state.panel || !state.selectedItemId) return;

        const panel = state.panel === 'gear' ? 'gear' : 'weapon';
        const dataSource = panel === 'weapon' ? weaponsData : gearData;
        let categoryKey = state.categoryKey || null;

        if (!categoryKey || categoryKey === 'all' || !dataSource[categoryKey]) {
            for (const k of Object.keys(dataSource)) {
                if (k === 'all') continue;
                const arr = dataSource[k];
                if (Array.isArray(arr) && arr.some(i => i.id === state.selectedItemId)) {
                    categoryKey = k;
                    break;
                }
            }
        }

        const items = categoryKey && dataSource[categoryKey] ? dataSource[categoryKey] : Object.values(dataSource).flat();
        const item = items.find(i => i.id === state.selectedItemId);
        if (!item) return;

        lastGalleryImageIndex = Math.max(0, parseInt(state.galleryImageIndex, 10) || 0);

        if (!categoryKey) {
            for (const k of Object.keys(dataSource)) {
                if (Array.isArray(dataSource[k]) && dataSource[k].some(i => i.id === item.id)) {
                    categoryKey = k;
                    break;
                }
            }
        }

        currentPanel = panel;
        currentCategory = categoryKey;
        currentWeapon = item;

        document.querySelectorAll('.panel-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.panel === panel);
        });
        document.getElementById('weaponPanel').style.display = panel === 'weapon' ? 'block' : 'none';
        document.getElementById('gearPanel').style.display = panel === 'gear' ? 'block' : 'none';

        renderCategories();
        renderGearCategories();
        expandCategoryAndSelectItem(panel, categoryKey, item);

        if (panel === 'gear') {
            showGearDetail(item, categoryKey, lastGalleryImageIndex);
        } else {
            showWeaponDetail(item, categoryKey, lastGalleryImageIndex);
        }
    } catch (e) { /* ignore */ }
}

function expandCategoryAndSelectItem(panelType, categoryKey, item) {
    if (!categoryKey) return;
    const listId = panelType === 'weapon' ? 'categoryList' : 'gearCategoryList';
    const list = document.getElementById(listId);
    if (!list) return;
    const catItem = list.querySelector(`.category-item[data-category="${categoryKey}"]`);
    if (!catItem) return;
    const itemListContainer = catItem.querySelector('.weapon-list-sidebar');
    if (!itemListContainer) return;
    const dataSource = panelType === 'weapon' ? weaponsData : gearData;

    const container = itemListContainer.closest('.panel-content');
    if (container) {
        container.querySelectorAll('.category-item > .weapon-list-sidebar').forEach(el => {
            el.style.display = 'none';
        });
        container.querySelectorAll('.category-link').forEach(link => { link.classList.remove('active'); });
    }
    itemListContainer.style.display = 'block';
    const categoryLink = itemListContainer.previousElementSibling;
    if (categoryLink) categoryLink.classList.add('active');

    renderItemsInSidebar(categoryKey, itemListContainer, dataSource);

    setTimeout(() => {
        document.querySelectorAll('.weapon-item-sidebar').forEach(li => {
            li.classList.toggle('active', (li.dataset.itemId || li.dataset.weaponId) === item.id);
        });
    }, 50);
}

// 카테고리 렌더링
function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';

    // 전체 무기 카테고리 추가
    const totalCount = Object.values(weaponsData).reduce((sum, weapons) => sum + weapons.length, 0);
    const allCategory = createCategoryItem('무기', totalCount, 'all', 'weapon');
    categoryList.appendChild(allCategory);

    // 각 카테고리 추가
    const categories = [
        { key: '권총', name: '권총' },
        { key: '돌격 소총', name: '돌격 소총' },
        { key: '기관단총', name: '기관단총' },
        { key: '저격 소총', name: '저격 소총' },
        { key: '산탄총', name: '산탄총' },
        { key: '경기관총', name: '경기관총' },
        { key: '유탄 발사기', name: '유탄 발사기' },
        { key: '특수', name: '특수' }
    ];

    categories.forEach(category => {
        const count = weaponsData[category.key]?.length || 0;
        const item = createCategoryItem(category.name, count, category.key, 'weapon');
        categoryList.appendChild(item);
    });
}

// 기어 카테고리 렌더링
function renderGearCategories() {
    const categoryList = document.getElementById('gearCategoryList');
    if (!categoryList) return;
    categoryList.innerHTML = '';

    const gearCategories = [
        { key: '헬멧', name: '헬멧' },
        { key: '전신 방탄복', name: '전신 방탄복' },
        { key: '플레이트 캐리어', name: '플레이트 캐리어' },
        { key: '마스크', name: '마스크' },
        { key: '백팩', name: '백팩' },
        { key: '기어 부품', name: '기어 부품' }
    ];

    const totalCount = Object.values(gearData).reduce((sum, items) => sum + items.length, 0);
    const allCategory = createCategoryItem('기어 전체', totalCount, 'all', 'gear');
    categoryList.appendChild(allCategory);

    gearCategories.forEach(category => {
        const count = gearData[category.key]?.length || 0;
        const item = createCategoryItem(category.name, count, category.key, 'gear');
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
    
    // "전체" 카테고리는 하위 목록 없음
    if (key !== 'all') {
        const itemListContainer = document.createElement('ul');
        itemListContainer.className = 'weapon-list-sidebar';
        itemListContainer.style.display = 'none';
        li.appendChild(itemListContainer);
        
        link.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCategory(key, itemListContainer, panelType);
        });
    } else {
        link.style.cursor = 'default';
    }
    
    return li;
}

// 카테고리 토글 (접기/펼치기)
function toggleCategory(categoryKey, itemListContainer, panelType) {
    panelType = panelType || currentPanel;
    const isExpanded = itemListContainer.style.display !== 'none';
    
    // 현재 패널 내 카테고리만 접기
    const container = itemListContainer.closest('.panel-content');
    if (container) {
        container.querySelectorAll('.weapon-list-sidebar').forEach(list => {
            list.style.display = 'none';
        });
    }
    
    // 현재 패널 내 카테고리 링크만 비활성화
    if (container) {
        container.querySelectorAll('.category-link').forEach(link => {
            link.classList.remove('active');
        });
    }
    
    if (!isExpanded) {
        itemListContainer.style.display = 'block';
        const categoryLink = itemListContainer.previousElementSibling;
        if (categoryLink) categoryLink.classList.add('active');
        
        if (panelType === 'gear') {
            renderItemsInSidebar(categoryKey, itemListContainer, gearData);
        } else {
            renderItemsInSidebar(categoryKey, itemListContainer, weaponsData);
        }
    }
    
    clearDetail();
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

// 이미지 패널 생성 (갤러리 타이틀 + 화살표 포함, 다중 이미지 지원)
function createImagePanelWithArrows(item, itemName, initialImageIndex = 0, onImageIndexChange = null) {
    const images = getItemImages(item);
    const galleryWrapper = document.createElement('div');
    galleryWrapper.className = 'gallery-panel-wrapper';
    
    const galleryTitle = document.createElement('div');
    galleryTitle.className = 'gallery-title';
    galleryTitle.textContent = '- 갤러리 -';
    galleryWrapper.appendChild(galleryTitle);
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'weapon-detail-image-container';
    
    if (images.length === 0) {
        imageContainer.innerHTML = '<div class="weapon-image-placeholder">-</div>';
        galleryWrapper.appendChild(imageContainer);
        return galleryWrapper;
    }
    
    const hasMultiple = images.length > 1;
    
    // 왼쪽 화살표
    const arrowLeft = document.createElement('button');
    arrowLeft.type = 'button';
    arrowLeft.className = 'image-nav-arrow image-nav-left';
    arrowLeft.innerHTML = '‹';
    arrowLeft.setAttribute('aria-label', '이전 이미지');
    if (!hasMultiple) {
        arrowLeft.classList.add('image-nav-disabled');
        arrowLeft.style.display = 'none';
    }
    
    // 이미지 래퍼
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'weapon-detail-image-wrapper';
    const img = document.createElement('img');
    img.className = 'weapon-detail-image';
    let currentIndex = Math.max(0, Math.min(initialImageIndex, images.length - 1));
    img.src = images[currentIndex];
    img.alt = itemName;
    img.style.cursor = 'pointer';
    const placeholder = document.createElement('div');
    placeholder.className = 'weapon-image-placeholder';
    placeholder.textContent = '-';
    placeholder.style.display = 'none';
    imgWrapper.appendChild(placeholder);
    img.onerror = function() {
        this.style.display = 'none';
        placeholder.style.display = 'flex';
    };
    img.onclick = function() {
        openImageModal(images[currentIndex], itemName);
    };
    imgWrapper.appendChild(img);
    
    // 오른쪽 화살표
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
    
    galleryWrapper.appendChild(imageContainer);
    return galleryWrapper;
}

// 사이드바에 무기 목록 렌더링 (기존 호환용)
function renderWeaponsInSidebar(categoryKey, container) {
    renderItemsInSidebar(categoryKey, container, weaponsData);
}

// 사이드바에 아이템 목록 렌더링 (무기/기어 공통)
function renderItemsInSidebar(categoryKey, container, dataSource) {
    container.innerHTML = '';
    const items = dataSource[categoryKey] || [];

    const sortedItems = [...items].sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });

    const isGear = dataSource === gearData;

    sortedItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'weapon-item-sidebar';
        li.textContent = item.name;
        li.dataset.itemId = item.id;
        li.dataset.weaponId = item.id;
        li.dataset.categoryKey = categoryKey;
        li.dataset.panelType = isGear ? 'gear' : 'weapon';
        li.style.cursor = 'pointer';
        li.addEventListener('click', (e) => {
            e.stopPropagation();
            compareTarget = null;
            if (isGear) {
                showGearDetail(item, categoryKey);
            } else {
                showWeaponDetail(item, categoryKey);
            }
        });
        container.appendChild(li);
    });
}

// 무기 상세 정보 표시
function showWeaponDetail(weapon, categoryKey, initialGalleryIndex = 0) {
    const weaponDetail = document.getElementById('weaponDetail');
    
    // 현재 기준 무기/카테고리 갱신
    currentCategory = categoryKey;
    currentWeapon = weapon;
    lastGalleryImageIndex = initialGalleryIndex;
    saveAppState();
    // 사이드바의 선택된 무기 하이라이트
    document.querySelectorAll('.weapon-item-sidebar').forEach(item => {
        item.classList.remove('active');
        if ((item.dataset.weaponId || item.dataset.itemId) === weapon.id) {
            item.classList.add('active');
        }
    });
    
    weaponDetail.innerHTML = '';
    
    const detailCard = document.createElement('div');
    detailCard.className = 'weapon-detail-card';
    
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
    if (weapon.description) {
        const descContainer = document.createElement('div');
        descContainer.className = 'weapon-detail-description-container';
        
        const desc = document.createElement('div');
        desc.className = 'weapon-detail-description';
        desc.innerHTML = weapon.description;
        descContainer.appendChild(desc);
        
        detailCard.appendChild(descContainer);
    } else {
        // 설명이 없을 경우 플레이스홀더
        const descContainer = document.createElement('div');
        descContainer.className = 'weapon-detail-description-container';
        descContainer.innerHTML = '<div class="weapon-description-placeholder">해당 총기의 설명</div>';
        detailCard.appendChild(descContainer);
    }

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
    const weaponDetail = document.getElementById('weaponDetail');
    
    currentCategory = categoryKey;
    currentWeapon = gear;
    lastGalleryImageIndex = initialGalleryIndex;
    saveAppState();
    
    document.querySelectorAll('.weapon-item-sidebar').forEach(item => {
        item.classList.remove('active');
        if ((item.dataset.weaponId || item.dataset.itemId) === gear.id) {
            item.classList.add('active');
        }
    });
    
    weaponDetail.innerHTML = '';
    
    const detailCard = document.createElement('div');
    detailCard.className = 'weapon-detail-card';
    
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
    
    if (gear.description) {
        const descContainer = document.createElement('div');
        descContainer.className = 'weapon-detail-description-container';
        const desc = document.createElement('div');
        desc.className = 'weapon-detail-description';
        desc.innerHTML = gear.description;
        descContainer.appendChild(desc);
        detailCard.appendChild(descContainer);
    } else {
        const descContainer = document.createElement('div');
        descContainer.className = 'weapon-detail-description-container';
        descContainer.innerHTML = '<div class="weapon-description-placeholder">해당 기어의 설명</div>';
        detailCard.appendChild(descContainer);
    }
    
    // 기어 능력치 섹션 (탄/유혈/충격 데미지 보호률)
    if (gear.stats) {
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

        statsContainer.appendChild(statsList);

        const statsParent = gear.description
            ? detailCard.querySelector('.weapon-detail-description-container')
            : detailCard;
        if (statsParent) {
            statsParent.appendChild(statsContainer);
        } else {
            detailCard.appendChild(statsContainer);
        }
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
    const weaponDetail = document.getElementById('weaponDetail');
    const msg = currentPanel === 'gear'
        ? '좌측에서 카테고리를 선택하고 기어를 클릭하여 정보를 확인하세요.'
        : '좌측에서 카테고리를 선택하고 무기를 클릭하여 정보를 확인하세요.';
    weaponDetail.innerHTML = '<p class="empty-message">' + msg + '</p>';
    
    document.querySelectorAll('.weapon-item-sidebar').forEach(item => {
        item.classList.remove('active');
    });
    
    currentWeapon = null;
    currentCategory = null;
}


// 이벤트 리스너 설정
function setupEventListeners() {
    // 패널 전환 버튼
    document.querySelectorAll('.panel-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const panel = btn.dataset.panel;
            currentPanel = panel;
            document.querySelectorAll('.panel-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('weaponPanel').style.display = panel === 'weapon' ? 'block' : 'none';
            document.getElementById('gearPanel').style.display = panel === 'gear' ? 'block' : 'none';
            document.getElementById('itemSearch').value = '';
            clearDetail();
        });
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
            document.getElementById('weaponImage').value = (weapon.images && weapon.images.length) ? weapon.images.join(', ') : (weapon.image || '');
            document.getElementById('weaponDescription').value = weapon.description || '';
        }
    } else {
        title.textContent = '무기 추가';
        document.getElementById('weaponForm').reset();
        document.getElementById('weaponId').value = '';
        if (currentCategory && currentCategory !== 'all') {
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
    const imageInput = document.getElementById('weaponImage').value.trim();
    const description = document.getElementById('weaponDescription').value;
    const imagePaths = imageInput ? imageInput.split(',').map(s => s.trim()).filter(Boolean) : [];
    
    if (!category) {
        alert('카테고리를 선택해주세요.');
        return;
    }
    
    if (editingWeaponId) {
        // 수정
        const weaponIndex = weaponsData[category].findIndex(w => w.id === editingWeaponId);
        if (weaponIndex !== -1) {
            weaponsData[category][weaponIndex].name = name;
            weaponsData[category][weaponIndex].manufacturer = manufacturer;
            weaponsData[category][weaponIndex].manufacturerLogo = manufacturerLogo;
            weaponsData[category][weaponIndex].manufacturerUrl = manufacturerUrl;
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
    
    // 사이드바 무기 목록 업데이트
    const categoryItem = document.querySelector(`.category-item[data-category="${category}"]`);
    if (categoryItem) {
        const weaponListContainer = categoryItem.querySelector('.weapon-list-sidebar');
        if (weaponListContainer && weaponListContainer.style.display !== 'none') {
            renderWeaponsInSidebar(category, weaponListContainer);
        }
    }
    
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
        
        // 사이드바 무기 목록 업데이트
        const categoryItem = document.querySelector(`.category-item[data-category="${categoryKey}"]`);
        if (categoryItem) {
            const weaponListContainer = categoryItem.querySelector('.weapon-list-sidebar');
            if (weaponListContainer && weaponListContainer.style.display !== 'none') {
                renderWeaponsInSidebar(categoryKey, weaponListContainer);
            }
        }
        
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
        if (currentCategory && currentCategory !== 'all') {
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
    
    if (editingGearId) {
        const gearIndex = gearData[category].findIndex(g => g.id === editingGearId);
        if (gearIndex !== -1) {
            gearData[category][gearIndex].name = name;
            gearData[category][gearIndex].manufacturer = manufacturer;
            gearData[category][gearIndex].manufacturerLogo = manufacturerLogo;
            gearData[category][gearIndex].manufacturerUrl = manufacturerUrl;
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
    
    const gearCategoryList = document.getElementById('gearCategoryList');
    if (gearCategoryList) {
        gearCategoryList.querySelectorAll('.category-item').forEach(item => {
            if (item.dataset.category === category) {
                const itemListContainer = item.querySelector('.weapon-list-sidebar');
                if (itemListContainer && itemListContainer.style.display !== 'none') {
                    renderItemsInSidebar(category, itemListContainer, gearData);
                }
            }
        });
    }
    
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
        
        const gearCategoryList = document.getElementById('gearCategoryList');
        if (gearCategoryList) {
            const categoryItem = gearCategoryList.querySelector(`.category-item[data-category="${categoryKey}"]`);
            if (categoryItem) {
                const itemListContainer = categoryItem.querySelector('.weapon-list-sidebar');
                if (itemListContainer && itemListContainer.style.display !== 'none') {
                    renderItemsInSidebar(categoryKey, itemListContainer, gearData);
                }
            }
        }
        
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

// 무기/기어 검색 함수
function searchItems(query) {
    const isWeaponPanel = currentPanel === 'weapon';
    const categoryList = isWeaponPanel ? document.getElementById('categoryList') : document.getElementById('gearCategoryList');
    
    if (!categoryList) return;
    
    if (!query || query.trim() === '') {
        if (isWeaponPanel) renderCategories();
        else renderGearCategories();
        return;
    }
    
    const searchTerm = query.trim().toLowerCase();
    const results = [];
    const dataSource = isWeaponPanel ? weaponsData : gearData;
    
    Object.keys(dataSource).forEach(categoryKey => {
        const items = dataSource[categoryKey] || [];
        items.forEach(item => {
            const nameMatch = item.name.toLowerCase().includes(searchTerm);
            const keywordMatch = item.keyword && item.keyword.toLowerCase().includes(searchTerm);
            if (nameMatch || keywordMatch) {
                results.push({ item, categoryKey });
            }
        });
    });
    
    categoryList.innerHTML = '';
    
    if (results.length === 0) {
        const noResult = document.createElement('li');
        noResult.className = 'category-item';
        noResult.innerHTML = '<div class="category-link" style="justify-content: center;"><span class="category-name">검색 결과가 없습니다</span></div>';
        categoryList.appendChild(noResult);
    } else {
        const groupedResults = {};
        results.forEach(({ item, categoryKey }) => {
            if (!groupedResults[categoryKey]) {
                groupedResults[categoryKey] = [];
            }
            groupedResults[categoryKey].push(item);
        });
        
        const defaultCategoryName = isWeaponPanel ? '무기' : '기어';
        
        Object.keys(groupedResults).forEach(categoryKey => {
            const items = groupedResults[categoryKey];
            const categoryName = categoryKey === 'all' ? defaultCategoryName : categoryKey;
            
            const li = document.createElement('li');
            li.className = 'category-item';
            li.dataset.category = categoryKey;
            
            const link = document.createElement('div');
            link.className = 'category-link';
            link.dataset.category = categoryKey;
            
            const nameSpan = document.createElement('span');
            nameSpan.className = 'category-name';
            nameSpan.textContent = categoryName;
            
            const countSpan = document.createElement('span');
            countSpan.className = 'category-count';
            countSpan.textContent = `(${items.length})`;
            
            link.appendChild(nameSpan);
            link.appendChild(countSpan);
            li.appendChild(link);
            
            const itemListContainer = document.createElement('ul');
            itemListContainer.className = 'weapon-list-sidebar';
            itemListContainer.style.display = 'block';
            
            items.forEach(item => {
                const itemLi = document.createElement('li');
                itemLi.className = 'weapon-item-sidebar';
                itemLi.textContent = item.name;
                itemLi.dataset.weaponId = item.id;
                itemLi.dataset.itemId = item.id;
                itemLi.dataset.categoryKey = categoryKey;
                itemLi.style.cursor = 'pointer';
                itemLi.addEventListener('click', (e) => {
                    e.stopPropagation();
                    compareTarget = null;
                    if (isWeaponPanel) {
                        showWeaponDetail(item, categoryKey);
                    } else {
                        showGearDetail(item, categoryKey);
                    }
                });
                itemListContainer.appendChild(itemLi);
            });
            
            li.appendChild(itemListContainer);
            categoryList.appendChild(li);
        });
    }
}
