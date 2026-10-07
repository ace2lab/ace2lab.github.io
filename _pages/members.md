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
<link rel="stylesheet" href="{{ '/assets/css/team_grid.css' | relative_url }}">

<div class="team-container">

  <!-- 1. Principal Investigators -->

{% assign pis = site.data.members | where: "group", "pi" | sort: "order" %}
{% if pis.size > 0 %}

  <section class="team-section" id="principal-investigators">
    <h2 class="team-section__title">
      Principal Investigators
      <span class="team-section__count">{{ pis.size }}</span>
    </h2>
    <div class="team-grid team-grid--pi">
      {% for m in pis %}
        {% include member_card.liquid member=m variant="pi" %}
      {% endfor %}
    </div>
  </section>
  {% endif %}

  <!-- 2. Graduate Students -->

{% assign grads = site.data.members | where_exp: "item", "item.group == 'phd' or item.group == 'ms'" | sort: "order" %}
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

  <!-- 3. Undergraduate Researchers -->

{% assign ugs = site.data.members | where: "group", "ug" | sort: "order" %}
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

  <!-- 4. Proud Alumni -->

{% assign alumni = site.data.members | where: "group", "alumni" | sort: "grad_year" | reverse %}
{% if alumni.size > 0 %}

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
  {% endif %}

</div>
