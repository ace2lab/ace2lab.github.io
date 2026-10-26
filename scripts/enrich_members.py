import yaml
import os

MEMBERS_FILE = "_data/members.yml"

with open(MEMBERS_FILE, "r", encoding="utf-8") as f:
    members = yaml.safe_load(f)

# 1. Update PIs
for m in members:
    if m.get("id") == "changyong-yim":
        m["name_ko"] = "임창용"
        m["name_en"] = "Changyong Yim"
        m["title_ko"] = "부교수 · 공학박사"
        m["title_en"] = "Associate Professor, Ph.D."
        m["role_ko"] = "공동 연구책임자 (Co-PI)"
        m["role_en"] = "Co-Principal Investigator"
        m["affiliation_ko"] = "경북대학교 과학기술대학 에너지화학공학과"
        m["affiliation_en"] = "Department of Energy Chemical Engineering, College of Science and Technology, Kyungpook National University"
        m["office"] = "7호관 411호 (Room 411, Bldg. 7)"
        m["phone"] = "+82-54-530-1331"
        m["email"] = "cy.yim@knu.ac.kr"
        m["photo"] = "assets/img/team/changyong_yim_portrait.jpg"
        m["topics"] = [
            "Pulsed Light Processing (IPL)",
            "Laser-Induced Graphene (LIG)",
            "MXene & MOF Nanocomposites",
            "Supercapacitors & Battery Anodes",
            "Flexible Respiration & Gas Sensors",
            "Colloidal Quantum Dots"
        ]
        m["links"] = {
            "email": "cy.yim@knu.ac.kr",
            "scholar": "https://scholar.google.com/citations?user=2qPTMYUAAAAJ",
            "orcid": "https://orcid.org/0000-0001-5987-9580",
            "github": "https://github.com/Cdragon-github",
            "researchgate": "https://www.researchgate.net/profile/Changyong_Yim2"
        }
        m["bio"] = (
            "포항공과대학교(POSTECH) 화학공학과에서 학사 및 박사학위를 취득하고, "
            "캐나다 캘거리대학교(University of Calgary) 기계생산공학과 Eyes-High 박사후연구원, "
            "삼성전자 무선사업부 Staff Engineer(모바일 헬스케어 센서 H/W 개발), "
            "포항산업과학연구원(RIST) 미세먼지연구센터 수석연구원을 거쳐 경북대학교 에너지화학공학과 부교수로 재직 중입니다. "
            "초고속 제논 플래시광(IPL) 기반 광열처리 나노공정, 레이저 유도 그래핀(LIG), 2D 맥신 및 MOF 복합소재 설계를 바탕으로 "
            "차세대 하이브리드 슈퍼커패시터, 고성능 리튬이온전지 음극, 고민감도 유연 생체·가스 센서를 집중 연구하고 있습니다."
        )
    elif m.get("id") == "taewook-kim":
        m["name_ko"] = "김태욱"
        m["name_en"] = "Taewook Kim"
        m["title_ko"] = "부교수 · 공학박사"
        m["title_en"] = "Associate Professor, Ph.D."
        m["role_ko"] = "공동 연구책임자 (Co-PI)"
        m["role_en"] = "Co-Principal Investigator"
        m["affiliation_ko"] = "경북대학교 과학기술대학 에너지화학공학과"
        m["affiliation_en"] = "Department of Energy Chemical Engineering, College of Science and Technology, Kyungpook National University"
        m["office"] = "7호관 413호 (Room 413, Bldg. 7)"
        m["phone"] = "+82-54-530-1332"
        m["email"] = "taewook@knu.ac.kr"
        m["photo"] = "assets/img/team/taewook_kim_portrait.jpg"
        m["topics"] = [
            "Energy Storage Materials",
            "Supercapacitors & Battery Anodes",
            "Electrochemical & SCR Catalysis",
            "Ceramic Additive Manufacturing"
        ]
        m["links"] = {
            "email": "taewook@knu.ac.kr"
        }
        m["bio"] = (
            "포항공과대학교(POSTECH) 화학공학과에서 학사 및 박사학위를 취득하고, "
            "포스텍 박사후연구원, 삼성전자 반도체연구소 Staff Engineer(차세대 메모리 공정), "
            "한국생산기술연구원(KITECH) 울산본부 선임연구원을 거쳐 경북대학교 에너지화학공학과 부교수로 재직 중입니다. "
            "차세대 배터리·슈퍼커패시터 전극 소재, 친환경 촉매 기술, 세라믹 및 금속 3D 프린팅 첨단 적층제조 소재 연구를 이끌고 있습니다."
        )

