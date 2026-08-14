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

{% include img_block.liquid eager=true
   paths="assets/img/projects/sc-task.png"
   titles="Task schematic"
   caption="The behavioural task."
   note="<strong>Task schematic.</strong> For a research project this does more work than any photo — it lets a reader grasp the paradigm in five seconds. You likely have one already from a talk or thesis figure." %}


## The question

{% include todo.liquid text="<strong>Write this for a general reader first.</strong> In most tasks what an animal sees is bound to what it does, so you can't tell which a neuron is tracking. Explain what that confound costs you and why pulling them apart matters." %}

## The paradigm

{% include todo.liquid text="How the task works from the animal's point of view, and the specific design feature that dissociates sensory from motor. <strong>This paradigm is your distinctive contribution</strong> — give it the most room on the page." %}

## Approach

To ask this question I combined the behavioural paradigm with targeted circuit
manipulation and chronic electrophysiology in freely moving mice — recording
with optetrodes, Cambridge NeuroTech probes and Neuropixels while animals
performed the task, and using chemogenetics to test the contribution of
specific collicular populations.

## Results

Results from this work are in preparation for publication. This section will be
filled in once the preprint is available.

{% include todo.liquid label="check" text="<strong>Findings deliberately withheld from the public page</strong> until the preprint is out — your decision, agreed as: publish the page, strip the findings. The specific results are preserved in the note below so you don't lose them; they render only in local preview, never on the live site." %}

{% include todo.liquid text="<strong>Restore after the preprint.</strong> The three results to write up were: (1) chemogenetic manipulation (DREADDs) of superior colliculus <em>Pitx2+</em> neurons modulated baseline spatial priors across movements — say which way the bias shifted and by how much; (2) chronic electrophysiology in freely moving mice during behaviour — say what you recorded and where; (3) <strong>the headline</strong> — a subpopulation encoding spatial confidence, selectively active during correct visual decisions but not during incorrect or non-visual trials; say what makes 'confidence' the right interpretation and which alternatives you ruled out." %}

{% include todo.liquid label="image" text="<strong>Do not add manuscript result figures yet</strong> (<code>sc-behaviour.png</code>, <code>sc-dreadds.png</code>, <code>sc-ephys.png</code>) — they would be public the moment the file lands, since image blocks self-activate. Add them when you restore the results section. A task schematic above is fine now; result panels are not." %}


## Methods

{% include todo.liquid text="Short and linkable: viral strategy, surgery, recording configuration, analysis approach. Keep it brief and point at the manuscript for detail." %}

{% include todo.liquid label="check" text="<strong>Check with Marco before publishing this page.</strong> The manuscript is unpublished — agree with your supervisor and co-authors how much detail and which figures are OK to put online ahead of the preprint." %}

## Links

- **Manuscript:** in preparation (Rogers-Coltman, Welch, Geyer, Tripodi)
- **Lab:** [Tripodi group](https://www.tripodilab.org/), MRC LMB
- **Analysis code:** `hex_behav`, `analysis_notebooks`, `DLC_model_training` — **private**
- **Instrumentation:** [behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})

{% include todo.liquid text="Add the preprint link here as soon as it's on bioRxiv, and put the real title into <code>_bibliography/papers.bib</code> (it currently reads 'TODO — working title')." %}
