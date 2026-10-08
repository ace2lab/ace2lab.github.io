---
layout: page
title: research
permalink: /research/
description: Research themes, ongoing projects, and facilities at ACE² Lab
nav: true
nav_order: 3
display_categories: [research, facilities]
horizontal: false
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}">

<style>
  .post > header.post-header {
    display: none;
  }
</style>

<div class="ed-hero-banner">
  <div class="ed-hero-banner__inner">
    <div class="ed-hero-banner__label">ACE² LAB · RESEARCH & FACILITIES</div>
    <h1 class="ed-hero-banner__title">Research Pillars & Core Facilities</h1>
    <p class="ed-hero-banner__subtitle">
      차세대 에너지 저장 및 변환 소재부터 초고속 광열처리 나노공정, 유연 생체·환경 센서 소자까지
      <br>
      <span style="font-size: 0.92rem; opacity: 0.85;">
        Pioneering ultrafast photonic nanomanufacturing, multifunctional energy storage, and flexible sensory electronics.
      </span>
    </p>
    <div class="ed-hero-banner__badges">
      <span class="hero-badge"><i class="fa-solid fa-battery-half"></i> Energy Materials</span>
      <span class="hero-badge"><i class="fa-solid fa-sun"></i> Photonic Sintering</span>
      <span class="hero-badge"><i class="fa-solid fa-wave-square"></i> Flexible Sensors</span>
      <span class="hero-badge"><i class="fa-solid fa-cubes-stacked"></i> Advanced Facilities</span>
    </div>
  </div>
</div>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
