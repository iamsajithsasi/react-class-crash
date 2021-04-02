import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProptypesBox extends Component {
  render() {
    const { name, fontbold } = this.props;
    return <div style={fontbold}>Name {name}</div>;
  }
}

ProptypesBox.defaultProps = {
  name: "webhungaa",
  fontbold: {
    fontWeight: "bold",
  },
};

ProptypesBox.protoTypes = {
  name: PropTypes.string.isRequired,
  fontbold: PropTypes.object,
};
