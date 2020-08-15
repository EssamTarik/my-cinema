import { Dispatch } from 'redux';
import { getMovieTrailers } from '../../../services';
import { IMovieTrailerFetchStartAction, IMovieTrailerFetchFailureAction, IMovieTrailer, IMovieTrailerFetchSuccessAction } from '../models';
import { MOVIE_TRAILER_FETCH_START, MOVIE_TRAILER_FETCH_FAILURE, MOVIE_TRAILER_FETCH_SUCCESS } from '../types';

const getMovieTrailerStart = (): IMovieTrailerFetchStartAction => ({
  type: MOVIE_TRAILER_FETCH_START
})
const getMovieTrailerFailure = (error: string): IMovieTrailerFetchFailureAction => ({
  type: MOVIE_TRAILER_FETCH_FAILURE,
  payload: error
})
const getMovieTrailerSuccess = (data: IMovieTrailer): IMovieTrailerFetchSuccessAction => ({
  type: MOVIE_TRAILER_FETCH_SUCCESS,
  payload: data
})

export default (movieId: number) => async (dispatch: Dispatch) => {
  dispatch(getMovieTrailerStart());

  try {
    const response = await getMovieTrailers(movieId);
    const { youtube } = response;
    const trailer = youtube[0];
    dispatch(getMovieTrailerSuccess(trailer));
  } catch (e) {
    const { message } = e as Error;
    dispatch(getMovieTrailerFailure(message));
  }
}