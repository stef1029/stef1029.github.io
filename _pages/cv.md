---
layout: cv
permalink: /cv/
title: CV
nav: true
nav_order: 2
cv_pdf: /assets/pdf/cv.pdf # your real CV PDF; external URLs also work
# Decorative banner above the CV. Rendered by the LOCAL _layouts/cv.liquid
# override — the gem's own cv layout has no slot for page content.
banner: assets/img/brain_slices.jpg
cv_format: jsonresume # MUST be jsonresume — we drive this page from
# assets/json/resume.json. Setting `rendercv` here makes the page read
# _data/cv.yml instead, which still contains the theme's Einstein demo CV.
description: Structured CV, generated from assets/json/resume.json. The narrative version is on the <a href="/">homepage</a>.
toc:
  sidebar: left
---

