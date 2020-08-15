import resetMovieSearch from './resetMovieSearch';
import { MOVIE_SEARCH_RESET } from '../types';

describe('resetMovieSearch', () => {
  it('returns a reset action', () => {
    expect(resetMovieSearch()).toEqual({
      type: MOVIE_SEARCH_RESET
    })
  })
})