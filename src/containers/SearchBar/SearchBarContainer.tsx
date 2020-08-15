import React, { useCallback } from 'react';
import debounce from 'lodash.debounce';
import { SearchBar } from '../../components';
import { IProps } from './interfaces';

const SearchBarContainer = ({ searchMovies }: IProps) => {
  const handleChange = debounce(useCallback((query: string) => searchMovies(query, 1), [searchMovies]), 300);

  return <SearchBar onChange={handleChange} />
}

export default SearchBarContainer;