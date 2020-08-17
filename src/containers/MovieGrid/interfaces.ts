import { IMovie } from "../../store/movieSearch/models";
import { IFavorites } from "../../store/favorites/models";
import { IWatchLater } from "../../store/watchLater/models";

export interface IProps {
  movies: IMovie[];
  favorites: IFavorites;
  watchLater: IWatchLater;
  addFavorite: (movie: IMovie) => void;
  removeFavorite: (movie: IMovie) => void;
  addWatchLater: (movie: IMovie) => void;
  removeWatchLater: (movie: IMovie) => void;
}