---
layout: about
title: about
permalink: /
subtitle: Advanced Chemical & Energy Engineering Laboratory | KNU

selected_papers: false # Option B: rendered in-body dual-column grid
social: false # clean academic minimalism

announcements:
  enabled: false # Option B: rendered in-body dual-column grid
  scrollable: false
  limit: 6

latest_posts:
  enabled: false
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<style>
  .post > header.post-header {
    display: none;
  }
</style>

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-bolt" aria-hidden="true"></i> Energy Storage</span>
<span class="hero-badge"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Intense Pulsed Light (IPL)</span>
<span class="hero-badge"><i class="fa-solid fa-microchip" aria-hidden="true"></i> Flexible Sensors</span>
<span class="hero-badge"><i class="fa-solid fa-atom" aria-hidden="true"></i> Colloidal Quantum Dots</span>
{% endcapture %}

{% capture hero_actions %}
<a href="#research-areas" class="hero-action-btn hero-action-btn--primary"><i class="fa-solid fa-compass" aria-hidden="true"></i> Research Areas</a>
<a href="{{ '/members/' | relative_url }}" class="hero-action-btn hero-action-btn--outline"><i class="fa-solid fa-users" aria-hidden="true"></i> Meet Our Team</a>
<a href="{{ '/publications/' | relative_url }}" class="hero-action-btn hero-action-btn--outline"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Publications</a>
{% endcapture %}

{% include hero_banner.liquid
  variant="home"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Advanced Chemical & Energy Engineering Laboratory"
  subtitle="차세대 화학 및 에너지 공학 연구실 · 경북대학교 과학기술대학 에너지화학공학과"
  subtitle_en="Department of Energy Chemical Engineering, College of Science and Technology, Kyungpook National University"
  badges=hero_badges
  actions=hero_actions
%}

<div class="lab-mission-section">
  <div class="lab-mission-quote">
    <p class="lab-mission-quote__en">
      Pioneering ultrafast photonic nanomanufacturing and functional nanomaterials for high-capacity electrochemical energy storage and wearable bio-environmental devices.
    </p>
    <p class="lab-mission-quote__ko">
      초고속 광열처리 나노공정과 기능성 나노소재 설계를 융합하여, 차세대 하이브리드 에너지 저장 소자 및 고민감도 유연 센서 기술을 혁신합니다.
    </p>
  </div>

{% assign active_members = site.data.members | where_exp: "m", "m.group != 'alumni'" %}
{% assign total_patents = site.data.patents.size %}
{% assign reg_patents = site.data.patents | where: "status", "등록" %}
{% assign filed_patents = site.data.patents | where: "status", "출원" %}
{% assign total_domestic = site.data.domestic.size %}
{% assign total_intl = 82 %}
{% assign total_pubs_and_ip = total_intl | plus: total_domestic | plus: total_patents %}

  <div class="lab-stats-grid">
    <div class="lab-stat-card">
      <div class="lab-stat-card__icon"><i class="fa-solid fa-users" aria-hidden="true"></i></div>
      <div class="lab-stat-card__number">{{ active_members.size }}</div>
      <div class="lab-stat-card__label">Active Researchers</div>
      <div class="lab-stat-card__desc">2 Co-PIs · Graduate & Undergrad Researchers</div>
    </div>
    <div class="lab-stat-card">
      <div class="lab-stat-card__icon"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i></div>
      <div class="lab-stat-card__number">{{ total_pubs_and_ip }}</div>
      <div class="lab-stat-card__label">Publications & IP</div>
      <div class="lab-stat-card__desc">{{ total_intl }} Int'l Journal · {{ total_domestic }} Domestic · {{ total_patents }} IP ({{ filed_patents.size }} Filed · {{ reg_patents.size }} Reg.)</div>
    </div>
    <div class="lab-stat-card">
      <div class="lab-stat-card__icon"><i class="fa-solid fa-atom" aria-hidden="true"></i></div>
      <div class="lab-stat-card__number">3</div>
      <div class="lab-stat-card__label">Research Pillars</div>
      <div class="lab-stat-card__desc">Energy · Photonics · Sensors</div>
    </div>
    <div class="lab-stat-card">
      <div class="lab-stat-card__icon"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i></div>
      <div class="lab-stat-card__number">16 Yrs</div>
      <div class="lab-stat-card__label">Research Track Record</div>
      <div class="lab-stat-card__desc">2011 – 2026 · Est. 2020 at KNU</div>
    </div>
  </div>
