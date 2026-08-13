# \_upstream — al-folio's own project files

Nothing in this folder affects your website. It is the infrastructure that
ships with the [al-folio](https://github.com/alshedivat/al-folio) repository for
people developing **the theme itself**, moved here so the project root shows
only your site. `_config.yml` excludes `_upstream/` from the Jekyll build.

You can delete this entire folder without breaking anything. It is kept only
because it is occasionally useful reference material.

| Path                   | What it is                                                       |
| ---------------------- | ---------------------------------------------------------------- |
| `docs/`                | al-folio's full manual — `CUSTOMIZE.md` and `FAQ.md` are genuinely handy |
| `workflows-disabled/`  | 22 GitHub Actions workflows that test al-folio, not your site      |
| `github-extras/`       | al-folio's issue templates, PR template, Copilot instructions      |
| `test/`                | al-folio's integration test suite                                  |
| `readme_preview/`      | Screenshots used in al-folio's README                              |
| `lighthouse_results/`  | Lighthouse badges for the al-folio demo site                       |
| `.agents/`, `.claude/`, `.codex/`, `.gemini/` | Coding-agent instructions for al-folio contributors |
| `AGENTS.md`, `CLAUDE.md` | Agent rules for contributing to al-folio (**not** for your site) |
| `.pre-commit-config.yaml`, `.all-contributorsrc`, `.lycheeignore`, `.git-blame-ignore-revs` | al-folio's contributor tooling |

## Why the workflows were disabled

Only `.github/workflows/deploy.yml` is relevant to your site — it builds and
publishes to `gh-pages`. The other 22 run al-folio's own CI: unit tests, visual
regression against a baseline build, CodeQL, accessibility audits, Docker image
publishing, release automation and so on. Left in place they run on every push
to your repo and mostly fail, burying real deploy failures in red X's.

GitHub only executes workflows found in `.github/workflows/`, so moving them
here disables them. To bring one back, move the file into `.github/workflows/`.
The most likely candidates:

- `prettier.yml` — formatting checks on your Markdown/YAML
- `broken-links-site.yml` — link checker (needs `.lycheeignore` back at the repo root)
- `render-cv.yml` — builds a PDF CV, but from `_data/cv.yml`, **not** the
  `assets/json/resume.json` this site uses
- `update-citations.yml` — refreshes Google Scholar citation counts
