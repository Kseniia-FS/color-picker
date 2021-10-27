import { createAction } from "@reduxjs/toolkit";

export const changeCataloge = createAction("change-catalog");
export const clearCataloge = createAction("clear-cataloge");

export const selectColor = createAction(
  "select-color",
  (color, background) => ({
    payload: { color, background },
  })
);
export const closeModal = createAction("close-modal");
