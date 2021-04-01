import React, { Component } from "react";
import HOCWrapper from "./hoc";

class HocFile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      console.log(this.props)
  }
  render() {
    return <div>Count is {this.props.state.count}</div>;
  }
}

export default HOCWrapper(HocFile);