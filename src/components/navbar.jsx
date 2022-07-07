import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="www.google.com">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">{this.props.totalCount}</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
