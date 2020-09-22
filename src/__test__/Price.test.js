import Price from "../components/Price";
import React from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";
let tree = ReactTestRenderer;

const price = {price : 400.000, oldPrice : 800.000};

describe("<Price/>", () => {
  beforeEach(() => {
    tree = renderer.create(<Price price={price} />);
  });

  it("should render without crashing", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
   
  it("should render an image of 50 %", () => {
    const precio = tree.root;
    
    expect(
      precio.findByProps({ className: "image-porciento" })
    ).toBeTruthy();
    
  });

});
