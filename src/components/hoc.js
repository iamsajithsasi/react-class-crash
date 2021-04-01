import React, { Component } from "react";

export default function HOCWrapper(OrginalComponent) {
  class CovertedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    render() {
      return <OrginalComponent props={this.props} state={this.state} />;
    }
  }
  return CovertedComponent;
}
