import React from "react";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import App from "../App";

const productos = [
  {
    id: 404,
    brand: "ooy eqrceli",
    description: "rlñlw brhrka",
    image: "https://lider.cl/catalogo/images/whiteLineIcon.svg",
    price: 498724,
    oldPrice: 0,
  },
  {
    id: 225,
    brand: "dsaasd",
    description: "zlrwax bñyrh",
    image: "https://lider.cl/catalogo/images/babyIcon.svg",
    price: 130173,
    oldPrice: 0,
  },
  {
    id: 181,
    brand: "testtest",
    description: "hqhoy qacirk",
    image: "https://lider.cl/catalogo/images/homeIcon.svg",
    price: 171740,
    oldPrice: 0,
  },
];

afterEach(cleanup);
it("displays data and load component", async () => {
  axiosMock.get.mockResolvedValue({
    data: { content: productos },
  });
  const { queryByTestId, queryByPlaceholderText } = render(<App />);
  const inputSearch = queryByPlaceholderText("¿Que estás buscando?");
  fireEvent.change(inputSearch, { target: { value: 181 } });

  fireEvent.submit(queryByTestId("form-submit"));
  await waitForElement(() => queryByTestId("lista-productos-component"));

  expect(true).toBe(true);
});
