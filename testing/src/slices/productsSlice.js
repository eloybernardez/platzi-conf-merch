import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState.products,
  reducers: {},
});

const { actions, reducer } = productsSlice;

// Action creators are generated for each case reducer function
// export const { add, remove } = cartSlice.actions;

export const productsReducer = reducer;
