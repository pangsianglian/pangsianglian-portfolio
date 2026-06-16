import { createApplication } from "./bootstrap.js";
import { ProjectDetailPage } from "./pages/ProjectDetailPage.js";
const context = createApplication("projects");
new ProjectDetailPage(context).mount("#main-content");
