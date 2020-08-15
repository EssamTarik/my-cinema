import { IMoviesFetchState } from "../../../store/movieSearch/models";

export interface IProps {
  movieSearchState: IMoviesFetchState;
  searchMovies: (query: string, page: number) => void;
}