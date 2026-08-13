---
layout: cv
permalink: /cv/
title: CV
nav: true
nav_order: 3
cv_pdf: /assets/pdf/cv.pdf # your real CV PDF; external URLs also work
cv_format: jsonresume # MUST be jsonresume — we drive this page from
# assets/json/resume.json. Setting `rendercv` here makes the page read
# _data/cv.yml instead, which still contains the theme's Einstein demo CV.
description: Structured CV, generated from assets/json/resume.json. The narrative version is on the <a href="/">homepage</a>.
toc:
  sidebar: left
---

{% include todo.liquid label="check" text="<strong>This page is real — generated from <code>assets/json/resume.json</code>, which mirrors your Aug 2026 CV.</strong> Nothing to write here. But it duplicates the homepage, so keep the two in sync: edit <code>resume.json</code> and <code>_pages/about.md</code> together, and re-copy <code>main.pdf</code> over <code>assets/pdf/cv.pdf</code> when you rebuild the LaTeX." %}
