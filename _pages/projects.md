---
layout: page
title: projects
permalink: /projects/
description: Instruments and systems I've built, and the science they were built for.
nav: true
nav_order: 1
# Cards are grouped under these headings, matched against each project's
# `category:` front matter. Rename/add categories here and in _projects/*.md.
# Set `enable_project_categories: false` in _config.yml for one flat grid.
display_categories: [research, engineering, personal]
horizontal: false
---

{% include todo.liquid label="check" text="<strong>All 7 projects below are real</strong>, taken from your CV — but each page is a scaffold, not a finished writeup. Open each one: the amber boxes say what to write, the blue boxes say which image to add. Nothing here is invented filler." %}

{% include todo.liquid label="image" text="<strong>The cards below have no thumbnails yet</strong>, which is why this grid looks bare. Each project's <code>img:</code> line is commented out in its front matter — add one image per project and this page transforms." %}

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
