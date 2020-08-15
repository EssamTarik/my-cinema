import React from 'react';
import { IProps } from './interfaces';
import { MovieGrid } from '../../components';

const MovieGridContainer = ({ movies, favorites, addFavorite, removeFavorite }: IProps) => (
  <MovieGrid
    favorites={favorites}
    onAddToFavorites={addFavorite}
    onRemoveFromFavorites={removeFavorite}
    movies={movies}
  />
);

export default MovieGridContainer;