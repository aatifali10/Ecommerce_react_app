import { configureStore } from "@reduxjs/toolkit";
import cartRudecer from "./cartSlice";

const store = configureStore({
  reducer: {
    slice: cartRudecer,
  },
});
export default store;
