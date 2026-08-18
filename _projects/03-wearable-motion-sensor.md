---
layout: page
title: Mouse-wearable wireless motion sensor
description: A 9-DOF IMU with magnetometer, small and light enough for a mouse to wear, streaming motion data wirelessly during free behaviour.
# img: assets/img/projects/imu-thumb.jpg   # ← uncomment once the file exists
importance: 3
category: engineering
related_publications: false
---

{% include img_block.liquid eager=true width="55%"
   paths="assets/img/projects/imu-board-3d.png"
   titles="Head sensor board"
   caption="The sensor board — IMU and magnetometer alongside the Omnetics connector."
   note="A photo next to a coin or ruler would beat this render — the size constraint is the whole story and one photo sells it." %}


## The constraint

{% include todo.liquid text="<strong>Give the actual numbers</strong> — mass and dimensions a mouse can wear without altering its behaviour. Then show how that one budget cascaded into every other decision: battery, antenna, enclosure, mounting. This is the most impressive part of the project to any engineer reading it." %}

## The board

Designed in KiCad and built as a single small, thin PCB — 0.6 mm stack-up, 16
components, almost all 0402:

| Part | Function |
| --- | --- |
| **LSM6DSV32X** | 6-axis IMU — accelerometer and gyroscope, high-g variant |
| **MMC5983MA** | 3-axis magnetometer, giving the ninth degree of freedom |
| **LTC4332** | SPI extender — carries the bus differentially so the link survives a long, thin cable |
| **Omnetics A79608** | Nano-miniature connector, the standard for head-mounted rodent hardware |

The design choice worth noticing is the **LTC4332**: rather than putting a radio
on the animal, the board keeps the sensors light and moves SPI over a
differential pair, so the mass budget goes on sensors instead of a battery.

{% include todo.liquid label="check" text="<strong>Please confirm how this board relates to the system below.</strong> The BOM has no radio and no battery — the LTC4332 implies a <em>wired</em> differential SPI tether, presumably to the platform hub, which is itself wireless to the host. But your CV calls this a &quot;wireless motion sensor&quot;, and the section below describes an older Arduino Mega system with different sensors. Tell me which is which and I'll restructure: my guess is this PCB is the current design and the Arduino system is its predecessor." %}

{% include todo.liquid text="Not in the repo, and each worth a bullet: <strong>mass and dimensions</strong>, how it mounts to the head, and sample rate of the new board." %}

## System architecture

**On the sensor** — three separate I²C parts on a SparkFun 9DOF stick, fused in
firmware:

- ADXL345 accelerometer (±16 g), HMC5883L magnetometer, MPU-3050 gyroscope
- **DCM (direction cosine matrix) sensor fusion** producing yaw, pitch and roll at **50 Hz**
- A 10 ms sync pulse on every sample, so orientation lines up with video and the DAQ
- Simple `#`-prefixed serial command protocol at 57600 baud — `#s` start, `#e` stop

**On the host** — a Python layer handling acquisition, live display and storage:

- Live angle visualisation while recording, so a bad mount is caught immediately rather than after the session
- Rotation matrix applied to bring the sensor frame into the animal's frame
- Saves to both JSON and HDF5, with reliability reporting on dropped samples
- Terminates on an external signal file, which is how it stays in step with the camera and DAQ

{% include todo.liquid text="The repo covers the electronics and firmware but not the physical side, which is the interesting half: <strong>mass and dimensions</strong>, how it mounts to the animal, battery/runtime, and radio range." %}

{% include img_block.liquid cols="3"
   paths="assets/img/projects/imu-photo.jpg, assets/img/projects/imu-mounted.jpg, assets/img/projects/imu-worn.jpg"
   titles="Assembled board | Mount | In use"
   caption="Caption each panel."
   note="<strong>Photographs, not renders</strong> — the assembled board (with something for scale), how it mounts, and the sensor on an animal. The render above covers the layout; these would show it is real." %}


## Calibration and validation

{% include todo.liquid text="How you established the data is trustworthy: magnetometer calibration procedure, drift over a session, and any comparison against video tracking. A validation plot here would carry real weight — you have <code>headsensor_analysis_notebooks</code>, so a figure probably already exists." %}

## Links

- **Sensor firmware:** [Head-sensor-internal-code](https://github.com/stef1029/Head-sensor-internal-code) — public
- **Experiment control:** [Head-sensor-experiment-control](https://github.com/stef1029/Head-sensor-experiment-control) — public
- **Analysis:** `head_sensor_analysis`, `headsensor_analysis_notebooks` — **private**

{% include todo.liquid label="check" text="Confirm the two public repos above are the right ones, and add a description to each on GitHub — both are currently blank." %}
