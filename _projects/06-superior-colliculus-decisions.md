---
layout: page
title: Spatial decision-making in the superior colliculus
description: A behavioural paradigm dissociating sensory input from motor output in freely moving mice, and the collicular circuitry that shapes where an animal chooses to go.
# img: assets/img/projects/sc-thumb.jpg   # TODO: add a figure and uncomment
importance: 1
category: research
related_publications: true # auto-lists linked papers from _bibliography/papers.bib
---

The science the [rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})
was built to serve. I developed a behavioural paradigm that dissociates sensory
input from motor output in a naturalistic, freely moving setting, then used it
to ask how the superior colliculus contributes to deciding where to move next.

<!-- TODO: a figure — task schematic, or a summary result panel. For a research
     project the task schematic usually does the most work:
<div class="grid grid-cols-1 gap-4">
  {% include figure.liquid loading="eager" path="assets/img/projects/sc-task.png" title="Task schematic" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">The behavioural task.</div>
-->

## The question

**TODO — write for a general reader first.** In most tasks, what an animal sees
is bound to what it does, so you can't tell which one a neuron is tracking.
Explain what that confound costs you and why dissociating them matters.

## The paradigm

**TODO.** How the task works from the animal's point of view, and the specific
design feature that pulls sensory and motor apart. This paradigm is your
distinctive contribution — give it room.

## What we found

Three results, from the CV — each needs a paragraph and, ideally, a figure:

- **Chemogenetic manipulation (DREADDs) of superior colliculus Pitx2+ neurons** modulated baseline spatial priors across movements. **TODO:** what does that mean behaviourally — which way did the bias shift, and by how much?
- **Chronic electrophysiology** in freely moving mice during behaviour (optetrodes, Cambridge NeuroTech, Neuropixels). **TODO:** what were you recording and where?
- **A subpopulation encoding spatial confidence**, selectively active during correct visual decisions but not during incorrect or non-visual trials. **TODO:** this is the headline — what makes "confidence" the right interpretation, and what alternatives did you rule out?

<!-- TODO: results figures. A 2- or 3-up grid of panels works well:
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  {% include figure.liquid path="assets/img/projects/sc-behaviour.png" title="Behaviour" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/sc-dreadds.png" title="DREADDs" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/sc-ephys.png" title="Ephys" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Caption each panel.</div>
-->

## Methods

**TODO.** Brief, linkable summary — viral strategy, surgery, recording
configuration, analysis approach. Keep it short and point at the manuscript for
detail.

## Links

- **Manuscript:** in preparation (Rogers-Coltman, Welch, Geyer, Tripodi). **TODO:** link the preprint once it's up.
- **Lab:** [Tripodi group, MRC LMB](https://www2.mrc-lmb.cam.ac.uk/group-leaders/s-to-z/marco-tripodi/)
- **Analysis code:** `hex_behav`, `analysis_notebooks`, `DLC_model_training` — **currently private**
- **Instrumentation:** [behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})
