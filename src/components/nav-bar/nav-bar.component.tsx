import React, { Component } from "react";
import './nav-bar.component.css';

export class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <a href="/home" className="nav-bar-item">Home</a>
        <a href="/about" className="nav-bar-item">About</a>
      </nav>
    )
  }
}