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

If a sound comes from your left at the same moment something moves on your
right, you cannot turn both ways. The nervous system has to pick one. Doing so
means weighing how relevant and how urgent each stimulus is, and committing to a
single target.

That is harder than it sounds, because the senses do not agree on a coordinate
system. Vision encodes space relative to the retina, hearing relative to the
head, touch relative to the body. Before anything can be compared, these have to
be converted into a common frame — and then into a movement.

## Why the superior colliculus

The superior colliculus is a midbrain structure that has been solving this
problem for something like 500 million years, and its organisation is conserved
from fish to mammals. Escaping a threat can be done by averaging away from
danger, but approaching a target requires picking one — a winner-take-all
choice — and the SC appears to be where that competition plays out.

It is well placed for it. The SC receives convergent input from essentially
every sensory modality: retinal projections and descending input from visual
cortex, sound-localisation signals from the inferior colliculus and auditory
cortex, and whisker and facial input from the trigeminal nuclei and
somatosensory cortex. These arrive as topographically aligned maps across a
layered structure — superficial layers carrying retinotopic visual responses,
intermediate and deep layers integrating multiple senses and issuing motor
commands. Vertical connections tie them together, so each column plausibly
represents both a location in space and the movement needed to get there.

That interpretation is well supported causally: stimulating a site in the SC
evokes an orienting movement towards the corresponding location, and inactivating
it impairs orienting to stimuli there.

But the SC is not only a motor structure. Alongside descending projections to
brainstem and spinal premotor circuits, it sends extensive ascending projections
to the thalamus. Its neurons show sustained activity in the gap between a target
appearing and a movement being made, and inactivating the SC disrupts spatial
attention even when eye movements are dissociated from the attended location.
This has led to the idea of the SC as a **priority map**: a continuously updated
representation of how behaviourally relevant each location is, combining
bottom-up salience with top-down task demands.

## The hypothesis

If those two roles — guiding movement and guiding attention — are really the
same computation, then the SC should maintain a representation of spatial
priority that *persists after the sensory evidence has gone*, bridging the gap
between a fleeting cue and the action it eventually justifies.

That framing makes a concrete prediction. Modulating the output of the SC should
not simply trigger movements. It should bias choices towards spatially cued
targets while leaving movements that were not spatially cued alone. And neural
activity should distinguish an identical movement made *because of* a spatial
cue from one made for some other reason.

## The methodological gap

Testing that in mice meant first solving a behavioural problem.

Most mouse SC work is head-fixed, which buys precise control, high trial counts
and clean reporting movements — but rules out the coordinated whole-body
orienting that mice actually do. The alternative is naturalistic freely moving
behaviour such as escape, prey capture or social orienting, which captures the
full movement repertoire but suffers from low trial counts, behavioural
adaptation, disengagement and difficult tracking.

Neither is well suited to asking a question that needs both ethological
plausibility *and* enough structured trials for circuit dissection.

## The task

I built a **six-choice hexagonal task for freely moving mice**. A brief cue
indicates one of six locations, and the mouse reports where it perceived the cue
by approaching the corresponding port. It keeps the trial structure and temporal
precision that modern circuit neuroscience needs, while letting the animal
perform a natural whole-body movement.

A terminological note, since the literature separates these carefully: this is a
**localisation** task rather than an orienting task. The mouse reports a
perceived location by choosing among discrete alternatives, rather than the
movement itself being the measured variable. In practice the two are tightly
coupled — a localisation response is almost always preceded by an orienting
movement — and the paradigm leaves the orienting kinematics available for future
analysis.

Getting there took a detour. The first approach was a head-fixed floating
platform intended to preserve rotational freedom while keeping the animal fixed;
that design was eventually abandoned in favour of the freely moving hexagonal
arena. The engineering behind the final system is written up separately in the
[behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }}).

## How far it got

Four strands of work, roughly in order:

1. **Building the paradigm** — the iterative design process from floating platform to hexagonal arena, including the rationale behind each decision.
2. **Characterising the behaviour** — systematically varying cue duration to find the point at which visually guided orienting gives way to memory-based navigation, and mapping the functional visual field. This stage also introduced a mixed-modality variant interleaving spatially informative visual trials with non-spatial auditory trials — the control that makes the central comparison possible.
3. **Testing causality** — bidirectional chemogenetic modulation of *Pitx2+* output neurons in the intermediate grey layer, a genetically defined SC output population previously characterised in the lab, to ask whether they bias spatial choices.
4. **Recording during behaviour** — chronic electrophysiology in lateral SC during the mixed visual–auditory task, comparing trial types that produce similar movements from different underlying computations.

## Results

Findings from this work are in preparation for publication. This section will be
filled in once the preprint is available.

{% include todo.liquid label="check" text="<strong>Findings deliberately withheld</strong> until the preprint is out — your call, agreed as: publish the page, strip the results. The specific findings are preserved in the note below so they aren't lost; these notes render only in local preview, never on the live site." %}

{% include todo.liquid text="<strong>Restore after the preprint.</strong> (1) Chemogenetic excitation of <em>Pitx2+</em> neurons produced contralateral biases affecting both spatially-certain and spatially-uncertain movements, consistent with modulation of baseline spatial priors rather than sensory or motor processing — note the inhibitory experiments had technical limitations worth being upfront about. (2) A subpopulation selectively encoding movements with spatial justification, maintaining activity from shortly after the cue until movement completion. Also worth adding from Chapter 3: the cue-duration threshold and the functionally restricted visual field, which was narrower than anatomy predicts." %}

{% include todo.liquid label="image" text="<strong>Do not add result figures yet</strong> (<code>sc-behaviour.png</code>, <code>sc-dreadds.png</code>, <code>sc-ephys.png</code>) — image blocks self-activate, so they would go public the moment the file lands. The task schematic above is fine now; result panels are not." %}

{% include todo.liquid label="review" text="<strong>I drafted this page from your thesis introduction</strong> — condensed, citations stripped, and no results stated. Read it as a whole and make the voice yours, particularly the opening and 'The hypothesis' section. Check I haven't overstated anything: I wrote that Pitx2+ neurons were 'previously characterised in the lab', and described the floating platform as 'abandoned' — reword if either is off." %}

## Links

- **Manuscript:** in preparation (Rogers-Coltman, Welch, Geyer, Tripodi)
- **Lab:** [Tripodi group](https://www.tripodilab.org/), MRC LMB
- **Instrumentation:** [behavioural rig platform]({{ '/projects/01-behavioural-rig-platform/' | relative_url }})
- **Analysis code:** `hex_behav`, `analysis_notebooks`, `DLC_model_training` — **private**
- **Earlier floating-platform approach:** `trilab-floating-platform` — **private**

{% include todo.liquid text="Add the preprint link the moment it's on bioRxiv, and put the real manuscript title into <code>_bibliography/papers.bib</code>. Also consider linking your thesis here once it's deposited — it's the fullest public account of this work and costs nothing to link." %}
