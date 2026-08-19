---
layout: page
permalink: /repositories/
title: repositories
description: Public code — behavioural rig control, sensor firmware, stimulation hardware and acquisition tools.
nav: true
nav_order: 5
---

{% include todo.liquid label="check" text="<strong>7 of your ~40 repos are public</strong> and listed below, newest first. Still private: <code>hex_behav</code>, <code>Laser-stim-control-board</code>, <code>Camera</code>, <code>ArduinoDAQ2-Due</code>, <code>cohort_visualizer</code> and the analysis notebooks — making the good ones public remains the highest-value thing you can do for this site." %}

{% include todo.liquid text="<strong>All 7 still have a blank description on GitHub.</strong> The cards below display that description, so they render empty no matter what I do here. Add a one-liner to each repo on GitHub — a minute per repo, and it fixes this page entirely." %}

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
