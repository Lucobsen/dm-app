import React, { Component } from "react";
import './nav-bar.component.css';

export class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <a href="/home" className="nav-bar-item">Home</a>
        <a href="/blog" className="nav-bar-item">Blog</a>
      </nav>
    )
  }
}