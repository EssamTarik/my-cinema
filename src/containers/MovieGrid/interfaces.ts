import { IMovie } from "../../store/movieSearch/models";
import { IFavorites } from "../../store/favorites/models";

export interface IProps {
  movies: IMovie[];
  favorites: IFavorites;
  addFavorite: (movie: IMovie) => void;
  removeFavorite: (movie: IMovie) => void;
}