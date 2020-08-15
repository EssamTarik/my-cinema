import React from 'react';
import MovieCard from '../MovieCard';
import { IProps } from './interfaces';
import './styles.css';
import { FormattedMessage } from 'react-intl';

const MovieGrid = ({ movies, favorites, onAddToFavorites, onRemoveFromFavorites }: IProps) => {
  if (movies.length === 0) {
    return <div className='movie-grid__no-results'><FormattedMessage id='movie.noResults' /></div>
  }
  return (
    <div className='movie-grid'>
      {
        movies.map(movie => {
          const isFavorite = favorites[movie.id] !== undefined;
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              favorite={isFavorite}
              watchLater={true}
              onAddToFavorites={() => onAddToFavorites(movie)}
              onAddToWatchLater={console.log}
              onRemoveFromFavorites={() => onRemoveFromFavorites(movie)}
              onRemoveFromWatchLater={console.log}
            />
          )
        })
      }
    </div>
  )
}

export default MovieGrid;