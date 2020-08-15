jest.mock('../../../containers', () => ({
  MovieSearchResultsContainer: () => <div className='movie-search-results' />,
}))

jest.mock('../../../components', () => ({
  SearchBar: () => <div className='search-bar' />,
}))

import React from "react";
import { render, cleanup } from "@testing-library/react";
const mockMovieSearchResults = jest.requireMock('movieSearchResults');

import SearchPage from "./SearchPage";

describe('SearchPage', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <SearchPage resetMovieSearch={jest.fn()} movieSearchState={mockMovieSearchResults} searchMovies={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
})

