import React from "react";
import { render, cleanup } from "@testing-library/react";

import MovieTrailerModal from "./MovieTrailerModal";

jest.mock("../../components", () => ({
  Modal: ({
    children,
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) => <div>{children}</div>,
  MovieTrailer: () => <div />,
}));
jest.mock("react-intl", () => ({ FormattedMessage: () => <div /> }));
const mockMovie = jest.requireMock("movie");
const mockTrailerResult = jest.requireMock("trailerResult");

describe("MovieSearchResultsContainer", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <MovieTrailerModal
        movie={mockMovie}
        trailerState={{
          isFetched: true,
          isFetching: false,
          data: mockTrailerResult,
        }}
        getMovieTrailer={jest.fn()}
        onRequestClose={jest.fn()}
        resetMovieTrailer={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls getMovieTrailer on mount", () => {
    const mockGetMovieTrailer = jest.fn();
    render(
      <MovieTrailerModal
        movie={mockMovie}
        trailerState={{
          isFetched: true,
          isFetching: false,
          data: mockTrailerResult,
        }}
        getMovieTrailer={mockGetMovieTrailer}
        onRequestClose={jest.fn()}
        resetMovieTrailer={jest.fn()}
      />
    );
    expect(mockGetMovieTrailer).toHaveBeenCalledWith(mockMovie.id);
  });

  it("returns not found on empty or error", () => {
    const { container } = render(
      <MovieTrailerModal
        movie={mockMovie}
        trailerState={{
          isFetched: true,
          isFetching: false,
          data: undefined,
          error: "error",
        }}
        getMovieTrailer={jest.fn()}
        onRequestClose={jest.fn()}
        resetMovieTrailer={jest.fn()}
      />
    );
    const notFoundDiv = container.querySelector(
      ".movie-trailer-modal__not-found"
    );
    expect(notFoundDiv).not.toEqual(null);
  });
});
