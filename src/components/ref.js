import React, { Component } from "react";
import RefForward from "./refforward";
import { RefButton } from "./refforward";

export default class RefReact extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.refForward = React.createRef(null);
    this.refButton = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focus();
  }
  handleButton = () => {
    this.refForward.current.incrementCount();
  };

  render() {
    return (
      <div>
        {/* ref keyword has to be used in the element pointing to a variable which inturn points to React.createRef */}
        <input ref={this.textInput} name="name" />

        {/* forwarded ref */}
        <RefForward ref={this.refForward} />
        <button onClick={this.handleButton}>Click</button>

        <br />

        {/* reference button */}
        <RefButton ref={this.refButton}>Hello</RefButton>
      </div>
    );
  }
}
