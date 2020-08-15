import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { MdWatchLater } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';
import { MovieTrailerModalContainer } from '../../containers';
import { getTMDBImageURL } from '../../util';
import { IProps } from './interfaces';
import './styles.css';

const moviePosterWidth = 185;
const watchLaterFillColor = 'grey';
const watchLaterActiveFillColor = 'orange';
const starFillColor = 'lightgrey';
const starActiveFillColor = 'yellow';


const MovieCard = ({ movie, favorite = false, watchLater = false, onAddToFavorites, onAddToWatchLater, onRemoveFromFavorites, onRemoveFromWatchLater }: IProps) => {
  const [trailerModalOpen, setModalTrailerOpen] = useState(false);
  const { poster_path: posterPath, original_title: originalTitle } = movie;

  return (
    <>
      <div className='movie-card'>
        <button onClick={favorite ? onRemoveFromFavorites : onAddToFavorites} className='movie-card__action-btn movie-card__fav-btn'>
          {favorite ? <AiFillStar fill={starActiveFillColor} /> : <AiOutlineStar fill={starFillColor} />}
        </button>

        <button onClick={watchLater ? onRemoveFromWatchLater : onAddToWatchLater} className='movie-card__action-btn movie-card__watch-later-btn'>
          {watchLater ? <MdWatchLater fill={watchLaterActiveFillColor} /> : <MdWatchLater fill={watchLaterFillColor} />}
        </button>
        <div onClick={() => setModalTrailerOpen(true)} className='movie-card__content'>
          {
            posterPath ?
              <img className='movie-card__poster' src={getTMDBImageURL(posterPath, moviePosterWidth)} alt={originalTitle} />
              : <div className='movie-card__poster-missing'><FormattedMessage id='movie.posterMissing' /></div>
          }
        </div>
        <div className='movie-card__title'>{originalTitle}</div>

      </div>
      {trailerModalOpen && <MovieTrailerModalContainer movie={movie} onRequestClose={() => setModalTrailerOpen(false)} />}
    </>
  )
}

export default MovieCard;