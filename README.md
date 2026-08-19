# Personal site

Built on [al-folio](https://github.com/alshedivat/al-folio) v1.x, deployed to
GitHub Pages at `https://stef1029.github.io`.

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
| All project write-ups           | `_pages/projects.md` (one page)                              |
| Featured repos                  | `_data/repositories.yml`                                     |
| Site-wide settings              | `_config.yml`                                                |

Layouts, includes and CSS are **not** in this repo. al-folio v1.x is a thin
starter; all rendering lives in the `al_folio_*` gems pinned in the `Gemfile`.
To override something, create a matching file under `_layouts/`, `_includes/`
or `_sass/` here and it shadows the gem's version.

## Adding a project

Projects are prose sections in `_pages/projects.md` — there are no per-project
pages. Copy an existing section: an `##` heading, two or three short paragraphs,
and one or two images.

**Do not use Tailwind utility classes** (`gap-4`, `md:grid-cols-3`,
`justify-between`…) in page content. The theme ships a prebuilt, pruned
`tailwind.css` built by scanning its *own* templates, and there is no Tailwind
build step in this repo — so those classes emit the HTML attribute but no CSS
rule ever exists, and the layout silently does nothing. Bootstrap classes are
dead too. Add real rules at the bottom of `assets/css/main.scss` instead; that
file shadows the theme's copy and already defines `.cv-entry`, `.cv-dates`,
`.cv-org`, `.cv-skill` and `.img-grid`.

## Adding images to a project

**Drop the file in and it appears.** Nothing to uncomment. While a file is
missing you see a blue note naming the exact filename to add; once it exists the
image replaces the note automatically. Images can live in `assets/img/` or
`assets/img/projects/` — reference wherever they are rather than duplicating.

To declare a new one:

```liquid
{% include img_block.liquid cols="3"
   paths="assets/img/projects/a.jpg, assets/img/projects/b.jpg, assets/img/projects/c.jpg"
   titles="First | Second | Third"
   caption="Left to right: ..."
   note="What to photograph, shown while the files are missing." %}
```

`cols` is 1, 2 or 3 (defaults to the number of images). Add `square=true` to crop
every tile to 1:1 — `cols="2"` with four images gives a 2x2 gallery. Add
`eager=true` for a hero image at the top of a page. WebP variants at 480/800/1400px are generated
automatically, so upload the full-resolution original and don't pre-resize.

Add `width="45%"` (or `width="420px"`) to cap a block's width and centre it —
worth doing for near-square diagrams, which look enormous at full column width
on a desktop. The cap is automatically dropped below 768px so images stay
readable on a phone.

> **Never wrap `figure.liquid` or `img_block.liquid` in an HTML comment.**
> Liquid runs before HTML is parsed, so the include still executes, and the
> markup it emits contains its own `<!-- -->` comment which closes yours early
> and dumps raw HTML onto the page. Use `{% comment %} … {% endcomment %}` if
> you really need to disable a block.

## Publications

The publications page was removed. The machinery is still wired up —
`_bibliography/papers.bib`, jekyll-scholar config in `_config.yml`, and
`selected_papers` in `_pages/about.md` — so restoring it is just re-creating
`_pages/publications.md`:

```bash
git show <commit>:_pages/publications.md > _pages/publications.md
```

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
