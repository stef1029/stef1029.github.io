---
layout: page
title: Graded lattice topology optimisation
description: A gradient-based optimiser that grades lattice density through a part, cutting bracket mass by 38% at equal stiffness.
img: assets/img/6.jpg
importance: 2
category: research
related_publications: false
---

Conventional topology optimisation gives you a solid-or-void answer. That is
the right answer for milling, but it throws away what additive manufacturing is
actually good at: filling a volume with a lattice whose density varies
continuously from point to point.

This project implemented a density-graded lattice optimiser — the design
variable at each element is the local lattice relative density rather than a
binary solid/void flag — and validated it against printed and tested parts.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/6.jpg" title="Optimised bracket render" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid loading="eager" path="assets/img/11.jpg" title="Printed part" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
  Left: CAD render of the optimised bracket, coloured by local lattice relative
  density. Right: the as-printed part in AlSi10Mg before support removal.
</div>

## Method

Each element's effective stiffness comes from a homogenised surrogate — a
gyroid unit cell simulated across relative densities from 0.1 to 0.9, then fitted
with a polynomial so the optimiser gets analytic derivatives. That surrogate
step is what makes the whole thing tractable; solving the unit cell inside the
optimisation loop would have been hopeless.

Sensitivities come out analytically, so the problem drops straight into a
standard MMA optimiser. A filter on the density field keeps the gradient
manufacturable — you cannot jump from 0.2 to 0.8 relative density between
adjacent cells and expect the printer to cope.

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {% include figure.liquid path="assets/img/1.jpg" title="Convergence history" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/5.jpg" title="Unit cell surrogate fit" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/12.jpg" title="Experimental validation" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">
  Left: compliance convergence over 120 iterations. Middle: homogenised
  stiffness against relative density, simulation points versus fitted surrogate.
  Right: measured load-deflection for three printed brackets against prediction.
</div>

## Outcome

The optimised bracket came in 38% lighter than the solid-material topology
optimised baseline at matched stiffness, and measured load-deflection tracked
the prediction to within 6% up to yield. The remaining discrepancy is mostly
unmelted-powder mass in the finest lattice regions, which the surrogate does
not model.

The code is a set of Python modules sitting on top of FEniCS, and is
structured so the unit cell library is swappable — gyroid, octet and BCC cells
are included.

## Links

- [Source code](https://github.com/stef1029/REPO) — optimiser, unit cell library and the homogenisation scripts
- [Paper: *Density-graded lattice optimisation for additive manufacture*](https://doi.org/YOUR_DOI)
