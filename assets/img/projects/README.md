# Project images

Put photos, CAD renders, screenshots, diagrams and result figures here, then
reference them from `_projects/*.md`. Each project page has commented-out image
grids ready to uncomment — search for `TODO` in the file.

## How to add one

1. Drop the file in this folder, e.g. `rig-hero.jpg`.
2. In the project page, uncomment the block and set the path:

   ```liquid
   {% include figure.liquid loading="eager" path="assets/img/projects/rig-hero.jpg" title="What this shows" class="img-fluid rounded z-depth-1" %}
   ```

3. Save. The browser reloads and the image appears.

Use `figure.liquid` rather than a raw `<img>` tag — it automatically generates
480/800/1400px WebP versions, so the page stays fast on a phone. You do not need
to resize anything yourself; upload the full-resolution original.

## Naming

Anything is fine, but a `project-subject.jpg` pattern keeps the folder readable
once there are thirty files in it: `rig-cad.jpg`, `imu-worn.jpg`, `drone-3.jpg`.

## Formats

- **Photos** → `.jpg`
- **Diagrams, screenshots, plots** → `.png` (sharper on text and lines)
- Avoid `.gif`; use a short `.mp4` if you need motion.

## Thumbnails

The card on `/projects/` comes from the `img:` field in each page's front matter,
which is currently commented out. Uncomment it and point at a file here to give
each project a thumbnail — the grid looks much better once they all have one.
