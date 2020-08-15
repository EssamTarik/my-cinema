import { MOVIE_SEARCH_START, MOVIE_SEARCH_FAILURE, MOVIE_SEARCH_SUCCESS, MOVIE_SEARCH_RESET } from '../types';
import { IMovieSearchResponse } from './IMovieSearchResponse';

export interface IMovieSearchStartAction {
  type: typeof MOVIE_SEARCH_START;
}

export interface IMovieSearchSuccessAction {
  type: typeof MOVIE_SEARCH_SUCCESS;
  payload: IMovieSearchResponse
}

export interface IMovieSearchFailureAction {
  type: typeof MOVIE_SEARCH_FAILURE;
  payload: string;
}

export interface IMovieSearchResetAction {
  type: typeof MOVIE_SEARCH_RESET;
}

export type MovieSearchAction = IMovieSearchStartAction | IMovieSearchFailureAction | IMovieSearchSuccessAction | IMovieSearchResetAction
