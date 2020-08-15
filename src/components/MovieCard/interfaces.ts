import { IMovie } from "../../store/movieSearch/models";

export interface IProps {
  movie: IMovie;
  favorite?: boolean;
  watchLater?: boolean
  onAddToFavorites: () => void;
  onRemoveFromFavorites: () => void;
  onAddToWatchLater: () => void;
  onRemoveFromWatchLater: () => void;
}