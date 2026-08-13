---
layout: page
title: Fully wireless rig platform
description: A wireless successor to the behavioural rig system — custom PCBs and STM32/BLE firmware, taken from concept to manufactured hardware in weeks.
# img: assets/img/projects/wireless-thumb.jpg   # TODO: add a photo and uncomment
importance: 2
category: engineering
related_publications: false
---

The second-generation platform, developed during my postdoc: a fully wireless
replacement for the tethered [behavioural rig system]({{ '/projects/01-behavioural-rig-platform/' | relative_url }}).
I designed the custom PCBs and wrote the MCU firmware (STM32, BLE), taking it
from concept to manufactured hardware in a matter of weeks.

<!-- TODO: hero image — the board, or the rig in use. Uncomment:
<div class="grid grid-cols-1 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/projects/wireless-hero.jpg" title="The wireless rig hardware" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Caption.</div>
-->

## Why go wireless

**TODO.** What did the tether cost you scientifically or practically — cable
drag affecting behaviour, setup time, animals getting tangled, limits on arena
size? Be concrete: this is the justification for the whole rebuild.

## Hardware

**TODO.** The board: what MCU configuration, what's on it, what were the
constraints (size, power budget, battery life, radio range)? Why STM32 and BLE
rather than the ESP32 used in the first generation?

<!-- TODO: PCB layout render + assembled board is a great 2-up here:
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {% include figure.liquid path="assets/img/projects/wireless-pcb-layout.jpg" title="PCB layout" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/wireless-pcb-built.jpg" title="Assembled board" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Left: layout. Right: as assembled.</div>
-->

## Firmware

**TODO.** How the firmware is structured, how timing/synchronisation is
maintained over a radio link (this is the hard part and worth explaining), and
how it degrades if a packet is lost.

## Concept to hardware in weeks

**TODO.** Your CV highlights the speed of this. Worth a short section on how —
what you reused, what you deliberately didn't optimise, how you de-risked the
board bring-up. Speed of execution is a genuinely marketable thing to evidence.

## Links

<!-- I could not confidently match a repo to this project from your GitHub.
     Add the right one — `trilab-floating-platform` was the only recent repo I
     couldn't place, so tell me if that's this project (or something else). -->

- **Firmware:** TODO
- **Hardware design files:** TODO
- **Predecessor:** [automated behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})
