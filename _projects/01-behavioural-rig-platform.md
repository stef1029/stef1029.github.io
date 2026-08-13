---
layout: page
title: Automated behavioural rig platform
description: Rigs for studying spatial decision-making in freely moving mice — the platform built during my PhD, now used across several projects in the lab.
# img: assets/img/projects/rig-thumb.jpg   # ← uncomment once the file exists
importance: 1
category: engineering
related_publications: false
---

{% include todo.liquid label="image" text="<strong>Card thumbnail.</strong> Add <code>assets/img/projects/rig-thumb.jpg</code>, then uncomment the <code>img:</code> line in this file's front matter. Without it this project has no picture on the /projects/ grid." %}

The experimental platform I built during my PhD to study how mice decide where
to move. It combines automated behavioural rigs, wireless trial initiation, and
synchronised acquisition of behaviour, video and electrophysiology. It began as
a means to an end for my own experiments and is now adopted across multiple
projects in the lab.

{% include todo.liquid label="review" text="I wrote the paragraph above from your CV bullets. Reword it in your own voice — it's the first thing anyone reads on this page." %}

{% include todo.liquid label="image" text="<strong>Hero shot of the rig.</strong> Save as <code>assets/img/projects/rig-hero.jpg</code> and uncomment the block below in the source." %}

<!-- UNCOMMENT WHEN THE IMAGE EXISTS:
<div class="img-grid">
  {% include figure.liquid loading="eager" path="assets/img/projects/rig-hero.jpg" title="The behavioural rig" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">One line describing what the reader is looking at.</div>
-->

## The problem

{% include todo.liquid text="<strong>2–3 paragraphs.</strong> What question were you trying to ask, and why couldn't existing kit answer it? What was missing from commercial behavioural systems, or from what the lab already had? This section is what makes a reader care — it deserves the most effort on the page." %}

## What I built

The platform's main elements:

- **Automated behavioural rigs** for freely moving mice.
- **Wireless load-cell platforms** (ESP32, Bluetooth) for automated trial initiation.
- **Multi-camera video acquisition** and synchronisation — see the [multi-modal DAQ writeup]({{ '/projects/04-multimodal-daq/' | relative_url }}).

{% include todo.liquid text="Expand each bullet above into a sentence or two of real detail. Specifically: what does a single trial actually look like from the mouse's point of view? Why load cells rather than a beam break or lever? What did automating trial initiation buy you?" %}

{% include todo.liquid label="image" text="<strong>2–3 images work well here</strong> — CAD render, bare electronics, assembled rig in use. Save as <code>rig-cad.jpg</code>, <code>rig-pcb.jpg</code>, <code>rig-built.jpg</code> in <code>assets/img/projects/</code> and uncomment the grid below." %}

<!-- UNCOMMENT WHEN THE IMAGES EXIST:
<div class="img-grid img-grid-3">
  {% include figure.liquid path="assets/img/projects/rig-cad.jpg" title="CAD" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/rig-pcb.jpg" title="Electronics" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/rig-built.jpg" title="Assembled" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Left to right: ...</div>
-->

## Design decisions worth explaining

{% include todo.liquid text="<strong>This is the section that turns a CV line into a portfolio.</strong> Pick two or three choices you actually agonised over — a material, a protocol, a sensor, a bit of architecture — and explain the trade-off. Include at least one thing that went wrong and what you changed as a result." %}

## Where it got to

{% include todo.liquid text="Numbers, if you have them: how many rigs built, how many labs/projects use it, how long it runs unattended, how many animals or sessions it has handled." %}

## Links

{% include todo.liquid label="check" text="I matched these repos from your GitHub <strong>by name only</strong> — confirm they're right. Repos I couldn't place: <code>Red_hex_arduino_code</code>, <code>231030---Main-behaviour-control</code>, <code>240212---Behaviour-Control</code>." %}

- **Rig control:** [HexControl](https://github.com/stef1029/HexControl) — public
- **Behavioural task code:** `hex_behav` — **private, link will 404 for visitors**
- **Wireless load cells:** `scales-transmit` / `scales-receive` — **private**
- **Successor project:** [fully wireless rig platform]({{ '/projects/02-wireless-rig-platform/' | relative_url }})

{% include todo.liquid text="Decide which private repos to make public, then turn the entries above into real links. Delete any line that doesn't apply." %}
