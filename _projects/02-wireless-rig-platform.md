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

## System architecture

Three board types, named after penguins, plus a Python host application:

| Name | Role | MCU |
| --- | --- | --- |
| **Korora** | Floating platform hub | nRF52840 |
| **Fairy** | Reward port — up to six per system | STM32G071 |
| **Galapagos** | Static DAQ TTL sync | nRF54L15 |
| **Adelie** | Host application | Python |

How they talk to each other:

- **Adelie ⇄ Korora** over BLE — commands down, records up
- **Korora ⇄ Fairy boards** over RS485, with a **4 Hz sync** broadcast from the hub
- **Korora ⇄ Galapagos** over BLE, with a TTL loopback closing the timing path to the DAQ

Four protocol layers, kept deliberately separate:

- **Transport** — frame structure over whichever medium is carrying it (UART or BLE)
- **Magellan** — assigns logical addresses to Fairy boards, so ports are interchangeable
- **Adelie** — commands out to peripherals and TTL generation
- **Fairy** — the record format that ends up in analysis

Board count is a build-time constant (`FAIRY_MAX_BOARDS`, default six) rather
than hard-coded, so the same firmware serves a different port count.

{% include todo.liquid text="Two things the repo doesn't tell me, both worth a bullet each: the <strong>power/battery budget</strong> and runtime per session, and <strong>why RS485 for the hub↔port link</strong> rather than doing everything over BLE. The mixed transport is the most interesting design decision here." %}

{% include todo.liquid text="Also worth stating: why STM32G071 for the ports and nRF chips for the radio roles, when the first-generation rig used ESP32." %}

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

- **Firmware, electronics and host app:** [trilab-floating-platform](https://github.com/stef1029/trilab-floating-platform) — public. KiCad projects, BOMs and fabrication outputs under `electronics/`; firmware for all three board types under `firmware/`.
- **Predecessor:** [automated behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})

{% include todo.liquid label="check" text="<strong>I've had this repo wrong twice — please confirm.</strong> I first guessed <code>trilab-floating-platform</code> might be this project, then reassigned it to the Chapter 2 floating platform. Its firmware README (Korora / Fairy / Galapagos, STM32G071, BLE, six reward ports) clearly matches the <em>wireless successor</em> on your CV, so I've assigned it here and removed it from the superior colliculus page. If the Chapter 2 prototype is a different repo, say so and I'll split them." %}
