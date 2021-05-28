import React, { Component } from "react";

class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  styles = {
    textAlign: "center",
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={this.styles}>Hello Richie</h1>
        <span className={this.getBadgeStyle()}>{this.formatCount()}</span>
        <button className="btn btn-info btn-sm m-2">+</button>
        <button className="btn btn-danger btn-sm">-</button>
      </React.Fragment>
    );
  }

  getBadgeStyle() {
    let badges = "badge m-3 bg-";
    badges += this.state.count === 0 ? "warning" : "primary";
    return badges;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default First;
