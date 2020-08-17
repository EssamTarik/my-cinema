import React from "react";
import MovieGridContainer from "../MovieGrid";
import { IProps } from "./interfaces";

const MovieSearchResultsContainer = ({ movieSearchState }: IProps) => {
  const { isFetching, isFetched, data, error } = movieSearchState;
  if (isFetching || !isFetched || !data) {
    return null;
  }
  if (error) {
    return <div className="movie-search__error">{error}</div>;
  }

  const { results: movies } = data;
  return <MovieGridContainer movies={movies} />;
};

export default MovieSearchResultsContainer;
