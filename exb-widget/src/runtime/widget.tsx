import { React, type AllWidgetProps } from "jimu-core";
import type { IMConfig } from "../config";

// import the component, and log it to prevent tree shaking
import { BasicLitComponent } from "basic-lit-component";
console.log("Logging the Component to prevent tree shaking", BasicLitComponent);

// Add the custom element at the top
document.body.prepend(document.createElement("basic-lit-component"));

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="widget-demo jimu-widget m-2">
      <div>
        This is JSX in the widget. Below is the custom element defined in the
        basic-lit-component widget.
      </div>
      {/* Add component to the JSX */}
      <basic-lit-component></basic-lit-component>
    </div>
  );
};

export default Widget;
