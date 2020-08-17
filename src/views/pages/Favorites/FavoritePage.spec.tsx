import React from "react";
import { render, cleanup } from "@testing-library/react";
import FavoritesPage from "./FavoritesPage";

jest.mock("../../../containers", () => ({
  FavoriteMoviesContainer: () => <div />,
}));

describe("FavoritesPage", () => {
  afterEach(cleanup);

  it("renders", () => {
    const { asFragment } = render(<FavoritesPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
