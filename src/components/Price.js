import React from "react";
import CincuentaPorciento from "../assets/50porciento.png";
import { formatAmount } from "../utils/MoneyFormat";

const Price = (priced) => {
  const { price, oldPrice } = priced;

  return (
    <div className="product-price">
      $ {formatAmount(price)}
      {oldPrice === 0 ? null : (
        <img src={CincuentaPorciento} alt="50%" className="image-porciento" />
      )}
    </div>
  );
};

export default Price;
