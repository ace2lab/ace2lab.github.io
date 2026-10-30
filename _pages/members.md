---
layout: page
title: 구성원
permalink: /members/
description: >-
  경북대학교 에너지화학공학과 ACE² Lab 연구진 안내. 임창용 부교수, 김태욱 부교수 및 석·박사 대학원생, 학부연구생 소개 및 연구실 지원(대학원/인턴) 안내.
keywords: >-
  임창용, 임창용 교수, Changyong Yim, CY Yim, 김태욱, 김태욱 교수, Taewook Kim,
  경북대 임창용, 경북대 김태욱, 경북대 에너지화학공학과 교수, ACE² Lab 연구원,
  대학원생 모집, 학부연구생 모집, 대학원 진학, 석사과정, 박사과정
nav: true
nav_order: 2
ace2_editorial: true
ace2_team_grid: true
---

{% assign yim = site.data.members | where: "id", "changyong-yim" | first %}
{% assign kim = site.data.members | where: "id", "taewook-kim" | first %}
{% assign grads = site.data.members | where_exp: "item", "item.group == 'phd' or item.group == 'ms'" | sort: "order" %}
{% assign ugs = site.data.members | where: "group", "ug" | sort: "order" %}
{% assign current_count = grads.size | plus: ugs.size %}
{% assign n_phd = grads | where_exp: "item", "item.role_ko == '박사과정' or item.role_ko == '석박통합과정'" | size %}
{% assign n_ms = grads | where: "role_ko", "석사과정" | size %}
{% assign n_joint = grads | where: "role_ko", "학연과정(석사)" | size %}
{% assign n_res = grads | where: "role_ko", "연구원(석사)" | size %}
{% assign alumni = site.data.members | where: "group", "alumni" | sort: "grad_year" | reverse %}
{% assign interns = site.data.interns %}
{% assign intern_affiliations = interns | map: "affiliation" | uniq %}

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-user-tie" aria-hidden="true"></i> <span data-i18n="members.badge_pi">공동 연구책임자</span> ({{ site.data.members | where: "group", "pi" | size }})</span>
<span class="hero-badge"><i class="fa-solid fa-flask" aria-hidden="true"></i> <span data-i18n="members.badge_current">재적 연구원</span> ({{ current_count }})</span>
<span class="hero-badge hero-badge--ai"><i class="fa-solid fa-robot" aria-hidden="true"></i> <span data-i18n="members.badge_ai">AI 비서</span> (1)</span>
<span class="hero-badge"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> <span data-i18n="members.badge_alumni">졸업생</span> ({{ alumni.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-seedling" aria-hidden="true"></i> <span data-i18n="members.badge_interns">역대 학부인턴</span> ({{ interns.size }})</span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  i18n_prefix="hero.members"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Research Team & Members"
  subtitle="차세대 화학 및 에너지 공학 연구실 연구책임자, 대학원생, 학부연구생 및 졸업생"
  subtitle_en="Principal investigators, graduate students, undergraduate researchers, and alumni of ACE² Lab."
  badges=hero_badges
%}

<div class="team-container is-tabbed">

  <!-- Tab bar: rendered pre-collapsed statically with active tab default -->
  <nav class="team-tabnav" role="tablist" aria-label="Members tabs">
    {% if yim %}
      <button type="button" role="tab" class="team-tab" id="tab-yim" aria-controls="panel-yim" aria-selected="false" tabindex="-1" data-hash="yim" data-aliases="yim,changyong-yim,pi-changyong-yim,member-changyong-yim">
        <span data-i18n="members.tab.yim">임창용 교수 (Prof. Yim)</span>
      </button>
    {% endif %}
    {% if kim %}
      <button type="button" role="tab" class="team-tab" id="tab-kim" aria-controls="panel-kim" aria-selected="false" tabindex="-1" data-hash="kim" data-aliases="kim,taewook-kim,pi-taewook-kim,member-taewook-kim">
        <span data-i18n="members.tab.kim">김태욱 교수 (Prof. Kim)</span>
      </button>
    {% endif %}
    {% if current_count > 0 %}
      <button type="button" role="tab" class="team-tab is-active" id="tab-members" aria-controls="panel-members" aria-selected="true" tabindex="0" data-hash="members" data-default="true" data-aliases="students,current,current-members">
        <span data-i18n="members.tab.current">재적 연구원</span><span class="team-tab__count">{{ current_count }}</span>
      </button>
    {% endif %}
    {% if alumni.size > 0 %}
      <button type="button" role="tab" class="team-tab" id="tab-alumni" aria-controls="panel-alumni" aria-selected="false" tabindex="-1" data-hash="alumni" data-aliases="alumni,proud-alumni">
        <span data-i18n="members.tab.alumni">졸업생 (Alumni)</span><span class="team-tab__count">{{ alumni.size }}</span>
      </button>
    {% endif %}
    {% if interns.size > 0 %}
      <button type="button" role="tab" class="team-tab" id="tab-interns" aria-controls="panel-interns" aria-selected="false" tabindex="-1" data-hash="interns" data-aliases="interns,former-interns">
        <span data-i18n="members.tab.interns">역대 학부인턴</span><span class="team-tab__count">{{ interns.size }}</span>
      </button>
    {% endif %}
  </nav>

  <!-- 1. Prof. Changyong Yim -->

{% if yim %}

  <div class="team-tabpanel" role="tabpanel" id="panel-yim" aria-labelledby="tab-yim" tabindex="0" hidden>
    <section class="team-section" id="principal-investigators">
      <h2 class="team-section__title team-section__title--print-only">
        <span data-i18n="members.sec.pi">공동 연구책임자 (Principal Investigators)</span>
        <span class="team-section__count">{{ site.data.members | where: "group", "pi" | size }}</span>
      </h2>
      <div class="team-grid team-grid--pi">
        {% include pi_profile.liquid member=yim %}
      </div>
    </section>
  </div>
  {% endif %}

  <!-- 2. Prof. Taewook Kim -->

{% if kim %}

  <div class="team-tabpanel" role="tabpanel" id="panel-kim" aria-labelledby="tab-kim" tabindex="0" hidden>
    <section class="team-section">
      <div class="team-grid team-grid--pi">
        {% include pi_profile.liquid member=kim %}
      </div>
    </section>
  </div>
  {% endif %}

  <!-- 3. Current Members: AI Executive Concierge + Graduate Students + Undergraduate Researchers -->

{% if current_count > 0 %}

  <div class="team-tabpanel is-active" role="tabpanel" id="panel-members" aria-labelledby="tab-members" tabindex="0">
    {% assign ai_staff = site.data.members | where: "group", "ai" %}
    {% if ai_staff.size > 0 %}
    <aside class="ai-concierge-banner" id="ai-staff" aria-label="AI Executive Secretary">
      {% for m in ai_staff %}
      <article class="member-card member-card--ai" id="member-{{ m.id }}">
        <div class="member-card__photo-wrap">
          {% assign ai_thumb = m.photo | ace2_thumb_webp %}
          <picture class="ace2-pic">
            {% if ai_thumb != "" %}<source srcset="{{ ai_thumb | relative_url }}" type="image/webp">{% endif %}
            <img src="{{ m.photo | relative_url }}" alt="{{ m.name_en }}" class="member-card__photo" loading="lazy" decoding="async">
          </picture>
          <span class="member-card__badge member-card__badge--ai" data-i18n="members.badge.ai">AI 에이전트</span>
        </div>
        <div class="member-card__identity">
          <div class="member-card__eyebrow">
            <i class="fa-solid fa-robot" aria-hidden="true"></i>
            <span data-i18n="members.eyebrow.ai_concierge">AI EXECUTIVE CONCIERGE · 연구실 AI 비서실</span>
          </div>
          <h2 class="member-card__name">
            <span class="member-card__name-ko">{{ m.name_ko }}</span>
            <span class="member-card__name-en">{{ m.name_en }}</span>
          </h2>
          <div class="member-card__role-line">
            <span class="member-card__role-pill" data-i18n="members.role.ai_secretary">{{ m.role_ko }}</span>
            <span class="member-card__period" data-i18n-term>{{ m.since }}</span>
          </div>
          <p class="member-card__summary" data-i18n="members.summary.ai">{{ m.summary }}</p>
          <p class="member-card__affil">
            <span data-i18n="members.affil.ai">{{ m.affiliation_ko }}</span>
            <span class="member-card__affil-sep" aria-hidden="true">·</span>
            <a href="{{ '/' | relative_url }}#ai-operations" class="member-card__link">
              <span data-i18n="members.link.how_jian_works">지안이의 업무 방식 보기</span> <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
        <div class="member-card__duties">
          <ul class="member-duties-list" role="list">
            {% for d in m.duties %}
            <li>
              <i class="fa-solid fa-check" aria-hidden="true"></i>
              <span
                data-i18n-ko="{{ d.ko | escape }}"
                data-i18n-en="{{ d.en | escape }}"
                data-i18n-ja="{{ d.ja | escape }}"
                data-i18n-zh="{{ d.zh | escape }}"
                >{{ d.ko }}</span
              >
            </li>
            {% endfor %}
          </ul>
        </div>
      </article>
      {% endfor %}
    </aside>
    {% endif %}

    {% capture lead_org_ko %}<span class="lead-info__label">KNU</span>: Kyungpook National University (경북대학교){% endcapture %}
    {% capture lead_org_en %}<span class="lead-info__label">KNU</span>: Kyungpook National University{% endcapture %}
    {% capture lead_org_ja %}<span class="lead-info__label">KNU</span>: Kyungpook National University（慶北大学校）{% endcapture %}
    {% capture lead_org_zh %}<span class="lead-info__label">KNU</span>: Kyungpook National University（庆北大学）{% endcapture %}
    {% capture lead_cnt_ko %}<span class="lead-info__label">연구원 구성</span> (총 {{ current_count }}명): 대학원생 {{ grads.size }} (박사·석박통합 {{ n_phd }}, 석사과정 {{ n_ms }}, 학연과정(석사) {{ n_joint }}, 연구원(석사) {{ n_res }}) · 학부연구생 {{ ugs.size }}{% endcapture %}
    {% capture lead_cnt_en %}<span class="lead-info__label">Team</span> ({{ current_count }} total): {{ grads.size }} graduate students (Ph.D. &amp; integrated M.S.-Ph.D. {{ n_phd }}, M.S. {{ n_ms }}, joint-institute M.S. {{ n_joint }}, researchers {{ n_res }}) · {{ ugs.size }} undergraduate researchers{% endcapture %}
    {% capture lead_cnt_ja %}<span class="lead-info__label">研究員構成</span>（計 {{ current_count }} 名）: 大学院生 {{ grads.size }}（博士・一貫制博士 {{ n_phd }}、修士 {{ n_ms }}、連携大学院修士 {{ n_joint }}、研究員 {{ n_res }}）· 学部生研究員 {{ ugs.size }}{% endcapture %}
    {% capture lead_cnt_zh %}<span class="lead-info__label">成员构成</span>（共 {{ current_count }} 人）: 研究生 {{ grads.size }}（博士·硕博连读 {{ n_phd }}、硕士 {{ n_ms }}、联合培养硕士 {{ n_joint }}、研究人员 {{ n_res }}）· 本科生科研助理 {{ ugs.size }}{% endcapture %}
    <div class="team-section__lead-info">
      <i class="fa-solid fa-building-columns" aria-hidden="true"></i>
      <span class="lead-info__item" data-i18n-mode="html" data-i18n-ko="{{ lead_org_ko | escape }}" data-i18n-en="{{ lead_org_en | escape }}" data-i18n-ja="{{ lead_org_ja | escape }}" data-i18n-zh="{{ lead_org_zh | escape }}">{{ lead_org_ko }}</span>
      <span class="lead-info__divider" aria-hidden="true">·</span>
      <span class="lead-info__item" data-i18n-mode="html" data-i18n-ko="{{ lead_cnt_ko | escape }}" data-i18n-en="{{ lead_cnt_en | escape }}" data-i18n-ja="{{ lead_cnt_ja | escape }}" data-i18n-zh="{{ lead_cnt_zh | escape }}">{{ lead_cnt_ko }}</span>
    </div>
    {% if grads.size > 0 %}
    <section class="team-section" id="graduate-students">
      <h2 class="team-section__title">
        <span data-i18n="members.sec.students">대학원생 및 연구원 (Graduate Students)</span>
        <span class="team-section__count">{{ grads.size }}</span>
      </h2>
      <div class="team-grid">
        {% for m in grads %}
          {% include member_card.liquid member=m variant="grad" %}
        {% endfor %}
      </div>
    </section>
    {% endif %}
    {% if ugs.size > 0 %}
    <section class="team-section" id="undergraduate-researchers">
      <h2 class="team-section__title">
        <span data-i18n="members.sec.interns">학부연구생 (Undergraduate Researchers)</span>
        <span class="team-section__count">{{ ugs.size }}</span>
      </h2>
      <div class="team-grid">
        {% for m in ugs %}
          {% include member_card.liquid member=m variant="ug" %}
        {% endfor %}
      </div>
    </section>
    {% endif %}

  </div>
  {% endif %}

  <!-- 4. Proud Alumni -->

{% if alumni.size > 0 %}

  <div class="team-tabpanel" role="tabpanel" id="panel-alumni" aria-labelledby="tab-alumni" tabindex="0" hidden>
    <section class="team-section" id="proud-alumni">
      <h2 class="team-section__title">
        <span data-i18n="members.sec.alumni">졸업생 및 역대 연구원 (Proud Alumni)</span>
        <span class="team-section__count">{{ alumni.size }}</span>
      </h2>
      <div class="alumni-list">
        {% for a in alumni %}
          {% include alumni_row.liquid alumni=a %}
        {% endfor %}
      </div>
    </section>
  </div>
  {% endif %}

  <!-- 5. Former Interns -->

{% if interns.size > 0 %}

  <div class="team-tabpanel" role="tabpanel" id="panel-interns" aria-labelledby="tab-interns" tabindex="0" hidden>
    <section class="team-section" id="former-interns">
      <h2 class="team-section__title">
        <span data-i18n="members.sec.former_interns">역대 학부연구생 인턴 (Former Interns)</span>
        <span class="team-section__count">{{ interns.size }}</span>
      </h2>
      {% if intern_affiliations.size == 1 %}
        <p class="ed-section__note" data-i18n-term>{{ intern_affiliations.first | escape }}</p>
      {% endif %}
      <div class="intern-grid">
        {% for i in interns %}
          <article class="intern-card" id="{{ i.id }}">
            {% if i.photo and i.photo != '' %}
              <img src="{{ i.photo | relative_url }}" alt="{{ i.name_ko | escape }}" class="intern-card__avatar" loading="lazy" decoding="async">
            {% else %}
              <div class="intern-card__avatar intern-card__avatar--placeholder" aria-hidden="true">
                <span>{{ i.name_ko | slice: 0, 2 }}</span>
              </div>
            {% endif %}
            <div class="intern-card__content">
              <h3 class="intern-card__name">
                {{ i.name_ko | escape }}
                <span class="member-badge" data-i18n-term>{{ i.cohort | escape }}</span>
              </h3>
              <p class="intern-card__period">{{ i.period | replace: '. ', '.' | escape }}</p>
              {% if intern_affiliations.size > 1 %}
                <p class="intern-card__aff" data-i18n-term>{{ i.affiliation | escape }}</p>
              {% endif %}
            </div>
          </article>
        {% endfor %}
      </div>
    </section>
  </div>
  {% endif %}

  <!-- Research achievements popup: one shared dialog, one <template> per member (cloned by member_achievements.js) -->
  <dialog id="member-achievements" class="ach-dialog" aria-labelledby="ach-dialog-title">
    <div class="ach-dialog__panel">
      <header class="ach-dialog__head">
        <div>
          <p class="ach-dialog__eyebrow" data-i18n="ach.eyebrow">연구 실적 · Research Achievements</p>
          <h2 id="ach-dialog-title" class="ach-dialog__title" data-ach="title"></h2>
          <p class="ach-dialog__summary" data-ach="summary"></p>
        </div>
        <button type="button" class="ach-dialog__close" data-ach-close aria-label="닫기"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
      </header>
      <div class="ach-dialog__body" data-ach="body" tabindex="-1"></div>
    </div>
  </dialog>
{%- assign ach_members = grads | concat: ugs -%}
{%- for m in ach_members -%}
{%- assign ach_papers = site.data.student_papers | where_exp: 'x', 'x.members contains m.name_ko' -%}
{%- assign ach_patents = site.data.patents | where_exp: 'x', 'x.inventors contains m.name_ko' -%}
{%- assign ach_awards = site.data.awards | where_exp: 'x', 'x.recipient contains m.name_ko' -%}
{%- assign ach_talks = site.data.talks | where_exp: 'x', 'x.members contains m.name_ko' -%}
{%- assign ach_total = ach_papers.size | plus: ach_patents.size | plus: ach_awards.size | plus: ach_talks.size -%}
{%- if ach_total > 0 %}
<template id="ach-{{ m.id }}" data-total="{{ ach_total }}">
{%- if ach_papers.size > 0 %}
<section class="ach-group"><h3 class="ach-group__title"><span data-i18n="ach.group_papers">논문</span> <span class="ach-group__count">{{ ach_papers.size }}</span></h3><ul class="ach-list" role="list">
{%- for x in ach_papers %}
{%- capture p_title_html -%}{%- if x.title_html and x.title_html != '' -%}{{ x.title_html }}{%- else -%}{{ x.title | escape }}{%- endif -%}{%- endcapture -%}
{%- capture ach_authors -%}{%- if x.author_items and x.author_items.size > 0 -%}{%- for a in x.author_items -%}{%- unless forloop.first -%}, {% endunless -%}{%- if a.ko == m.name_ko -%}<span class="ach-author--self">{{ a.name | escape }}</span>{{ a.syms | escape }}{%- else -%}{{ a.name | escape }}{{ a.syms | escape }}{%- endif -%}{%- endfor -%}{%- else -%}{{ x.authors | escape }}{%- endif -%}{%- endcapture -%}
<li class="ach-item{% if x.is_cover %} ach-item--cover{% endif %}"><p class="ach-item__title">{% if x.doi != blank %}<a href="https://doi.org/{{ x.doi | escape }}" target="_blank" rel="noopener">{{ p_title_html }}</a>{% else %}{{ p_title_html }}{% endif %}</p><p class="ach-item__meta">{% if x.type != blank %}<span class="ach-item__tag{% if x.type_class != blank %} {{ x.type_class }}{% endif %}"{% if x.type_i18n_key %} data-i18n="{{ x.type_i18n_key }}"{% endif %}>{{ x.type | escape }}</span>{% endif %}{% if x.is_cover %}<span class="ach-item__tag ach-item__tag--cover"><i class="fa-solid fa-award" aria-hidden="true"></i> <span data-i18n="publications.badge_front_cover">표지논문 (Front Cover)</span></span>{% endif %}{% if x.is_accepted %}<span class="ach-item__tag ach-item__tag--accepted"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> <span data-i18n="ach.badge_accepted">게재 확정 (Just Accepted)</span></span>{% endif %}<em>{{ x.journal | escape }}</em> · {{ x.date_label | default: x.year | escape }}{% if ach_authors != blank %} · {{ ach_authors }}{% endif %}</p></li>
{%- endfor %}
</ul></section>
{%- endif %}
{%- if ach_patents.size > 0 %}
<section class="ach-group"><h3 class="ach-group__title"><span data-i18n="ach.group_patents">특허</span> <span class="ach-group__count">{{ ach_patents.size }}</span></h3><ul class="ach-list" role="list">
{%- for x in ach_patents %}
<li class="ach-item"><p class="ach-item__title">{{ x.title | escape }}</p><p class="ach-item__meta">{% if x.status != blank %}<span class="ach-item__tag" data-i18n-term>{{ x.status | escape }}</span>{% endif %}{{ x.number | default: '' | escape }}{% if x.number != blank %} · {% endif %}{{ x.date | default: x.year | escape }}{% if x.country != blank %} · <span data-i18n-term>{{ x.country | escape }}</span>{% endif %}{% if x.app_number and x.app_number != blank %} (<span data-i18n-term>출원</span> {{ x.app_number | escape }}{% if x.app_date and x.app_date != blank %} · {{ x.app_date | escape }}{% endif %}){% endif %}</p></li>
{%- endfor %}
</ul></section>
{%- endif %}
{%- if ach_awards.size > 0 %}
<section class="ach-group"><h3 class="ach-group__title"><span data-i18n="ach.group_awards">수상</span> <span class="ach-group__count">{{ ach_awards.size }}</span></h3><ul class="ach-list" role="list">
{%- for x in ach_awards %}
{%- assign is_top_award = false -%}
{%- if x.type contains '장관상' or x.type contains '대상' or x.issuer contains '장관' -%}{%- assign is_top_award = true -%}{%- endif -%}
{%- assign hide_top_issuer = false -%}
{%- if x.type contains '장관상' or x.type contains '대상' -%}{%- assign hide_top_issuer = true -%}{%- endif -%}
<li class="ach-item"><p class="ach-item__title">{{ x.title | escape }}</p><p class="ach-item__meta">{% if is_top_award %}<span class="ach-item__tag ach-item__tag--award"><i class="fa-solid fa-trophy" aria-hidden="true"></i> <span data-i18n-term>{{ x.type | escape }}</span></span>{% unless hide_top_issuer %}<span data-i18n-term>{{ x.issuer | escape }}</span> · {% endunless %}{{ x.date | escape }}{% else %}<span class="ach-item__tag" data-i18n-term>{{ x.type | escape }}</span><span data-i18n-term>{{ x.issuer | escape }}</span> · {{ x.date | escape }}{% endif %}</p></li>
{%- endfor %}
</ul></section>
{%- endif %}
{%- if ach_talks.size > 0 %}
<section class="ach-group"><h3 class="ach-group__title"><span data-i18n="ach.group_talks">학회 발표</span> <span class="ach-group__count">{{ ach_talks.size }}</span></h3><ul class="ach-list" role="list">
{%- for x in ach_talks %}
{%- assign p_list = x.presenters | split: "," -%}
{%- assign p_lead = p_list | first | strip -%}
{%- assign p_rest = p_list | slice: 1, p_list.size -%}
{%- assign x_type_ko = site.data.i18n.terms[x.type].ko | default: x.type -%}
<li class="ach-item"><p class="ach-item__title">{{ x.title | escape }}</p><p class="ach-item__meta">{% if x.type != blank %}<span class="ach-item__tag" data-i18n-term data-orig-term="{{ x.type | escape }}">{{ x_type_ko | escape }}</span>{% endif %}{% if x.award and x.award != blank %}<span class="ach-item__tag ach-item__tag--award"><i class="fa-solid fa-trophy" aria-hidden="true"></i> <span data-i18n-term>{{ x.award | escape }}</span></span>{% endif %}{{ x.conference | escape }} · {{ x.date | escape }}{% if x.location != blank %} · {{ x.location | escape }}{% endif %}{% if x.presenters != blank %} · <span class="ach-presenter--lead">{{ p_lead | escape }}</span>{%- for co in p_rest -%}, {{ co | strip | escape }}{%- endfor -%}{% endif %}</p></li>
{%- endfor %}
</ul></section>
{%- endif %}
</template>
{%- endif -%}
{%- endfor %}

  <!-- Synchronous on purpose: it must run before first paint to avoid a flash of all panels -->
  <script src="{{ '/assets/js/ace2_tabs.js' | relative_url | bust_file_cache }}"></script>
  <script src="{{ '/assets/js/member_achievements.js' | relative_url | bust_file_cache }}" defer></script>
</div>
