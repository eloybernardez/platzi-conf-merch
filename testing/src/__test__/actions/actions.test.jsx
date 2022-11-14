import { describe, it, expect } from "vitest";
// import actions from "../../actions/actions";
import ProductMock from "../../__mocks__/ProductMock";

describe.skip("Actions", () => {
  it("addToCart Action", () => {
    const payload = ProductMock;
    const expected = {
      type: "ADD_TO_CART",
      payload,
    };

    expect(actions.addToCart(payload)).toEqual(expected);
  });
});
