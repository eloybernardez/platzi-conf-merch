import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/Footer";
import { expect, it, describe } from "vitest";

describe("<Footer/>", () => {
  it("Render del componente Footer", () => {
    render(<Footer />);
    expect(screen).toBeDefined();
  });

  it("Render del título", () => {
    render(<Footer />);
    const title = screen.getByText("Platzi Store");
    expect(title).toBeDefined();
  });
});

describe("Footer Snapshot", () => {
  it("Comprobar la UI del componente Footer", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment(<Footer />)).toMatchSnapshot();
  });
});
