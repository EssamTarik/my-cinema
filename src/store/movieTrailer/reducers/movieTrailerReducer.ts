import { MOVIE_TRAILER_FETCH_SUCCESS, MOVIE_TRAILER_FETCH_FAILURE, MOVIE_TRAILER_FETCH_START, MOVIE_TRAILER_FETCH_RESET } from '../types';
import { IMovieTrailerFetchState, MovieTrailerActions } from '../models';


export const initialState: IMovieTrailerFetchState = {
  isFetched: false,
  isFetching: false,
}

export default (state: IMovieTrailerFetchState = initialState, action: MovieTrailerActions): IMovieTrailerFetchState => {
  switch (action.type) {
    case MOVIE_TRAILER_FETCH_START:
      return { ...initialState, isFetching: true };
    case MOVIE_TRAILER_FETCH_FAILURE:
      return { ...initialState, isFetched: false, isFetching: false, error: action.payload };
    case MOVIE_TRAILER_FETCH_SUCCESS:
      return { ...initialState, isFetched: true, isFetching: false, data: action.payload };
    case MOVIE_TRAILER_FETCH_RESET:
      return initialState;
    default:
      return state;
  }
}