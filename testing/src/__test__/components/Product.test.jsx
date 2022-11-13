import React from "react";
import { it, describe, expect, vi } from "vitest";
import { screen, fireEvent, render } from "@testing-library/react";
import ProviderMock from "../../__mocks__/ProviderMock";
import Product from "../../components/Product";
import ProductMock from "../../__mocks__/ProductMock";

describe("<Product/>", () => {
  it("Render del componente Product", () => {
    const handleAddToCart = vi.fn();
    render(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );

    expect(screen).toBeDefined();
  });

  it("Comprobar el botón de comprar", () => {
    const handleAddToCart = vi.fn();
    render(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
