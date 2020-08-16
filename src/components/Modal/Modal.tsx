import React from "react";
import { IProps } from "./interfaces";
import "./styles.css";

const Modal = ({ onRequestClose, children }: IProps) => (
  <div onClick={onRequestClose} className="full-screen-modal">
    <div
      onClick={(event) => event.stopPropagation()}
      className="modal__content"
    >
      {children}
    </div>
  </div>
);

export default Modal;
