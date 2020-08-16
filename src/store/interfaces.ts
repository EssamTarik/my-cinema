import { IMoviesFetchState } from "./movieSearch/models";
import { IFavorites } from "./favorites/models";
import { IWatchLater } from "./watchLater/models";
import { IMovieTrailerFetchState } from "./movieTrailer/models";

export interface IStateTree {
  movieSearch: IMoviesFetchState;
  favorites: IFavorites;
  watchLater: IWatchLater;
  trailer: IMovieTrailerFetchState;
  searchText: string;
}
