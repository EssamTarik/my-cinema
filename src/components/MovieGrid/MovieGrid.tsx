import React from 'react';
import MovieCard from '../MovieCard';
import { IProps } from './interfaces';
import './styles.css';

const MovieGrid = ({ movies }: IProps) => (
  <div className='movie-grid'>
    {movies.map(movie => <MovieCard onAddToFavorites={console.log} onAddToWatchLater={console.log} onRemoveFromFavorites={console.log} onRemoveFromWatchLater={console.log} key={movie.id} movie={movie} favorite={true} watchLater={true} />)}
  </div>
)

export default MovieGrid;