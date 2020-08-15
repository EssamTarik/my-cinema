import React from 'react';
import { IProps } from './interfaces';
import { MovieGrid } from '../../components';

const MovieGridContainer = ({ movies }: IProps) => <MovieGrid movies={movies} />

export default MovieGridContainer;