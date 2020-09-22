import Error from "../components/Error";
import React from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";

let tree = ReactTestRenderer;

describe("<Error/>", () => {
  beforeEach(() => {
    tree = renderer.create(<Error />);
  });

  it("should render without crashing", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render an error image", () => {
    tree = renderer.create(<Error />);
    const error = tree.root;
    expect(
      error.findByType("img").props.alt
    ).toBe("Error");
  });
});
