import React from "react";

class CustomSwaggerLayout extends React.Component {
  props: any;

  render() {
    const getComponent = this.props.getComponent;

    const Operations = getComponent("operations", true);
    const BaseLayout = getComponent("BaseLayout", true);

    const Component = getComponent("operation-summary", true);
    const layout = React.createElement("div", null, React.createElement(Component, null));

    // const layout = React.createElement("h1", null, "Custom Layout Heading 1");

    return layout;
  }
}

export const CustomSwaggerLayoutPlugin = function(system) {
  return {
    components: {
      CustomSwaggerLayout: CustomSwaggerLayout
    }
  }
}
