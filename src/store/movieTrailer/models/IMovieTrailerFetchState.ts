import { IMovieTrailer } from "./IMovieTrailer";

export interface IMovieTrailerFetchState {
  isFetching: boolean;
  isFetched: boolean;
  error?: string;
  data?: IMovieTrailer;
}