import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Modal, MovieTrailer } from "../../components";
import { IProps } from "./interfaces";
import "./styles.css";

const MovieTrailerModalContainer = ({
  resetMovieTrailer,
  onRequestClose,
  movie: { id: movieId },
  trailerState: { data: trailer, error, isFetched },
  getMovieTrailer,
}: IProps) => {
  useEffect(() => {
    getMovieTrailer(movieId);
  }, [movieId, getMovieTrailer]);

  useEffect(() => {
    return () => {
      resetMovieTrailer();
    };
  }, [resetMovieTrailer]);

  const noVideos = isFetched && !trailer;
  return (
    <Modal onRequestClose={onRequestClose}>
      {(noVideos || error) && (
        <div className="movie-trailer-modal__not-found">
          <FormattedMessage id="movieTrailer.notFound" />
        </div>
      )}
      {trailer && <MovieTrailer trailer={trailer} />}
    </Modal>
  );
};

export default MovieTrailerModalContainer;
