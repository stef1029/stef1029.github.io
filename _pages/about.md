---
layout: about
title: about
permalink: /
subtitle: PhD Candidate, YOUR_DEPARTMENT · <a href="YOUR_UNIVERSITY_URL">YOUR_UNIVERSITY</a>

profile:
  align: right
  image: prof_pic.jpg # replace this file in assets/img/ with your own photo
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>YOUR_DEPARTMENT</p>
    <p>YOUR_UNIVERSITY</p>
    <p>YOUR_CITY, YOUR_COUNTRY</p>

selected_papers: true # lists papers marked selected={true} in _bibliography/papers.bib
social: true # social icons + CV PDF link, driven by _data/socials.yml

# News feed removed site-wide.
announcements:
  enabled: false

# Blog kept, but off the CV landing page to keep it a clean single read.
# Flip to true if you'd rather surface recent posts here.
latest_posts:
  enabled: false
---

<!--
  This page IS the CV. It is meant to be read top-to-bottom with no clicking.
  Everything else on the site hangs off the links in the sections below.

  Structure of an entry: a flex row that puts the role/qualification on the
  left and the dates on the right, then an institution line, then prose.
  Copy any block below to add a new entry.

  Note: al-folio v1.x is Tailwind-first, so these are Tailwind utility classes.
  Do NOT use Bootstrap `row` / `col-sm-*` here — Bootstrap compatibility is
  switched off in _config.yml (al_folio.compat.bootstrap.enabled: false).
-->

I'm an engineer finishing a PhD in YOUR_FIELD at YOUR_UNIVERSITY, where I work on
YOUR_RESEARCH_TOPIC_IN_ONE_LINE. My research sits at the intersection of
YOUR_AREA_A and YOUR_AREA_B, and combines YOUR_METHOD_A with YOUR_METHOD_B.

Alongside the PhD I build things — instrumentation, simulation tools and the
occasional over-engineered side project. A selection is on the
[projects]({{ '/projects/' | relative_url }}) page, and my papers are listed under
[publications]({{ '/publications/' | relative_url }}).

<p>
  <a class="btn btn-sm z-depth-0" role="button" href="{{ site.data.socials.cv_pdf | relative_url }}">
    Download CV (PDF)
  </a>
</p>

---

## Education

<div class="flex flex-wrap items-baseline justify-between gap-x-4 mt-4">
  <strong>PhD, YOUR_FIELD</strong>
  <span class="text-sm opacity-60 whitespace-nowrap">YYYY &ndash; YYYY (expected)</span>
</div>
<div class="text-sm opacity-75">YOUR_UNIVERSITY</div>

Thesis: *"YOUR_THESIS_TITLE"*. Supervised by YOUR_SUPERVISOR. One or two sentences
on what the thesis actually establishes and why it matters.

<div class="flex flex-wrap items-baseline justify-between gap-x-4 mt-4">
  <strong>MEng / MSc, YOUR_FIELD</strong>
  <span class="text-sm opacity-60 whitespace-nowrap">YYYY &ndash; YYYY</span>
</div>
<div class="text-sm opacity-75">YOUR_UNIVERSITY</div>

Grade / classification. Dissertation on YOUR_TOPIC. Any prizes worth naming.

<div class="flex flex-wrap items-baseline justify-between gap-x-4 mt-4">
  <strong>BEng / BSc, YOUR_FIELD</strong>
  <span class="text-sm opacity-60 whitespace-nowrap">YYYY &ndash; YYYY</span>
</div>
<div class="text-sm opacity-75">YOUR_UNIVERSITY</div>

Grade / classification. Relevant coursework or final-year project.

---

## Experience

<div class="flex flex-wrap items-baseline justify-between gap-x-4 mt-4">
  <strong>YOUR_JOB_TITLE</strong>
  <span class="text-sm opacity-60 whitespace-nowrap">YYYY &ndash; present</span>
</div>
<div class="text-sm opacity-75">YOUR_EMPLOYER</div>

- What you were responsible for, stated as an outcome rather than a duty.
- A result with a number attached to it wherever you can manage one.
- Tools or methods you'd want a reader to associate with you.

<div class="flex flex-wrap items-baseline justify-between gap-x-4 mt-4">
  <strong>YOUR_PREVIOUS_JOB_TITLE</strong>
  <span class="text-sm opacity-60 whitespace-nowrap">YYYY &ndash; YYYY</span>
</div>
<div class="text-sm opacity-75">YOUR_PREVIOUS_EMPLOYER</div>

- Same shape as above. Two or three bullets per role is usually plenty.

---

## Skills

<div class="flex flex-wrap items-baseline gap-x-4 mt-4">
  <strong class="basis-40">Engineering</strong>
  <span class="flex-1">FEA (Abaqus, Ansys) · CFD (OpenFOAM) · CAD (SolidWorks, Fusion 360) · GD&amp;T · design for manufacture</span>
</div>
<div class="flex flex-wrap items-baseline gap-x-4 mt-2">
  <strong class="basis-40">Programming</strong>
  <span class="flex-1">Python (NumPy, SciPy, pandas) · MATLAB · C++ · Git · Linux · Docker</span>
</div>
<div class="flex flex-wrap items-baseline gap-x-4 mt-2">
  <strong class="basis-40">Experimental</strong>
  <span class="flex-1">Design of experiments · LabVIEW · data acquisition · strain gauging · DIC · uncertainty analysis</span>
</div>
<div class="flex flex-wrap items-baseline gap-x-4 mt-2">
  <strong class="basis-40">Other</strong>
  <span class="flex-1">Technical writing · peer review · conference presentation · supervising MSc projects</span>
</div>

---

## Awards and funding

<div class="flex flex-wrap items-baseline justify-between gap-x-4 mt-4">
  <span><strong>YOUR_AWARD_OR_SCHOLARSHIP</strong> — YOUR_AWARDING_BODY</span>
  <span class="text-sm opacity-60 whitespace-nowrap">YYYY</span>
</div>
<div class="flex flex-wrap items-baseline justify-between gap-x-4 mt-2">
  <span><strong>YOUR_SECOND_AWARD</strong> — YOUR_AWARDING_BODY</span>
  <span class="text-sm opacity-60 whitespace-nowrap">YYYY</span>
</div>
