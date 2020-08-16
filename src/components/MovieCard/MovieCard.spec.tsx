jest.mock('react-intl', () => ({ FormattedMessage: () => <div /> }));
jest.mock('../../containers', () => ({ MovieTrailerModalContainer: () => <div className='modal' /> }))
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

const movieMock = jest.requireMock('movie');

import MovieCard from "./MovieCard";

describe('MovieCard', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <MovieCard
        movie={movieMock}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={jest.fn} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('adds movie to favorites', () => {
    const mockAddToFavorites = jest.fn();

    const { container } = render(
      <MovieCard
        movie={movieMock}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={mockAddToFavorites} />
    );
    const favoriteBtn = container.querySelector('.movie-card__fav-btn');
    fireEvent.click(favoriteBtn!);
    expect(mockAddToFavorites).toHaveBeenCalled();
  });

  it('removes movie from favorites', () => {
    const mockRemoveFromFavorites = jest.fn();

    const { container } = render(
      <MovieCard
        movie={movieMock}
        favorite={true}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={mockRemoveFromFavorites}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={jest.fn()} />
    );
    const favoriteBtn = container.querySelector('.movie-card__fav-btn');
    fireEvent.click(favoriteBtn!);
    expect(mockRemoveFromFavorites).toHaveBeenCalled();
  });

  it('adds movie to watch later', () => {
    const mockAddToWatchLater = jest.fn();

    const { container } = render(
      <MovieCard
        movie={movieMock}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={mockAddToWatchLater}
        onAddToFavorites={jest.fn()} />
    );
    const watchLaterBtn = container.querySelector('.movie-card__watch-later-btn');
    fireEvent.click(watchLaterBtn!);
    expect(mockAddToWatchLater).toHaveBeenCalled();
  })

  it('removes movie from watch later', () => {
    const mockRemoveFromWatchLater = jest.fn();

    const { container } = render(
      <MovieCard
        movie={movieMock}
        watchLater={true}
        onRemoveFromWatchLater={mockRemoveFromWatchLater}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={jest.fn()} />
    );
    const watchLaterBtn = container.querySelector('.movie-card__watch-later-btn');
    fireEvent.click(watchLaterBtn!);
    expect(mockRemoveFromWatchLater).toHaveBeenCalled();
  })

  it('renders placeholder if no poster', () => {
    const { container } = render(
      <MovieCard
        movie={{ ...movieMock, poster_path: null }}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={jest.fn()} />
    );
    const posterPlaceholder = container.querySelector('.movie-card__poster-missing');
    expect(posterPlaceholder).not.toEqual(null);
  })

  it('opens trailer modal', () => {
    const { container } = render(
      <MovieCard
        movie={{ ...movieMock, poster_path: null }}
        onRemoveFromWatchLater={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        onAddToWatchLater={jest.fn()}
        onAddToFavorites={jest.fn()} />
    );
    const movieCardContent = container.querySelector('.movie-card__content');
    fireEvent.click(movieCardContent!);

    const modal = container.querySelector('.modal');
    expect(modal).not.toEqual(null);
  })
})

