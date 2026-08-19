---
layout: page
title: portfolio
permalink: /projects/
description: Selected projects — the instruments I've built and the questions they were built to answer.
nav: true
nav_order: 1
---

<!--
  SINGLE-PAGE PORTFOLIO.
  Short prose summaries with one or two images each — deliberately not a set of
  deep sub-pages. The long-form writeups that used to live in _projects/ are
  still in git history if you ever want them back:
      git log --diff-filter=D --name-only -- _projects
  Images go through img_block.liquid: drop the file into assets/img/projects/
  and it appears by itself. See README.md.
-->

<!-- A non-exhaustive selection of recent work. Some detail is held back pending
publication, but I'm always happy to talk through any of it in more depth. -->

---

## Spatial decision-making in the superior colliculus

{% include img_block.liquid eager=true width="45%"
   paths="assets/img/projects/sc-task.png"
   titles="The six-choice orienting task"
   caption="The six-choice arena: a brief cue marks one of six ports, and the mouse reports where it saw the cue by going there."
   note="Task schematic." %}

Orienting towards something looks effortless, but the nervous system has to
solve two hard problems to do it. Different senses encode space in incompatible
reference frames - vision relative to the retina, hearing relative to the head,
touch relative to the body - and when several stimuli compete only one can be
chosen, because the body cannot turn two ways at once. The superior colliculus
is the midbrain structure where that competition appears to be resolved, and it
has been doing the job for something like 500 million years.

Studying this in mice meant first solving a methodological problem. Head-fixed
paradigms give control and trial counts but rule out natural whole-body
orienting; freely-moving paradigms such as prey capture or escape give the
movement but bring low trial counts and difficult tracking. I developed a
**six-choice hexagonal localisation task for freely moving mice** that keeps the
trial structure and temporal precision circuit neuroscience needs, while letting
the animal make an unrestricted orienting movement.

Using it, I characterised the temporal and spatial limits of visually guided
orienting and added a mixed-modality variant interleaving spatially informative
visual trials with non-spatial auditory ones. I then probed the circuit directly,
with bidirectional chemogenetic modulation of a genetically defined collicular
output population and chronic electrophysiology in the lateral superior
colliculus during task performance. A manuscript is in preparation, and specific
findings are held back until it is public.

{% include img_block.liquid width="55%"
   paths="assets/img/tetrode_implant.jpg"
   titles="32-channel optetrode microdrive"
   caption="A 32-channel optetrode microdrive, hand-built, during surgery." %}

---

## Automated behavioural rig platform

The instrument the work above runs on, and the thing I spent most of my PhD
building: a set of automated rigs for freely moving mice, combining wireless
load-cell platforms for self-initiated trials, high-speed multi-camera video
capture written in C++ against the Spinnaker SDK, and a general-purpose
acquisition layer that puts behavioural events, video and electrophysiology on a
common clock.

The control software is a Python workspace split into an application and three
hardware libraries — one for the rig microcontroller, one for the acquisition
board, one for the scales. Rigs are described in configuration rather than code,
with a registry mapping device serial numbers to roles, so swapping a board does
not mean editing source. The interface runs several rigs side by side, each
carrying a full session from setup through to post-processing, and the package
ships autotraining and simulation modes so behaviour can be developed without an
animal on the rig.

It began as a means to an end for my own experiments and is now used across
several projects in the lab.

{% include img_block.liquid cols="2" square=true width="80%"
   paths="assets/img/rigs_hero_shot.png, assets/img/rigs_inside_view.png, assets/img/rigs_cross_section_inside_view.png, assets/img/rigs_scales_underside.png"
   titles="Complete rig | Inside the arena | Reward port detail | Load cell underside"
   caption="Clockwise from top left: a complete rig; inside the arena, with a reward port and the central platform; a port close up, showing the speaker and beam-break sensor; and the underside of the platform, where the load cell sits."
   note="Rig gallery." %}

{% include img_block.liquid width="100%"
   paths="assets/img/rigs_setup_photos/all_rigs_front_on_lids_on.jpg"
   titles="Four rigs running in the lab"
   caption="Four rigs in the behaviour room, each named and running independently."
   note="Rigs in situ." %}

---

## Fully wireless behaviour platform

