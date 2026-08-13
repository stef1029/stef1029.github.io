---
layout: page
title: Fully wireless rig platform
description: A wireless successor to the behavioural rig system — custom PCBs and STM32/BLE firmware, taken from concept to manufactured hardware in weeks.
# img: assets/img/projects/wireless-thumb.jpg   # ← uncomment once the file exists
importance: 2
category: engineering
related_publications: false
---

{% include img_block.liquid eager=true
   paths="assets/img/projects/wireless-hero.jpg"
   titles="The wireless rig hardware"
   caption="Caption."
   note="<strong>Hero shot</strong> — the board, or the rig in use." %}


## Why go wireless

{% include todo.liquid text="What did the tether actually cost you — cable drag affecting the behaviour itself, setup time per session, animals tangling, a hard limit on arena size? Be concrete; this is the justification for rebuilding a working system from scratch." %}

## Hardware

{% include todo.liquid text="The board: MCU configuration, what's on it, and the constraints you designed against (size, power budget, battery life, radio range). Also — why STM32 and BLE here, when the first generation used ESP32?" %}

{% include img_block.liquid cols="2"
   paths="assets/img/projects/wireless-pcb-layout.jpg, assets/img/projects/wireless-pcb-built.jpg"
   titles="PCB layout | Assembled board"
   caption="Left: layout. Right: as assembled."
   note="<strong>PCB layout render + assembled board</strong> side by side — the standard shot for this, and it always looks good." %}


## Firmware

{% include todo.liquid text="How the firmware is structured, and how you keep timing/synchronisation solid over a radio link — that's the genuinely hard part here and worth explaining properly. What happens when a packet drops?" %}

## Concept to hardware in weeks

{% include todo.liquid text="Your CV leads on the speed of this, so evidence it: what you reused, what you deliberately left unoptimised, how you de-risked board bring-up. Fast execution is very marketable but only if you show the method." %}

## Links

{% include todo.liquid label="check" text="I could not match a repo to this project. <code>trilab-floating-platform</code> was the only recent repo I couldn't place — is that this? If not, point me at the right one." %}

- **Firmware:** *(not yet linked)*
- **Hardware design files:** *(not yet linked)*
- **Predecessor:** [automated behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})
