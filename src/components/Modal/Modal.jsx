import s from "./Modal.module.css";
import { createPortal } from "react-dom";

import { closeModal } from "../../redux/colors/colors-actions";
import { useDispatch } from "react-redux";
const modalRoot = document.querySelector("#modal");

export const Modal = ({ selectedColor }) => {
  const dispatch = useDispatch();

  const handleBackDropClick = () => {
    dispatch(closeModal());
  };

  const handleCloseModal = (e) => {
    if (e.code === "Escape") {
      window.removeEventListener("keydown", handleCloseModal);
    }
  };
  window.addEventListener("keydown", handleCloseModal);
  return createPortal(
    <div className={s.overlay} onClick={handleBackDropClick}>
      <div
        className={s.modal}
        onClick={handleBackDropClick}
        style={{ backgroundColor: `${selectedColor.background}` }}
      >
        <h2>{selectedColor.color}</h2>
      </div>
    </div>,
    modalRoot
  );
};