</div>

<section class="lab-about" aria-labelledby="about-lab-title">
  <h2 id="about-lab-title" class="lab-about__title">About the Laboratory</h2>
  <p class="lab-about__lead">
    ACE² Lab(차세대 화학 및 에너지 공학 연구실)은 경북대학교 과학기술대학 에너지화학공학과에서 임창용 교수와 김태욱 교수가 공동 연구책임자(Co-PIs)로 이끄는 융합 나노화학 및 에너지 공학 연구실입니다. 초고속 펄스광(IPL)·레이저 유도 그래핀(LIG) 기반 나노공정과 2차원 MXene·MOF·콜로이드 양자점(CQD) 등 기능성 나노소재 설계를 결합하여, 고성능 이차전지·슈퍼커패시터 및 고감도 유연 생체·환경 센서 소자를 개발하고 있습니다.
  </p>

  <div class="lab-about__pillars">
    <a href="#area-01" class="lab-about__pillar">
      <div class="lab-about__pillar-icon"><i class="fa-solid fa-bolt" aria-hidden="true"></i></div>
      <h3 class="lab-about__pillar-title">Energy Storage &amp; Materials <i class="fa-solid fa-arrow-down-long lab-about__pillar-arrow" aria-hidden="true"></i></h3>
      <p class="lab-about__pillar-desc">MXene·MOF 복합소재 기반 하이브리드 슈퍼커패시터, 차세대 이차전지 음극 및 환경 촉매 소재</p>
    </a>
    <a href="#area-02" class="lab-about__pillar">
      <div class="lab-about__pillar-icon"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i></div>
      <h3 class="lab-about__pillar-title">Photonic Nanomanufacturing <i class="fa-solid fa-arrow-down-long lab-about__pillar-arrow" aria-hidden="true"></i></h3>
      <p class="lab-about__pillar-desc">초고속 펄스광(IPL) 광열처리와 레이저 유도 그래핀(LIG) 나노공정, 콜로이드 양자점 광전소자</p>
    </a>
    <a href="#area-03" class="lab-about__pillar">
      <div class="lab-about__pillar-icon"><i class="fa-solid fa-microchip" aria-hidden="true"></i></div>
      <h3 class="lab-about__pillar-title">Sensors &amp; Devices <i class="fa-solid fa-arrow-down-long lab-about__pillar-arrow" aria-hidden="true"></i></h3>
      <p class="lab-about__pillar-desc">고감도 유연 촉각·호흡 센서와 머신러닝 결합 나노 전자코(E-nose) 실시간 모니터링 소자</p>
    </a>
  </div>

  <p class="lab-about__pis-intro">The laboratory is jointly directed by two Principal Investigators:</p>

