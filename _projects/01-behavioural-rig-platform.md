---
layout: page
title: Automated behavioural rig platform
description: Rigs for studying spatial decision-making in freely moving mice — the platform built during my PhD, now used across several projects in the lab.
# img: assets/img/projects/rig-thumb.jpg   # TODO: add a photo and uncomment
importance: 1
category: engineering
related_publications: false
---

<!--
  TEMPLATE NOTE — copy this file to add a project. Filenames must not match
  `?_project.md`. `img:` is the card thumbnail on /projects/. `importance:`
  orders the grid (lower first). `category:` must match a value in
  display_categories: in _pages/projects.md.

  IMAGES: put files in assets/img/projects/ then uncomment a grid block below.
  Use figure.liquid, not <img> — it generates responsive WebP automatically.
  Grids are Tailwind (grid grid-cols-1 md:grid-cols-3 gap-4), never Bootstrap.
-->

The experimental platform I built during my PhD to study how mice decide where
to move. It combines automated behavioural rigs, wireless trial initiation, and
synchronised acquisition of behaviour, video and electrophysiology. It began as
a means to an end for my own experiments and is now adopted across multiple
projects in the lab.

<!-- TODO: add a hero image of the rig. Drop the file in assets/img/projects/
     and uncomment:
<div class="grid grid-cols-1 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/projects/rig-hero.jpg" title="The behavioural rig" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">A one-line caption describing what the reader is looking at.</div>
-->

## The problem

**TODO — 2–3 paragraphs.** What question were you trying to ask, and why couldn't
existing kit answer it? What specifically was missing from commercial behavioural
systems, or from what the lab already had? This is the section that makes a
reader care, so it's worth the most effort.

## What I built

The platform's main elements, from the CV — expand each into a sentence or two
of real detail:

- **Automated behavioural rigs** for freely moving mice. **TODO:** what does a trial actually look like? What does the animal do?
- **Wireless load-cell platforms** (ESP32, Bluetooth) for automated trial initiation. **TODO:** why load cells? What problem did automating initiation solve?
- **Multi-camera video acquisition** and synchronisation — see the [multi-modal DAQ writeup]({{ '/projects/04-multimodal-daq/' | relative_url }}).

<!-- TODO: a 2- or 3-up image grid works well here — CAD render, bare hardware,
     assembled rig in use. Uncomment and adjust md:grid-cols-N to taste:
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {% include figure.liquid path="assets/img/projects/rig-cad.jpg" title="CAD" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/rig-pcb.jpg" title="Electronics" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/rig-built.jpg" title="Assembled" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Left to right: ... </div>
-->

## Design decisions worth explaining

**TODO.** This is the section that distinguishes a portfolio from a CV. Pick two
or three choices you actually agonised over — a material, a protocol, a
sensor, a bit of architecture — and explain the trade-off and what you'd do
differently. Include the thing that went wrong and what you changed.

## Where it got to

**TODO.** Adoption across the lab, number of rigs built, how long it runs
unattended, how many animals/sessions it has handled — whatever numbers you have.

## Links

<!-- Repos below were matched from your GitHub by name — CONFIRM these are the
     right ones. Private repos will 404 for visitors: either make them public or
     drop the link. Candidates I couldn't place: Red_hex_arduino_code,
     231030---Main-behaviour-control, 240212---Behaviour-Control. -->

- **Rig control:** [HexControl](https://github.com/stef1029/HexControl) *(public)*
- **Behavioural task code:** `hex_behav` — **currently private**
- **Wireless load cells:** `scales-transmit` / `scales-receive` — **currently private**
- **Successor project:** [fully wireless rig platform]({{ '/projects/02-wireless-rig-platform/' | relative_url }})
- **Paper:** TODO — link once the manuscript is preprinted
