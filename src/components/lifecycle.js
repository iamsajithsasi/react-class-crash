import React, { Component } from "react";

// componentDidMount() {}
// componentWillUnMount() {}

// componentDidUpdate() {} // prevProps, prevState, snapshot
// shouldComponentUpdate() {} // nextProps, nextState

// getDerivedStateFromError() {}
// componentDidCatch() {}

// getDerivedStateFromProps() {}  // nextProps, prevState

export default class LifeCyleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text_a: "hello",
    };
    this.changeText = this.changeText.bind(this);
  }
  componentDidMount() {
    console.log("component Did mount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("derived props ", props, state);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("snap ", prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("comp did update ", prevProps, this.props, prevState, snapshot);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should comp update ", nextProps, nextState);
    if (this.state.text_a !== nextState.text_a) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUnmount() {
    console.log("component Will mount");
  }

  changeText() {
    this.setState({ text_a: "text_b" });
  }

  render() {
    return (
      <>
        <p>Text A {this.state.text_a}</p>
        <button onClick={this.changeText}>Chng Dom</button> <br />
        {this.state.text_a}
      </>
    );
  }
}
