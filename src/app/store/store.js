import { configureStore } from "@reduxjs/toolkit";
import classSlice from "./slice/class";

export const store = configureStore({
  reducer: {
    class: classSlice
  },
});