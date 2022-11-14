import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState.products,
  reducers: {
    getProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

const { actions, reducer } = productsSlice;

// Action creators are generated for each case reducer function
export const { getProducts } = productsSlice.actions;

export const productsReducer = reducer;
