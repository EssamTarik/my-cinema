jest.mock('../MovieGrid', () => () => <div className='movie-grid'>movie grid</div>)

import React from "react";
import { render, cleanup } from "@testing-library/react";

const movieSearchResultsMock = jest.requireMock('movieSearchResults');

import MovieSearchResultsContainer from "./MovieSearchResultsContainer";

describe('MovieSearchResultsContainer', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <MovieSearchResultsContainer movieSearchState={{ isFetched: true, isFetching: false, data: movieSearchResultsMock }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("returns null if no results", () => {
    let { container } = render(
      <MovieSearchResultsContainer movieSearchState={{ isFetched: false, isFetching: true }} />
    );
    let resultGrid = container.querySelector('.movie-grid');
    expect(resultGrid).toEqual(null)

    container = render(
      <MovieSearchResultsContainer movieSearchState={{ isFetched: true, isFetching: false, data: undefined }} />
    ).container;

    resultGrid = container.querySelector('.movie-grid');
    expect(resultGrid).toEqual(null)


    container = render(
      <MovieSearchResultsContainer movieSearchState={{ isFetched: true, isFetching: false, data: movieSearchResultsMock, error: 'error' }} />
    ).container;

    resultGrid = container.querySelector('.movie-grid');
    expect(resultGrid).toEqual(null)
  });

  it('returns movie grid with valid results', () => {
    const { container } = render(
      <MovieSearchResultsContainer movieSearchState={{ isFetched: true, isFetching: false, data: movieSearchResultsMock }} />
    );

    const resultGrid = container.querySelector('.movie-grid');
    expect(resultGrid).not.toEqual(null)
  })
})

