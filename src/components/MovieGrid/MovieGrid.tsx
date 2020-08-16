import React from 'react';
import { FormattedMessage } from 'react-intl';
import MovieCard from '../MovieCard';
import { IProps } from './interfaces';
import './styles.css';

const MovieGrid = ({ movies, favorites, watchLater, onAddToFavorites, onRemoveFromFavorites, onAddToWatchLater, onRemoveFromWatchLater }: IProps) => {
  if (movies.length === 0) {
    return <div className='movie-grid__no-results'><FormattedMessage id='movie.noResults' /></div>
  }
  return (
    <div className='movie-grid'>
      {
        movies.map(movie => {
          const isFavorite = favorites[movie.id] !== undefined;
          const isWatchLater = watchLater[movie.id] !== undefined;
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              favorite={isFavorite}
              watchLater={isWatchLater}
              onAddToFavorites={() => onAddToFavorites(movie)}
              onAddToWatchLater={() => onAddToWatchLater(movie)}
              onRemoveFromFavorites={() => onRemoveFromFavorites(movie)}
              onRemoveFromWatchLater={() => onRemoveFromWatchLater(movie)}
            />
          )
        })
      }
    </div>
  )
}

export default MovieGrid;