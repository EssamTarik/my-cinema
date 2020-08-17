import { IMovie } from "../../store/movieSearch/models";
import { IFavorites } from "../../store/favorites/models";
import { IWatchLater } from "../../store/watchLater/models";

export interface IProps {
  movies: IMovie[];
  favorites: IFavorites;
  watchLater: IWatchLater;
  onAddToFavorites: (movie: IMovie) => void;
  onRemoveFromFavorites: (movie: IMovie) => void;
  onAddToWatchLater: (movie: IMovie) => void;
  onRemoveFromWatchLater: (movie: IMovie) => void;
}