# 2. Student and Researcher Metadata
student_data = {
    "jaeho-lee": {
        "degree_program": "박사과정 (2026.03 ~ 현재)",
        "role_ko": "박사과정",
        "role_en": "Ph.D. Student",
        "education": "경북대 대학원 공학석사 / 경북대 에너지화학공학과 공학사",
        "research_field": "에너지 저장 전극 소재 및 공정",
        "office": "7호관 404호",
        "email": "mikybuzz@knu.ac.kr",
        "photo": "assets/img/team/jaeho_lee.jpg",
    },
    "huijin-lee-res": {
        "degree_program": "연구원 (2026.02 ~ 현재)",
        "role_ko": "연구원",
        "role_en": "Researcher",
        "education": "경북대 에너지화학공학과 공학석사 / 경북대 에너지화학공학과 공학사",
        "research_field": "2D 나노복합소재 및 광촉매 환경 소재",
        "office": "7호관 406호",
        "email": "dlgmlswls32@naver.com",
        "photo": "assets/img/team/huijin_lee.jpg",
        "awards": ["2025 첨성인 대학원생 논문경진대회 우수상 (2026.01)"]
    },
    "dongho-lee": {
        "degree_program": "석박통합과정 (2025.03 ~ 현재)",
        "role_ko": "석박통합과정",
        "role_en": "Integrated M.S.-Ph.D. Student",
        "education": "경북대 대학원 미래과학기술융합학부 / 경북대 에너지화학공학과 공학사",
        "research_field": "전기화학 에너지 소재 및 전극 계면 공학",
        "office": "7호관 406호",
        "email": "ehdgh61485@gmail.com",
        "photo": "assets/img/team/dongho_lee.jpg",
        "awards": ["2024 화공학회 Chem Frontier 대상 (롯데케미칼 대표이사상)"]
    },
    "dawin-kim": {
        "degree_program": "석사과정 (2025.03 ~ 현재)",
        "role_ko": "석사과정",
        "role_en": "M.S. Student",
        "education": "경북대 에너지화학공학과 공학사 / 경북대 대학원 석사과정",
        "research_field": "상전이 기능성 소재 및 스마트 디바이스",
        "office": "7호관 404호",
        "email": "dawin2660@knu.ac.kr",
        "photo": "assets/img/team/dawin_kim.jpg",
        "awards": ["2024 화공학회 Chem Frontier 대상 (롯데케미칼 대표이사상)"]
    },
    "jaebin-an": {
        "name_ko": "안재빈",
        "name_en": "Jaebeen Ahn",
        "degree_program": "석사과정 (2026.03 ~ 현재)",
        "role_ko": "석사과정",
        "role_en": "M.S. Student",
        "education": "경북대 에너지화학공학과 공학사 / 경북대 대학원 석사과정",
        "research_field": "2D 나노소재 및 마이크로 에너지 소자",
        "office": "7호관 406호",
        "email": "coco24245@knu.ac.kr",
        "photo": "assets/img/team/jaebeen_ahn.jpg",
        "awards": ["2025 화공학회 Chem Frontier 산업통상부 장관상", "2024 화공학회 대상"]
    },
    "myeongseo-kang": {
        "name_ko": "강명서",
        "name_en": "Myeong Seo Kang",
        "degree_program": "석사과정 (2026.01 ~ 현재)",
        "role_ko": "석사과정",
        "role_en": "M.S. Student",
        "education": "경북대 에너지화학공학과 공학사 / 경북대 대학원 석사과정",
        "research_field": "전이금속 산화물 전극 및 의사커패시터",
        "office": "7호관 404호",
        "email": "audtj707@naver.com",
        "photo": "assets/img/team/myeong_seo_kang.jpg",
        "awards": ["2026 화공학회 추계학술대회 우수 포스터 발표상"]
    },
    "minsu-kim": {
        "name_ko": "김민수",
        "name_en": "Minsu Kim",
        "degree_program": "학부연구생 (4학년 / 21학번, 2025.01 ~ 현재)",
        "role_ko": "학부연구생",
        "role_en": "Undergraduate Researcher",
        "office": "7호관 404호",
        "email": "ben4709@naver.com",
        "photo": "assets/img/team/minsu_kim.jpg",
        "awards": ["2025 화공학회 Chem Frontier 산업통상부 장관상"]
    },
    "jongmin-lee": {
        "name_ko": "이종민",
        "name_en": "Jongmin Lee",
        "degree_program": "학부연구생 (4학년 / 21학번, 2025.05 ~ 현재)",
        "role_ko": "학부연구생",
        "role_en": "Undergraduate Researcher",
        "office": "7호관 404호",
        "email": "ljm0202324@naver.com",
        "photo": "assets/img/team/jongmin_lee.jpg",
        "awards": ["2026 화공학회 Chem Frontier 산업통상자원부장관상 (대회 종합 최고상)"]
    },
    "gyeongjin-kim": {
        "name_ko": "김경진",
        "name_en": "Gyeongjin Kim",
        "degree_program": "학부연구생 (4학년 / 22학번, 2026.01 ~ 현재)",
        "role_ko": "학부연구생",
        "role_en": "Undergraduate Researcher",
        "office": "7호관 406호",
        "email": "gyeongjingim8@gmail.com",
        "photo": "assets/img/team/gyeongjin_kim.jpg",
        "awards": ["2026 화공학회 Chem Frontier 산업통상자원부장관상 (대회 종합 최고상)"]
    },
    "donggeon-lee": {
        "name_ko": "이동건",
        "name_en": "Donggeon Lee",
        "degree_program": "학부연구생 (2학년 / 25학번, 2026.05 ~ 현재)",
        "role_ko": "학부연구생",
        "role_en": "Undergraduate Researcher",
        "office": "7호관 406호",
        "email": "2025009732@knu.ac.kr",
        "photo": "",
        "awards": ["2026 화공학회 Chem Frontier 산업통상자원부장관상 (대회 종합 최고상)"]
    }
}

for m in members:
    mid = m.get("id")
    if mid in student_data:
        info = student_data[mid]
        for k, v in info.items():
            m[k] = v
        m["links"] = {"email": info["email"]}

with open(MEMBERS_FILE, "w", encoding="utf-8") as f:
    yaml.dump(members, f, allow_unicode=True, sort_keys=False, indent=2)

print("Updated _data/members.yml successfully!")
