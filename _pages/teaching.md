---
layout: page
permalink: /teaching/
title: teaching
description: Interactive engineering simulations, lecture notes, and curriculum courses by ACE² Lab.
nav: true
nav_order: 8
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-gamepad" aria-hidden="true"></i> Interactive WebApp</span>
<span class="hero-badge"><i class="fa-solid fa-water" aria-hidden="true"></i> Transport Phenomena</span>
<span class="hero-badge"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> 4 Core Courses</span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Teaching & Interactive Simulations"
  subtitle="화학공학 전달현상 이론과 프로세스 엔지니어링을 웹 기반 실시간 물리 시뮬레이션 및 강의노트로 구현합니다."
  subtitle_en="Interactive lecture notes, mathematical Manim animations, and academic courses by Prof. Changyong Yim."
  badges=hero_badges
%}

<div class="mt-8 space-y-12">

  <!-- ==================== SECTION 1: INTERACTIVE SIMULATIONS ==================== -->
  <section aria-labelledby="heading-simulations">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 flex flex-wrap items-center justify-between gap-2">
      <div>
        <h2 id="heading-simulations" class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <i class="fa-solid fa-flask-vial text-sky-600 dark:text-sky-400" aria-hidden="true"></i>
          <span>Interactive Lecture Notes &amp; Simulations</span>
        </h2>
        <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
          복잡한 수학적 전달방정식과 경계조건을 직접 조작하며 직관적으로 이해할 수 있는 실시간 웹 시뮬레이션 모듈입니다.
        </p>
      </div>
      <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
        Active Prototype
      </span>
    </div>

    <!-- Featured Simulation Card: Falling Film Flow -->
    <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">

        <!-- Thumbnail / Graphic Zone -->
        <div class="lg:col-span-5 relative bg-slate-950 min-h-[220px] lg:min-h-[280px] flex items-center justify-center overflow-hidden group">
          <img src="{{ '/assets/mario_falling_film_bg.jpg' | relative_url }}"
               alt="Super Transport Bros Falling Film Simulation Thumbnail"
               class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-amber-300 font-mono">
            <span class="bg-black/70 px-2 py-0.5 rounded border border-amber-500/40">🕹️ 8-BIT NES THEME</span>
            <span class="bg-black/70 px-2 py-0.5 rounded border border-sky-500/40 text-sky-300">BSL CH. 2.2</span>
          </div>
        </div>

        <!-- Details & Metadata Zone -->
        <div class="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-2">
              <span class="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-100 text-amber-900 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                전달현상 2 (Transport Phenomena II)
              </span>
              <span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Manim Video 연동
              </span>
              <span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Web Audio 3채널 합성
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Stage 2-2: Laminar Falling Film Flow (강하 액막 유동)
            </h3>
            <p class="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
              Momentum Shell Balance &amp; Parabolic Velocity Distribution: v<sub>z</sub>(x) = v<sub>z,max</sub> [ 1 − (x / δ)² ]
            </p>

            <p class="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              경사 평면을 따라 중력에 의해 흘러내리는 뉴턴 유체의 층류 강하 액막 유동을 해석합니다.
              Bird-Stewart-Lightfoot (BSL) 표준 좌표계에 따른 6단계 수식 유도 Manim 애니메이션,
              점도·밀도·경사각·유량 조절에 따른 실시간 포물선 유속 및 선형 전단응력 분포를 인터랙티브하게 체험할 수 있습니다.
            </p>

            <!-- Feature Bullet Chips -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs text-slate-600 dark:text-slate-400">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-circle-check text-emerald-500"></i>
                <span>실시간 미시/거시 듀얼 캔버스</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-circle-check text-emerald-500"></i>
                <span>레이놀즈 수 (Re &lt; 20) 층류 체제 판정</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-circle-check text-emerald-500"></i>
                <span>HTML5 비디오 구간 탐색 &amp; 재생 제어</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-circle-check text-emerald-500"></i>
                <span>다크모드 &amp; 슈퍼마리오 레트로 랜딩</span>
              </div>
            </div>
          </div>

          <!-- Action Button Bar -->
          <div class="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <span class="text-xs text-slate-500 dark:text-slate-400">
              <i class="fa-solid fa-code text-slate-400 mr-1"></i> 순수 클라이언트 사이드 (무설치 구동)
            </span>
            <a href="{{ '/simulations/falling-film/' | relative_url }}"
               class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-sm hover:shadow transition-all group">
              <span>시뮬레이션 실행하기</span>
              <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

        </div>
      </div>
    </div>

  </section>

  <!-- ==================== SECTION 2: ACADEMIC CURRICULUM ==================== -->
  <section aria-labelledby="heading-courses">
    <div class="border-b border-slate-200 dark:border-slate-800 pb-3 mb-6">
      <h2 id="heading-courses" class="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
        <i class="fa-solid fa-book-open-reader text-sky-600 dark:text-sky-400" aria-hidden="true"></i>
        <span>Academic Courses &amp; Curriculum</span>
      </h2>
      <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
        경북대학교 과학기술대학 에너지화학공학과 및 대학원에서 개설 및 운영 중인 교과목입니다.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

      <!-- Course 1: 전달현상 2 -->
      <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
              학부 전공필수 · 3학년
            </span>
            <span class="text-xs text-slate-400 font-mono">ENCH302</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
            전달현상 2 (Transport Phenomena II)
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
            Momentum, Heat &amp; Mass Transfer Operations
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            유체 유동, 열전도 및 대류 열전달, 확산 물질전달의 기본 연속 방정식 및 미분 모멘텀 수지를 학습합니다.
            층류 경계층, 마찰 계수 및 파이프 유동 해석을 다루며, 본 페이지의 시뮬레이션을 통하여 이론적 해법을 가시화합니다.
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
          <span>주요 교재: BSL Transport Phenomena</span>
          <span class="text-sky-600 dark:text-sky-400 font-medium">강의노트 연계</span>
        </div>
      </div>

      <!-- Course 2: 고급나노화학공학 -->
      <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              대학원 전공 · 석박사
            </span>
            <span class="text-xs text-slate-400 font-mono">ENCH601</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
            고급나노화학공학 (Adv. Nano Chemical Engineering)
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
            Nanoscale Transport &amp; Energy Materials
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            나노 스케일에서의 이온 전달 특성, 서브나노미터 제한 공간에서의 이상 유전 거동,
            초고속 광열 제어(IPL) 소결 메커니즘 및 2차전지·슈퍼커패시터 전극 반응 속도론을 최신 학술 논문 기반으로 탐구합니다.
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
          <span>최신 연구 동향 및 세미나 연계</span>
          <span class="text-purple-600 dark:text-purple-400 font-medium">대학원 코어</span>
        </div>
      </div>

      <!-- Course 3: 고분자 합성 및 물성 -->
      <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              학부 전공선택 · 3·4학년
            </span>
            <span class="text-xs text-slate-400 font-mono">ENCH315</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
            고분자 합성 및 물성 (Polymer Synthesis &amp; Properties)
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
            Macromolecular Engineering &amp; Rheology
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            라디칼, 음이온, 배위 중합 등 다양한 중합 반응 메커니즘과 반응기 설계,
            고분자 용액 및 용융체의 점탄성 유변학적 거동, 고분자 복합소재의 기계적·열적 물성 제어 기법을 다룹니다.
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
          <span>고분자 유변학 및 합성 실무</span>
          <span class="text-emerald-600 dark:text-emerald-400 font-medium">재료화학 연계</span>
        </div>
      </div>

      <!-- Course 4: 화학공학열역학 -->
      <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              학부 전공필수 · 2학년
            </span>
            <span class="text-xs text-slate-400 font-mono">ENCH201</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100">
            화학공학열역학 (Chemical Engineering Thermodynamics)
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
            Classical &amp; Molecular Thermodynamics
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            열역학 제1법칙 및 제2법칙, 순수 물질의 상태방정식(EOS), 기액 평형(VLE) 및 액액 평형(LLE),
            화학 반응 평형 및 에너지 효율 최적화를 엔지니어링 관점에서 체계적으로 학습합니다.
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
          <span>주요 교재: Smith, Van Ness &amp; Abbott</span>
          <span class="text-amber-600 dark:text-amber-400 font-medium">기초 전공 코어</span>
        </div>
      </div>

    </div>

  </section>

</div>
