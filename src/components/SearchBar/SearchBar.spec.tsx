import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import SearchBar from "./SearchBar";

jest.mock("react-intl", () => ({
  useIntl: () => ({ formatMessage: () => "" }),
}));

describe("SearchBar", () => {
  afterEach(cleanup);
  const mockOnChange = jest.fn();

  it("renders", () => {
    const { asFragment } = render(
      <SearchBar value="" onChange={mockOnChange} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Calls on change", () => {
    const value = "test";
    const { container } = render(
      <SearchBar value="" onChange={mockOnChange} />
    );

    const input = container.querySelector("input");
    fireEvent.change(input!, { target: { value } });
    expect(mockOnChange).toHaveBeenCalledWith(value);
  });

  it("displays passed value", () => {
    const value = "val";
    const { container } = render(
      <SearchBar value={value} onChange={mockOnChange} />
    );

    const input = container.querySelector("input");
    expect(input).toHaveValue(value);
  });
});
