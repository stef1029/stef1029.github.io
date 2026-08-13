---
layout: page
title: Spatial decision-making in the superior colliculus
description: A behavioural paradigm dissociating sensory input from motor output in freely moving mice, and the collicular circuitry that shapes where an animal chooses to go.
# img: assets/img/projects/sc-thumb.png   # ← uncomment once the file exists
importance: 1
category: research
related_publications: true # auto-lists linked papers from _bibliography/papers.bib
---

{% include todo.liquid label="image" text="<strong>Card thumbnail.</strong> A cropped panel of the task schematic works well. Add <code>assets/img/projects/sc-thumb.png</code> and uncomment the <code>img:</code> line." %}

The science the [rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})
was built to serve. I developed a behavioural paradigm that dissociates sensory
input from motor output in a naturalistic, freely moving setting, then used it
to ask how the superior colliculus contributes to deciding where to move next.

{% include todo.liquid label="image" text="<strong>Task schematic.</strong> For a research project this does more work than any photo — it lets a reader understand the paradigm in five seconds. Save as <code>assets/img/projects/sc-task.png</code>. You likely have one already from a talk or thesis figure." %}

<!-- UNCOMMENT WHEN THE IMAGE EXISTS:
<div class="img-grid">
  {% include figure.liquid loading="eager" path="assets/img/projects/sc-task.png" title="Task schematic" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">The behavioural task.</div>
-->

## The question

{% include todo.liquid text="<strong>Write this for a general reader first.</strong> In most tasks what an animal sees is bound to what it does, so you can't tell which a neuron is tracking. Explain what that confound costs you and why pulling them apart matters." %}

## The paradigm

{% include todo.liquid text="How the task works from the animal's point of view, and the specific design feature that dissociates sensory from motor. <strong>This paradigm is your distinctive contribution</strong> — give it the most room on the page." %}

## What we found

Three results from this work:

- **Chemogenetic manipulation (DREADDs) of superior colliculus Pitx2+ neurons** modulated baseline spatial priors across movements.
- **Chronic electrophysiology** in freely moving mice during behaviour (optetrodes, Cambridge NeuroTech, Neuropixels).
- **A subpopulation encoding spatial confidence**, selectively active during correct visual decisions but not during incorrect or non-visual trials.

{% include todo.liquid text="Each bullet needs a paragraph. Specifically — (1) what did the DREADD manipulation do behaviourally: which way did the bias shift and by how much? (2) what were you recording and where? (3) <strong>the confidence result is your headline</strong>: what makes 'confidence' the right interpretation, and which alternative explanations did you rule out?" %}

{% include todo.liquid label="image" text="<strong>Results figures</strong> — behaviour, DREADD effect, ephys. Save as <code>sc-behaviour.png</code>, <code>sc-dreadds.png</code>, <code>sc-ephys.png</code> and uncomment the grid below. Panels from the manuscript figures are fine." %}

<!-- UNCOMMENT WHEN THE IMAGES EXIST:
<div class="img-grid img-grid-3">
  {% include figure.liquid path="assets/img/projects/sc-behaviour.png" title="Behaviour" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/sc-dreadds.png" title="DREADDs" class="img-fluid rounded z-depth-1" %}
  {% include figure.liquid path="assets/img/projects/sc-ephys.png" title="Ephys" class="img-fluid rounded z-depth-1" %}
</div>
<div class="caption">Caption each panel.</div>
-->

## Methods

{% include todo.liquid text="Short and linkable: viral strategy, surgery, recording configuration, analysis approach. Keep it brief and point at the manuscript for detail." %}

{% include todo.liquid label="check" text="<strong>Check with Marco before publishing this page.</strong> The manuscript is unpublished — agree with your supervisor and co-authors how much detail and which figures are OK to put online ahead of the preprint." %}

## Links

- **Manuscript:** in preparation (Rogers-Coltman, Welch, Geyer, Tripodi)
- **Lab:** [Tripodi group](https://www.tripodilab.org/), MRC LMB
- **Analysis code:** `hex_behav`, `analysis_notebooks`, `DLC_model_training` — **private**
- **Instrumentation:** [behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})

{% include todo.liquid text="Add the preprint link here as soon as it's on bioRxiv, and put the real title into <code>_bibliography/papers.bib</code> (it currently reads 'TODO — working title')." %}
