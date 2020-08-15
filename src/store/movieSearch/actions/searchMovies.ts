import { Dispatch } from 'redux';
import { searchMovies } from '../../../services';
import { MOVIE_SEARCH_START, MOVIE_SEARCH_SUCCESS, MOVIE_SEARCH_FAILURE, MOVIE_SEARCH_RESET } from '../types';
import { IMovieSearchStartAction, IMovieSearchFailureAction, IMovieSearchSuccessAction, IMovieSearchResetAction } from '../models/IMovieSearchActions';
import { IMovieSearchResponse } from '../models';

const movieSearchStart = (): IMovieSearchStartAction => ({ type: MOVIE_SEARCH_START });
const movieSearchFailure = (errorMsg: string): IMovieSearchFailureAction => ({ type: MOVIE_SEARCH_FAILURE, payload: errorMsg });
const movieSearchSuccess = (data: IMovieSearchResponse): IMovieSearchSuccessAction => ({ type: MOVIE_SEARCH_SUCCESS, payload: data });
const movieSearchReset = (): IMovieSearchResetAction => ({ type: MOVIE_SEARCH_RESET });

export default (query: string, page: number) => async (dispatch: Dispatch) => {
  dispatch(movieSearchStart());

  if (!query) {
    return dispatch(movieSearchReset())
  }

  try {
    const response = await searchMovies(query, page);
    dispatch(movieSearchSuccess(response));
  } catch (error) {
    const { message } = error as Error;
    dispatch(movieSearchFailure(message));
  }
}