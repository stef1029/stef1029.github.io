# Personal site

Built on [al-folio](https://github.com/alshedivat/al-folio) v1.x, deployed to
GitHub Pages at `https://YOURUSERNAME.github.io`.

## Run it locally

```bash
docker compose up
```

Then open <http://localhost:8080>. Edits to content files hot-reload. Edits to
`_config.yml` are not hot-reloaded by Jekyll, but the container watches that file
and restarts the server for you. Stop with `Ctrl+C`, or `docker compose down`.

First run pulls the image and installs gems, so give it a few minutes.

## Where everything lives

| What                            | File                                                        |
| ------------------------------- | ----------------------------------------------------------- |
| **The CV (homepage)**           | `_pages/about.md`                                            |
| Structured CV at `/cv/`         | `assets/json/resume.json`                                    |
| Downloadable CV PDF             | `assets/pdf/cv.pdf` (path set in `_data/socials.yml`)         |
| Profile photo                   | `assets/img/prof_pic.jpg`                                    |
| Email / GitHub / LinkedIn / Scholar | `_data/socials.yml`                                      |
| One file per project            | `_projects/*.md`                                             |
| Projects landing page           | `_pages/projects.md`                                         |
| Publications                    | `_bibliography/papers.bib`                                   |
| Featured repos                  | `_data/repositories.yml`                                     |
| Site-wide settings              | `_config.yml`                                                |

Layouts, includes and CSS are **not** in this repo. al-folio v1.x is a thin
starter; all rendering lives in the `al_folio_*` gems pinned in the `Gemfile`.
To override something, create a matching file under `_layouts/`, `_includes/`
or `_sass/` here and it shadows the gem's version.

## Adding a project

Copy `_projects/01-cryogenic-fatigue-rig.md` — it is commented as a template.

- Filename must **not** match `?_project.md` (one character + `_project.md`);
  that pattern is excluded in `_config.yml` to hide the theme's demo projects.
- `img:` is the thumbnail on the projects grid; `importance:` sets the order
  (lower first); `category:` must match a value in `display_categories:` in
  `_pages/projects.md`.
- Use `{% include figure.liquid path="assets/img/x.jpg" %}` for images rather
  than raw `<img>` — it generates responsive WebP variants automatically.
- Image grids use **Tailwind** classes (`grid grid-cols-1 md:grid-cols-3 gap-4`).
  Do **not** use Bootstrap `row` / `col-sm-*`: v1.x is Tailwind-first and
  `al_folio.compat.bootstrap.enabled` is `false` in `_config.yml`.

## Adding a publication

Append a BibTeX entry to `_bibliography/papers.bib`. `selected={true}` also
surfaces it on the homepage. See the comment block at the top of that file for
the al-folio-specific fields (`abbr`, `pdf`, `code`, `arxiv`, `bibtex_show`, …).

Your own name is bolded automatically — `scholar.last_name` / `first_name` in
`_config.yml` must match how you appear in the `author` field.

## Removing more of the theme

Per al-folio's `docs/CUSTOMIZE.md`, prefer adding files to the `exclude:` list in
`_config.yml` over deleting them — it keeps rebases onto newer al-folio clean.
The blog, teaching and repositories pages are currently **kept but empty**
(`_posts/` and `_teachings/` are excluded). To drop one entirely, exclude its
page under `_pages/` too, then renumber `nav_order:` on the remaining pages.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds the site and force-pushes
the result to the `gh-pages` branch, which GitHub Pages serves. Never edit
`gh-pages` by hand. Takes about 4 minutes.

## Upgrading al-folio later

```bash
git remote add upstream https://github.com/alshedivat/al-folio.git
git fetch upstream
git rebase <newer-tag>
```

Content and config live in files the theme mostly does not touch, so conflicts
should be limited to `_config.yml`.
