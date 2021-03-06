import { MOVIE_SEARCH_START, MOVIE_SEARCH_FAILURE, MOVIE_SEARCH_SUCCESS, MOVIE_SEARCH_RESET } from '../types';
import { IMoviesFetchState, MovieSearchAction } from '../models';


export const initialState: IMoviesFetchState = {
  isFetched: false,
  isFetching: false,
}

export default (state: IMoviesFetchState = initialState, action: MovieSearchAction): IMoviesFetchState => {
  switch (action.type) {
    case MOVIE_SEARCH_START:
      return { ...initialState, isFetching: true };
    case MOVIE_SEARCH_FAILURE:
      return { ...initialState, isFetched: false, isFetching: false, error: action.payload };
    case MOVIE_SEARCH_SUCCESS:
      return { ...initialState, isFetched: true, isFetching: false, data: action.payload };
    case MOVIE_SEARCH_RESET:
      return initialState;
    default:
      return state;
  }
}