{% assign pis = site.data.members | where: "group", "pi" | sort: "order" %}

  <div class="pi-showcase">
    {% for pi in pis %}
      <article class="pi-showcase-card" id="pi-{{ pi.id }}">
        <header class="pi-showcase-card__head">
          <div class="pi-showcase-card__portrait">
            <img
              src="{{ pi.photo | relative_url }}"
              alt="{{ pi.name_en }}"
              class="pi-showcase-card__img"
              style="object-position: {{ pi.photo_position | default: 'center top' }};"
              loading="lazy"
            >
          </div>
          <div class="pi-showcase-card__id">
            <div class="pi-showcase-card__role">
              <span class="pi-role-tag">Co-Principal Investigator</span>
              <span class="pi-rank-tag">{{ pi.title_en }} ({{ pi.title_ko }})</span>
            </div>
            <h3 class="pi-showcase-card__name">
              {{ pi.name_en }}
              <span class="pi-showcase-card__name-ko">{{ pi.name_ko }} 교수</span>
            </h3>
            <div class="pi-showcase-card__affil">{{ pi.affiliation_en }} ({{ pi.affiliation_ko }})</div>
          </div>
        </header>

        <p class="pi-showcase-card__bio">{{ pi.card_summary | default: pi.summary }}</p>

        <div class="pi-trail">
          <div class="pi-trail__section">
            <div class="pi-trail__label">Career</div>
            <ol class="pi-path" aria-label="Career path of {{ pi.name_en }}">
              {% for step in pi.career_highlights %}
                <li class="pi-path__node pi-path__node--{{ step.kind | default: 'academia' }}{% if step.brand %} pi-path__node--brand-{{ step.brand }}{% endif %}">
                  <span class="pi-path__period">{{ step.period }}</span>
                  <span class="pi-path__org">{{ step.org }}</span>
                  <span class="pi-path__role">{{ step.role }}</span>
                  {% if step.note %}<span class="pi-path__note">{{ step.note }}</span>{% endif %}
                </li>
              {% endfor %}
            </ol>
          </div>
          <div class="pi-trail__section pi-trail__section--education">
            <div class="pi-trail__label">Education</div>
            <ol class="pi-path pi-path--education" aria-label="Education of {{ pi.name_en }}">
              {% for deg in pi.degrees %}
                <li class="pi-path__node pi-path__node--academia pi-path__node--degree{% if deg.brand %} pi-path__node--brand-{{ deg.brand }}{% endif %}">
                  <span class="pi-path__period">{{ deg.period }}</span>
                  <span class="pi-path__org">{{ deg.org }}</span>
                  <span class="pi-path__role">{{ deg.role }}</span>
                  {% if deg.note %}<span class="pi-path__note">{{ deg.note }}</span>{% endif %}
                </li>
              {% endfor %}
            </ol>
          </div>
        </div>

        <div class="pi-showcase-card__topics">
          {% for t in pi.topics limit: 4 %}
            <span class="pi-topic-pill">{{ t }}</span>
          {% endfor %}
          {% if pi.topics.size > 4 %}
            {% assign extra_count = pi.topics.size | minus: 4 %}
            <a href="{{ '/members/' | relative_url }}#pi-{{ pi.id }}" class="pi-topic-pill pi-topic-pill--more">+{{ extra_count }} more</a>
          {% endif %}
        </div>

        <div class="pi-showcase-card__actions">
          <div class="pi-showcase-card__links">
            {% if pi.email and pi.email != "" %}
              <a href="mailto:{{ pi.email }}" class="pi-action-btn" title="Email" aria-label="Email">
                <i class="fa-solid fa-envelope" aria-hidden="true"></i> <span>Email</span>
              </a>
            {% endif %}
            {% if pi.links.scholar and pi.links.scholar != "" %}
              <a href="{{ pi.links.scholar }}" target="_blank" rel="noopener" class="pi-action-btn" title="Google Scholar" aria-label="Google Scholar">
                <i class="ai ai-google-scholar" aria-hidden="true"></i> <span>Scholar</span>
              </a>
            {% endif %}
            {% if pi.links.orcid and pi.links.orcid != "" %}
              <a href="{{ pi.links.orcid }}" target="_blank" rel="noopener" class="pi-action-btn" title="ORCID" aria-label="ORCID">
                <i class="ai ai-orcid" aria-hidden="true"></i> <span>ORCID</span>
              </a>
            {% endif %}
            {% if pi.links.researchgate and pi.links.researchgate != "" %}
              <a href="{{ pi.links.researchgate }}" target="_blank" rel="noopener" class="pi-action-btn" title="ResearchGate" aria-label="ResearchGate">
                <i class="ai ai-researchgate" aria-hidden="true"></i> <span>ResearchGate</span>
              </a>
            {% endif %}
            {% if pi.links.github and pi.links.github != "" %}
              <a href="{{ pi.links.github }}" target="_blank" rel="noopener" class="pi-action-btn" title="GitHub" aria-label="GitHub">
                <i class="fa-brands fa-github" aria-hidden="true"></i> <span>GitHub</span>
              </a>
            {% endif %}
          </div>
          <a href="{{ '/members/' | relative_url }}#pi-{{ pi.id }}" class="pi-action-profile" title="View full profile">
            <span>Full Profile</span> <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </article>
    {% endfor %}

  </div>
