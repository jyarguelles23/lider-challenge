import OldPrice from "../components/OldPrice";
import { formatAmount } from "../utils/MoneyFormat";
import React from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";

let tree = ReactTestRenderer;
const oldPrice = 500.000;

describe("<OldPrice/>", () => {
  beforeEach(() => {
    tree = renderer.create(<OldPrice oldPrice={oldPrice} />);
  });

  it("should render without crashing", () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render the oldprice formatted", () => {
    const price = tree.root;
    const oldPriceFormatted = formatAmount(oldPrice);
    expect(
      price.findByProps({ className: "product-old-price" }).children
    ).toEqual([`$ ${oldPriceFormatted}`]);
  });
});
