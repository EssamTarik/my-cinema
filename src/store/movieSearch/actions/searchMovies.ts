import { Dispatch } from 'redux';
import { searchMovies } from '../../../services';
import { MOVIE_SEARCH_START, MOVIE_SEARCH_SUCCESS, MOVIE_SEARCH_FAILURE } from '../types';
import { IMovieSearchStartAction, IMovieSearchFailureAction, IMovieSearchSuccessAction } from '../models/IMovieSearchActions';
import resetMovieSearch from './resetMovieSearch';
import { IMovieSearchResponse } from '../models';

const movieSearchStart = (): IMovieSearchStartAction => ({ type: MOVIE_SEARCH_START });
const movieSearchFailure = (errorMsg: string): IMovieSearchFailureAction => ({ type: MOVIE_SEARCH_FAILURE, payload: errorMsg });
const movieSearchSuccess = (data: IMovieSearchResponse): IMovieSearchSuccessAction => ({ type: MOVIE_SEARCH_SUCCESS, payload: data });

export default (query: string, page: number) => async (dispatch: Dispatch) => {
  dispatch(movieSearchStart());

  if (!query) {
    return dispatch(resetMovieSearch())
  }

  try {
    const response = await searchMovies(query, page);
    dispatch(movieSearchSuccess(response));
  } catch (error) {
    const { message } = error as Error;
    dispatch(movieSearchFailure(message));
  }
}