import React, { Component } from "react";
import "./home.component.css";

export class HomePage extends Component {
  public itemsArray = [{ name: "Alavar" }, { name: "Misc" }];

  render() {
    const items: JSX.Element[] = this.itemsArray.map((item) => (
      <button className="home-page-item">{item.name}</button>
    ));

    return (
      <div className="home-page-layout">
        <div className="home-page-container">
          <ul className="home-page-items">{items}</ul>

          <div className="home-page-content"></div>
        </div>
      </div>
    );
  }
}
