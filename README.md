# Angel Pang — Finance Transformation Portfolio

A modular, data-driven portfolio for GitHub Pages. The site positions Angel Pang for Finance Transformation, Digital Finance, Finance Systems and FP&A Transformation roles.

## Architecture

The repository uses small ES module classes rather than duplicated page markup:

```text
assets/js/
├── core/              # Base Component and Page classes
├── components/        # Reusable Navbar, Footer, cards and timeline
├── data/              # Profile and project content
├── repositories/      # Data-access abstraction
├── services/          # Portfolio business/query logic
└── pages/             # Page controllers/renderers
```

### OOP principles used

- **Encapsulation:** each component owns its render behaviour.
- **Abstraction:** `Component` and `Page` define shared contracts.
- **Composition:** pages compose reusable components.
- **Dependency injection:** pages receive profile and service dependencies.
- **Single responsibility:** content, querying, presentation and styling are separated.
- **Open/closed design:** add a project in `assets/js/data/projects.js` without duplicating a page.

## Run locally

ES modules should be served over HTTP:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Add or update a project

Edit only:

```text
assets/js/data/projects.js
```

Each project automatically appears on the project listing and receives a detail page through:

```text
project.html?id=<project-id>
```

## Deploy on GitHub Pages

1. Push this repository to `pangsianglian/pangsianglian-portfolio`.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder.
5. Save and wait for the Pages deployment.

## Confidential project policy

Operational repositories remain private. Public case studies show:

- business problem and role;
- architecture and controls;
- redacted or synthetic screenshots;
- test evidence and delivery progress;
- technology stack and lessons learned.

Never publish production credentials, employee records, bank details, protected child-related data, client URLs or proprietary business rules.
