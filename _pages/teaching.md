---
layout: page
permalink: /teaching/
title: 강의
description: Interactive engineering simulations, lecture notes, and curriculum courses by ACE² Lab.
nav: true
nav_order: 8
ace2_editorial: true
---

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-gamepad" aria-hidden="true"></i> <span data-i18n="teaching.badge_webapp">인터랙티브 웹앱</span></span>
<span class="hero-badge"><i class="fa-solid fa-water" aria-hidden="true"></i> <span data-i18n="teaching.badge_tp">전달현상 (Transport Phenomena)</span></span>
<span class="hero-badge"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> <span data-i18n="teaching.badge_courses">2026-2 개설 강좌</span></span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  i18n_prefix="hero.teaching"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Teaching & Interactive Simulations"
  subtitle="화학공학 전달현상 이론과 프로세스 엔지니어링을 웹 기반 실시간 물리 시뮬레이션 및 강의노트로 구현합니다."
  subtitle_en="Interactive lecture notes, mathematical Manim animations, and academic courses by Prof. Changyong Yim."
  badges=hero_badges
%}

<div class="teaching-container mt-4">

  <!-- ==================== SECTION 1: INTERACTIVE SIMULATIONS ==================== -->
  <section aria-labelledby="heading-simulations" class="mb-5">
    <h2 id="heading-simulations" class="teaching-section-title">
      <i class="fa-solid fa-flask-vial text-primary" aria-hidden="true"></i>
      <span data-i18n="teaching.sim_sec_title">인터랙티브 강의노트 및 물리 시뮬레이션 (Interactive Simulations)</span>
    </h2>
    <p class="teaching-section-desc" data-i18n="teaching.sim_sec_desc">
      복잡한 수학적 전달방정식과 경계조건을 직접 조작하며 직관적으로 이해할 수 있는 실시간 웹 시뮬레이션 모듈입니다.
    </p>

    <!-- Flagship Simulation Card: Falling Film Flow -->
    <article class="sim-card">
      <div class="sim-card__media">
        {% assign sim_thumb = '/assets/mario_falling_film_bg.jpg' | ace2_thumb_webp %}
        <picture class="ace2-pic">
          {% if sim_thumb != "" %}<source srcset="{{ sim_thumb | relative_url }}" type="image/webp">{% endif %}
          <img
            src="{{ '/assets/mario_falling_film_bg.jpg' | relative_url }}"
            alt="Super Transport Bros Falling Film Simulation Thumbnail"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div class="sim-card__media-badge">
          <span>🕹️ 8-BIT NES THEME</span>
          <span>BSL CH. 2.2</span>
        </div>
      </div>

      <div class="sim-card__body">
        <div>
          <div class="sim-card__tag-bar">
            <span class="sim-pill sim-pill--amber" data-i18n="teaching.sim1_tag1">전달현상 2 (Transport Phenomena II)</span>
            <span class="sim-pill" data-i18n="teaching.sim1_tag2">Manim 수식 애니메이션 연동</span>
            <span class="sim-pill" data-i18n="teaching.sim1_tag3">Web Audio 3채널 합성</span>
          </div>

          <h3 class="sim-card__title" data-i18n="teaching.sim1_title">
            Stage 2-2: Laminar Falling Film Flow (강하 액막 유동)
          </h3>
          <div class="sim-card__sub">
            v<sub>z</sub>(x) = v<sub>z,max</sub> [ 1 − (x / δ)² ]
          </div>

          <p class="sim-card__desc" data-i18n="teaching.sim1_desc">
            경사 평면을 따라 중력에 의해 흘러내리는 뉴턴 유체의 층류 강하 액막 유동을 해석합니다.
            Bird-Stewart-Lightfoot (BSL) 표준 좌표계에 따른 6단계 수식 유도 Manim 애니메이션,
            점도·밀도·경사각·유량 조절에 따른 실시간 포물선 유속 및 선형 전단응력 분포를 인터랙티브하게 체험할 수 있습니다.
          </p>

          <div class="sim-features-grid">
            <div><i class="fa-solid fa-circle-check"></i><span data-i18n="teaching.sim1_f1">실시간 미시/거시 듀얼 캔버스</span></div>
            <div><i class="fa-solid fa-circle-check"></i><span data-i18n="teaching.sim1_f2">레이놀즈 수 (Re &lt; 20) 무파동 층류 판정</span></div>
            <div><i class="fa-solid fa-circle-check"></i><span data-i18n="teaching.sim1_f3">HTML5 비디오 구간 탐색 제어</span></div>
            <div><i class="fa-solid fa-circle-check"></i><span data-i18n="teaching.sim1_f4">다크 모드 및 8비트 레트로 랜딩 화면</span></div>
          </div>
        </div>

        <div class="sim-card__action">
          <span class="sim-card__client-note">
            <i class="fa-solid fa-code mr-1"></i> <span data-i18n="teaching.sim1_client_note">순수 클라이언트 사이드 (무설치 구동)</span>
          </span>
          <a href="{{ '/simulations/falling-film/' | relative_url }}" class="sim-btn-launch">
            <span data-i18n="teaching.sim1_btn">시뮬레이션 실행하기</span>
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>

  </section>

  <!-- ==================== SECTION 2: ACADEMIC CURRICULUM ==================== -->
  <section aria-labelledby="heading-courses" class="mb-5">
    <h2 id="heading-courses" class="teaching-section-title">
      <i class="fa-solid fa-book-open-reader text-primary" aria-hidden="true"></i>
      <span data-i18n="teaching.course_sec_title">담당 교과목 및 커리큘럼 (Academic Courses &amp; Curriculum)</span>
    </h2>
    <p class="teaching-section-desc" data-i18n="teaching.course_sec_desc">
      2026학년도 2학기 경북대학교 과학기술대학 에너지화학공학과 및 대학원에서 임창용 교수가 담당하여 강의하는 교과목입니다.
    </p>

    <div class="course-grid">

      <!-- Course 1: 고분자 합성 및 물성 (2학년) -->
      <div class="course-card">
        <div>
          <div class="course-card__header">
            <span class="course-card__level course-card__level--core" data-i18n="teaching.c1_level">학부 전공선택 · 2학년</span>
            <span class="course-card__term" data-i18n="teaching.term_2026_2">2026년 2학기</span>
          </div>
          <h3 class="course-card__title" data-i18n="teaching.c1_title">고분자 합성 및 물성</h3>
          <p class="course-card__desc" data-i18n="teaching.c1_desc">
            단계성장 및 사슬성장 중합의 반응 속도론과 열역학적 메커니즘을 규명하고,
            분자량 분포, 사슬 형태, 유리전이 및 결정화 거동, 점탄성 등 고분자 사슬의 미시적 구조와
            거시적 물리·기계적 물성 간의 구조-물성 상관관계를 체계적으로 다룹니다.
          </p>
        </div>
        <div class="course-card__footer">
          <span><i class="fa-solid fa-book mr-1"></i> <span data-i18n="teaching.c1_footer">교재: 자체 제작 강의노트 (ACE² Lab Lecture Notes)</span></span>
        </div>
      </div>

      <!-- Course 2: 전달현상 2 (3학년) -->
      <div class="course-card">
        <div>
          <div class="course-card__header">
            <span class="course-card__level" data-i18n="teaching.c2_level">학부 전공필수 · 3학년</span>
            <span class="course-card__term" data-i18n="teaching.term_2026_2">2026년 2학기</span>
          </div>
          <h3 class="course-card__title" data-i18n="teaching.c2_title">전달현상 2</h3>
          <p class="course-card__desc" data-i18n="teaching.c2_desc">
            연속체 역학 및 미시적 보존 법칙을 기반으로 열전달과 물질전달의 지배방정식을 유도하고,
            다상·다성분 화학공정 시스템에서의 전도·대류·복사 열전달과 분자 확산, 계면 수송 및
            반응-확산 결합 현상을 통합적으로 해석하며 본 시뮬레이션을 통해 이론적 해법을 가시화합니다.
          </p>
        </div>
        <div class="course-card__footer">
          <span><i class="fa-solid fa-book mr-1"></i> <span data-i18n="teaching.c1_footer">교재: 자체 제작 강의노트 (ACE² Lab Lecture Notes)</span></span>
        </div>
      </div>

      <!-- Course 3: 고급나노화학공학 (대학원) -->
      <div class="course-card">
        <div>
          <div class="course-card__header">
            <span class="course-card__level course-card__level--elective" data-i18n="teaching.c3_level">대학원 전공 · 석박사과정</span>
            <span class="course-card__term" data-i18n="teaching.term_2026_2">2026년 2학기</span>
          </div>
          <h3 class="course-card__title" data-i18n="teaching.c3_title">고급나노화학공학</h3>
          <p class="course-card__desc" data-i18n="teaching.c3_desc">
            나노스케일에서의 열역학, 계면 동역학 및 표면·양자 구속 효과를 바탕으로
            기능성 유·무기 나노소재의 정밀 합성 원리를 다룹니다.
            Science, Nature 등 세계 최고 권위 학술지에 게재된 최신 나노·에너지 논문을
            심층 강독하고 토론하여 첨단 연구 기획 및 비판적 분석 역량을 함양합니다.
          </p>
        </div>
        <div class="course-card__footer">
          <span><i class="fa-solid fa-book-open mr-1"></i> <span data-i18n="teaching.c3_footer">교재: 최신 학술지 논문 강독 (Science, Nature 등)</span></span>
        </div>
      </div>

    </div>

  </section>

</div>
