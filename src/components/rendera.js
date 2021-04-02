import React, { Component } from "react";

export default class RenderA extends Component {
  render() {
    return (
      <div>
        Location of the item x: {this.props.location.x} y:{" "}
        {this.props.location.y}
      </div>
    );
  }
}
