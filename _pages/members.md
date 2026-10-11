---
layout: page
title: members
permalink: /members/
description: Research team members of ACE² Lab
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<link rel="stylesheet" href="{{ '/assets/css/team_grid.css' | relative_url }}?v={{ site.time | date: '%s' }}">

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
<span class="hero-badge"><i class="fa-solid fa-user-tie" aria-hidden="true"></i> Principal Investigators ({{ site.data.members | where: "group", "pi" | size }})</span>
<span class="hero-badge"><i class="fa-solid fa-flask" aria-hidden="true"></i> Current Members ({{ current_count }})</span>
<span class="hero-badge"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i> Alumni ({{ alumni.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-seedling" aria-hidden="true"></i> Former Interns ({{ interns.size }})</span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Research Team & Members"
  subtitle="차세대 화학 및 에너지 공학 연구실 연구책임자, 대학원생, 학부연구생 및 졸업생"
  subtitle_en="Principal investigators, graduate students, undergraduate researchers, and alumni of ACE² Lab. KNU: Kyungpook National University (<span lang='ko'>경북대학교</span>)."
  badges=hero_badges
%}

<div class="team-container">

  <!-- Tab bar: hidden until members_tabs.js marks the container .is-tabbed (no JS / print = all panels in sequence) -->
  <nav class="team-tabnav" role="tablist" aria-label="Members tabs">
    {% if yim %}
      <button type="button" role="tab" class="team-tab" id="tab-yim" aria-controls="panel-yim" aria-selected="false" tabindex="-1" data-hash="yim">
        Prof. {{ yim.name_en }}
      </button>
    {% endif %}
    {% if kim %}
      <button type="button" role="tab" class="team-tab" id="tab-kim" aria-controls="panel-kim" aria-selected="false" tabindex="-1" data-hash="kim">
        Prof. {{ kim.name_en }}
      </button>
    {% endif %}
    {% if current_count > 0 %}
      <button type="button" role="tab" class="team-tab" id="tab-members" aria-controls="panel-members" aria-selected="false" tabindex="-1" data-hash="members">
        Current Members<span class="team-tab__count">{{ current_count }}</span>
      </button>
    {% endif %}
    {% if alumni.size > 0 %}
      <button type="button" role="tab" class="team-tab" id="tab-alumni" aria-controls="panel-alumni" aria-selected="false" tabindex="-1" data-hash="alumni">
        Proud Alumni<span class="team-tab__count">{{ alumni.size }}</span>
      </button>
    {% endif %}
    {% if interns.size > 0 %}
      <button type="button" role="tab" class="team-tab" id="tab-interns" aria-controls="panel-interns" aria-selected="false" tabindex="-1" data-hash="interns">
        Former Interns<span class="team-tab__count">{{ interns.size }}</span>
      </button>
    {% endif %}
  </nav>

  <!-- 1. Prof. Changyong Yim -->

{% if yim %}

  <div class="team-tabpanel" role="tabpanel" id="panel-yim" aria-labelledby="tab-yim" tabindex="0">
    <section class="team-section" id="principal-investigators">
      <h2 class="team-section__title team-section__title--print-only">
        Principal Investigators
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

  <div class="team-tabpanel" role="tabpanel" id="panel-kim" aria-labelledby="tab-kim" tabindex="0">
    <section class="team-section">
      <div class="team-grid team-grid--pi">
        {% include pi_profile.liquid member=kim %}
      </div>
    </section>
  </div>
  {% endif %}

  <!-- 3. Current Members: Graduate Students + Undergraduate Researchers -->

{% if current_count > 0 %}

  <div class="team-tabpanel" role="tabpanel" id="panel-members" aria-labelledby="tab-members" tabindex="0">
    <div class="team-section__lead-info" lang="ko">
      <i class="fa-solid fa-building-columns" aria-hidden="true"></i>
      <span class="lead-info__item"><strong>KNU</strong>: Kyungpook National University (경북대학교)</span>
      <span class="lead-info__divider" aria-hidden="true">·</span>
      <span class="lead-info__item"
        ><strong>연구원 구성</strong> (총 {{ current_count }}명): 대학원생 {{ grads.size }} (박사과정 {{ n_phd }}, 석사과정 {{ n_ms }}, 학연과정(석사) {{ n_joint }}, 연구원(석사) {{ n_res }}) ·
        학부연구생 {{ ugs.size }}</span
      >
    </div>
    {% if grads.size > 0 %}
    <section class="team-section" id="graduate-students">
      <h2 class="team-section__title">
        Graduate Students
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
        Undergraduate Researchers
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

  <div class="team-tabpanel" role="tabpanel" id="panel-alumni" aria-labelledby="tab-alumni" tabindex="0">
    <section class="team-section" id="proud-alumni">
      <h2 class="team-section__title">
        Proud Alumni
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

  <div class="team-tabpanel" role="tabpanel" id="panel-interns" aria-labelledby="tab-interns" tabindex="0">
    <section class="team-section" id="former-interns">
      <h2 class="team-section__title">
        Former Interns
        <span class="team-section__count">{{ interns.size }}</span>
      </h2>
      {% if intern_affiliations.size == 1 %}
        <p class="ed-section__note">{{ intern_affiliations.first | escape }}</p>
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
                <span class="member-badge">{{ i.cohort | escape }}</span>
              </h3>
              <p class="intern-card__period">{{ i.period | replace: '. ', '.' | escape }}</p>
              {% if intern_affiliations.size > 1 %}
                <p class="intern-card__aff">{{ i.affiliation | escape }}</p>
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
          <p class="ach-dialog__eyebrow">Research Achievements · 연구 실적</p>
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
{%- assign ach_talks = site.data.talks | where_exp: 'x', 'x.presenters contains m.name_ko' -%}
{%- assign ach_total = ach_papers.size | plus: ach_patents.size | plus: ach_awards.size | plus: ach_talks.size -%}
{%- if ach_total > 0 %}
<template id="ach-{{ m.id }}" data-total="{{ ach_total }}">
{%- if ach_papers.size > 0 %}
<section class="ach-group"><h3 class="ach-group__title">논문 <span class="ach-group__count">{{ ach_papers.size }}</span></h3><ul class="ach-list" role="list">
{%- assign ach_self = '<strong class="ach-author--self">' | append: m.name_en | append: '</strong>' -%}
{%- for x in ach_papers %}
{%- assign ach_authors = x.authors | escape -%}
{%- if m.name_en != blank -%}{%- assign ach_authors = ach_authors | replace: m.name_en, ach_self -%}{%- endif %}
<li class="ach-item"><p class="ach-item__title">{% if x.doi != blank %}<a href="https://doi.org/{{ x.doi | escape }}" target="_blank" rel="noopener">{{ x.title | escape }}</a>{% else %}{{ x.title | escape }}{% endif %}</p><p class="ach-item__meta">{% if x.type != blank %}<span class="ach-item__tag">{{ x.type | escape }}</span>{% endif %}<em>{{ x.journal | escape }}</em> · {{ x.year | escape }}{% if x.authors != blank %} · {{ ach_authors }}{% endif %}</p></li>
{%- endfor %}
</ul></section>
{%- endif %}
{%- if ach_patents.size > 0 %}
<section class="ach-group"><h3 class="ach-group__title">특허 <span class="ach-group__count">{{ ach_patents.size }}</span></h3><ul class="ach-list" role="list">
{%- for x in ach_patents %}
<li class="ach-item"><p class="ach-item__title">{{ x.title | escape }}</p><p class="ach-item__meta">{% if x.status != blank %}<span class="ach-item__tag">{{ x.status | escape }}</span>{% endif %}{{ x.number | default: '' | escape }}{% if x.number != blank %} · {% endif %}{{ x.date | default: x.year | escape }}{% if x.country != blank %} · {{ x.country | escape }}{% endif %}</p></li>
{%- endfor %}
</ul></section>
{%- endif %}
{%- if ach_awards.size > 0 %}
<section class="ach-group"><h3 class="ach-group__title">수상 <span class="ach-group__count">{{ ach_awards.size }}</span></h3><ul class="ach-list" role="list">
{%- for x in ach_awards %}
<li class="ach-item"><p class="ach-item__title">{{ x.title | escape }}</p><p class="ach-item__meta"><span class="ach-item__tag">{{ x.type | escape }}</span>{{ x.issuer | escape }} · {{ x.date | escape }}</p></li>
{%- endfor %}
</ul></section>
{%- endif %}
{%- if ach_talks.size > 0 %}
<section class="ach-group"><h3 class="ach-group__title">학회 발표 <span class="ach-group__count">{{ ach_talks.size }}</span></h3><ul class="ach-list" role="list">
{%- for x in ach_talks %}
<li class="ach-item"><p class="ach-item__title">{{ x.title | escape }}</p><p class="ach-item__meta">{{ x.conference | escape }} · {{ x.date | escape }}{% if x.location != blank %} · {{ x.location | escape }}{% endif %}</p></li>
{%- endfor %}
</ul></section>
{%- endif %}
</template>
{%- endif -%}
{%- endfor %}

  <!-- Synchronous on purpose: it must run before first paint to avoid a flash of all panels -->
  <script src="{{ '/assets/js/ace2_tabs.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
  <script src="{{ '/assets/js/member_achievements.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
</div>
