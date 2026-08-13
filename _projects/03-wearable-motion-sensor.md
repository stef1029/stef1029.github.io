---
layout: page
title: Mouse-wearable wireless motion sensor
description: A 9-DOF IMU with magnetometer, small and light enough for a mouse to wear, streaming motion data wirelessly during free behaviour.
# img: assets/img/projects/imu-thumb.jpg   # ← uncomment once the file exists
importance: 3
category: engineering
related_publications: false
---

{% include img_block.liquid eager=true
   paths="assets/img/projects/imu-hero.jpg"
   titles="The wearable sensor"
   caption="Include something for scale."
   note="<strong>Hero shot — photograph it next to a coin or ruler.</strong> The size constraint is the whole story here, and one photo sells it better than three paragraphs." %}


## The constraint

{% include todo.liquid text="<strong>Give the actual numbers</strong> — mass and dimensions a mouse can wear without altering its behaviour. Then show how that one budget cascaded into every other decision: battery, antenna, enclosure, mounting. This is the most impressive part of the project to any engineer reading it." %}

## Design

{% include todo.liquid text="Sensor choice and why 9-DOF; what the magnetometer specifically buys you over accelerometer + gyro alone; how it mounts to the animal; power and runtime; how data gets off the device." %}

{% include img_block.liquid cols="3"
   paths="assets/img/projects/imu-board.jpg, assets/img/projects/imu-cad.jpg, assets/img/projects/imu-worn.jpg"
   titles="Board | Housing | In use"
   caption="Caption each panel."
   note="<strong>Three-up grid</strong> — bare board, enclosure or CAD, sensor being worn." %}


## Calibration and validation

{% include todo.liquid text="How you established the data is trustworthy: magnetometer calibration procedure, drift over a session, and any comparison against video tracking. A validation plot here would carry real weight — you have <code>headsensor_analysis_notebooks</code>, so a figure probably already exists." %}

## Links

- **Sensor firmware:** [Head-sensor-internal-code](https://github.com/stef1029/Head-sensor-internal-code) — public
- **Experiment control:** [Head-sensor-experiment-control](https://github.com/stef1029/Head-sensor-experiment-control) — public
- **Analysis:** `head_sensor_analysis`, `headsensor_analysis_notebooks` — **private**
- **Used by:** [closed-loop optogenetics control]({{ '/projects/05-closed-loop-optogenetics/' | relative_url }})

{% include todo.liquid label="check" text="Confirm the two public repos above are the right ones, and add a description to each on GitHub — both are currently blank." %}
