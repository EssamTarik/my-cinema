import React from 'react';
import { IProps } from './interfaces';
import { MovieGrid } from '../../components';

const MovieGridContainer = ({ movies, favorites, watchLater, addFavorite, removeFavorite, addWatchLater, removeWatchLater }: IProps) => (
  <MovieGrid
    movies={movies}
    favorites={favorites}
    watchLater={watchLater}
    onAddToFavorites={addFavorite}
    onRemoveFromFavorites={removeFavorite}
    onAddToWatchLater={addWatchLater}
    onRemoveFromWatchLater={removeWatchLater}
  />
);

export default MovieGridContainer;