import React, { Component } from "react";
import "./about.component.scss";
import aboutUserImage from "../../images/lukejacobsen.png";

export class AboutPage extends Component {
  render() {
    return (
      <div className="about-page-container">
        <div className="about-user-section">
          <img className="about-user-image" src={aboutUserImage} />

          <section className="about-user-description">
            <p>
              My name is Luke Jacobsen. A Computer Scientist who specializes in
              developing high-quality, neat, and sustainable web applications.
            </p>

            <p>
              Before you, lies my first foray into developing my sole React
              application.
            </p>
          </section>
        </div>
      </div>
    );
  }
}
