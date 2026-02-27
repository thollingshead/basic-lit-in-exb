import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

// import the @arcgis/core/config module using @arcgis/core-adapter
import { importConfig } from "@arcgis/core-adapter";
const esriConfig = await importConfig();

// mock the @arcgis/core/config import
// const esriConfig = {
//   portalUrl: "Mock Portal URL",
// };

@customElement("basic-lit-component")
export class BasicLitComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--basic-lit-component-text-color, #000);
    }
  `;

  render() {
    return html`<h2>Custom Component!</h2>
      <p>Portal: ${esriConfig.portalUrl}</p> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "basic-lit-component": BasicLitComponent;
  }
}
