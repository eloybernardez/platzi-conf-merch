import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },

  reducers: {
    AddToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    RemoveFromCart: (state, action) => {
      state.cart = state.cart.filter((items) => items.id !== action.payload.id);
    },
  },
});

const { actions, reducer } = cartSlice;

// console.log(cartSlice);

// Action creators are generated for each case reducer function
export const { AddToCart, RemoveFromCart } = cartSlice.actions;

export const cartReducer = reducer;
