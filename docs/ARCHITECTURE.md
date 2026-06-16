# Portfolio Architecture

## Design goal

Keep public content easy to update while avoiding duplicated HTML and tightly coupled scripts.

## Runtime flow

```text
HTML shell
   ↓
bootstrap.js
   ├── Profile data
   ├── ProjectRepository
   ├── PortfolioService
   ├── Navbar
   └── Footer
          ↓
       Page class
          ↓
   Reusable components
```

## Responsibilities

| Layer | Responsibility |
|---|---|
| `data` | Public-safe profile and project facts |
| `repositories` | Project lookup and filtering |
| `services` | Portfolio-level query and URL logic |
| `core` | Shared component/page contracts |
| `components` | Reusable UI building blocks |
| `pages` | Compose components into a page |
| `css` | Base, component and page-specific styling |

## Extension examples

### Add a project

Add one object to `assets/js/data/projects.js`. No new detail page is needed.

### Add a component

Extend `Component`, implement `render()`, and compose it inside a page.

### Replace the data source

A future implementation can replace `ProjectRepository` with a JSON/API-backed repository while keeping page classes unchanged, provided the same public methods are retained.
