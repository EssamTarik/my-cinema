import React from "react";
import { render, cleanup } from "@testing-library/react";

import MovieGridContainer from "./MovieGridContainer";

jest.mock("../../components", () => ({
  MovieGrid: () => <div className="movie-grid" />,
}));

const movieMock = jest.requireMock("movie");

describe("MovieGridContainer", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <MovieGridContainer
        addFavorite={jest.fn()}
        addWatchLater={jest.fn()}
        removeFavorite={jest.fn()}
        removeWatchLater={jest.fn()}
        watchLater={{ [movieMock.id]: movieMock }}
        favorites={{ [movieMock.id]: movieMock }}
        movies={[movieMock]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
