import { cartReducer } from "../slices/cartSlice";
import { productsReducer } from "../slices/productsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
