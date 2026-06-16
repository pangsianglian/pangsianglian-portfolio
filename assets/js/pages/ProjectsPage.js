import { Page } from "../core/Page.js";
import { ProjectCard } from "../components/ProjectCard.js";

export class ProjectsPage extends Page {
  constructor(args) { super(args); this.activeCategory = "All"; }

  renderCards(category = "All") {
    return this.service.projectsByCategory(category).map(project => new ProjectCard({ project, url: this.service.projectUrl(project) }).render()).join("");
  }

  render() {
    this.setTitle("Projects");
    return `<section class="project-hero"><div class="container"><p class="eyebrow">Case studies</p><h1>Finance transformation projects</h1><p class="lead">Business problems, architecture, controls, delivery evidence and outcomes—presented safely for public review.</p></div></section>
      <section class="section"><div class="container"><div class="filter-bar" role="group" aria-label="Filter projects">${this.service.categories().map((category, index) => `<button class="filter-button" type="button" data-category="${this.escape(category)}" aria-pressed="${index === 0}">${this.escape(category)}</button>`).join("")}</div><div id="project-grid" class="card-grid">${this.renderCards()}</div></div></section>`;
  }

  afterMount(element) {
    const grid = element.querySelector("#project-grid");
    element.querySelectorAll(".filter-button").forEach(button => button.addEventListener("click", () => {
      element.querySelectorAll(".filter-button").forEach(item => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      this.activeCategory = button.dataset.category;
      grid.innerHTML = this.renderCards(this.activeCategory);
    }));
  }
}
