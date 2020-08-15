jest.mock('../../../containers', () => ({
  MovieSearchResultsContainer: () => <div className='movie-search-results' />,
  SearchBarContainer: () => <div className='search-bar-container' />
}))

import React from "react";
import { render, cleanup } from "@testing-library/react";

import SearchPage from "./SearchPage";

describe('SearchPage', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <SearchPage />
    );
    expect(asFragment()).toMatchSnapshot();
  });
})

