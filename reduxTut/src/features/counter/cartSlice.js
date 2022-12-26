import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      // const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === payload.id);

      cartItem.amount = cartItem.amount + 1;
      console.log(cartItem);

      // const cartItem = state.cartItems.find((item) => item.id === payload.id);
      // cartItem.amount = cartItem.amount + 1;
    },
  },
});
// console.log(cartSlice);
export const { clearCart, removeItem, increase } = cartSlice.actions;

export default cartSlice.reducer;
