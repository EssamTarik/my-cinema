import moviesReducer, { initialState } from './movieSearch';
import { IMovieSearchStartAction, IMovieSearchFailureAction, IMovieSearchSuccessAction } from '../models';
import { MOVIE_SEARCH_START, MOVIE_SEARCH_FAILURE, MOVIE_SEARCH_SUCCESS } from '../types';

describe('movies reducer', () => {
  it('returns search start state', () => {
    const expectedState = { ...initialState, isFetching: true };
    const action: IMovieSearchStartAction = { type: MOVIE_SEARCH_START };

    const state = moviesReducer(initialState, action);
    expect(state).toEqual(expectedState);
  })

  it('returns search failure state', () => {
    const errorMessage = 'error';
    const expectedState = { ...initialState, isFetched: false, isFetching: false, error: errorMessage };
    const action: IMovieSearchFailureAction = { type: MOVIE_SEARCH_FAILURE, payload: errorMessage };

    const state = moviesReducer(initialState, action);
    expect(state).toEqual(expectedState);
  })

  it('returns search success state', () => {
    const data = {} as any;
    const expectedState = { ...initialState, data, isFetched: true, isFetching: false };
    const action: IMovieSearchSuccessAction = { type: MOVIE_SEARCH_SUCCESS, payload: data };

    const state = moviesReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('returns default state', () => {
    const expectedState = initialState;
    const action = { type: 'WRONG_ACTION' };

    const state = moviesReducer(initialState, action as any);
    expect(state).toEqual(expectedState);
  });

})