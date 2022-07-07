import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <h3><span className={this.getBadgeClasses()}>{this.formatCount()}</span></h3>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
              disabled={this.props.counter.value === 0 ? 'disabled' : ''}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
