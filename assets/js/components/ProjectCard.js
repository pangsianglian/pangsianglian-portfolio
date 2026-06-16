import { Component } from "../core/Component.js";
export class ProjectCard extends Component {
  render() {
    const { project, url } = this.props;
    const privateBadge = project.visibility === "Private repository" ? "badge-private" : "";
    const activeBadge = project.status.toLowerCase().includes("active") ? "badge-active" : "";
    return `<a class="card card-link project-card" href="${url}">
      <div class="card-header"><div><div class="card-kicker">${this.escape(project.category)}</div><h3>${this.escape(project.title)}</h3></div><span class="badge ${privateBadge}">${this.escape(project.visibility)}</span></div>
      <p>${this.escape(project.summary)}</p>
      <div class="tag-list"><span class="badge ${activeBadge}">${this.escape(project.status)}</span>${project.stack.slice(0,4).map(tag => `<span class="tag">${this.escape(tag)}</span>`).join("")}</div>
    </a>`;
  }
}
