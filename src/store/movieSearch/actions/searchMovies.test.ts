const mockDispatch = jest.fn();
const mockSearchMoviesAPICall = jest.fn();
jest.mock('../../../services', () => ({ searchMovies: mockSearchMoviesAPICall }))
const { default: searchMoviesAction } = require('./searchMovies');
import { MOVIE_SEARCH_SUCCESS, MOVIE_SEARCH_FAILURE, MOVIE_SEARCH_START, MOVIE_SEARCH_RESET } from '../types';
import { IMovieSearchResetAction } from '../models';

describe('searchMovies action', () => {
  const query = 'movie';
  const page = 2;

  afterEach(() => {
    mockSearchMoviesAPICall.mockRestore();
    mockDispatch.mockRestore();
  });

  it('calls search movies api with correct parameters', () => {
    searchMoviesAction(query, page)(mockDispatch);
    expect(mockSearchMoviesAPICall).toHaveBeenCalledWith(query, page);
  })

  it('dispatches success', async () => {
    const mockResponse = { success: true };
    mockSearchMoviesAPICall.mockReturnValue(Promise.resolve(mockResponse));
    await searchMoviesAction(query, page)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2)
    expect(mockDispatch).toHaveBeenCalledWith({ type: MOVIE_SEARCH_SUCCESS, payload: mockResponse });
  })

  it('dispatches failure', async () => {
    const mockErrorMessage = 'failed';
    mockSearchMoviesAPICall.mockImplementation(() => { throw new Error(mockErrorMessage) });
    await searchMoviesAction(query, page)(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledTimes(2)
    expect(mockDispatch).toHaveBeenCalledWith({ type: MOVIE_SEARCH_FAILURE, payload: mockErrorMessage });
  })

  it('dispatches reset on empty string', async () => {
    const expectedAction: IMovieSearchResetAction = { type: MOVIE_SEARCH_RESET };
    await searchMoviesAction('', 1)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
  })
})