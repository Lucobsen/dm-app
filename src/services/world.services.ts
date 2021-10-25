import { AxiosResponse } from "axios";
import React from "react";
import httpCommon from "../http-common";
import { WorldDescription } from "./world.model";

/**
 * World API Service.
 */
export default class WorldService {
  /**
   * Gets a world.
   * @param worldId - the ID of a specific world
   * @returns a world's description
   */
  public static async getWorldDescription(worldId: string): Promise<string> {
    try {
      const world: AxiosResponse<WorldDescription, any> =
        await httpCommon.get<WorldDescription>(`/worldDescriptions/${worldId}`);

      return world.data.description;
    } catch (error) {
      return "ERROR FETCHING WORLD DATA!!!";
    }
  }
}
