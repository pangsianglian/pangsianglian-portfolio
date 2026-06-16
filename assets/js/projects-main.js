import { createApplication } from "./bootstrap.js";
import { ProjectsPage } from "./pages/ProjectsPage.js";
const context = createApplication("projects");
new ProjectsPage(context).mount("#main-content");
