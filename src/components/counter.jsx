import React, { Component } from "react";

class Counter extends Component {
  // state = { value: this.props.counter.value };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          {/* {this.renderTags()} */}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  // renderTags() {
  //     if(this.state.tags.length === 0) return <p>There are no tags</p>;
  //     return <ul>{this.state.tags.map((tag) => (<li key={tag}>{tag}</li>))}</ul>;
  //   }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
