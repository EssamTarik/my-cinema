import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { IProps as MovieCardProps } from '../../components/MovieCard/interfaces';
import MovieGrid from "./MovieGrid";

jest.mock("../MovieCard", () => ({
  onAddToFavorites,
  onAddToWatchLater,
  onRemoveFromFavorites,
  onRemoveFromWatchLater
}: MovieCardProps) => (
    <div className="card">
      <div onClick={onAddToWatchLater} className='add-to-watch-later'></div>
      <div onClick={onRemoveFromWatchLater} className='remove-from-watch-later'></div>
      <div onClick={onAddToFavorites} className='add-to-favorites'></div>
      <div onClick={onRemoveFromFavorites} className='remove-from-favorites'></div>
    </div>
  ));
jest.mock("react-intl", () => ({ FormattedMessage: () => <div /> }));

const movieMock = jest.requireMock("movie");

describe("MovieGrid", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment, container } = render(
      <MovieGrid
        watchLater={{}}
        favorites={{}}
        onAddToWatchLater={jest.fn()}
        onRemoveFromWatchLater={jest.fn()}
        onAddToFavorites={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        movies={[movieMock]}
      />
    );
    const cards = container.querySelectorAll(".card");
    expect(cards.length).toEqual(1);
    expect(asFragment()).toMatchSnapshot();
  });

  it("returns no results message", () => {
    const { container } = render(
      <MovieGrid
        watchLater={{}}
        onAddToWatchLater={jest.fn()}
        onRemoveFromWatchLater={jest.fn()}
        favorites={{}}
        onAddToFavorites={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        movies={[]}
      />
    );
    const noResultsElement = container.querySelector(".movie-grid__no-results");
    expect(noResultsElement).not.toEqual(null);
  });

  it("adds/removes a watchlater item", () => {
    const mockAddToWatchLater = jest.fn();
    const mockRemoveFromWatchLater = jest.fn();

    const { container } = render(
      <MovieGrid
        watchLater={{}}
        onAddToWatchLater={mockAddToWatchLater}
        onRemoveFromWatchLater={mockRemoveFromWatchLater}
        favorites={{}}
        onAddToFavorites={jest.fn()}
        onRemoveFromFavorites={jest.fn()}
        movies={[movieMock]}
      />
    );

    const addToWatchLaterBtn = container.querySelector('.add-to-watch-later');
    const removeFromWatchLaterBtn = container.querySelector('.remove-from-watch-later');

    fireEvent.click(addToWatchLaterBtn!);
    expect(mockAddToWatchLater).toHaveBeenCalledWith(movieMock);

    fireEvent.click(removeFromWatchLaterBtn!);
    expect(mockRemoveFromWatchLater).toHaveBeenCalledWith(movieMock);
  });

  it("adds/removes a favorite item", () => {
    const mockAddToFavorites = jest.fn();
    const mockRemoveFromFavorites = jest.fn();

    const { container } = render(
      <MovieGrid
        watchLater={{}}
        onAddToWatchLater={jest.fn()}
        onRemoveFromWatchLater={jest.fn()}
        favorites={{}}
        onAddToFavorites={mockAddToFavorites}
        onRemoveFromFavorites={mockRemoveFromFavorites}
        movies={[movieMock]}
      />
    );

    const addToFavoriteBtn = container.querySelector('.add-to-favorites');
    const removeFromFavoriteBtn = container.querySelector('.remove-from-favorites');

    fireEvent.click(addToFavoriteBtn!);
    expect(mockAddToFavorites).toHaveBeenCalledWith(movieMock);

    fireEvent.click(removeFromFavoriteBtn!);
    expect(mockRemoveFromFavorites).toHaveBeenCalledWith(movieMock);
  });
});
