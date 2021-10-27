// caparol, tikkurila, sadolin, ral, ncs
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import colors from "../../colorsData/caparol3dsystem.json";
import {
  changeCataloge,
  clearCataloge,
  closeModal,
  selectColor,
} from "./colors-actions";
const initialState = { color: "", background: "" };

const items = createReducer(colors, {});
const selectedCataloge = createReducer(null, {
  [changeCataloge]: (_, action) => action.payload,
  [clearCataloge]: (state) => (state = null),
});
const selectedColor = createReducer(initialState, {
  [selectColor]: (state, action) => (state = { ...action.payload }),
  [closeModal]: (state) => (state = initialState),
});

export const reducers = combineReducers({
  items,
  selectedCataloge,
  selectedColor,
});
