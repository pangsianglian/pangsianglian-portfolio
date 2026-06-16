import { Component } from "../core/Component.js";
export class Timeline extends Component {
  render() { return `<ol class="timeline">${this.props.items.map(item => `<li class="timeline-item"><h3>${this.escape(item.title)}</h3><p>${this.escape(item.text)}</p></li>`).join("")}</ol>`; }
}
