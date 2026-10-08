---
layout: page
title: Research Facilities & Instrumentation
description: Synthesis, thermal processing, characterization and utility equipment of ACE² Lab
img: assets/img/10.jpg
importance: 4
category: facilities
related_publications: false
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}">

{% assign facility_groups = site.data.facilities | group_by: "category" %}

<div class="ed-page">

  <p class="ed-lede">
    {{ site.data.facilities.size }} instruments in {{ facility_groups.size }} categories. Location indicates building and room number.
  </p>

  <nav class="ed-index" aria-label="Facility categories">
    {% for group in facility_groups %}
      <a href="#{{ group.name | slugify }}">{{ group.name | escape }}<span class="ed-index__count">{{ group.items.size }}</span></a>
    {% endfor %}
  </nav>

{% for group in facility_groups %}

<section class="ed-section" id="{{ group.name | slugify }}">
<h2 class="ed-section__title">
{{ group.name | escape }}
<span class="ed-section__count">{{ group.items.size }}</span>
</h2>

      <div class="ed-spec ed-spec--with-thumbs" role="table" aria-label="{{ group.name | escape }}">
        <div class="ed-spec__head" role="row">
          <span role="columnheader">Photo</span>
          <span role="columnheader">Instrument</span>
          <span role="columnheader">Manufacturer · Model</span>
          <span role="columnheader">Location</span>
        </div>
        {% for item in group.items %}
          <div class="ed-spec__row" role="row">
            <div class="ed-spec__thumb" role="cell">
              {% if item.img and item.img != "" %}
                <img
                  src="{{ item.img | relative_url }}"
                  alt="{{ item.name | escape }}"
                  loading="lazy"
                  data-zoomable
                >
              {% else %}
                <div class="ed-spec__thumb--placeholder"><i class="fa-solid fa-microscope"></i></div>
              {% endif %}
            </div>
            <span class="ed-spec__name" role="cell">{{ item.name | escape }}</span>
            <span class="ed-spec__make" role="cell">
              {%- if item.manufacturer and item.manufacturer != "" -%}
                {{ item.manufacturer | escape }}
              {%- endif -%}
              {%- if item.model and item.model != "" -%}
                {%- if item.manufacturer and item.manufacturer != "" %}<span class="ed-sep" aria-hidden="true">·</span>{% endif -%}
                <span class="ed-spec__model">{{ item.model | escape }}</span>
              {%- endif -%}
            </span>
            <span class="ed-spec__loc" role="cell">{{ item.location | escape }}</span>
          </div>
        {% endfor %}
      </div>
    </section>

{% endfor %}

</div>
