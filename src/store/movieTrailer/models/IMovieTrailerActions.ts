import { MOVIE_TRAILER_FETCH_START, MOVIE_TRAILER_FETCH_SUCCESS, MOVIE_TRAILER_FETCH_FAILURE, MOVIE_TRAILER_FETCH_RESET } from '../types';
import { IMovieTrailer } from './IMovieTrailer';
import { IMovieSearchResetAction } from '../../movieSearch/models';

export interface IMovieTrailerFetchStartAction {
  type: typeof MOVIE_TRAILER_FETCH_START;
}

export interface IMovieTrailerFetchSuccessAction {
  type: typeof MOVIE_TRAILER_FETCH_SUCCESS;
  payload: IMovieTrailer;
}

export interface IMovieTrailerFetchFailureAction {
  type: typeof MOVIE_TRAILER_FETCH_FAILURE;
  payload: string;
}

export interface IMovieTrailerResetAction {
  type: typeof MOVIE_TRAILER_FETCH_RESET;
}
export type MovieTrailerActions = IMovieTrailerFetchStartAction | IMovieTrailerFetchSuccessAction | IMovieTrailerFetchFailureAction | IMovieTrailerResetAction