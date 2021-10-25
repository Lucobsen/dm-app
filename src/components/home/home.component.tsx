import React, { Component, MouseEventHandler } from "react";
import { World } from "../../services/world.model";
import WorldService from "../../services/world.services";
import "./home.component.scss";

interface Props {}

interface State {
  content: string;
}

interface DmData {
  id: string;
  name: string;
  worlds: World[];
}

/**
 * Home Page Component.
 */
export class HomePage extends React.Component<Props, State> {
  private lukesData: DmData = {
    id: "lukes-id",
    name: "Luke Jacobsen",
    worlds: [
      { id: "alavar-world-id", name: "Alavar" },
      { id: "misc-world-id", name: "Misc" },
    ],
  };

  constructor(props: Props) {
    super(props);

    this.state = { content: "Select a World to see it's description..." };
  }

  /**
   * Change's the current world description being displayed.
   * @param worldId - the ID of the world who's description we want to fetch
   */
  private async getContent(worldId: string): Promise<void> {
    const description: string = await WorldService.getWorldDescription(worldId);

    this.setState({
      content: description,
    });
  }

  /**
   * Renders the Home Component.
   */
  public render(): JSX.Element {
    const items: JSX.Element[] = this.lukesData.worlds.map((world: World) => (
      <button
        className="home-page-item"
        onClick={() => this.getContent(world.id)}
      >
        {world.name}
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
