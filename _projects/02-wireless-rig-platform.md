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
| Timing bridge (*Galapagos*) | TTL markers for the external DAQ | nRF54L15 |

- Ports hang off the hub on a **half-duplex RS-485 trunk** — hub-master polled, CRC protected, sequence numbered
- The hub streams events to the host **directly over BLE**; the timing bridge is a clock reference, not a data relay
- Port count is a build-time constant (default six), so the same firmware serves a different arena
- Ports self-assign addresses over a discovery protocol, so they're physically interchangeable
- Outputs fail safe: the valve has a hard 250 ms ceiling, rejects overlap and enforces a minimum interval; RGB, IR, audio and valve all return to safe states on reset or session stop

{% include img_block.liquid cols="2"
   paths="assets/img/projects/rig2-hub-pcb.png, assets/img/projects/rig2-port-pcb.png"
   titles="Hub layout | Reward port layout"
   caption="KiCad layouts — hub on the left, reward port on the right."
   note="Board layouts." %}

## Timing

Nothing is slaved to a distributed clock. Every node free-runs on its own
oscillator, and each remote node keeps an **affine model** mapping its local
ticks onto the hub's — the hub is simply the reference domain.

| Setting | Value |
| --- | --- |
| Reference timestamp rate | 16 MHz — one tick is 62.5 ns |
| SYNC rate | 4 Hz |
| RS-485 | 460800 baud, 8N1 |

How each node gets its shared reference:

- **Reward ports (wired)** — the hub emits an active-low **4 Hz sync pulse** generated entirely in hardware: timer compare → PPI → GPIOTE out, captured on a TIM2 input at the far end. No interrupt anywhere in the path, so software latency never reaches the timestamp. Each port extends its 32-bit timer to 64 bits locally.
- **Timing bridge (wireless)** — there is no wire to pulse, so both ends instead report **Bluetooth connection-event anchors** from their radio controllers. The hub matches them on the BLE event counter and maps the anchor into its own domain. Its 1 MHz GRTC is scaled by 16 so everything lands in the same nominal 16 MHz domain.

**The model itself** is a rolling 16-point least-squares fit, held in
reference-point form so precision doesn't decay as timestamps grow. It sits in
`ACQUIRE` until enough points are accepted, then `TRACK` once it can convert.
New points are admitted only if their prediction error falls inside
`max(200 µs, 6 × RMS residual)`, and a reset starts a fresh segment so a fit
never spans a discontinuity.

**Scheduling works backwards through the same model.** To place a TTL for the
DAQ, the hub picks a time in its own domain, inverts it through the target's
model to get a local target, and sends that as an absolute time. The bridge then
generates both edges from hardware compare events — no software in the loop. A
four-node test harness measures the whole path end to end, logging the requested
target, the timestamp the bridge reports, and the edge the hub actually
captures.

{% include img_block.liquid width="100%"
   paths="assets/img/projects/rig2-pcb-closeup.png"
   titles="Reward port routing detail"
   caption="Routing detail from a reward port — the differential SYNC and RS-485 pairs, and the timer channels driving capture and compare."
   note="Decorative close-up." %}

## Firmware

{% include todo.liquid text="Timing is covered above now. What's left here: how the firmware is <strong>structured</strong> across the three board types and the shared library, and what happens on a <strong>dropped packet or a lost sync pulse</strong> — does the model coast, or reset?" %}

## Concept to hardware in weeks

{% include todo.liquid text="Your CV leads on the speed of this, so evidence it: what you reused, what you deliberately left unoptimised, how you de-risked board bring-up. Fast execution is very marketable but only if you show the method." %}

## Links

- **Firmware, electronics and host app:** [trilab-floating-platform](https://github.com/stef1029/trilab-floating-platform) — public. KiCad projects, BOMs and fabrication outputs under `electronics/`; firmware for all three board types under `firmware/`.
- **Predecessor:** [automated behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})

{% include todo.liquid label="check" text="<strong>I've had this repo wrong twice — please confirm.</strong> I first guessed <code>trilab-floating-platform</code> might be this project, then reassigned it to the Chapter 2 floating platform. Its firmware README (Korora / Fairy / Galapagos, STM32G071, BLE, six reward ports) clearly matches the <em>wireless successor</em> on your CV, so I've assigned it here and removed it from the superior colliculus page. If the Chapter 2 prototype is a different repo, say so and I'll split them." %}
