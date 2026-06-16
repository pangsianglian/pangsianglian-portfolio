import { profile } from "./data/profile.js";
import { projects } from "./data/projects.js";
import { ProjectRepository } from "./repositories/ProjectRepository.js";
import { PortfolioService } from "./services/PortfolioService.js";
import { Navbar } from "./components/Navbar.js";
import { Footer } from "./components/Footer.js";

export function createApplication(currentPage) {
  const repository = new ProjectRepository(projects);
  const service = new PortfolioService(repository);
  new Navbar({ currentPage }).mount("#site-header");
  new Footer({ profile }).mount("#site-footer");
  return { profile, service, currentPage };
}
