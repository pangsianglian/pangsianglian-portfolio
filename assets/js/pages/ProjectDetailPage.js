import { Page } from "../core/Page.js";

export class ProjectDetailPage extends Page {
  renderList(items) { return `<ul>${items.map(item => `<li>${this.escape(item)}</li>`).join("")}</ul>`; }

  render() {
    const project = this.service.projectFromLocation();
    if (!project) {
      this.setTitle("Project not found");
      return `<section class="section"><div class="container narrow error-page"><p class="eyebrow">Project</p><h1>Project not found</h1><p>Choose a case study from the projects page.</p><a class="button" href="projects.html">View projects</a></div></section>`;
    }
    this.setTitle(project.title);
    const image = project.image ? `<img src="${project.image}" alt="${this.escape(project.title)} workflow diagram">` : "";
    return `<section class="project-hero"><div class="container"><p class="eyebrow">${this.escape(project.category)}</p><h1>${this.escape(project.title)}</h1><p class="lead">${this.escape(project.summary)}</p><div class="project-meta"><span class="badge">${this.escape(project.status)}</span><span class="badge">${this.escape(project.visibility)}</span><span class="badge">Role: ${this.escape(project.role)}</span></div></div></section>
      <section class="section"><div class="container case-layout"><article class="case-content">
        <section><h2>Business problem</h2><p>${this.escape(project.problem)}</p></section>
        <section><h2>My contribution</h2><p>${this.escape(project.role)}</p></section>
        <section><h2>Business and delivery value</h2>${this.renderList(project.impact)}</section>
        <section><h2>Solution architecture</h2><ol class="architecture-list">${project.architecture.map(item => `<li>${this.escape(item)}</li>`).join("")}</ol>${image}</section>
        <section><h2>Governance and controls</h2>${this.renderList(project.controls)}</section>
        <section><h2>Latest progress and next steps</h2>${this.renderList(project.next)}</section>
        <section><h2>Private repository disclosure</h2><div class="notice"><strong>Confidential implementation:</strong> ${this.escape(project.disclosure)}</div></section>
      </article>
      <aside class="case-aside"><div class="card"><p class="eyebrow">Technology</p><div class="tag-list">${project.stack.map(item => `<span class="tag">${this.escape(item)}</span>`).join("")}</div><hr><p class="muted">Public evidence may include architecture diagrams, redacted screenshots, synthetic sample files, test summaries and a controlled demo.</p><div class="button-row"><a class="button" href="mailto:${this.profile.email}?subject=${encodeURIComponent(`Portfolio discussion: ${project.title}`)}">Request walkthrough</a><a class="button button-secondary" href="projects.html">All projects</a></div></div></aside>
      </div></section>`;
  }
}
