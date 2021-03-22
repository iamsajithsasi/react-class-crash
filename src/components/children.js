import React, { Fragment, Component } from "react";

function ChildrenComponent(props) {
  return (
    <Fragment>
      {props.children}
      <p>Passing P Tag</p>
      {props.comp}
    </Fragment>
  );
}

function InsertElementIntoProp() {
  return <h3>Hello This is a inserted tage</h3>;
}

export default class ChildrenProp extends Component {
  render() {
    return (
      <>
        <ChildrenComponent comp={<InsertElementIntoProp />}>
          <h1>This is a heading</h1>
        </ChildrenComponent>
      </>
    );
  }
}
