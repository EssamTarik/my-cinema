import React from "react";
import { render, cleanup } from "@testing-library/react";

import WatchLaterMoviesContainer from "./WatchLaterMoviesContainer";

jest.mock("../MovieGrid", () => () => <div />);
const mockMovie = jest.requireMock("movie");

describe("WatchLaterMoviesContainer", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <WatchLaterMoviesContainer watchLater={{ [mockMovie.id]: mockMovie }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
