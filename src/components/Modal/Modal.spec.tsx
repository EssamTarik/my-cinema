import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Modal from "./Modal";

describe("Modal", () => {
  afterEach(cleanup);
  it("renders", () => {
    const { asFragment } = render(
      <Modal onRequestClose={jest.fn()}>
        <div />
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("requests closing on click outside content", () => {
    const mockClose = jest.fn();

    const { container } = render(
      <Modal onRequestClose={mockClose}>
        <div />
      </Modal>
    );
    const modal = container.querySelector(".full-screen-modal");
    fireEvent.click(modal!);
    expect(mockClose).toHaveBeenCalled();
  });

  it("does not close the modal on content clicks", () => {
    const mockClose = jest.fn();

    const { container } = render(
      <Modal onRequestClose={mockClose}>
        <div />
      </Modal>
    );
    const modalContent = container.querySelector(".modal__content");
    fireEvent.click(modalContent!);
    expect(mockClose).not.toHaveBeenCalled();
  });
});
