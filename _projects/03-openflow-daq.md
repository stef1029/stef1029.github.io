---
layout: page
title: OpenFlow DAQ
description: An open-source 16-channel data acquisition board for lab rigs — KiCad hardware, Rust firmware, Python client.
img: assets/img/12.jpg
importance: 3
category: engineering
related_publications: false
---

Every lab I have worked in has the same problem: a National Instruments chassis
that costs more than the experiment, is shared between six people, and needs a
Windows machine from 2013 to talk to it. OpenFlow DAQ is the thing I built after
losing a week of rig time to a licence server.

It is a 16-channel, 24-bit simultaneous-sampling board that streams over USB or
Ethernet, costs about £90 in parts, and is driven by a Python API that takes
three lines to get numbers out of.

<div class="grid grid-cols-1 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/12.jpg" title="Assembled board" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
  Revision C, assembled and under test. The screw terminals take differential
  inputs directly; the isolated section is on the left of the cutout.
</div>

## Hardware

Four ADS131M08 delta-sigma converters give 16 differential channels sampling
simultaneously at up to 32 kSPS. The analogue front end is galvanically isolated
from the USB side, which matters more than anything else on this board — ground
loops through the host PC were the single biggest noise source in the first
revision.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {% include figure.liquid path="assets/img/8.jpg" title="Schematic detail" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/10.jpg" title="Noise floor measurement" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
  Left: the isolated front end, one channel group of four. Right: measured
  input-referred noise floor with inputs shorted, revision B versus revision C.
</div>

## Software

Firmware is Rust on an RP2040, using DMA to move samples out of the SPI
peripherals so the CPU only handles framing. The host library is pure Python
with a NumPy-native interface:

```python
from openflow import Device

with Device.discover() as dev:
    dev.configure(rate=8000, channels=range(8), gain=4)
    for block in dev.stream(seconds=60):   # block is (8, N) float64, in volts
        process(block)
```

Calibration coefficients live in on-board EEPROM, so a board carries its own
correction and you are not tracking calibration files by hand.

## Status

Three revisions in, with about a dozen boards in use across two research groups.
Hardware is CERN-OHL-S, software is MIT. Issues and pull requests welcome —
particularly from anyone who wants to add a Linux industrial I/O driver.

## Links

- [Hardware repository](https://github.com/stef1029/REPO) — KiCad project, BOM and fabrication outputs
- [Firmware and Python client](https://github.com/stef1029/REPO) — Rust firmware plus the host library
- [Documentation](https://stef1029.github.io/REPO) — wiring, calibration procedure and API reference
