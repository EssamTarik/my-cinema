import { ADD_FAVORITE, REMOVE_FAVORITE } from "../types";
import { IMovie } from "../../movieSearch/models";

export interface IAddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: IMovie;
}

export interface IRemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  payload: IMovie;
}

export type FavoriteAction = IAddFavoriteAction | IRemoveFavoriteAction