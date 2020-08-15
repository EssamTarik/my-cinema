const mockDispatch = jest.fn();
const mockSearchMoviesAPICall = jest.fn();
jest.mock('../../../services', () => ({ searchMovies: mockSearchMoviesAPICall }))
const { default: searchMoviesAction } = require('./searchMovies');
import { MOVIE_SEARCH_SUCCESS, MOVIE_SEARCH_FAILURE, MOVIE_SEARCH_START } from '../types';

describe('searchMovies action', () => {
  const query = 'movie';
  const page = 2;

  afterEach(() => {
    mockSearchMoviesAPICall.mockRestore();
    mockDispatch.mockRestore();
  });

  it('Calls search movies api with correct parameters', () => {
    searchMoviesAction(query, page)(mockDispatch);
    expect(mockSearchMoviesAPICall).toHaveBeenCalledWith(query, page);
  })

  it('Dispatches success', async () => {
    const mockResponse = { success: true };
    mockSearchMoviesAPICall.mockReturnValue(Promise.resolve(mockResponse));
    await searchMoviesAction(query, page)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2)
    expect(mockDispatch).toHaveBeenCalledWith({ type: MOVIE_SEARCH_SUCCESS, payload: mockResponse });
  })

  it('Dispatches failure', async () => {
    const mockErrorMessage = 'failed';
    mockSearchMoviesAPICall.mockImplementation(() => { throw new Error(mockErrorMessage) });
    await searchMoviesAction(query, page)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2)
    expect(mockDispatch).toHaveBeenCalledWith({ type: MOVIE_SEARCH_FAILURE, payload: mockErrorMessage });
  })
})