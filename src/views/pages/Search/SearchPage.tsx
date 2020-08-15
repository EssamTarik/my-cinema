import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { SearchBar, Pagination } from '../../../components';
import { MovieSearchResultsContainer } from '../../../containers';
import { IProps } from './interfaces';
import './styles.css';

const SearchPage = ({ movieSearchState, searchMovies }: IProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const getMovies = useCallback((query: string, page: number) => {
    searchMovies(query, page);
  }, [searchMovies])

  const handleSearchTermChange = useCallback(debounce((text: string) => {
    setSearchTerm(text);
    getMovies(text, 1);
  }, 700), [setSearchTerm, getMovies])

  const handlePageChange = useCallback((newPage: number) => {
    getMovies(searchTerm, newPage);
  }, [searchTerm, getMovies])

  const { data: results } = movieSearchState;

  return (
    <div className='search-page'>
      <div className='search-page__search-bar-container'>
        <SearchBar onChange={handleSearchTermChange} />
      </div>
      <div className='search-page__search-results-container'>
        <MovieSearchResultsContainer />
      </div>
      {
        results && results.total_pages > 0 && (
          <Pagination
            totalPages={results.total_pages}
            page={results.page}
            onNextClick={() => handlePageChange(results.page + 1)}
            onPreviousClick={() => handlePageChange(results.page - 1)}
          />
        )
      }
    </div>
  )
};

export default SearchPage;