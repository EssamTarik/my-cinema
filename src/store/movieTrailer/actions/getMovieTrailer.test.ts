const mockDispatch = jest.fn();
const mockGetMovieTrailerAPICall = jest.fn();
jest.mock('../../../services', () => ({ getMovieTrailers: mockGetMovieTrailerAPICall }))
const { default: getMovieTrailerAction } = require('./getMovieTrailer');
import { MOVIE_TRAILER_FETCH_FAILURE, MOVIE_TRAILER_FETCH_SUCCESS } from '../types';

describe('searchMovies action', () => {
  const movieId = 100;

  afterEach(() => {
    mockGetMovieTrailerAPICall.mockRestore();
    mockDispatch.mockRestore();
  });

  it('Calls get movie trailer api with correct parameters', () => {
    getMovieTrailerAction(movieId)(mockDispatch);
    expect(mockGetMovieTrailerAPICall).toHaveBeenCalledWith(movieId);
  })

  it('Dispatches success', async () => {
    const mockResponse = { youtube: [{ test: true }] };
    mockGetMovieTrailerAPICall.mockReturnValue(Promise.resolve(mockResponse));
    await getMovieTrailerAction(movieId)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2)
    expect(mockDispatch).toHaveBeenCalledWith({ type: MOVIE_TRAILER_FETCH_SUCCESS, payload: mockResponse.youtube[0] });
  })

  it('Dispatches failure', async () => {
    const mockErrorMessage = 'failed';
    mockGetMovieTrailerAPICall.mockImplementation(() => { throw new Error(mockErrorMessage) });
    await getMovieTrailerAction(movieId)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2)
    expect(mockDispatch).toHaveBeenCalledWith({ type: MOVIE_TRAILER_FETCH_FAILURE, payload: mockErrorMessage });
  })
})