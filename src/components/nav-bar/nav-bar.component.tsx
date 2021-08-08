import React, { Component } from "react";
import "./nav-bar.component.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <Link to="/" className="nav-bar-item">
          Home
        </Link>
        <Link to="/about" className="nav-bar-item">
          About
        </Link>
      </nav>
    );
  }
}
