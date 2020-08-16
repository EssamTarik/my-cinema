import React from "react";
import { render, cleanup } from "@testing-library/react";

import FavoriteMoviesContainer from "./FavoriteMoviesContainer";

jest.mock("../MovieGrid", () => () => <div />);
const mockMovie = jest.requireMock("movie");

describe("FavoriteMoviesContainer", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <FavoriteMoviesContainer favorites={{ [mockMovie.id]: mockMovie }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
