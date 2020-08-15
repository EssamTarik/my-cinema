import { IMovie } from "../../store/movieSearch/models";
import { IFavorites } from "../../store/favorites/models";

export interface IProps {
  movies: IMovie[];
  favorites: IFavorites;
  onAddToFavorites: (movie: IMovie) => void;
  onRemoveFromFavorites: (movie: IMovie) => void;
}