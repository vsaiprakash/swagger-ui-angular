import React from "react";

const layout1 = {
  wrapComponents: {
    info: (Original, system) => (props) => {
      return React.createElement("div", null,
        React.createElement("h3", null, "Hello world! I am above the Info component."),
        React.createElement(Original, props));
    }
  }
};

const layout2 = {
  components: {
    NumberDisplay: ({
      number
    }) => React.createElement("span", null, number)
  }
}

const layout3 = {
  wrapComponents: {
    info: (Original, system) => (props) => {
      return React.createElement("div", null,
        React.createElement("h3", null, "Hello world! I am above the Info component."),
        React.createElement(Original, props));
    }
  }
};

const layout4 = {
  wrapComponents: {
    operation: (Original, system) => (props) => {
      let currOperation = JSON.parse(JSON.stringify(props.operation));
      console.log(" OP: " + currOperation.method + " PATH: " + currOperation.path);
      return React.createElement("div", null,
        React.createElement(Original, props),
        // React.createElement("h3", null, "Hello world! I am above the Operation component."),
        React.createElement("span", null, JSON.stringify(currOperation.method)),
        React.createElement("span", null, " "),
        React.createElement("span", null, JSON.stringify(currOperation.path))
        // React.createElement("p", null, "props: "+JSON.stringify(currOperation))
      );

    }
  }
};

const layout5 = {
  wrapComponents: {
    OperationSummaryMethod: (Original, system) => (props) => {
      return React.createElement("div", null,
        // React.createElement("h3", null, "Hello world! I am above the OperationSummaryMethod component."),
        React.createElement("button", null, "Code Snippet"),
        React.createElement(Original, props));
    }
  }
};

const layout6 = {
  wrapComponents: {
    OperationSummary: (Original, system) => (props) => {
      return React.createElement("div", null,
        // React.createElement("h3", null, "Hello world! I am above the OperationSummary component."),
        React.createElement("button", null, "Code Snippet"),
        React.createElement(Original, props));
    }
  }
};

const layout7 = {
  wrapComponents: {
    OperationContainer: (Original, system) => (props) => {
      return React.createElement("div", null,
        // React.createElement("h3", null, "Hello world! I am above the OperationContainer component."),
        React.createElement("button", null, "Code Snippet"),
        React.createElement(Original, props));
    }
  }
};

const layout8 = {
  wrapComponents: {
    OperationTag: (Original, system) => (props) => {
      return React.createElement("div", null,
        React.createElement("h3", null, "Hello world! I am above the OperationTag component."),
        React.createElement(Original, props));
    }
  }
};

const layout9 = {
  wrapComponents: {
    OperationExtRow: (Original, system) => (props) => {
      return React.createElement("div", null,
        React.createElement("h3", null, "Hello world! I am above the OperationExtRow component."),
        React.createElement(Original, props));
    }
  }
};

const layout10 = {
  wrapComponents: {
    info: (Original, system) => (props) => {
      return React.createElement("div", null,
        React.createElement("h3", null, "Hello world! I am in place of Info component."));
    }
  }
};

const layout11 = {
  wrapComponents: {
    ModelCollapse: (Original, system) => (props) => {
      return React.createElement("div", null,
        React.createElement("h3", null, "Hello world! I am in place of ModelCollapse component."));
    }
  }
};

const bootstrap_accordion = (method: string, path: string, body: any) => {
  //clear all special characters like {,},/, ... etc.,
  let clearPath = path.replace(/{/g , "").replace(/}/g, "").replace(/\//g,"");
  let customId = method+"_"+clearPath;
  let parentAccordionId = "accordion_"+customId;
  let headingId = "heading_"+customId;

  console.log("parentId: "+parentAccordionId+" customId: "+customId+" headingId: "+headingId);
  /*#__PURE__*/
  return React.createElement("div", {
    class: "accordion",
    id: parentAccordionId
  }, /*#__PURE__*/React.createElement("div", {
    class: "card"
  }, /*#__PURE__*/React.createElement("div", {
    class: "card-header",
    id: headingId
  }, /*#__PURE__*/React.createElement("h2", {
    class: "mb-0"
  }, /*#__PURE__*/React.createElement("button", {
    class: "btn btn-link btn-block text-left",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#"+customId,
    "aria-expanded": "true",
    "aria-controls": customId
  }, customId))), /*#__PURE__*/React.createElement("div", {
    id: customId,
    class: "collapse",
    "aria-labelledby": headingId,
    "data-parent": "#"+parentAccordionId
  }, /*#__PURE__*/React.createElement("div", {
    class: "card-body"
  }, body))));
}

const layout4_bootstrap = {
  wrapComponents: {
    operation: (Original, system) => (props) => {
      let currOperation = JSON.parse(JSON.stringify(props.operation));
      // console.log(" OP: " + currOperation.method + " PATH: " + currOperation.path);
      return React.createElement("div", null,
        React.createElement(Original, props),
        bootstrap_accordion(currOperation.method, currOperation.path, "BODY")
      );

    }
  }
};

export const CustomSwaggerPlugin = function (system) {
  return layout4_bootstrap;
}
