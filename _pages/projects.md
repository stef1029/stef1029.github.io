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

{% include img_block.liquid eager=true width="50%"
   paths="assets/img/cue_presentation_angle.png"
   titles="Cue presentation angle"
   caption="The task, and the variable that matters: a brief cue appears at one of six ports, and what determines difficulty is the angle between where the mouse is already facing and where the cue appears."
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

The instrument most of my PhD went into, and the product of several years of
iteration. The guiding constraint was cost: a commercial behavioural system is
expensive enough that a lab buys one and then queues for it, which quietly caps
how much science you can do. These are built from off-the-shelf parts and
in-house PCBs for a small fraction of that, so a lab can own several and run the
same experiment across four animals at once rather than four times over. The
current generation has run hundreds of thousands of trials without failing.

Each rig combines a wireless load-cell platform for self-initiated trials,
high-speed multi-camera capture written in C++ against the Spinnaker SDK, and an
acquisition layer that puts behavioural events, video and electrophysiology on a
common clock.

{% include img_block.liquid cols="2" square=true width="80%"
   paths="assets/img/rigs_hero_shot.png, assets/img/rigs_inside_view.png, assets/img/rigs_cross_section_inside_view.png, assets/img/rigs_scales_underside.png"
   titles="Complete rig | Inside the arena | Reward port detail | Load cell underside"
   caption="Clockwise from top left: a complete rig; inside the arena, with a reward port and the central platform; a port close up, showing the speaker and beam-break sensor; and the underside of the platform, where the load cell sits."
   note="Rig gallery." %}

The software was written for the people using it rather than for me. A new
behaviour is *configured*, not coded, so someone with no programming background
can define a protocol, and rigs themselves are described in configuration files
with a registry mapping device serial numbers to roles — swapping a board does
not mean editing source. Peripherals attach the same way, so adding optogenetic
stimulation or an electrophysiology recording to an existing task is a
configuration change rather than a rewrite.

Two features do most of the work in practice. **Autotraining** walks animals
through a training schedule unsupervised, and a **simulation mode** lets a new
protocol be built and debugged with no animal on the rig at all. When a session
ends the data is packaged, uploaded to the institute servers and pushed through
standard analysis automatically, so the experiment finishes when the mouse does.

{% include img_block.liquid width="100%"
   paths="assets/img/behaviour_rigs_gui_screenshot.png"
   titles="The control interface, three rigs mid-session"
   caption="Three rigs running at once: live overhead video, load-cell traces with the trial-initiation threshold, running accuracy, and a timestamped session log for each."
   note="GUI screenshot." %}

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
   caption="Concept render: a platform floating on a cushion of air, with five reward ports arranged around the mouse. The design is still being iterated, so the built system will differ."
   note="Whole-assembly render." %}

Mouse orienting research forces an awkward choice. Head-fixing an animal buys
you everything the modern toolkit needs — two-photon imaging of individual
cells, acute multi-probe Neuropixels recordings, precise stimulus control — but
the animal can then only report its decision with something abstract like a lick,
and the whole-body movement you actually care about is gone. Let it move freely
and you get the behaviour back but lose most of the access.

This platform is an attempt to have both. The mouse is head-fixed, but the stage
beneath it floats on a cushion of air and is free to rotate, so it can still
make a real orienting movement towards a reward port while sitting under a
microscope. It is the second-generation system, developed during my postdoc,
currently in production and still being iterated.

Free rotation is what forces everything else. Since the platform must both spin and translate, 
the moving side has to be self-contained: an nRF52840 hub carrying
the time base and the Bluetooth link to the host, and five STM32G071 reward
ports on a local RS-485 trunk. It runs from LiPo cells, with a hole through the
centre of the table for wired power if a session needs it. The firmware
discovers how many ports are attached at startup, so peripherals are effectively
plug-and-play. I designed the boards in KiCad and wrote the firmware with my 
summer student Goran Ivancic.

Each port is a small instrument in its own right: an RGB LED for visual cues,
an amplifier good enough for real sound-localisation work, a beam-break sensor
that detects the mouse arriving, and a solenoid metering liquid reward from a
local reservoir. The walls that stop the animal leaving are mounted on the fixed
table rather than the platform, which keeps mass off the moving part.

Position is tracked two ways at once. A camera underneath the air table watches
a fixed marker on the underside of the platform, which gives absolute position
and orientation; a 9-DOF IMU and magnetometer on the hub board fill in fast
movement on timescales the camera cannot resolve.

{% include img_block.liquid cols="3" square=true width="100%"
   paths="assets/img/floating_platform_close_up.png, assets/img/projects/rig2-hub-3d.png, assets/img/reward_port_3d_model.png"
   titles="Ports in place | Hub board | Reward port board"
   caption="Left to right: reward ports in position around the platform; the hub board, which owns the time base and the link to the host; and a single reward port board, five of which sit on the RS-485 trunk. All renders of a design still in progress."
   note="Detail and boards." %}

Which leaves timing as the hard problem, since the moving and stationary halves
of the system share no wire. Every node free-runs on its own oscillator and 
the hub maintains a rolling affine model
mapping each reward ports local ticks onto the hub's 16 MHz reference. The wired ports are
disciplined by a 4 Hz sync pulse generated entirely in hardware, with no
interrupt in the path. The stationary bridge beside the recording rig has no
wire to pulse, so it instead timestamps the connection-event anchors the radio
hardware already hands both ends and reports them to the hub, which pairs them
by event counter. 

---

## Mouse-wearable motion sensor

{% include img_block.liquid width="45%"
   paths="assets/img/projects/imu-board-3d.png"
   titles="Head sensor board"
   caption="The head sensor board — 10 x 7.5 mm on a 0.6 mm substrate, carrying a six-axis IMU, a magnetometer and the connector for its tether."
   note="Board render — a photo next to a coin would sell the size far better." %}

A head-mounted sensor small and light enough for a mouse to wear during natural
behaviour: **10 × 7.5 mm on a 0.6 mm board**, reaching the animal through a
six-wire cable. Mass is the whole design problem, so rather than carrying a radio and a
battery the board keeps only the sensors and sends its SPI bus off-device.
That tether then has to run **two metres** for the animal to range freely,
which is far past what plain SPI tolerates — hence a differential extender
driving the bus down the cable.

What that buys is bandwidth. The system it replaces, built around an
off-the-shelf nine-axis stick, produced orientation at **50 Hz**; this one
samples the IMU at up to **7 kHz** and the magnetometer at **1 kHz**. That is
the difference between knowing roughly where a head ended up and being able to
time the *onset* of a movement to the millisecond — which is precisely what you
need to ask what activating the superior colliculus does to an orienting
movement, rather than merely whether it did anything.

It is also ours to build. Each board costs around **£100** even at the small
quantities a lab orders, well under what the commercial units it replaces cost,
and the design means we can now fabricate our own rather than waiting on a
supplier.

| Part | Role |
| --- | --- |
| **LSM6DSV32X** | Six-axis IMU — accelerometer and gyroscope |
| **MMC5983MA** | Three-axis magnetometer, giving the ninth degree of freedom |
| **LTC4332** | SPI extender, carrying the bus differentially over the 2 m tether |
| **Omnetics A79608** | Nano-miniature connector, the standard for head-mounted rodent hardware |

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


