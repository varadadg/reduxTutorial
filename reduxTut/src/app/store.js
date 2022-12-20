import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/counter/counterSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
