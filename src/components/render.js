import React, { Component } from "react";

// render props

export default class RenderBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  mouseMvFn = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.mouseMvFn);
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.mouseMvFn);
  }
  render() {
    const { x, y } = this.state;
    return (
      <>
        {/* <div>Location of the item x: {x} y: {y}</div> */}
        {/* moving to render */}
        {this.props.render(this.state)}
      </>
    );
  }
}
