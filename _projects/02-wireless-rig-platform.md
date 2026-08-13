---
layout: page
title: Fully wireless rig platform
description: A wireless successor to the behavioural rig system — custom PCBs and STM32/BLE firmware, taken from concept to manufactured hardware in weeks.
# img: assets/img/projects/wireless-thumb.jpg   # ← uncomment once the file exists
importance: 2
category: engineering
related_publications: false
---

{% include todo.liquid label="image" text="<strong>Card thumbnail.</strong> Add <code>assets/img/projects/wireless-thumb.jpg</code> and uncomment the <code>img:</code> line in the front matter." %}

The second-generation platform, developed during my postdoc: a fully wireless
replacement for the tethered [behavioural rig system]({{ '/projects/01-behavioural-rig-platform/' | relative_url }}).
I designed the custom PCBs and wrote the MCU firmware (STM32, BLE), taking it
from concept to manufactured hardware in a matter of weeks.

{% include todo.liquid label="review" text="Written from your CV bullets — reword in your own voice." %}

{% include todo.liquid label="image" text="<strong>Hero shot</strong> — the board, or the rig in use. Save as <code>assets/img/projects/wireless-hero.jpg</code>." %}

<!-- UNCOMMENT WHEN THE IMAGE EXISTS:
<div class="grid grid-cols-1 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/projects/wireless-hero.jpg" title="The wireless rig hardware" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Caption.</div>
-->

## Why go wireless

{% include todo.liquid text="What did the tether actually cost you — cable drag affecting the behaviour itself, setup time per session, animals tangling, a hard limit on arena size? Be concrete; this is the justification for rebuilding a working system from scratch." %}

## Hardware

{% include todo.liquid text="The board: MCU configuration, what's on it, and the constraints you designed against (size, power budget, battery life, radio range). Also — why STM32 and BLE here, when the first generation used ESP32?" %}

{% include todo.liquid label="image" text="<strong>PCB layout render + assembled board</strong> side by side is the standard shot for this and always looks good. Save as <code>wireless-pcb-layout.jpg</code> and <code>wireless-pcb-built.jpg</code>." %}

<!-- UNCOMMENT WHEN THE IMAGES EXIST:
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {% include figure.liquid path="assets/img/projects/wireless-pcb-layout.jpg" title="PCB layout" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/wireless-pcb-built.jpg" title="Assembled board" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Left: layout. Right: as assembled.</div>
-->

## Firmware

{% include todo.liquid text="How the firmware is structured, and how you keep timing/synchronisation solid over a radio link — that's the genuinely hard part here and worth explaining properly. What happens when a packet drops?" %}

## Concept to hardware in weeks

{% include todo.liquid text="Your CV leads on the speed of this, so evidence it: what you reused, what you deliberately left unoptimised, how you de-risked board bring-up. Fast execution is very marketable but only if you show the method." %}

## Links

{% include todo.liquid label="check" text="I could not match a repo to this project. <code>trilab-floating-platform</code> was the only recent repo I couldn't place — is that this? If not, point me at the right one." %}

- **Firmware:** *(not yet linked)*
- **Hardware design files:** *(not yet linked)*
- **Predecessor:** [automated behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})
