---
layout: about
title: about
permalink: /
subtitle: Postdoctoral Researcher · <a href="https://www2.mrc-lmb.cam.ac.uk/">MRC Laboratory of Molecular Biology</a>, Cambridge

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>MRC Laboratory of Molecular Biology</p>
    <p>Francis Crick Avenue</p>
    <p>Cambridge CB2 0QH, UK</p>

selected_papers: false # lists papers marked selected={true} in _bibliography/papers.bib
social: true # social icons + CV PDF link, driven by _data/socials.yml

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<!--
  This page IS the CV. It reads top-to-bottom with no clicking required.
  Content mirrors cv_writing/cv_13aug26/. When you update the LaTeX CV,
  update here too (and copy the new main.pdf over assets/pdf/cv.pdf).

  Entry pattern: a .cv-entry row puts the role on the left and dates on the
  right, then a .cv-org line, then prose. Copy any block to add an entry.

  IMPORTANT: .cv-entry / .cv-dates / .cv-org / .cv-skill are OUR OWN classes,
  defined at the bottom of assets/css/main.scss. Do not use Tailwind utility
  classes (justify-between, gap-x-4, md:grid-cols-3 …) in page content: the
  theme ships a prebuilt, pruned tailwind.css and there is no Tailwind build
  step here, so those classes produce no CSS and silently do nothing.
-->

<!-- {% include todo.liquid label="check" text="<strong>These coloured boxes are notes to you and are invisible on the live site</strong> — they only render in local preview. <span style='color:#f59e0b'><strong>Amber = write something</strong></span>. <span style='color:#0ea5e9'><strong>Blue = add an image</strong></span>. <span style='color:#a855f7'><strong>Purple = confirm/decide something</strong></span>. <span style='color:#ec4899'><strong>Pink = I wrote this, make it yours</strong></span>. If a page has no boxes, nothing on it needs your attention." %} -->

<!-- {% include todo.liquid label="check" text="<strong>Status of this page:</strong> everything below the intro — Experience, Education, Skills, Additional experience, Awards — is <strong>real, taken verbatim from your 13 Aug 2026 CV</strong>. No filler. Only the two boxes below need you." %} -->

I'm a neuroscientist and engineer at the MRC Laboratory of Molecular Biology in
Cambridge, working in [Marco Tripodi's group](https://www.tripodilab.org/)
on how the brain orients the body towards objects in the world around us.

To address the questions I wanted to ask, I had to build the instruments first -- behavioural
rigs, lightweight sensors, custom PCBs and firmware, synchronised acquisition
systems for video and electrophysiology, and the data analysis pipelines to make sense of 
everything afterwards too. That platform started as a means to an
end and is now used across several projects in the lab.

I like working on unfamiliar technical problems, and I'm comfortable moving
between a soldering iron, a CAD window and a data pipeline in the same afternoon.
The [projects]({{ '/projects/' | relative_url }}) page has writeups of the main
systems I've built.

<!-- {% include todo.liquid label="review" text="<strong>I wrote those three paragraphs</strong>, loosely from your CV summary — they are the only invented prose on this page. It's your voice on your front page, so rewrite them. The last sentence in particular is my guess at how you'd describe yourself." %} -->

<p>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ site.data.socials.cv_pdf | relative_url }}">
    Download CV (PDF)
  </a>
</p>

<!-- {% include todo.liquid label="check" text="<strong>Your LaTeX CV has no LinkedIn on it</strong>, but the site now does. Worth adding the URL to <code>cv_writing/cv_13aug26/sections/header.tex</code> so the two agree — and while you're in there, fix the mailto/display email mismatch on line 8." %} -->

---

## Experience

<div class="cv-entry">
  <strong>Postdoctoral Researcher</strong>
  <span class="cv-dates">2025 &ndash; present</span>
</div>
<div class="cv-org">MRC Laboratory of Molecular Biology, Cambridge</div>

Extending the behavioural platform developed during my PhD, working across the
scientist–engineer interface and supervising a computing student.

- Led development of a fully wireless successor to the behavioural rig system, taking it from concept to manufactured hardware in weeks — custom PCBs and MCU firmware (STM32, BLE).
- Designed and built a mouse-wearable wireless motion sensor (9-DOF IMU with magnetometer).

<div class="cv-entry">
  <strong>Doctoral Researcher</strong>
  <span class="cv-dates">2021 &ndash; 2025</span>
</div>
<div class="cv-org">MRC Laboratory of Molecular Biology, Cambridge</div>

Initiated and led a cross-functional research programme, developing a scalable
experimental platform integrating hardware, software and neuroscience methods,
now adopted across multiple projects within the lab. Worked closely with
researchers and the mechanical and electrical workshops to design, build and
deploy robust experimental systems.

