export class Component {
  constructor(props = {}) {
    this.props = Object.freeze({ ...props });
  }

  render() {
    throw new Error(`${this.constructor.name}.render() must be implemented.`);
  }

  mount(target) {
    const element = typeof target === "string" ? document.querySelector(target) : target;
    if (!element) throw new Error(`Mount target not found: ${target}`);
    element.innerHTML = this.render();
    this.afterMount(element);
    return element;
  }

  afterMount() {}

  escape(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
}
