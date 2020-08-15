import React from 'react';
import { MovieSearchResultsContainer, SearchBarContainer } from '../../../containers';
import './styles.css';

const SearchPage = () => (
  <div className='search-page'>
    <div className='search-page__search-bar-container'>
      <SearchBarContainer />
    </div>
    <div className='search-page__search-results-container'>
      <MovieSearchResultsContainer />
    </div>
  </div>
);

export default SearchPage;