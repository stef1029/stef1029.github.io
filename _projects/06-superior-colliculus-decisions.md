---
layout: page
title: Spatial decision-making in the superior colliculus
description: A six-choice orienting task for freely moving mice, built to ask how the midbrain decides which of several competing locations is worth moving towards.
# img: assets/img/projects/sc-thumb.png   # ← uncomment once the file exists
importance: 1
category: research
related_publications: true # auto-lists linked papers from _bibliography/papers.bib
---

{% include todo.liquid label="image" text="<strong>Card thumbnail.</strong> A cropped panel of the task schematic works well. Add <code>assets/img/projects/sc-thumb.png</code> and uncomment the <code>img:</code> line." %}

My PhD work, in [Marco Tripodi's group](https://www.tripodilab.org/) at the MRC
LMB: how does the brain decide *where* to move next, and what does the superior
colliculus contribute to that decision?

{% include img_block.liquid eager=true
   paths="assets/img/projects/sc-task.png"
   titles="Task schematic"
   caption="The six-choice orienting task."
   note="<strong>Task schematic.</strong> For a research project this does more work than any photo — it lets a reader grasp the paradigm in five seconds. You almost certainly have one already in the thesis or a talk." %}

## The problem

If a sound comes from your left as something moves on your right, you cannot
turn both ways. The nervous system has to pick one, weighing how relevant and
how urgent each option is. This is harder than it sounds, because the senses
don't share a coordinate system: vision encodes space relative to the retina,
hearing relative to the head, touch relative to the body. All of it has to be
converted into a common frame before it can become a movement.

## Why the superior colliculus

The superior colliculus is a midbrain structure that has been solving this
problem for around 500 million years, conserved from fish to mammals. Escaping a
threat can be done by averaging away from danger; approaching a target requires
picking one, and the SC appears to be where that competition is resolved.

It receives convergent input from essentially every sensory modality, arranged
as topographically aligned maps: superficial layers carry retinotopic visual
responses, while intermediate and deep layers integrate multiple senses and
issue motor commands. Each column plausibly represents both a location and the
movement needed to reach it — stimulating a site evokes orienting towards the
corresponding location, and inactivating it impairs orienting there.

But the SC isn't only motor. Alongside descending projections to brainstem
premotor circuits, it projects extensively to thalamus; its neurons stay active
in the gap between a target appearing and a movement being made; and
inactivating it disrupts spatial attention even when eye movements are
dissociated from the attended location. Hence the idea of a **priority map** — a
continuously updated representation of how behaviourally relevant each location
is, combining bottom-up salience with top-down task demands.

## The hypothesis

If guiding movement and guiding attention are the same computation, the SC
should maintain a representation of spatial priority that *persists after the
sensory evidence has gone*, bridging a fleeting cue and the action it justifies.

That makes two concrete predictions. Modulating SC output should bias choices
towards spatially cued targets while leaving uncued movements alone. And neural
activity should distinguish an identical movement made *because of* a spatial
cue from one made for another reason.

## The task

Testing this in mice meant first solving a behavioural problem. Most mouse SC
work is head-fixed, which buys control and trial counts but rules out the
whole-body orienting mice actually do. Naturalistic alternatives — escape, prey
capture, social orienting — capture the movement but bring low trial counts,
behavioural adaptation and difficult tracking.

So I built a **six-choice hexagonal task for freely moving mice**. A brief cue
indicates one of six locations, and the mouse reports where it perceived the cue
by approaching the corresponding port. It keeps the trial structure and temporal
precision circuit neuroscience needs, while letting the animal make a natural
whole-body movement. (Strictly this is a *localisation* task rather than an
orienting one — the measure is which port was chosen, not the kinematics of the
turn, though those remain available for later analysis.)

Getting there took a detour through a head-fixed floating platform, intended to
preserve rotational freedom while keeping the animal fixed, before pivoting to
the freely moving arena. The engineering behind the final system is written up
separately as the
[behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }}).

## How far it got

1. **Built the paradigm** — floating platform through to hexagonal arena, with the reasoning behind each design decision.
2. **Characterised the behaviour** — varying cue duration to find where visually guided orienting gives way to memory-based navigation, and mapping the functional visual field. Added a mixed-modality variant interleaving spatial visual trials with non-spatial auditory ones: the control that makes the central comparison possible.
3. **Tested causality** — bidirectional chemogenetic modulation of a genetically defined SC output population in the intermediate grey layer, previously characterised in the lab.
4. **Recorded during behaviour** — chronic electrophysiology in lateral SC during the mixed task, comparing trial types that produce similar movements from different underlying computations.

## Results

Findings from this work are in preparation for publication. This section will be
filled in once the preprint is available.

{% include todo.liquid label="check" text="<strong>Findings deliberately withheld</strong> until the preprint is out — your call, agreed as: publish the page, strip the results. They're preserved in the note below; these render only in local preview, never on the live site." %}

{% include todo.liquid text="<strong>Restore after the preprint.</strong> (1) Chemogenetic excitation of <em>Pitx2+</em> neurons produced contralateral biases affecting both spatially-certain and spatially-uncertain movements — consistent with modulation of baseline spatial priors rather than sensory or motor processing. The inhibitory experiments had technical limitations worth being upfront about. (2) A subpopulation selectively encoding movements with spatial justification, holding activity from shortly after the cue until movement completion. Also from Chapter 3: the cue-duration threshold, and the functionally restricted visual field — narrower than anatomy predicts." %}

{% include todo.liquid label="image" text="<strong>Do not add result figures yet</strong> (<code>sc-behaviour.png</code>, <code>sc-dreadds.png</code>, <code>sc-ephys.png</code>) — image blocks self-activate, so they'd go public the moment the file lands. The task schematic above is fine; result panels are not." %}

{% include todo.liquid label="review" text="<strong>Condensed from your thesis introduction</strong> — citations stripped, no results stated, and <em>Pitx2</em> removed from the public text (it now reads &quot;a genetically defined SC output population&quot;). Read it through and make the voice yours, especially the opening and the hypothesis. One claim to check: I describe that population as &quot;previously characterised in the lab&quot;." %}

## Links

- **Manuscript:** in preparation (Rogers-Coltman, Welch, Geyer, Tripodi)
- **Lab:** [Tripodi group](https://www.tripodilab.org/), MRC LMB
- **Instrumentation:** [behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})
- **Analysis code:** `hex_behav`, `analysis_notebooks`, `DLC_model_training` — **private**
- **Earlier floating-platform approach:** `trilab-floating-platform` — **private**

{% include todo.liquid text="Add the preprint link the moment it's on bioRxiv, and put the real manuscript title into <code>_bibliography/papers.bib</code>. Worth linking your thesis here once it's deposited — it's the fullest public account of this work and costs nothing." %}
