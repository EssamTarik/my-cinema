import resetMovieTrailer from './resetMovieTrailer';
import { MOVIE_TRAILER_FETCH_RESET } from '../types';

describe('resetMovieTrailer', () => {
  it('returns a reset action', () => {
    expect(resetMovieTrailer()).toEqual({
      type: MOVIE_TRAILER_FETCH_RESET
    })
  })
})