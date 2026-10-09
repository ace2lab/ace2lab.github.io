---
layout: page
title: members
permalink: /members/
description: Research team members of ACE² Lab
nav: true
nav_order: 2
---

<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<link rel="stylesheet" href="{{ '/assets/css/team_grid.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<div class="team-container">

{% assign yim = site.data.members | where: "id", "changyong-yim" | first %}
{% assign kim = site.data.members | where: "id", "taewook-kim" | first %}
{% assign grads = site.data.members | where_exp: "item", "item.group == 'phd' or item.group == 'ms'" | sort: "order" %}
{% assign ugs = site.data.members | where: "group", "ug" | sort: "order" %}
{% assign current_count = grads.size | plus: ugs.size %}
{% assign alumni = site.data.members | where: "group", "alumni" | sort: "grad_year" | reverse %}
{% assign interns = site.data.interns %}
{% assign intern_affiliations = interns | map: "affiliation" | uniq %}

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
      <ul class="ed-roster" role="list">
        {% for i in interns %}
          <li class="ed-roster__row" id="{{ i.id }}">
            <span class="ed-roster__name">{{ i.name_ko | escape }}</span>
            <span class="ed-roster__cohort">{{ i.cohort | escape }}</span>
            <span class="ed-roster__period">{{ i.period | escape }}</span>
            {% if intern_affiliations.size > 1 %}
              <span class="ed-roster__aff">{{ i.affiliation | escape }}</span>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </section>
  </div>
  {% endif %}

  <!-- Synchronous on purpose: it must run before first paint to avoid a flash of all panels -->
  <script src="{{ '/assets/js/members_tabs.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
</div>
