---
layout: page
permalink: /teaching/
title: 강의
description: Interactive engineering simulations, lecture notes, and curriculum courses by ACE² Lab.
nav: true
nav_order: 8
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<style>
  .teaching-container {
    max-width: 1310px;
    margin: 0 auto;
    padding: 0;
  }
  @media (max-width: 1340px) {
    .teaching-container {
      padding: 0 15px;
    }
  }
  .teaching-section-title {
    font-family: var(--font-serif-editorial, "Playfair Display", serif);
    font-size: 1.55rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .teaching-section-desc {
    font-size: 0.92rem;
    color: var(--global-text-color);
    opacity: 0.78;
    margin-bottom: 24px;
    line-height: 1.55;
  }

  /* Flagship Interactive Simulation Card */
  .sim-card {
    background: var(--global-card-bg-color, #ffffff);
    border: 1px solid var(--global-divider-color, #e2e8f0);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    display: grid;
    grid-template-columns: 4.5fr 7.5fr;
    margin-bottom: 48px;
  }
  .sim-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    border-color: var(--global-theme-color, #0284c7);
  }
  @media (max-width: 860px) {
    .sim-card {
      grid-template-columns: 1fr;
    }
  }

  .sim-card__media {
    position: relative;
    background: #020617;
    min-height: 240px;
    overflow: hidden;
  }
  .sim-card__media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.4s ease;
  }
  .sim-card:hover .sim-card__media img {
    transform: scale(1.04);
  }
  .sim-card__media-badge {
    position: absolute;
    bottom: 12px;
    left: 12px;
    right: 12px;
    display: flex;
    justify-content: space-between;
    font-family: monospace;
    font-size: 0.72rem;
    color: #fde047;
  }
  .sim-card__media-badge span {
    background: rgba(0, 0, 0, 0.75);
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid rgba(253, 224, 71, 0.4);
  }

  .sim-card__body {
    padding: 28px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .sim-card__tag-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }
  .sim-pill {
    font-size: 0.72rem;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 6px;
    background: rgba(2, 132, 199, 0.1);
    color: var(--global-theme-color, #0284c7);
    border: 1px solid rgba(2, 132, 199, 0.25);
  }
  .sim-pill--amber {
    background: rgba(245, 158, 11, 0.12);
    color: #d97706;
    border-color: rgba(245, 158, 11, 0.3);
  }
  html[data-theme="dark"] .sim-pill--amber {
    color: #fbbf24;
  }

  .sim-card__title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 4px 0;
    line-height: 1.35;
  }
  .sim-card__sub {
    font-family: monospace;
    font-size: 0.78rem;
    color: var(--global-theme-color, #0284c7);
    margin-bottom: 12px;
  }
  .sim-card__desc {
    font-size: 0.88rem;
    color: var(--global-text-color);
    opacity: 0.88;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .sim-features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 12px;
    font-size: 0.78rem;
    color: var(--global-text-color);
    opacity: 0.8;
    margin-bottom: 20px;
  }
  @media (max-width: 520px) {
    .sim-features-grid {
      grid-template-columns: 1fr;
    }
  }
  .sim-features-grid div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .sim-features-grid i {
    color: #10b981;
    font-size: 0.75rem;
  }

  .sim-card__action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid var(--global-divider-color, #e2e8f0);
    flex-wrap: wrap;
    gap: 10px;
  }
  .sim-btn-launch,
  .sim-btn-launch:link,
  .sim-btn-launch:visited {
    background: var(--global-theme-color, #0284c7);
    color: #ffffff !important;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 8px 18px;
    border-radius: 8px;
    text-decoration: none !important;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: opacity 0.15s, transform 0.15s;
  }
  .sim-btn-launch span,
  .sim-btn-launch i,
  .sim-btn-launch:hover span,
  .sim-btn-launch:hover i {
    color: #ffffff !important;
  }
  .sim-btn-launch:hover {
    opacity: 0.92;
    transform: translateY(-1px);
    color: #ffffff !important;
  }

  /* Academic Course Cards Grid */
  .course-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (max-width: 992px) {
    .course-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .course-card {
    background: var(--global-card-bg-color, #ffffff);
    border: 1px solid var(--global-divider-color, #e2e8f0);
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.15s, border-color 0.15s;
  }
  .course-card:hover {
    transform: translateY(-2px);
    border-color: var(--global-theme-color, #0284c7);
  }
  .course-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  .course-card__level {
    font-size: 0.72rem;
    font-weight: 600;
    padding: 2px 7px;
    border-radius: 4px;
    background: rgba(2, 132, 199, 0.1);
    color: var(--global-theme-color, #0284c7);
  }
  .course-card__term {
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--global-text-color);
    opacity: 0.65;
  }
  .course-card__title {
    font-size: 1.08rem;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 10px 0;
  }
  .course-card__desc {
    font-size: 0.85rem;
    color: var(--global-text-color);
    opacity: 0.85;
    line-height: 1.6;
    margin-bottom: 16px;
  }
  .course-card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid var(--global-divider-color, #e2e8f0);
    font-size: 0.75rem;
    color: var(--global-text-color);
    opacity: 0.65;
  }
</style>

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-gamepad" aria-hidden="true"></i> <span data-i18n="teaching.badge_webapp">Interactive WebApp</span></span>
<span class="hero-badge"><i class="fa-solid fa-water" aria-hidden="true"></i> <span data-i18n="teaching.badge_tp">Transport Phenomena</span></span>
<span class="hero-badge"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> <span data-i18n="teaching.badge_courses">2026-2 Active Courses</span></span>
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
      <span data-i18n="teaching.sim_sec_title">Interactive Lecture Notes &amp; Simulations</span>
    </h2>
    <p class="teaching-section-desc" data-i18n="teaching.sim_sec_desc">
      복잡한 수학적 전달방정식과 경계조건을 직접 조작하며 직관적으로 이해할 수 있는 실시간 웹 시뮬레이션 모듈입니다.
    </p>

    <!-- Flagship Simulation Card: Falling Film Flow -->
    <article class="sim-card">
      <div class="sim-card__media">
        <img src="{{ '/assets/mario_falling_film_bg.jpg' | relative_url }}"
             alt="Super Transport Bros Falling Film Simulation Thumbnail"
             loading="lazy" />
        <div class="sim-card__media-badge">
          <span>🕹️ 8-BIT NES THEME</span>
          <span>BSL CH. 2.2</span>
        </div>
      </div>

      <div class="sim-card__body">
        <div>
          <div class="sim-card__tag-bar">
            <span class="sim-pill sim-pill--amber" data-i18n="teaching.sim1_tag1">전달현상 2 (Transport Phenomena II)</span>
            <span class="sim-pill" data-i18n="teaching.sim1_tag2">Manim Video 연동</span>
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
            <div><i class="fa-solid fa-circle-check"></i><span data-i18n="teaching.sim1_f2">레이놀즈 수 (Re &lt; 20) 층류 판정</span></div>
            <div><i class="fa-solid fa-circle-check"></i><span data-i18n="teaching.sim1_f3">HTML5 비디오 구간 탐색 제어</span></div>
            <div><i class="fa-solid fa-circle-check"></i><span data-i18n="teaching.sim1_f4">다크모드 &amp; 슈퍼마리오 레트로 랜딩</span></div>
          </div>
        </div>

        <div class="sim-card__action">
          <span style="font-size: 0.78rem; opacity: 0.65;">
            <i class="fa-solid fa-code mr-1"></i> <span data-i18n="teaching.sim1_client_note">순수 클라이언트 사이드 (무설치 구동)</span>
          </span>
          <a href="{{ '/simulations/falling-film/' | relative_url }}" class="sim-btn-launch" style="color: #ffffff !important;">
            <span style="color: #ffffff !important;" data-i18n="teaching.sim1_btn">시뮬레이션 실행하기</span>
            <i class="fa-solid fa-arrow-right" style="color: #ffffff !important;"></i>
          </a>
        </div>
      </div>
    </article>

  </section>

  <!-- ==================== SECTION 2: ACADEMIC CURRICULUM ==================== -->
  <section aria-labelledby="heading-courses" class="mb-5">
    <h2 id="heading-courses" class="teaching-section-title">
      <i class="fa-solid fa-book-open-reader text-primary" aria-hidden="true"></i>
      <span data-i18n="teaching.course_sec_title">Academic Courses &amp; Curriculum</span>
    </h2>
    <p class="teaching-section-desc" data-i18n="teaching.course_sec_desc">
      2026학년도 2학기 경북대학교 과학기술대학 에너지화학공학과 및 대학원에서 임창용 교수가 담당하여 강의하는 교과목입니다.
    </p>

    <div class="course-grid">

      <!-- Course 1: 고분자 합성 및 물성 (2학년) -->
      <div class="course-card">
        <div>
          <div class="course-card__header">
            <span class="course-card__level" style="background: rgba(16, 185, 129, 0.1); color: #059669;" data-i18n="teaching.c1_level">학부 전공선택 · 2학년</span>
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
            <span class="course-card__level" style="background: rgba(147, 51, 234, 0.1); color: #9333ea;" data-i18n="teaching.c3_level">대학원 전공 · 석박사과정</span>
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
