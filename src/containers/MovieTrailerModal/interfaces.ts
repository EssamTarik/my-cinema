import { IMovie } from "../../store/movieSearch/models";
import { IMovieTrailerFetchState } from "../../store/movieTrailer/models";

export interface IProps {
  movie: IMovie;
  trailerState: IMovieTrailerFetchState;
  getMovieTrailer: (movieId: number) => void;
  onRequestClose: () => void;
  resetMovieTrailer: () => void;
}