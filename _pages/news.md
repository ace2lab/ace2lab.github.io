---
layout: page
title: news
description: Announcements, awards and media coverage of ACE² Lab.
permalink: /news/
nav: true
nav_order: 6
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

{% assign awards_by_year = site.data.awards | group_by: "year" | sort: "name" | reverse %}
{% assign press_by_year = site.data.press | group_by: "year" | sort: "name" | reverse %}

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-award" aria-hidden="true"></i> Awards ({{ site.data.awards.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-newspaper" aria-hidden="true"></i> In the Press ({{ site.data.press.size }})</span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="News, Awards & Press"
  subtitle="연구실 소식, 수상 실적 및 언론 보도"
  subtitle_en="Announcements, awards and media coverage of ACE² Lab."
  badges=hero_badges
%}

<div class="ed-page">

  <nav class="ed-index" aria-label="News sections">
    <a href="#latest">Latest</a>
    <a href="#awards">Awards<span class="ed-index__count">{{ site.data.awards.size }}</span></a>
    <a href="#press">In the press<span class="ed-index__count">{{ site.data.press.size }}</span></a>
  </nav>

  <!-- Category legend (semantic color grammar shared with the cards below) -->

{% assign news_items = site.news | sort: 'date' | reverse %}
{% assign current_time = 'now' | date: '%s' %}
{% assign n_award = site.news | where: 'category', 'award' %}
{% assign n_member = site.news | where: 'category', 'member' %}
{% assign n_milestone = site.news | where: 'category', 'milestone' %}
{% assign n_honor = site.news | where: 'category', 'honor' %}

  <div class="news-cat-legend" role="group" aria-label="News category color legend">
    <span class="news-cat-legend__title"><i class="fa-solid fa-tags" aria-hidden="true"></i> Category</span>
    <span class="news-cat-legend__item" data-cat="award"><span class="news-cat-legend__dot" aria-hidden="true"></span>Award<span class="news-cat-legend__count">{{ n_award.size }}</span></span>
    <span class="news-cat-legend__item" data-cat="member"><span class="news-cat-legend__dot" aria-hidden="true"></span>Member<span class="news-cat-legend__count">{{ n_member.size }}</span></span>
    <span class="news-cat-legend__item" data-cat="milestone"><span class="news-cat-legend__dot" aria-hidden="true"></span>Milestone<span class="news-cat-legend__count">{{ n_milestone.size }}</span></span>
    <span class="news-cat-legend__item" data-cat="honor"><span class="news-cat-legend__dot" aria-hidden="true"></span>Honor<span class="news-cat-legend__count">{{ n_honor.size }}</span></span>
  </div>

  <!-- 1. Lab announcements (_news collection) -->

  <section class="ed-section" id="latest">
    <h2 class="ed-section__title">
      Latest
      <span class="ed-section__count">{{ news_items.size }}</span>
    </h2>

    <div class="news-feed__list">
      {% for item in news_items %}
        {% assign item_time = item.date | date: '%s' %}
        {% assign diff_seconds = current_time | minus: item_time %}
        <div class="news-feed-card{% if item.category %} news-feed-card--{{ item.category }}{% endif %}">
          <div class="news-feed-card__meta">
            <time class="news-feed-card__date" datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: '%Y.%m.%d' }}</time>
            {% if diff_seconds < 2592000 and diff_seconds >= 0 %}
              <span class="news-badge-new">NEW</span>
            {% endif %}
            {% if item.category == 'award' %}
              <span class="news-cat-badge news-cat-badge--award"><i class="fa-solid fa-trophy" aria-hidden="true"></i> Award</span>
            {% elsif item.category == 'member' %}
              <span class="news-cat-badge news-cat-badge--member"><i class="fa-solid fa-user-graduate" aria-hidden="true"></i> Member</span>
            {% elsif item.category == 'honor' %}
              <span class="news-cat-badge news-cat-badge--honor"><i class="fa-solid fa-star" aria-hidden="true"></i> Honor</span>
            {% elsif item.category == 'milestone' %}
              <span class="news-cat-badge news-cat-badge--milestone"><i class="fa-solid fa-flag-checkered" aria-hidden="true"></i> Milestone</span>
            {% endif %}
          </div>
          <div class="news-feed-card__body">
            {% if item.inline %}
              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
            {% else %}
              <a class="news-feed-card__link" href="{{ item.url | relative_url }}">{{ item.title }}</a>
            {% endif %}
          </div>
        </div>
      {% else %}
        <div class="news-feed-card">
          <div class="news-feed-card__body">No announcements yet.</div>
        </div>
      {% endfor %}
    </div>

  </section>

  <!-- 2. Awards -->

