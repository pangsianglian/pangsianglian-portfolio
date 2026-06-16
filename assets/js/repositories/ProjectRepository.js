export class ProjectRepository {
  constructor(projects) {
    this.projects = [...projects];
  }

  getAll() { return [...this.projects]; }
  getById(id) { return this.projects.find(project => project.id === id) ?? null; }
  getFeatured() { return this.projects.filter(project => project.featured); }
  getCategories() { return [...new Set(this.projects.map(project => project.category))].sort(); }
  getByCategory(category) { return category === "All" ? this.getAll() : this.projects.filter(project => project.category === category); }
}
