jest.mock('../MovieCard', () => () => <div />)
jest.mock('react-intl', () => ({ FormattedMessage: () => <div /> }));
import React from "react";
import { render, cleanup } from "@testing-library/react";

const movieMock = jest.requireMock('movie');

import MovieGrid from "./MovieGrid";

describe('MovieGrid', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <MovieGrid favorites={{}} onAddToFavorites={jest.fn()} onRemoveFromFavorites={jest.fn()} movies={[movieMock]} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('returns no results message', () => {
    const { container } = render(
      <MovieGrid favorites={{}} onAddToFavorites={jest.fn()} onRemoveFromFavorites={jest.fn()} movies={[]} />
    );
    const noResultsElement = container.querySelector('.movie-grid__no-results');
    expect(noResultsElement).not.toEqual(null);
  })
})

