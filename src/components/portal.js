import React, { Component } from "react";
import ReactDOM from "react-dom";

// node that exists outside the DOM hierarchy, ie root, of the parent component.
export default class PortalPop extends Component {
  render() {
    return ReactDOM.createPortal(
      <>
        <div className="portalOverlay"></div>
        <div className="portalPop">{this.props.children}</div>
      </>,
      document.getElementById("portal")
    );
  }
}
