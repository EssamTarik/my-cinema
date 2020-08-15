jest.mock('../MovieGrid', () => () => <div />)
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
const mockMovie = jest.requireMock('movie');

import WatchLaterMoviesContainer from "./WatchLaterMoviesContainer";

describe('WatchLaterMoviesContainer', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <WatchLaterMoviesContainer watchLater={{ [mockMovie.id]: mockMovie }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
})

