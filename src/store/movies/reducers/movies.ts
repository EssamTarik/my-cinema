import { MOVIE_SEARCH_START, MOVIE_SEARCH_FAILURE, MOVIE_SEARCH_SUCCESS } from '../types';
import { IMoviesFetchState, MovieSearchAction } from '../models';


export const initialState: IMoviesFetchState = {
  isFetched: false,
  isFetching: false,
}

export default (state: IMoviesFetchState = initialState, action: MovieSearchAction): IMoviesFetchState => {
  switch (action.type) {
    case MOVIE_SEARCH_START:
      return { ...state, isFetching: true };
    case MOVIE_SEARCH_FAILURE:
      return { ...state, isFetched: false, isFetching: false, error: action.payload };
    case MOVIE_SEARCH_SUCCESS:
      return { ...state, isFetched: true, isFetching: false, data: action.payload };
    default:
      return state;
  }
}