---
layout: page
title: Mouse-wearable wireless motion sensor
description: A 9-DOF IMU with magnetometer, small and light enough for a mouse to wear, streaming motion data wirelessly during free behaviour.
# img: assets/img/projects/imu-thumb.jpg   # ← uncomment once the file exists
importance: 3
category: engineering
related_publications: false
---

{% include todo.liquid label="image" text="<strong>Card thumbnail.</strong> Add <code>assets/img/projects/imu-thumb.jpg</code> and uncomment the <code>img:</code> line in the front matter." %}

A wireless motion sensor small and light enough to be worn by a freely moving
mouse — a 9-DOF IMU with magnetometer, designed and built during my postdoc to
capture head and body movement during natural behaviour.

{% include todo.liquid label="image" text="<strong>Hero shot — photograph it next to a coin or ruler.</strong> The size constraint is the whole story of this project and one photo sells it better than three paragraphs. Save as <code>assets/img/projects/imu-hero.jpg</code>." %}

<!-- UNCOMMENT WHEN THE IMAGE EXISTS:
<div class="grid grid-cols-1 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/projects/imu-hero.jpg" title="The wearable sensor" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Include something for scale.</div>
-->

## The constraint

{% include todo.liquid text="<strong>Give the actual numbers</strong> — mass and dimensions a mouse can wear without altering its behaviour. Then show how that one budget cascaded into every other decision: battery, antenna, enclosure, mounting. This is the most impressive part of the project to any engineer reading it." %}

## Design

{% include todo.liquid text="Sensor choice and why 9-DOF; what the magnetometer specifically buys you over accelerometer + gyro alone; how it mounts to the animal; power and runtime; how data gets off the device." %}

{% include todo.liquid label="image" text="<strong>Three-up grid</strong> — bare board, enclosure or CAD, sensor being worn. Save as <code>imu-board.jpg</code>, <code>imu-cad.jpg</code>, <code>imu-worn.jpg</code>." %}

<!-- UNCOMMENT WHEN THE IMAGES EXIST:
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {% include figure.liquid path="assets/img/projects/imu-board.jpg" title="Board" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/imu-cad.jpg" title="Housing" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/imu-worn.jpg" title="In use" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Caption each panel.</div>
-->

## Calibration and validation

{% include todo.liquid text="How you established the data is trustworthy: magnetometer calibration procedure, drift over a session, and any comparison against video tracking. A validation plot here would carry real weight — you have <code>headsensor_analysis_notebooks</code>, so a figure probably already exists." %}

## Links

- **Sensor firmware:** [Head-sensor-internal-code](https://github.com/stef1029/Head-sensor-internal-code) — public
- **Experiment control:** [Head-sensor-experiment-control](https://github.com/stef1029/Head-sensor-experiment-control) — public
- **Analysis:** `head_sensor_analysis`, `headsensor_analysis_notebooks` — **private**
- **Used by:** [closed-loop optogenetics control]({{ '/projects/05-closed-loop-optogenetics/' | relative_url }})

{% include todo.liquid label="check" text="Confirm the two public repos above are the right ones, and add a description to each on GitHub — both are currently blank." %}
