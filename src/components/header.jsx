import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  styles = {
    textAlign: "center",
    backgroundColor: "orange",
  };

  render() {
    return <h1 style={this.styles}>Welcome!</h1>;
  }
}

export default Header;
