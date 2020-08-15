import { IMovieSearchResponse } from "./IMovieSearchResponse";

export interface IMoviesFetchState {
  isFetching: boolean;
  isFetched: boolean;
  error?: string;
  data?: IMovieSearchResponse;
}