---
layout: page
title: Mouse-wearable wireless motion sensor
description: A 9-DOF IMU with magnetometer, small and light enough for a mouse to wear, streaming motion data wirelessly during free behaviour.
# img: assets/img/projects/imu-thumb.jpg   # TODO: add a photo and uncomment
importance: 3
category: engineering
related_publications: false
---

A wireless motion sensor small and light enough to be worn by a freely moving
mouse — a 9-DOF IMU with magnetometer, designed and built during my postdoc to
capture head and body movement during natural behaviour.

<!-- TODO: hero image. A shot next to a coin or ruler sells the size constraint
     better than any amount of text. Uncomment:
<div class="grid grid-cols-1 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/projects/imu-hero.jpg" title="The wearable sensor" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Caption — include something for scale.</div>
-->

## The constraint

**TODO.** Mass and size budget for something a mouse can wear without altering
its behaviour, and how that cascaded into every other decision — battery,
antenna, enclosure, mounting. State the actual numbers if you have them; this
is the most impressive part of the project to an engineer.

## Design

**TODO.** Sensor choice, why 9-DOF and what the magnetometer buys you, how it
mounts to the animal, power and runtime, how data gets off the device.

<!-- TODO: 2- or 3-up grid — bare board, enclosure/CAD, sensor being worn:
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {% include figure.liquid path="assets/img/projects/imu-board.jpg" title="Board" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/imu-cad.jpg" title="Housing" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/imu-worn.jpg" title="In use" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Caption.</div>
-->

## Calibration and validation

**TODO.** How you established the data is trustworthy — magnetometer
calibration, drift, comparison against video tracking. A plot here would carry
a lot of weight.

## Links

- **Sensor firmware:** [Head-sensor-internal-code](https://github.com/stef1029/Head-sensor-internal-code) *(public)*
- **Experiment control:** [Head-sensor-experiment-control](https://github.com/stef1029/Head-sensor-experiment-control) *(public)*
- **Analysis:** `head_sensor_analysis`, `headsensor_analysis_notebooks` — **currently private**
- **Used by:** [closed-loop optogenetics control]({{ '/projects/05-closed-loop-optogenetics/' | relative_url }})
