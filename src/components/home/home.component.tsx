import React, { Component, MouseEventHandler } from "react";
import "./home.component.scss";

interface Props {}

interface State {
  content: string;
}

type Item = {
  name: string;
  content: string;
};

export class HomePage extends React.Component<Props, State> {
  public itemsArray: Item[] = [
    { name: "Alavar", content: "Alavar Content" },
    { name: "Misc", content: "Miscellaneous Content" },
  ];

  constructor(props: Props) {
    super(props);

    this.state = { content: "Some Basic Text" };
  }

  /**
   * Change's the home page content.
   * @param item
   */
  private changeContent(item: Item): void {
    this.setState({
      content: item.content,
    });
  }

  /**
   * Renders the Home Component.
   */
  public render(): JSX.Element {
    const items: JSX.Element[] = this.itemsArray.map((item) => (
      <button
        className="home-page-item"
        onClick={() => this.changeContent(item)}
      >
        {item.name}
      </button>
    ));

    return (
      <div className="home-page-layout">
        <div className="home-page-container">
          <ul className="home-page-items">{items}</ul>

          <div className="home-page-content">
            <p className="home-page-text">{this.state.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
