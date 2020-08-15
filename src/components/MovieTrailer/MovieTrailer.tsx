import React from 'react';
import Youtube from 'react-youtube'
import { IProps } from './interfaces';
import './styles.css';

const MovieTrailer = ({ trailer }: IProps) => {
  const { source } = trailer;
  return (
    <div className='movie-trailer'>
      <Youtube opts={{ width: '100%' }} videoId={source} />
    </div>
  )
}

export default MovieTrailer;