jest.mock('../MovieGrid', () => () => <div />)
import React from "react";
import { render, cleanup } from "@testing-library/react";
const mockMovie = jest.requireMock('movie');

import FavoriteMoviesContainer from "./FavoriteMoviesContainer";

describe('FavoriteMoviesContainer', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <FavoriteMoviesContainer favorites={{ [mockMovie.id]: mockMovie }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
})

