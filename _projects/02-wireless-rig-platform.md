---
layout: page
title: Fully wireless rig platform
description: A wireless successor to the behavioural rig system — custom PCBs and STM32/BLE firmware, taken from concept to manufactured hardware in weeks.
# img: assets/img/projects/wireless-thumb.jpg   # ← uncomment once the file exists
importance: 2
category: engineering
related_publications: false
---

{% include img_block.liquid eager=true width="60%"
   paths="assets/img/projects/rig2-hub-3d.png"
   titles="Floating platform hub"
   caption="The platform hub — nRF52840 module, USB-C, and the RS-485 trunk connector."
   note="A photo of the assembled hardware would beat this render — worth swapping in when you have one." %}


## Why go wireless

{% include todo.liquid text="What did the tether actually cost you — cable drag affecting the behaviour itself, setup time per session, animals tangling, a hard limit on arena size? Be concrete; this is the justification for rebuilding a working system from scratch." %}

## System architecture

A moving **hub** on the platform, up to six **reward ports** around it, and a
stationary **timing bridge** beside the DAQ:

| Board | Role | MCU |
| --- | --- | --- |
| Hub (*Korora*) | Time base, trial state machine, event buffering, BLE to host | nRF52840, Zephyr |
| Reward port (*Fairy*) | Beam-break capture, RGB, audio, valve — one per port | STM32G071 |
| Timing bridge (*Galapagos*) | TTL markers for the external DAQ | nRF52840 |

- Ports hang off the hub on a **half-duplex RS-485 trunk** — hub-master polled, CRC protected, sequence numbered
- The hub streams events to the host **directly over BLE**; the timing bridge is a clock reference, not a data relay
- Port count is a build-time constant (default six), so the same firmware serves a different arena
- Separate power domains for 3.3 V logic and the valve/audio rail

{% include img_block.liquid cols="2"
   paths="assets/img/projects/rig2-hub-pcb.png, assets/img/projects/rig2-port-pcb.png"
   titles="Hub layout | Reward port layout"
   caption="KiCad layouts — hub on the left, reward port on the right."
   note="Board layouts." %}

## Timing

The part I'd point at first. Time is distributed in hardware rather than
reconstructed from messages:

- A **1 MHz differential TIMEBASE** goes to every port, counted directly by a hardware timer — one tick per microsecond, no interrupt in the path
- A **separate differential SYNC** line aligns the counters, since a shared rate alone doesn't give a shared counter value
- Each port extends a 32-bit hardware counter to 64 bits in software
- Commands are **pre-armed, not live**: the hub sends *"cue on at tick N; on a valid beam break, open the valve after 500 µs"* ahead of time, and the port executes it from timer compare
- Both *requested* and *actual* timestamps are logged, with clock-health and sync-quality records alongside

The effect is that port-to-port drift disappears while the distributed clock is
healthy, and timestamps are directly comparable between modules without trusting
bus latency.

{% include img_block.liquid width="100%"
   paths="assets/img/projects/rig2-pcb-closeup.png"
   titles="Reward port routing detail"
   caption="Routing detail from a reward port — the differential SYNC and RS-485 pairs, and the timer channels driving capture and compare."
   note="Decorative close-up." %}

## Firmware

{% include todo.liquid text="How the firmware is structured, and how you keep timing/synchronisation solid over a radio link — that's the genuinely hard part here and worth explaining properly. What happens when a packet drops?" %}

## Concept to hardware in weeks

{% include todo.liquid text="Your CV leads on the speed of this, so evidence it: what you reused, what you deliberately left unoptimised, how you de-risked board bring-up. Fast execution is very marketable but only if you show the method." %}

## Links

- **Firmware, electronics and host app:** [trilab-floating-platform](https://github.com/stef1029/trilab-floating-platform) — public. KiCad projects, BOMs and fabrication outputs under `electronics/`; firmware for all three board types under `firmware/`.
- **Predecessor:** [automated behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})

{% include todo.liquid label="check" text="<strong>I've had this repo wrong twice — please confirm.</strong> I first guessed <code>trilab-floating-platform</code> might be this project, then reassigned it to the Chapter 2 floating platform. Its firmware README (Korora / Fairy / Galapagos, STM32G071, BLE, six reward ports) clearly matches the <em>wireless successor</em> on your CV, so I've assigned it here and removed it from the superior colliculus page. If the Chapter 2 prototype is a different repo, say so and I'll split them." %}
