---
layout: page
title: 갤러리
description: Conferences, defenses and moments from ACE² Lab, newest first.
permalink: /gallery/
nav: true
nav_order: 7
ace2_editorial: true
---

{% assign albums_by_year = site.data.gallery | group_by: "year" | sort: "name" | reverse %}
{% assign photo_total = 0 %}
{% for a in site.data.gallery %}
{% assign photo_total = photo_total | plus: a.photos.size %}
{% endfor %}

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-images" aria-hidden="true"></i> <span data-i18n-ko="{{ site.data.gallery.size }}개 앨범" data-i18n-en="{{ site.data.gallery.size }} Albums" data-i18n-ja="{{ site.data.gallery.size }}件のアルバム" data-i18n-zh="{{ site.data.gallery.size }}个相册">{{ site.data.gallery.size }}개 앨범</span></span>
<span class="hero-badge"><i class="fa-solid fa-camera" aria-hidden="true"></i> <span data-i18n-ko="사진 {{ photo_total }}장" data-i18n-en="{{ photo_total }} Photos" data-i18n-ja="{{ photo_total }}枚の写真" data-i18n-zh="{{ photo_total }}张照片">사진 {{ photo_total }}장</span></span>
<span class="hero-badge"><i class="fa-solid fa-calendar" aria-hidden="true"></i> <span data-i18n-ko="{{ albums_by_year.last.name }}년부터" data-i18n-en="Since {{ albums_by_year.last.name }}" data-i18n-ja="{{ albums_by_year.last.name }}年から" data-i18n-zh="{{ albums_by_year.last.name }}年至今">{{ albums_by_year.last.name }}년부터</span></span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  i18n_prefix="hero.gallery"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Gallery"
  subtitle="학회 발표, 학위 심사 및 연구실 활동 기록"
  subtitle_en="Conferences, defenses and moments from ACE² Lab, newest first."
  badges=hero_badges
%}

<div class="ed-page">

  <div class="ed-rail">
    {% for group in albums_by_year %}
      <section class="ed-rail__row" id="gallery-{{ group.name }}" aria-label="{{ group.name }}">
        <h2 class="ed-rail__year">{{ group.name }}</h2>
        <ul class="ed-albums" role="list">
          {% for a in group.items %}
            {% assign dp = a.date | remove: " " | split: "." %}
            {% assign is_lcp_cover = false %}
            {% if forloop.parentloop.first and forloop.first %}
              {% assign is_lcp_cover = true %}
            {% endif %}
            <li class="ed-album" id="album-{{ a.id }}">
              {% if a.cover and a.cover != "" %}
                <figure class="ed-album__cover">
                  {% if a.cover contains "assets/" %}
                    {% assign cover_src = a.cover %}
                  {% else %}
                    {% assign cover_src = a.cover | prepend: '/assets/img/' %}
                  {% endif %}
                  {% assign cover_thumb = cover_src | ace2_thumb_webp %}
                  <picture class="ace2-pic">
                    {% if cover_thumb != "" %}<source srcset="{{ cover_thumb | relative_url }}" type="image/webp">{% endif %}
                    <img
                      src="{{ cover_src | relative_url }}"
                      alt="{{ a.alt | default: a.title | escape }}"
                      {% if is_lcp_cover %}
                        loading="eager"
                        fetchpriority="high"
                      {% else %}
                        loading="lazy"
                      {% endif %}
                      decoding="async"
                      data-zoomable
                    >
                  </picture>
                  {% if a.photos and a.photos.size > 1 %}
                    <span class="ed-album__badge"><i class="fa-solid fa-camera" aria-hidden="true"></i> {{ a.photos.size }}</span>
                  {% endif %}
                </figure>
              {% endif %}
              <time class="ed-album__date" datetime="{{ dp[0] }}-{{ dp[1] | prepend: '0' | slice: -2, 2 }}-{{ dp[2] | prepend: '0' | slice: -2, 2 }}">
                {{- dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 -}}
              </time>
              <div class="ed-album__title">{{ a.title | escape }}</div>
              {% if a.photos and a.photos.size > 1 %}
                <details class="ed-album__expansion">
                  <summary class="ed-album__expansion-toggle">
                    <span data-i18n-term>사진 전체 보기 ({{ a.photos.size }}장)</span>
                    <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                  </summary>
                  <div class="ed-album__grid">
                    {% for p in a.photos %}
                      {% assign photo_thumb = p | ace2_thumb_webp %}
                      <figure class="ed-album__thumb">
                        <picture class="ace2-pic">
                          {% if photo_thumb != "" %}<source srcset="{{ photo_thumb | relative_url }}" type="image/webp">{% endif %}
                          <img
                            src="{{ p | relative_url }}"
                            alt="{{ a.title | escape }} - photo {{ forloop.index }}"
                            loading="lazy"
                            decoding="async"
                            data-zoomable
                          >
                        </picture>
                      </figure>
                    {% endfor %}
                  </div>
                </details>
              {% endif %}
            </li>
          {% endfor %}
        </ul>
      </section>
    {% endfor %}
  </div>

</div>

<script src="{{ '/assets/js/image_lightbox.js' | relative_url | bust_file_cache }}"></script>
