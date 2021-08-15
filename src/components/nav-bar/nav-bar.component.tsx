import React, { Component } from "react";
import "./nav-bar.component.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar-layout">
        <div className="nav-bar-container">
          <nav className="nav-bar">
            <Link to="/" className="nav-bar-item">
              Home
            </Link>
            <Link to="/about" className="nav-bar-item">
              About
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}
