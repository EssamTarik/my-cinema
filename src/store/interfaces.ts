import { IMoviesFetchState } from "./movieSearch/models";
import { IFavorites } from "./favorites/models";

export interface IStateTree {
  movieSearch: IMoviesFetchState;
  favorites: IFavorites;
}