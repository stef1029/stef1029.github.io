---
layout: page
title: Synchronised multi-modal data acquisition
description: A general-purpose architecture for synchronising behaviour, high-speed video and electrophysiology, with end-to-end pipelines for storage and analysis.
# img: assets/img/projects/daq-thumb.png   # ← uncomment once the file exists
importance: 4
category: engineering
related_publications: false
---

{% include img_block.liquid eager=true
   paths="assets/img/projects/daq-architecture.png"
   titles="System architecture"
   caption="Data flow from acquisition through synchronisation to storage."
   note="<strong>This project needs a DIAGRAM more than a photo.</strong> Boxes for each data source, arrows into the sync layer, then storage and analysis. draw.io or Inkscape is fine — it will be the most useful image on the whole site." %}


## The synchronisation problem

{% include todo.liquid text="Why this is hard: independent devices, independent clocks, all drifting, sampling at wildly different rates. <strong>What precision did you actually need, and what breaks scientifically if you miss it?</strong> Quantify the tolerance — a number here is worth a paragraph of prose." %}

## Architecture

**Acquisition board** — an Arduino Due, chosen for USB throughput, monitoring
35 digital lines and transmitting only state *changes* rather than polling:

- 6 × spotlights, sensors, buzzers, LEDs and valves — one set per port of the hexagonal arena
- `GO_CUE` / `NOGO_CUE` trial signals
- Three dedicated sync lines: `CAMERA_SYNC`, `HEADSENSOR_SYNC`, `LASER_SYNC`

Those three sync pins are the backbone of the whole system: every other stream
is aligned by TTL against the same board.

**Host side (DAQLink)** —

- Asynchronous serial with binary message parsing and explicit error handling
- Incremental NumPy backups *during* acquisition, so a crash mid-session doesn't cost the session
- Archive to HDF5 plus JSON sidecars
- Signal-file coordination with companion processes, so the camera and DAQ start and stop together

**Video** — a separate C++ application (`behaviour_camera`) built on the
Teledyne Spinnaker SDK with OpenCV and GLFW, dependencies pinned through vcpkg
and CMake. It runs as its own process and is brought into step via the
signal-file handshake and `CAMERA_SYNC`.

{% include todo.liquid text="Two things the repos don't answer: what <strong>timing precision</strong> you actually achieve between streams, and what happens when a frame or sample drops. Both are the crux of the project — worth a bullet each." %}

## High-speed video

{% include todo.liquid text="Multi-camera capture in C++ via Spinnaker: frame rate, resolution, aggregate data rate, and how frames align with everything else. Say explicitly why C++ was necessary here rather than Python — it's a question an interviewer will ask." %}

## Pipelines

{% include todo.liquid text="What happens after acquisition: storage format and why you chose it, preprocessing steps, and how an analysis actually reaches the data." %}

{% include todo.liquid text="<strong>Add a short code sample here</strong> showing how someone loads a session — a few lines of real API is very persuasive. Use a fenced <code>```python</code> block. (I left no placeholder block: a fenced block containing the word TODO would be visible on the live site.)" %}

## Links

{% include todo.liquid label="check" text="You have four DAQ repos and I can't tell which is current: <code>ArduinoDAQ2-Due</code>, <code>Arduino-DAQ-october24</code>, <code>arduino_daq_mega_fast</code>, <code>arduino_daq_giga</code>. Point at the one that matters and delete the rest from this list." %}

- **Camera acquisition:** [behaviour_camera](https://github.com/stef1029/behaviour_camera) — public
- **DAQ firmware:** `ArduinoDAQ2-Due` / `arduino_daq_giga` — **private**
- **Capture / visualisation:** `Camera`, `cohort_visualizer` — **private**
- **Used by:** [behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})
