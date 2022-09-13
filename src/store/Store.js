import { configureStore } from "@reduxjs/toolkit";
import cartRudecer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartRudecer,
  },
});
export default store;
