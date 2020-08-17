import React, { useCallback } from "react";
import debounce from "lodash.debounce";
import { SearchBar, Pagination } from "../../../components";
import { MovieSearchResultsContainer } from "../../../containers";
import { IProps } from "./interfaces";
import "./styles.css";

const SearchPage = ({
  searchText,
  setSearchText,
  movieSearchState,
  searchMovies,
}: IProps) => {
  const searchMoviesDebounced = useCallback(debounce(searchMovies, 700), [
    searchMovies,
  ]);

  const handleSearchTextChange = useCallback(
    (text: string) => {
      setSearchText(text);
      searchMoviesDebounced(text, 1);
    },
    [setSearchText, searchMoviesDebounced]
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      searchMovies(searchText, newPage);
    },
    [searchText, searchMovies]
  );

  const { data: results } = movieSearchState;

  return (
    <div className="search-page">
      <div className="search-page__search-bar-container">
        <SearchBar value={searchText} onChange={handleSearchTextChange} />
      </div>
      <div className="search-page__search-results-container">
        <MovieSearchResultsContainer />
      </div>
      {results && results.total_pages > 0 && (
        <Pagination
          totalPages={results.total_pages}
          page={results.page}
          onNextClick={() => handlePageChange(results.page + 1)}
          onPreviousClick={() => handlePageChange(results.page - 1)}
        />
      )}
    </div>
  );
};

export default SearchPage;
