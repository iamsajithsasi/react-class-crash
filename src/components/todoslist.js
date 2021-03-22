import React, { Component } from "react";

// example for react lazy loading

export default class Todoslist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => response.json())
        .then((json) => this.setState({ list: json }));
    }, 10000);
  }
  render() {
    const { list } = this.state;
    return (
      <>
        <div>
          {list.map((item, index) => (
            <p key={index}>
              {index + 1} - {item.title}
            </p>
          ))}
        </div>
      </>
    );
  }
}
