import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./Screen/HomeSlice"
const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});

export default store;
