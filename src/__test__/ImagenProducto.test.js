import ImagenProducto from "../components/ImagenProducto";
import React from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";

let tree = ReactTestRenderer;

const producto = {
  id: "5f63bf9c55b47b07c4fb83b8",
  brand: "ooy eqrceli",
  description: "rlñlw brhrka",
  image: "https://lider.cl/catalogo/images/whiteLineIcon.svg",
  price: 498.724,
  oldPrice: 997.448,
};

describe("<ImagenProducto/>", () => {
  beforeEach(() => {
    tree = renderer.create(<ImagenProducto producto={producto} />);
  });

  it("should render without crashing", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render OldPrice tag", () => {
    tree = renderer.create(<ImagenProducto producto={producto} />);
    const oldPrice = tree.root;
    expect(
      oldPrice.findByProps({ className: "product-old-price" }).children
    ).toEqual([`$ ${producto.oldPrice}`]);
  });


});