</section>

---

<h2 id="research-areas">Core Research Areas</h2>

<div class="research-grid">
  <a href="{{ '/research/' | relative_url }}#energy-storage" class="research-card" id="area-01">
    <div class="research-card__media">
      <img
        src="{{ '/assets/img/research/area1_energy_storage.jpg' | relative_url }}"
        alt="Energy Storage & Materials"
        loading="lazy"
      >
      <span class="research-card__badge">Area 01</span>
    </div>
    <div class="research-card__content">
      <h3 class="research-card__title">Energy Storage &amp; Materials</h3>
      <div class="research-card__desc">
        차세대 하이브리드 코인셀 슈퍼커패시터 및 다공성 MXene/TiO₂ 복합소재 리튬이온전지 음극 설계. 고출력·고에너지밀도 전기화학 소자 구현.
      </div>
      <div class="research-card__topics">
        <span class="research-topic-chip">Supercapacitors</span>
        <span class="research-topic-chip">Battery Anodes</span>
        <span class="research-topic-chip">MOF / MXene</span>
      </div>
    </div>
  </a>

  <a href="{{ '/research/' | relative_url }}#photonic" class="research-card" id="area-02">
    <div class="research-card__media">
      <img
        src="{{ '/assets/img/research/area2_photonic_ipl.jpg' | relative_url }}"
        alt="Photonic Nanomanufacturing"
        loading="lazy"
      >
      <span class="research-card__badge">Area 02</span>
    </div>
    <div class="research-card__content">
      <h3 class="research-card__title">Photonic Nanomanufacturing</h3>
      <div class="research-card__desc">
        초고속 제논 플래시 펄스광(IPL) 열처리를 활용한 저온·밀리초 급 나노소재 소결, 콜로이드 양자점 표면 결함 치유 및 유연 기판 상 직접 공정.
      </div>
      <div class="research-card__topics">
        <span class="research-topic-chip">IPL Processing</span>
        <span class="research-topic-chip">Quantum Dots</span>
        <span class="research-topic-chip">Roll-to-Roll</span>
      </div>
    </div>
  </a>

  <a href="{{ '/research/' | relative_url }}#sensors" class="research-card" id="area-03">
    <div class="research-card__media">
      <img
        src="{{ '/assets/img/research/area3_flexible_sensors.jpg' | relative_url }}"
        alt="Sensors & Devices"
        loading="lazy"
      >
      <span class="research-card__badge">Area 03</span>
    </div>
    <div class="research-card__content">
      <h3 class="research-card__title">Sensors &amp; Devices</h3>
      <div class="research-card__desc">
        MXene·레이저 유도 그래핀(LIG) 기반 고감도 유연 촉각·호흡 센서 및 머신러닝 결합 나노 전자코(E-nose) 호기·환경 가스 모니터링 소자.
      </div>
      <div class="research-card__topics">
        <span class="research-topic-chip">Tactile &amp; LIG Sensors</span>
        <span class="research-topic-chip">AI E-Nose</span>
        <span class="research-topic-chip">Bio-Environmental</span>
      </div>
    </div>
  </a>
</div>

For detailed project descriptions and laboratory facilities, please visit our [Research]({{ '/research/' | relative_url }}) page. Meet our team members on the [Members]({{ '/members/' | relative_url }}) page.

---

<div class="home-dual-grid">
  <div class="home-dual-col--news">
    {% include news_feed.liquid %}
  </div>
  <div class="home-dual-col--papers">
    <div class="selected-papers-block">
      <div class="selected-papers-block__header">
        <h2 class="selected-papers-block__title">
          <i class="fa-solid fa-star" aria-hidden="true"></i> Selected Publications
        </h2>
        <a href="{{ '/publications/' | relative_url }}" class="selected-papers-block__all-link">
          All Publications <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
      <div class="publications">
        {% bibliography -q @*[selected=true]* %}
      </div>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/author_enrichment.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
<script src="{{ '/assets/js/image_lightbox.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
