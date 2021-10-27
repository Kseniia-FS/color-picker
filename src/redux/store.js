import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./colors/colors-reducers";

const store = configureStore({
  reducer: {
    colors: reducers,
  },
});

export { store };
