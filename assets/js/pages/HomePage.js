import { Page } from "../core/Page.js";
import { MetricCard } from "../components/MetricCard.js";
import { ProjectCard } from "../components/ProjectCard.js";
import { Timeline } from "../components/Timeline.js";

export class HomePage extends Page {
  render() {
    this.setTitle("Finance Transformation Portfolio");
    const projects = this.service.featuredProjects();
    return `
      <section class="hero"><div class="container hero-grid">
        <div><p class="eyebrow">Finance Transformation · Singapore</p><h1>Turning finance complexity into <span>governed digital systems.</span></h1><p class="lead">${this.escape(this.profile.summary)}</p>
          <div class="button-row"><a class="button" href="projects.html">Explore case studies</a><a class="button button-secondary" href="${this.profile.links.linkedin}" target="_blank" rel="noopener noreferrer">View LinkedIn</a></div>
        </div>
        <aside class="hero-panel"><p class="eyebrow">Positioning</p><h2>${this.escape(this.profile.positioning)}</h2><p>Target roles:</p><ul>${this.profile.targetRoles.map(role => `<li>${this.escape(role)}</li>`).join("")}</ul></aside>
      </div></section>

      <section class="section"><div class="container"><div class="metric-grid">${this.profile.metrics.map(metric => new MetricCard(metric).render()).join("")}</div></div></section>

      <section class="section section-alt"><div class="container"><div class="section-heading"><p class="eyebrow">What I bring</p><h2>Finance leadership with hands-on transformation delivery</h2><p>I bridge business requirements, governance, data and software implementation.</p></div><div class="value-grid">${this.profile.capabilities.map(item => `<article class="value-block"><h3>${this.escape(item.title)}</h3><p>${this.escape(item.text)}</p></article>`).join("")}</div></div></section>

      <section class="section"><div class="container"><div class="section-heading"><p class="eyebrow">Flagship work</p><h2>Private implementations, public evidence</h2><p>Each case study explains the business problem, architecture, controls, delivery progress and safe evidence without exposing confidential code or data.</p></div><div class="card-grid">${projects.map(project => new ProjectCard({ project, url: this.service.projectUrl(project) }).render()).join("")}</div><div class="button-row"><a class="button button-secondary" href="projects.html">View all projects</a></div></div></section>

      <section class="section section-alt" id="journey"><div class="container narrow"><div class="section-heading"><p class="eyebrow">Career journey</p><h2>From finance operations to transformation leadership</h2></div>${new Timeline({ items: this.profile.journey }).render()}</div></section>

      <section class="section" id="contact"><div class="container narrow"><div class="section-heading"><p class="eyebrow">Connect</p><h2>Let’s discuss finance transformation</h2><p>For private projects, I can provide a controlled walkthrough using redacted or synthetic data.</p></div><div class="button-row"><a class="button" href="mailto:${this.profile.email}">Email me</a><a class="button button-secondary" href="${this.profile.links.github}" target="_blank" rel="noopener noreferrer">GitHub profile</a><a class="button button-secondary" href="${this.profile.links.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div></section>`;
  }
}