{% if site.data.awards.size > 0 %}

  <section class="ed-section" id="awards">
    <h2 class="ed-section__title">
      Awards
      <span class="ed-section__count">{{ site.data.awards.size }}</span>
    </h2>

    {% for group in awards_by_year %}
      <div class="ed-yeargroup">
        <h3 class="ed-yeargroup__year">{{ group.name }}<span class="ed-yeargroup__count">{{ group.items.size }}</span></h3>
        <ul class="ed-cardgrid" role="list">
          {% for a in group.items %}
            {% assign dp = a.date | remove: " " | split: "." %}
            {% if a.type == '장관상' or a.type == '대상' %}
              {% assign tier = 'crimson' %}
            {% elsif a.type == '우수상' or a.type == '최우수상' %}
              {% assign tier = 'amber' %}
            {% elsif a.type == '우수연구교수' %}
              {% assign tier = 'navy' %}
            {% elsif a.type contains 'Recognition' %}
              {% assign tier = 'purple' %}
            {% else %}
              {% assign tier = 'teal' %}
            {% endif %}
            <li class="ed-award-card ed-award-card--{{ tier }}">
              {% if a.img and a.img != "" %}
                <button type="button" class="ed-award-card__thumb" data-award-zoom aria-label="{{ a.title | escape }} - view full size">
                  <img src="{{ a.img | relative_url }}" alt="{{ a.title | escape }}" loading="lazy">
                  <span class="ed-award-card__zoom" aria-hidden="true"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
                </button>
              {% endif %}
              <div class="ed-award-card__body">
                {% if a.type and a.type != "" %}
                  <span class="ed-tier ed-tier--{{ tier }}"><i class="fa-solid fa-trophy" aria-hidden="true"></i> {{ a.type | escape }}</span>
                {% endif %}
                <h4 class="ed-award-card__title">{{ a.title | escape }}</h4>
                <dl class="ed-award-card__meta">
                  <div><dt><i class="fa-solid fa-user" aria-hidden="true"></i><span class="ed-sr">Recipient</span></dt><dd>{{ a.recipient | escape }}</dd></div>
                  {% if a.issuer and a.issuer != "" %}
                    <div><dt><i class="fa-solid fa-building-columns" aria-hidden="true"></i><span class="ed-sr">Issuer</span></dt><dd>{{ a.issuer | escape }}</dd></div>
                  {% endif %}
                  {% if a.date and a.date != "" %}
                    <div><dt><i class="fa-regular fa-calendar" aria-hidden="true"></i><span class="ed-sr">Date</span></dt><dd><time>{{ dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 }}</time></dd></div>
                  {% endif %}
                </dl>
                {% if a.press and a.press != "" %}
                  <a href="{{ a.press }}" target="_blank" rel="noopener" class="ed-pill ed-pill--press ed-award-card__press">
                    <i class="fa-solid fa-newspaper" aria-hidden="true"></i> 언론보도 ({{ a.press_media | default: '기사' | escape }}) <i class="fa-solid fa-arrow-up-right-from-square ed-ext-icon" aria-hidden="true"></i><span class="ed-sr"> (opens in a new tab)</span>
                  </a>
                {% endif %}
              </div>
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}

  </section>
  {% endif %}

  <!-- 3. Press -->

{% if site.data.press.size > 0 %}

  <section class="ed-section" id="press">
    <h2 class="ed-section__title">
      In the Press
      <span class="ed-section__count">{{ site.data.press.size }}</span>
    </h2>

    {% for group in press_by_year %}
      <div class="ed-yeargroup">
        <h3 class="ed-yeargroup__year">{{ group.name }}<span class="ed-yeargroup__count">{{ group.items.size }}</span></h3>
        <ul class="ed-cardgrid ed-cardgrid--press" role="list">
          {% for p in group.items %}
            {% assign dp = p.date | remove: " " | split: "." %}
            {% assign url_parts = p.url | split: "/" %}
            {% if p.media == '뉴시스' or p.media == '경북매일' %}{% assign media_tone = 'crimson' %}{% else %}{% assign media_tone = 'navy' %}{% endif %}
            <li class="ed-press-card">
              <div class="ed-press-card__top">
                <span class="ed-media ed-media--{{ media_tone }}"><i class="fa-regular fa-newspaper" aria-hidden="true"></i> {{ p.media | default: url_parts[2] | remove_first: "www." | escape }}</span>
                <time class="ed-datepill">{{ dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 }}</time>
              </div>
              <h4 class="ed-press-card__title">
                <a href="{{ p.url }}" target="_blank" rel="noopener">{{ p.title | escape }} <i class="fa-solid fa-arrow-up-right-from-square ed-ext-icon" aria-hidden="true"></i><span class="ed-sr"> (opens in a new tab)</span></a>
              </h4>
              {% if p.paper and p.paper != "" %}
                <a class="ed-pill ed-pill--paper" href="{{ p.paper }}"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> 관련 논문</a>
              {% endif %}
            </li>
          {% endfor %}
        </ul>
      </div>
    {% endfor %}

  </section>
  {% endif %}

  <dialog class="ed-lightbox" id="award-lightbox" aria-label="Award certificate">
    <button type="button" class="ed-lightbox__close" aria-label="Close">&times;</button>
    <img class="ed-lightbox__img" alt="">
  </dialog>
  <script src="{{ '/assets/js/award_lightbox.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

</div>
