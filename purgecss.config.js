module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    "collapse",
    "collapsing",
    "show",
    "dropdown-menu",
    "dropdown-item",
    "table",
    "table-dark",
    "table-hover",
    "table-responsive",
    "af-tooltip",
    "af-popover",
    "font-weight-bold",
    "font-weight-medium",
    "font-weight-lighter",
    // medium-zoom injects these at runtime, so they never appear in the static
    // HTML PurgeCSS scans; without them the zoom overlay's z-index rule is purged
    // and page chrome (scroll-progress bar, ToC) bleeds through a zoomed image.
    "medium-zoom-overlay",
    "medium-zoom-image--opened",
    // Site-local classes from the bottom of assets/css/main.scss. The img-grid
    // ones currently appear only inside commented-out image blocks in
    // _projects/*.md, so PurgeCSS would drop them — and the grids would then be
    // broken in production the moment a block is uncommented. Safelisted so the
    // rules survive until the images land.
    "cv-entry",
    "cv-role",
    "cv-dates",
    "cv-org",
    "cv-skill",
    "cv-skill-name",
    "cv-skill-body",
    "img-grid",
    "img-grid-2",
    "img-grid-3",
    "img-grid-square",
    "img-float-left",
    "img-float-right",
    // attribute selector used by the click-to-enlarge affordance
    "data-zoomable",
    // used by the max-width:767px override that undoes img_block's `width` cap
    // on phones; keep so the rule survives the purge.
    "caption",
  ],
};
