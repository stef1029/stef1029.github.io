---
layout: page
permalink: /repositories/
title: repositories
description: Public code — behavioural rig control, sensor firmware, stimulation hardware and acquisition tools.
nav: true
nav_order: 6
---

{% include todo.liquid label="check" text="<strong>Only 6 of your 40 repos are public</strong>, so only those can appear here. <code>hex_behav</code>, <code>Laser-stim-control-board</code>, <code>Camera</code>, <code>ArduinoDAQ2-Due</code>, <code>cohort_visualizer</code> and the analysis notebooks are all private — making the good ones public is the highest-value thing you can do for this site." %}

{% include todo.liquid text="<strong>Every one of your repos has a blank description on GitHub.</strong> The cards below show that description, so they'll all render empty. Add a one-liner to each repo on GitHub — it costs a minute per repo and fixes this page entirely." %}

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
