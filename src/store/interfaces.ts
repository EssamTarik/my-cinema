import { IMoviesFetchState } from "./movieSearch/models";
import { IFavorites } from "./favorites/models";
import { IWatchLater } from "./watchLater/models";

export interface IStateTree {
  movieSearch: IMoviesFetchState;
  favorites: IFavorites;
  watchLater: IWatchLater;
}