**Experimental systems and engineering**

- Designed and built automated behavioural rigs for studying spatial decision-making in freely moving mice.
- Developed wireless load-cell platforms (ESP32, Bluetooth) for automated trial initiation.
- Implemented high-speed video acquisition in C++ using the Spinnaker API, enabling synchronised multi-camera recording.
- Engineered a general-purpose data acquisition architecture for synchronising behavioural, video and electrophysiology signals, with end-to-end pipelines for storage and analysis.
- Built integrated optogenetics control systems combining IMU-based head tracking, automated laser stimulation and real-time data visualisation.

**Systems neuroscience and circuit mechanisms**

- Developed a novel behavioural paradigm dissociating sensory input from motor output in a naturalistic setting.
- Manipulated superior colliculus Pitx2+ neurons using chemogenetics (DREADDs), demonstrating modulation of baseline spatial priors across movements.
- Performed chronic electrophysiological recordings (optetrodes, Cambridge NeuroTech, Neuropixels) in freely moving mice during behaviour.
- Identified a subpopulation of neurons encoding spatial confidence, selectively active during correct visual decisions but not during incorrect or non-visual trials.
- Integrated neural and behavioural datasets to link circuit-level activity with decision-making processes.

---

## Education

<div class="cv-entry">
  <strong>PhD, Systems Neuroscience</strong>
  <span class="cv-dates">2021 &ndash; 2025</span>
</div>
<div class="cv-org">University of Cambridge</div>

Supervised by Dr Marco Tripodi, MRC Laboratory of Molecular Biology.

<div class="cv-entry">
  <strong>MSc, Translational Neuroscience</strong>
  <span class="cv-dates">2020 &ndash; 2021</span>
</div>
<div class="cv-org">Imperial College London</div>

<div class="cv-entry">
  <strong>BSc (Hons), Biomedical Sciences</strong>
  <span class="cv-dates">2017 &ndash; 2020</span>
</div>
<div class="cv-org">University College London</div>

First Class Honours, neuroscience specialisation.

---

## Skills

<div class="cv-skill">
  <strong class="cv-skill-name">Programming &amp; software</strong>
  <span class="cv-skill-body">Python (data analysis, automation) · C++ (high-performance imaging) · embedded firmware (STM32, BLE, Arduino)</span>
</div>
<div class="cv-skill">
  <strong class="cv-skill-name">Experimental systems &amp; engineering</strong>
  <span class="cv-skill-body">Behavioural rig design · PCB design · wireless sensor systems · real-time data acquisition · high-speed imaging (FLIR / Spinnaker) · hardware–software integration · multi-system synchronisation</span>
</div>
<div class="cv-skill">
  <strong class="cv-skill-name">Neuroscience &amp; <em>in vivo</em> methods</strong>
  <span class="cv-skill-body">UK Home Office Personal Licence (PIL) holder · behavioural task design and animal training · mouse neurosurgery (viral injections, implants) · chronic electrophysiology (optetrodes, Neuropixels)</span>
</div>
<div class="cv-skill">
  <strong class="cv-skill-name">Data analysis</strong>
  <span class="cv-skill-body">Statistical modelling · custom pipeline development · behavioural analysis · neural data integration</span>
</div>

---

## Selected additional experience

<div class="cv-entry">
  <span><strong>Teaching Assistant</strong> — Cambridge Open Lab: Open Science in Practice Summer School</span>
  <span class="cv-dates">2026</span>
</div>

Taught engineering techniques for neuroscience to PhD students, assisting
practical workshops in electronics design (Arduino) and CAD (FreeCAD).

<div class="cv-entry">
  <span><strong>Head of Maintenance (Bosun)</strong> — Cambridge University Yacht Club</span>
  <span class="cv-dates">2026</span>
</div>

Responsible for maintenance and operational readiness of the club yacht,
diagnosing and resolving mechanical and electrical issues.

<div class="cv-entry">
  <span><strong>Founder</strong> — FPV drone build venture</span>
  <span class="cv-dates">2020</span>
</div>

Designed and built custom FPV drones; managed end-to-end assembly and client delivery.

<div class="cv-entry">
  <span><strong>Research Assistant</strong> — MRC LMB / UCL</span>
  <span class="cv-dates">Summers 2018/19</span>
</div>

Developed organoid culture techniques (inner ear and choroid plexus models);
performed imaging and analysis, contributing to protocol optimisation and
automated sampling approaches.

---

## Awards

<div class="cv-entry">
  <span><strong>Laidlaw Undergraduate Research and Leadership Scholarship</strong> — Laidlaw Foundation</span>
</div>

Funded research placements and leadership training.
