import { createApplication } from "./bootstrap.js";
import { HomePage } from "./pages/HomePage.js";
const context = createApplication("home");
new HomePage(context).mount("#main-content");
