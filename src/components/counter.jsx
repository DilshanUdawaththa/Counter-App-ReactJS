import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.value};

  handleIncrement = () => {
      this.setState({value: this.state.value + 1});
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        {/* {this.renderTags()} */}
        <button className="btn btn-danger btn-sm" onClick={this.props.onDelete}>Delete</button>
      </React.Fragment>
    );
}

// renderTags() {
//     if(this.state.tags.length === 0) return <p>There are no tags</p>;
//     return <ul>{this.state.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>;
//   }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
