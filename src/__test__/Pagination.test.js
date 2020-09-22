import Pagination from "../components/Pagination";
import React from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";

let tree = ReactTestRenderer;

const setCurrentPage = 0;
const totalPages = 3;

describe("<Pagination/>", () => {
  beforeEach(() => {
    tree = renderer.create(
      <Pagination setCurrentPage={setCurrentPage} totalPaginas={totalPages} />
    );
  });

  it("should render without crashing", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render Next Button", () => {
    const next = tree.root;
    expect(next.findByProps({ name: "next" }).children).toEqual(["Siguiente"]);
  });

  it("should not render previous button", () => {
    const btn = tree.root;
    const button = btn.findByProps({ type: "button" }).children;
    expect(button).not.toBe(["Anterior"]);
  });
});
