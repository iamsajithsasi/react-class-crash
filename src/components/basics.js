import React, { Component } from "react";

function ReturnSomeElement(props) {
  if (!props.name) {
    return null;
  }
  return <p>{props.name}</p>;
}

export default class ReactBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text_a: "hello",
      text_b: "sajith",
    };
    this.changeText = this.changeText.bind(this); // access to the parent component in the handler
  }

  changeText(event) {
    console.log("hello", event, this); // need to bind this
    this.setState({ text_b: "Text C" }); // change state
  }

  changeText_two = () => {
    console.log(this); // no need to bind this
  };

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <ReturnSomeElement name="Example 1" />
        <ReturnSomeElement name="Example 2" />
        <ReturnSomeElement />
        <hr />
        <p>Text A {this.state.text_a}</p>
        <p>Text B {this.state.text_b}</p>
        <button onClick={this.changeText}>Change Text B</button> <br />
        <button onClick={this.changeText_two}>
          Get this without bind using es6
        </button>
        <hr />
        <form>
          <input
            type="text"
            name="name"
            defaultValue={this.state?.name}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            defaultValue={this.state?.email}
            onChange={this.handleInputChange}
          />
        </form>
        {this.state.name + " " + this.state.email}
        <hr />
      </>
    );
  }
}
