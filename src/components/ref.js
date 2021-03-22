import React, { Component } from "react";

export default class RefReact extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        <input ref={this.textInput} name="name" />
        {/* ref keyword has to be used in the element pointing to a variable which inturn points to React.createRef */}
      </div>
    );
  }
}
