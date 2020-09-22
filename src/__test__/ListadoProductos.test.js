import ListaProducto from "../components/ListadoProductos";
import React from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";
import Imagen from "../components/ImagenProducto";

let tree = ReactTestRenderer;

const productos = [
  {
    id: "5f63bf9c55b47b07c4fb83b8",
    brand: "ooy eqrceli",
    description: "rlñlw brhrka",
    image: "https://lider.cl/catalogo/images/whiteLineIcon.svg",
    price: 498724,
    oldPrice: 0,
  },
  {
    id: "5f63bf9c55b47b07c4fb83ba",
    brand: "dsaasd",
    description: "zlrwax bñyrh",
    image: "https://lider.cl/catalogo/images/babyIcon.svg",
    price: 130173,
    oldPrice: 0,
  },
  {
    id: "5f63bf9c55b47b07c4fb83bc",
    brand: "weñxoab",
    description: "hqhoy qacirk",
    image: "https://lider.cl/catalogo/images/homeIcon.svg",
    price: 171740,
    oldPrice: 0,
  },
];

describe("<ListaProducto/>", () => {
  beforeEach(() => {
    tree = renderer.create(<ListaProducto productos={productos} />);
  });

  it("should render without crashing", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render 3 'ImagenProducto'", () => {
    const images = tree.root.findAllByType(Imagen);
    expect(images.length).toBe(3);
  });  
   
});
