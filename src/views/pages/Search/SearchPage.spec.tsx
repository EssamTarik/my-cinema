import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { IProps as SearchBarProps } from '../../../components/SearchBar/interfaces';
import { IProps as PaginationProps } from '../../../components/Pagination/interfaces';
import SearchPage from "./SearchPage";

jest.mock('lodash.debounce', () => (func: any) => func)
jest.mock("../../../containers", () => ({
  MovieSearchResultsContainer: () => <div className="movie-search-results" />,
}));

jest.mock("../../../components", () => ({
  SearchBar: ({ onChange }: SearchBarProps) => (
    <div className="search-bar">
      <input
        onChange={({ target: { value } }) => { onChange(value) }}
        className='search-bar__input'
      />
    </div>
  ),
  Pagination: ({ onNextClick, onPreviousClick }: PaginationProps) => (
    <div>
      <button onClick={onNextClick} className='next-page'></button>
      <button onClick={onPreviousClick} className='prev-page'></button>
    </div>
  )
}));
const mockMovieSearchResults = jest.requireMock("movieSearchResults");

describe("SearchPage", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <SearchPage
        movieSearchState={mockMovieSearchResults}
        searchMovies={jest.fn()}
        searchText=''
        setSearchText={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls setSearchText with new search text', () => {
    const mockSetSearchText = jest.fn();
    const { container } = render(
      <SearchPage
        movieSearchState={mockMovieSearchResults}
        searchMovies={jest.fn()}
        searchText=''
        setSearchText={mockSetSearchText}
      />
    );
    const value = 'newText';
    const input = container.querySelector('input');
    fireEvent.change(input!, { target: { value } })
    expect(mockSetSearchText).toHaveBeenCalledWith(value);
  })

  it('calls searchMovies with new search text and page=1', () => {
    const mockSearchMovies = jest.fn();
    const { container } = render(
      <SearchPage
        movieSearchState={mockMovieSearchResults}
        searchMovies={mockSearchMovies}
        searchText=''
        setSearchText={jest.fn()}
      />
    );
    const value = 'newText';
    const input = container.querySelector('input');
    fireEvent.change(input!, { target: { value } })
    expect(mockSearchMovies).toHaveBeenCalledWith(value, 1);
  })

  it('calls searchMovies with same search text and new page', () => {
    const mockSearchMovies = jest.fn();
    const searchText = 'movie';
    const currentPage = 2;

    const { container } = render(
      <SearchPage
        movieSearchState={{ ...mockMovieSearchResults, data: { page: currentPage, total_pages: 10 } }}
        searchMovies={mockSearchMovies}
        searchText={searchText}
        setSearchText={jest.fn()}
      />
    );
    const nextPageBtn = container.querySelector('button.next-page');
    const prevPageBtn = container.querySelector('button.prev-page');
    fireEvent.click(nextPageBtn!);
    expect(mockSearchMovies).toHaveBeenLastCalledWith(searchText, currentPage + 1);

    fireEvent.click(prevPageBtn!);
    expect(mockSearchMovies).toHaveBeenLastCalledWith(searchText, currentPage - 1);
  })
});
