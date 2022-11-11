import React from "react";
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProviderMock from "../../__mocks__/ProviderMock";
import Header from "../../components/Header";

describe("<Header/>", () => {
  it("Render del componente Header", () => {
    render(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(screen).toBeDefined();
  });

  it("Render del título", () => {
    render(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    const headerTitle = screen.getByText("Platzi Store");
    expect(headerTitle).toBeDefined();
  });
});
