---
layout: page
title: Automated behavioural rig platform
description: Rigs for studying spatial decision-making in freely moving mice — the platform built during my PhD, now used across several projects in the lab.
# img: assets/img/projects/rig-thumb.jpg   # ← uncomment once the file exists
importance: 1
category: engineering
related_publications: false
---

{% include img_block.liquid eager=true
   paths="assets/img/projects/rig-hero.jpg"
   titles="The behavioural rig"
   caption="One line describing what the reader is looking at."
   note="<strong>Hero shot of the rig.</strong> Any angle showing the whole setup." %}


## The problem

{% include todo.liquid text="<strong>2–3 paragraphs.</strong> What question were you trying to ask, and why couldn't existing kit answer it? What was missing from commercial behavioural systems, or from what the lab already had? This section is what makes a reader care — it deserves the most effort on the page." %}

## What I built

The platform's main elements:

- **Automated behavioural rigs** for freely moving mice.
- **Wireless load-cell platforms** (ESP32, Bluetooth) for automated trial initiation.
- **Multi-camera video acquisition** and synchronisation — see the [multi-modal DAQ writeup]({{ '/projects/04-multimodal-daq/' | relative_url }}).

{% include todo.liquid text="Expand each bullet above into a sentence or two of real detail. Specifically: what does a single trial actually look like from the mouse's point of view? Why load cells rather than a beam break or lever? What did automating trial initiation buy you?" %}

{% include img_block.liquid cols="3"
   paths="assets/img/projects/rig-cad.jpg, assets/img/projects/rig-pcb.jpg, assets/img/projects/rig-built.jpg"
   titles="CAD | Electronics | Assembled"
   caption="Left to right: ..."
   note="<strong>Three-up grid</strong> — CAD render, bare electronics, assembled rig in use." %}


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