{% include img_block.liquid eager=true width="100%"
   paths="assets/img/floating_platform_hardware_concept.png"
   titles="The floating platform assembly"
   caption="Concept render of the platform: five reward ports arranged around a central stage, each with its own driver board. The design is still in development, so the built system will differ."
   note="Whole-assembly render." %}

The second-generation platform, developed during my postdoc and **still in
active development**: a fully wireless replacement for the tethered system
above, taken from concept to manufactured hardware in a matter of weeks. I
designed the boards in KiCad and wrote the firmware. There are three — an
nRF52840 hub that owns the time base and trial state and talks to the host over
Bluetooth, STM32G071 reward ports on an RS-485 trunk handling beam-break capture
and local outputs, and an nRF54L15 bridge that generates TTL markers for an
external acquisition system. The current platform uses five ports; the firmware
takes the count as a build-time constant, so the same code serves a different
arena.

The interesting part is timing. Nothing is slaved to a distributed clock: every
node free-runs on its own oscillator, and each maintains a rolling **affine
model** mapping its local ticks onto the hub's 16 MHz reference. Wired nodes are
disciplined by a 4 Hz sync pulse generated entirely in hardware, with no
interrupt anywhere in the path. The wireless node has no wire to pulse, so both
ends instead report Bluetooth connection-event anchors and match them on the
event counter. Scheduling runs the same model backwards — to place a TTL, the
hub picks a time in its own domain and inverts it through the target's model to
get an absolute local target.

{% include img_block.liquid cols="3" square=true width="100%"
   paths="assets/img/floating_platform_close_up.png, assets/img/projects/rig2-hub-3d.png, assets/img/reward_port_3d_model.png"
   titles="Ports in place | Hub board | Reward port board"
   caption="Left to right: reward ports and their driver boards in position around the stage; the hub board, which owns the time base and the link to the host; and a single reward port board, five of which sit on the RS-485 trunk. All three are renders of a design still being iterated."
   note="Detail and boards." %}

{% include todo.liquid label="check" text="<strong>Check my wording for the platform itself.</strong> I've called the centre a &quot;central stage&quot; and avoided naming the mechanism, since the renders show an annular surface covered in a dense array of posts and I did not want to guess at how it floats. Correct the caption if there's a proper term for it." %}

---

## Mouse-wearable motion sensor

{% include img_block.liquid width="45%"
   paths="assets/img/projects/imu-board-3d.png"
   titles="Head sensor board"
   caption="The head sensor board: IMU, magnetometer and connector on a 0.6 mm PCB."
   note="Board render — a photo next to a coin would sell the size far better." %}

A head-mounted sensor small and light enough for a mouse to wear during natural
behaviour, giving nine degrees of freedom from a six-axis IMU and a three-axis
magnetometer. The design keeps animal-side mass down by moving the SPI bus off
the board over a differential pair rather than carrying a radio and a battery,
connecting through a nano-miniature connector on a 0.6 mm board.

An earlier generation, built around an off-the-shelf nine-axis sensor stick,
produced orientation at 50 Hz using a direction-cosine-matrix fusion algorithm.
It emitted a sync pulse on every sample so head movement lines up with video and
the rest of the acquisition chain, and displayed angles live during recording so
a bad mount is caught immediately rather than after the session.

---

## FPV drone builds

Before the research work I founded **UK Drone Builds**, a small venture building
custom FPV drones to order. It ran as a proper storefront: ready-to-fly complete
kits at a few price points, a questionnaire-driven service for customers who
wanted something designed around their own requirements, and everything from
component selection through assembly and tuning to delivery and after-sales
support.

It is where a lot of the hands-on electronics and systems-integration instinct
came from — soldering and wiring discipline, PID tuning, and debugging RF and
video links — along with the habit of working to someone else's requirements and
deadline that later let me take on my PhD work.

{% include img_block.liquid width="85%"
   paths="assets/img/UKdronebuilds_site.png"
   titles="UK Drone Builds"
   caption="UK Drone Builds — the storefront I ran, selling complete kits and bespoke builds."
   note="Site screenshot." %}

---

## Code

Public repositories for most of the above are on
[GitHub](https://github.com/stef1029); the highlights are listed on the
[repositories]({{ '/repositories/' | relative_url }}) page.
