import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { MdWatchLater } from 'react-icons/md';
import { getTMDBImageURL } from '../../util';
import { IProps } from './interfaces';
import './styles.css';
import { FormattedMessage } from 'react-intl';

const moviePosterWidth = 185;
const watchLaterFillColor = 'grey';
const watchLaterActiveFillColor = 'yellow';
const starFillColor = 'yellow';


const MovieCard = ({ movie, favorite = false, watchLater = false, onAddToFavorites, onAddToWatchLater, onRemoveFromFavorites, onRemoveFromWatchLater }: IProps) => {
  const { poster_path: posterPath, original_title: originalTitle } = movie;

  return (
    <div className='movie-card'>
      <button onClick={favorite ? onRemoveFromFavorites : onAddToFavorites} className='movie-card__action-btn movie-card__fav-btn'>
        {favorite ? <AiFillStar fill={starFillColor} /> : <AiOutlineStar />}
      </button>

      <button onClick={watchLater ? onRemoveFromWatchLater : onAddToWatchLater} className='movie-card__action-btn movie-card__watch-later-btn'>
        {watchLater ? <MdWatchLater fill={watchLaterActiveFillColor} /> : <MdWatchLater fill={watchLaterFillColor} />}
      </button>

      {
        posterPath ?
          <img className='movie-card__poster' src={getTMDBImageURL(posterPath, moviePosterWidth)} alt={originalTitle} />
          : <div className='movie-card__poster-missing'><FormattedMessage id='movie.posterMissing' /></div>
      }

      <div className='movie-card__title'>{originalTitle}</div>
    </div>
  )
}

export default MovieCard;