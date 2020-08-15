import React from 'react';
import MovieCard from '../MovieCard';
import { IProps } from './interfaces';
import './styles.css';

const MovieGrid = ({ movies, favorites, onAddToFavorites, onRemoveFromFavorites }: IProps) => (
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

export default MovieGrid;