---
layout: page
title: Synchronised multi-modal data acquisition
description: A general-purpose architecture for synchronising behaviour, high-speed video and electrophysiology, with end-to-end pipelines for storage and analysis.
# img: assets/img/projects/daq-thumb.jpg   # TODO: add a screenshot or diagram and uncomment
importance: 4
category: engineering
related_publications: false
---

The acquisition layer underneath the behavioural platform: a general-purpose
architecture for synchronising behavioural events, multi-camera video and
electrophysiology onto a common clock, plus the pipelines that take raw streams
through to analysis-ready data. The high-speed video side is written in C++
against FLIR's Spinnaker API.

<!-- TODO: this project is abstract, so a DIAGRAM earns its place more than a
     photo — boxes for each data source, arrows to the sync layer, then storage
     and analysis. Draw it (draw.io, Inkscape, even neatly on paper) and:
<div class="grid grid-cols-1 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/projects/daq-architecture.png" title="System architecture" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Data flow from acquisition through synchronisation to storage.</div>
-->

## The synchronisation problem

**TODO.** Why this is hard: independent devices with independent clocks, each
drifting, sampling at wildly different rates. What precision did you need, and
what breaks scientifically if you don't get it? Quantify the tolerance if you can.

## Architecture

**TODO.** How the pieces fit — what's the timing reference, how each stream is
stamped, what happens on dropped frames or samples. Explain why it's
*general-purpose* rather than bespoke to one experiment, since that's what made
it reusable across the lab.

## High-speed video

**TODO.** Multi-camera capture in C++ via Spinnaker: frame rates and resolution,
how you handle the data rate, how frames are aligned with everything else. Why
C++ was necessary here rather than Python.

## Pipelines

**TODO.** What happens after acquisition — storage format and why, preprocessing
steps, how an analysis actually gets at the data. A short code sample showing the
interface would land well:

```python
# TODO: replace with a real snippet showing how someone loads a session
```

## Links

<!-- CONFIRM these mappings. You have several DAQ repos and I can't tell which
     is current: ArduinoDAQ2-Due, Arduino-DAQ-october24, arduino_daq_mega_fast,
     arduino_daq_giga. Point at the one that matters and drop the rest. -->

- **Camera acquisition:** [behaviour_camera](https://github.com/stef1029/behaviour_camera) *(public)*
- **DAQ firmware:** `ArduinoDAQ2-Due` / `arduino_daq_giga` — **currently private**
- **Capture / visualisation:** `Camera`, `cohort_visualizer` — **currently private**
- **Used by:** [behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})
