import { Component } from "../core/Component.js";

export class Navbar extends Component {
  render() {
    const current = this.props.currentPage;
    const link = (href, label, key) => `<a href="${href}" ${current === key ? 'aria-current="page"' : ""}>${label}</a>`;
    return `<nav class="site-nav" aria-label="Primary"><div class="container nav-inner">
      <a class="brand" href="index.html">Angel Pang</a>
      <div class="nav-links">
        ${link("index.html", "Home", "home")}
        ${link("projects.html", "Projects", "projects")}
        <a href="index.html#journey">Journey</a>
        <a href="index.html#contact">Contact</a>
      </div>
    </div></nav>`;
  }
}
