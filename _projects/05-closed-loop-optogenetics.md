---
layout: page
title: Closed-loop optogenetics control
description: IMU-based head tracking driving automated laser stimulation in real time, with live data visualisation.
# img: assets/img/projects/optogenetics-thumb.jpg   # TODO: add an image and uncomment
importance: 5
category: engineering
related_publications: false
---

An integrated optogenetics system that closes the loop between what the animal
is doing and when stimulation is delivered: IMU-based head tracking feeding
automated laser control, with real-time visualisation of the incoming data.

<!-- TODO: hero image or a screenshot of the live visualisation UI. Uncomment:
<div class="grid grid-cols-1 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/projects/optogenetics-hero.jpg" title="The system in use" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Caption.</div>
-->

## Why closed-loop

**TODO.** What you gain by triggering on the animal's own behaviour rather than
on a fixed schedule — and what question this made answerable that open-loop
stimulation couldn't. Worth explaining for a non-specialist reader too.

## The loop

**TODO.** Walk through one cycle: IMU sample → head pose estimate → trigger
condition → laser fires. What's the end-to-end latency, and what did you have to
do to hit it? Latency is the whole engineering story here.

<!-- TODO: a timing diagram or latency histogram would be the single most
     convincing figure on this page. -->

## Safety and controls

**TODO.** Laser interlocks, power calibration, and the experimental controls
(stim-omitted trials, wavelength controls) that make the result interpretable.

## Links

- **Stimulation board:** [Smart-opto-stim-board](https://github.com/stef1029/Smart-opto-stim-board) *(public)*
- **Laser control:** `Laser-stim-control-board` — **currently private**
- **Head tracking:** [wearable motion sensor]({{ '/projects/03-wearable-motion-sensor/' | relative_url }})
