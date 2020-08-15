jest.mock('react-intl', () => ({ FormattedMessage: () => <div /> }));
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Pagination from "./Pagination";

describe('Pagination', () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <Pagination
        page={1}
        totalPages={2}
        onNextClick={jest.fn()}
        onPreviousClick={jest.fn()}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('disables next button on last page', () => {
    const { container } = render(
      <Pagination
        page={10}
        totalPages={10}
        onNextClick={jest.fn()}
        onPreviousClick={jest.fn()}
      />
    );
    const nextBtn = container.querySelector('.pagination__next-container button');
    expect(nextBtn!).toBeDisabled()
  })

  it('disables previous button on first page', () => {
    const { container } = render(
      <Pagination
        page={1}
        totalPages={10}
        onNextClick={jest.fn()}
        onPreviousClick={jest.fn()}
      />
    );
    const previousBtn = container.querySelector('.pagination__prev-container button');
    expect(previousBtn!).toBeDisabled()
  })

  it('calls next/previous page callback', () => {
    const mockNextClick = jest.fn()
    const mockPreviousClick = jest.fn()
    const { container } = render(
      <Pagination
        page={2}
        totalPages={10}
        onNextClick={mockNextClick}
        onPreviousClick={mockPreviousClick}
      />
    );

    const previousBtn = container.querySelector('.pagination__prev-container button');
    const nextBtn = container.querySelector('.pagination__next-container button');
    fireEvent.click(previousBtn!);
    fireEvent.click(nextBtn!);

    expect(mockNextClick).toHaveBeenCalledTimes(1);
    expect(mockPreviousClick).toHaveBeenCalledTimes(1);
  })
})

