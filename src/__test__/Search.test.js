import Search from "../components/Search";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("<Search/>", () => {
  it("should render without crashing", () => {
    const { queryByPlaceholderText} = render(<Search />);
    expect(queryByPlaceholderText("¿Que estás buscando?")).toBeTruthy();

  });

  it("Updates input value on change", () => {
    const { queryByPlaceholderText } = render(<Search />);
    const inputSearch = queryByPlaceholderText("¿Que estás buscando?");
    fireEvent.change(inputSearch, { target: { value: "test" } });
    expect(inputSearch.value).toBe("test");
  });

  it("Updates hook of App on submit", () => {
    const setBuscador = jest.fn();
    const { queryByPlaceholderText,queryByTestId } = render(
      <Search setBuscador={setBuscador} />
    );
    const inputSearch = queryByPlaceholderText("¿Que estás buscando?");
    fireEvent.change(inputSearch, { target: { value: "test" } });
    fireEvent.submit(queryByTestId("form-submit"));
    expect(setBuscador).toHaveBeenCalled();
  });
});
