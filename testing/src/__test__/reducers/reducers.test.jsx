import React from "react";
import { describe, expect, it } from "vitest";
import { cartReducer } from "../../slices/cartSlice";
import ProductMock from "../../__mocks__/ProductMock";

describe("Reducers", () => {
  it("Debe retornar el estado inicial", () => {
    expect(cartReducer({}, "")).toEqual({});
  });

  it("Add_To_Cart", () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: "cart/AddToCart",
      payload,
    };

    const expected = {
      cart: [ProductMock],
    };

    expect(cartReducer(initialState, action)).toEqual(expected);
  });
});
