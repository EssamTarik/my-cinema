import movieTrailerReducer, { initialState } from './movieTrailerReducer';
import { IMovieTrailerFetchFailureAction, IMovieTrailerFetchStartAction, IMovieTrailerFetchSuccessAction, IMovieTrailerResetAction } from '../models';
import { MOVIE_TRAILER_FETCH_FAILURE, MOVIE_TRAILER_FETCH_SUCCESS, MOVIE_TRAILER_FETCH_START, MOVIE_TRAILER_FETCH_RESET } from '../types';

describe('movie trailer reducer', () => {
  it('returns movie trailer fetch start state', () => {
    const expectedState = { ...initialState, isFetching: true };
    const action: IMovieTrailerFetchStartAction = { type: MOVIE_TRAILER_FETCH_START };

    const state = movieTrailerReducer(initialState, action);
    expect(state).toEqual(expectedState);
  })

  it('returns movie trailer fetch failure state', () => {
    const errorMessage = 'error';
    const expectedState = { ...initialState, isFetched: false, isFetching: false, error: errorMessage };
    const action: IMovieTrailerFetchFailureAction = { type: MOVIE_TRAILER_FETCH_FAILURE, payload: errorMessage };

    const state = movieTrailerReducer(initialState, action);
    expect(state).toEqual(expectedState);
  })

  it('returns movie trailer fetch success state', () => {
    const data = {} as any;
    const expectedState = { ...initialState, data, isFetched: true, isFetching: false };
    const action: IMovieTrailerFetchSuccessAction = { type: MOVIE_TRAILER_FETCH_SUCCESS, payload: data };

    const state = movieTrailerReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('returns default state with irrelevant actions', () => {
    const expectedState = initialState;
    const action = { type: 'WRONG_ACTION' };

    const state = movieTrailerReducer(initialState, action as any);
    expect(state).toEqual(expectedState);
  });

})