import { Component } from "../core/Component.js";

export class Footer extends Component {
  render() {
    const { profile } = this.props;
    return `<footer class="site-footer"><div class="container footer-inner">
      <div><strong>${this.escape(profile.name)}</strong><p>Finance transformation through governed systems and trusted data.</p><small>© ${new Date().getFullYear()} ${this.escape(profile.formalName)}</small></div>
      <div class="footer-links">
        <a href="${profile.links.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="${profile.links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:${profile.email}">Email</a>
      </div>
    </div></footer>`;
  }
}
