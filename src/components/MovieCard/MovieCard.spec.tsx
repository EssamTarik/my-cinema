import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { IProps as MovieTrailerModalContainerProps } from '../../containers/MovieTrailerModal/interfaces';

import MovieCard from "./MovieCard";

jest.mock("react-intl", () => ({
  useIntl: () => ({ formatMessage: () => "" }),
  FormattedMessage: () => <div />,
}));
jest.mock("../../containers", () => ({
  MovieTrailerModalContainer: ({ onRequestClose }: MovieTrailerModalContainerProps) => (
    <div className="modal">
      <button onClick={onRequestClose} className='close-modal'></button>
    </div>
  ),
}));

const movieMock = jest.requireMock("movie");

describe("MovieCard", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <MovieCard
        movie={movieMock}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={jest.fn}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("adds movie to favorites", () => {
    const mockAddToFavorites = jest.fn();

    const { container } = render(
      <MovieCard
        movie={movieMock}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={mockAddToFavorites}
      />
    );
    const favoriteBtn = container.querySelector(".movie-card__fav-btn");
    fireEvent.click(favoriteBtn!);
    expect(mockAddToFavorites).toHaveBeenCalled();
  });

  it("removes movie from favorites", () => {
    const mockRemoveFromFavorites = jest.fn();

    const { container } = render(
      <MovieCard
        movie={movieMock}
        favorite
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={mockRemoveFromFavorites}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={jest.fn()}
      />
    );
    const favoriteBtn = container.querySelector(".movie-card__fav-btn");
    fireEvent.click(favoriteBtn!);
    expect(mockRemoveFromFavorites).toHaveBeenCalled();
  });

  it("adds movie to watch later", () => {
    const mockAddToWatchLater = jest.fn();

    const { container } = render(
      <MovieCard
        movie={movieMock}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={mockAddToWatchLater}
        onAddToFavorites={jest.fn()}
      />
    );
    const watchLaterBtn = container.querySelector(
      ".movie-card__watch-later-btn"
    );
    fireEvent.click(watchLaterBtn!);
    expect(mockAddToWatchLater).toHaveBeenCalled();
  });

  it("removes movie from watch later", () => {
    const mockRemoveFromWatchLater = jest.fn();

    const { container } = render(
      <MovieCard
        movie={movieMock}
        watchLater
        onRemoveFromWatchLater={mockRemoveFromWatchLater}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={jest.fn()}
      />
    );
    const watchLaterBtn = container.querySelector(
      ".movie-card__watch-later-btn"
    );
    fireEvent.click(watchLaterBtn!);
    expect(mockRemoveFromWatchLater).toHaveBeenCalled();
  });

  it("renders placeholder if no poster", () => {
    const { container } = render(
      <MovieCard
        movie={{ ...movieMock, poster_path: null }}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={jest.fn()}
      />
    );
    const posterPlaceholder = container.querySelector(
      ".movie-card__poster-missing"
    );
    expect(posterPlaceholder).not.toEqual(null);
  });

  it("opens and closes trailer modal", () => {
    const { container } = render(
      <MovieCard
        movie={{ ...movieMock, poster_path: null }}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={jest.fn()}
      />
    );
    const movieCardContent = container.querySelector(".movie-card__content");
    fireEvent.click(movieCardContent!);

    let modal = container.querySelector(".modal");
    expect(modal).not.toEqual(null);

    const modalCloseBtn = container.querySelector('.close-modal');
    fireEvent.click(modalCloseBtn!)

    modal = container.querySelector(".modal");
    expect(modal).toEqual(null);
  });
});
