import { Component } from "../core/Component.js";
export class MetricCard extends Component {
  render() { const { value, label } = this.props; return `<div class="metric"><span class="metric-value">${this.escape(value)}</span><span class="metric-label">${this.escape(label)}</span></div>`; }
}
