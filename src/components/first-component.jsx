import React, { Component } from "react";
import Header from "./header";

class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tags: ["tag1", "tag2", "tag3"],
    };
    // Binding this with an event handler is ideal. But we used a
    // shortcut which might not be working in the long run!!
    // this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <React.Fragment>
        {/* <h1 style={this.styles}>Welcome</h1> */}
        <Header />
        <span className={this.getBadgeStyle()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-info btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.handleDecrement()}
          className="btn btn-danger btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.handleReset()}
          className="btn btn-warning btn-sm m-2"
        >
          Reset
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
