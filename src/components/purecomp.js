import React, { Component } from "react";

export default class PureComponentBox extends Component {
  render() {
    return <div>Count {this.props.count}</div>;
  }
}
