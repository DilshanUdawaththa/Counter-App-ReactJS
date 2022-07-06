import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0, tags: [] };

  handleIncrement() {
      console.log("Button Clicked!");
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
}

renderTags() {
    if(this.state.tags.length === 0) return <p>There are no tags</p>;
    return this.state.tags.map((tag) => (<li key={tag}>{tag}</li>));
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
