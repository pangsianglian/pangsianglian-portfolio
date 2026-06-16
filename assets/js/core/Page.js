import { Component } from "./Component.js";

export class Page extends Component {
  constructor({ profile, service, currentPage }) {
    super({ profile, service, currentPage });
    this.profile = profile;
    this.service = service;
    this.currentPage = currentPage;
  }

  setTitle(title) {
    document.title = `${title} | ${this.profile.name}`;
  }
}
