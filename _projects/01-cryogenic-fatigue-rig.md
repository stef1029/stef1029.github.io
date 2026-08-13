---
layout: page
title: Cryogenic fatigue rig for AM Ti-6Al-4V
description: A bench-top rig for fatigue testing additively manufactured titanium down to 77 K, plus the failure dataset it produced.
img: assets/img/3.jpg # thumbnail shown on the /projects/ grid
importance: 1 # lower number = earlier in the grid
category: research # must match a value in display_categories in _pages/projects.md
related_publications: false # set true to auto-list linked papers from papers.bib
---

<!--
  ============================================================================
  TEMPLATE PROJECT PAGE — copy this file to add a new project.
  ============================================================================
  Front matter above controls the card on /projects/; the body below is the
  detail page. Filenames must NOT match `?_project.md` (a single character
  followed by `_project.md`) because _config.yml excludes the theme's demos
  with that pattern. `01-my-thing.md` is fine.

  IMAGES: use the gem-owned `figure.liquid` include rather than a raw <img>.
  It generates responsive/WebP variants (via the imagemagick config) and
  handles lazy loading. Paths are relative to the repo root.

  LAYOUT: these are Tailwind utility classes. al-folio v1.x is Tailwind-first
  and _config.yml has al_folio.compat.bootstrap.enabled: false, so do NOT use
  Bootstrap `row` / `col-sm-*` here. Change column counts with the
  `md:grid-cols-N` class.
-->

<div class="grid grid-cols-1 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="The assembled rig in the cryostat bay" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
  The completed rig mounted in the cryostat bay, with the LN<sub>2</sub> feed line and load cell visible at top right.
</div>

## The problem

Additively manufactured Ti-6Al-4V is increasingly specified for cryogenic
propellant handling, but published fatigue data is overwhelmingly room
temperature. Existing cryogenic fatigue machines are servo-hydraulic, cost
upwards of £250k, and are booked months in advance — which makes the wide
parameter sweeps you actually need for a process-structure-property study
impractical.

The goal here was a rig that trades peak load capacity for throughput: enough
to test coupon-scale specimens to 10<sup>7</sup> cycles at 77 K, cheap enough
to build three of them, and instrumented well enough to trust the numbers.

## Design

The load train is a voice-coil actuator driving a compliant flexure stage,
which removes the sliding seals that normally cause trouble at cryogenic
temperature. Specimens sit inside a foam-insulated bath fed from a
pressurised LN<sub>2</sub> dewar; temperature is held to ±1.5 K by throttling
the feed against a resistive trim heater.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {% include figure.liquid path="assets/img/6.jpg" title="CAD section view of the flexure stage" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/11.jpg" title="Detail of the specimen grips" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
  Left: section through the flexure stage, showing the voice coil and the two
  parallel leaf springs that constrain off-axis motion. Right: the collet grips,
  redesigned after the first generation slipped at high load.
</div>

The flexure geometry was chosen by parametric FEA — a sweep over leaf
thickness and length, minimising off-axis compliance subject to a fatigue
limit on the flexure itself, since the rig has to outlive the specimens by a
comfortable margin.

## Results

Across 43 specimens spanning three build orientations and two post-processing
routes, the rig reproduced the room-temperature literature S-N curve to within
7%, then extended it to 77 K. The headline finding: the fatigue knockdown from
build orientation roughly doubles at cryogenic temperature relative to ambient,
which is not something you would predict from the ambient data alone.

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {% include figure.liquid path="assets/img/1.jpg" title="S-N curves" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/5.jpg" title="Fractography" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/12.jpg" title="Temperature stability trace" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
  Left: S-N curves at 293 K and 77 K by build orientation. Middle: SEM
  fractography showing the shift to a flatter, more brittle fracture surface.
  Right: bath temperature over a representative 60-hour run.
</div>

Three-column grids like the one above are the workhorse for a project page.
The markup is just a Tailwind grid wrapping `figure.liquid` includes:

{% raw %}

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {% include figure.liquid path="assets/img/1.jpg" title="caption" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/5.jpg" title="caption" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Your caption text.</div>
```

{% endraw %}

For an asymmetric layout, give the grid 3 columns and let one child span two
of them with `md:col-span-2`.

## Links

- [Source code and analysis notebooks](https://github.com/YOURUSERNAME/REPO) — rig control firmware, DAQ pipeline, and the plotting scripts behind the figures above
- [Paper: *Cryogenic fatigue of laser powder bed fusion Ti-6Al-4V*](https://doi.org/YOUR_DOI) — the full study
- [Dataset on Zenodo](https://zenodo.org/YOUR_RECORD) — raw cycle counts and fractography images
