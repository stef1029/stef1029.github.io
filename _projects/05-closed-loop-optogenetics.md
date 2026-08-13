---
layout: page
title: Closed-loop optogenetics control
description: IMU-based head tracking driving automated laser stimulation in real time, with live data visualisation.
# img: assets/img/projects/opto-thumb.jpg   # ← uncomment once the file exists
importance: 5
category: engineering
related_publications: false
---

{% include img_block.liquid eager=true
   paths="assets/img/projects/opto-hero.jpg"
   titles="The system in use"
   caption="Caption."
   note="<strong>Hero shot</strong> — the stim board, or a screenshot of the live visualisation UI." %}


## Why closed-loop

{% include todo.liquid text="What you gain by triggering on the animal's own behaviour instead of a fixed schedule — and specifically what question this made answerable that open-loop stimulation could not. Worth writing so a non-specialist can follow it." %}

## The loop

{% include todo.liquid text="Walk through one cycle: IMU sample → head pose estimate → trigger condition met → laser fires. <strong>What is the end-to-end latency, and what did you have to do to hit it?</strong> Latency is the entire engineering story on this page." %}

{% include todo.liquid label="image" text="A <strong>timing diagram or latency histogram</strong> would be the most convincing figure here — far more than a photo of the hardware." %}

## Safety and controls

{% include todo.liquid text="Laser interlocks and power calibration, plus the experimental controls (stim-omitted trials, wavelength controls) that make the result interpretable. Reviewers and collaborators both look for this." %}

## Links

- **Stimulation board:** [Smart-opto-stim-board](https://github.com/stef1029/Smart-opto-stim-board) — public
- **Laser control:** `Laser-stim-control-board` — **private**
- **Head tracking:** [wearable motion sensor]({{ '/projects/03-wearable-motion-sensor/' | relative_url }})

{% include todo.liquid label="check" text="Confirm <code>Smart-opto-stim-board</code> is this project and not something separate — you also have <code>Laser-stim-control-board</code>, and I'm guessing at which does what." %}
