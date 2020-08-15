jest.mock('react-intl', () => ({ useIntl: () => ({ formatMessage: () => '' }) }))
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import SearchBar from "./SearchBar";

describe('SearchBar', () => {
  afterEach(cleanup);
  const mockOnChange = jest.fn();

  it("renders", () => {
    const { asFragment } = render(
      <SearchBar onChange={mockOnChange} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("Calls on change", () => {
    const value = 'test'
    const { container } = render(
      <SearchBar onChange={mockOnChange} />
    );

    const input = container.querySelector('input');
    fireEvent.change(input!, { target: { value } })
    expect(mockOnChange).toHaveBeenCalledWith(value)
  });
})

