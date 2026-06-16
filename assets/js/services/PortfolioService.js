export class PortfolioService {
  constructor(projectRepository) {
    this.projectRepository = projectRepository;
  }

  featuredProjects() { return this.projectRepository.getFeatured(); }
  allProjects() { return this.projectRepository.getAll(); }
  categories() { return ["All", ...this.projectRepository.getCategories()]; }
  projectsByCategory(category) { return this.projectRepository.getByCategory(category); }

  projectFromLocation(search = window.location.search) {
    const id = new URLSearchParams(search).get("id");
    return id ? this.projectRepository.getById(id) : null;
  }

  projectUrl(project) { return `project.html?id=${encodeURIComponent(project.id)}`; }
}
