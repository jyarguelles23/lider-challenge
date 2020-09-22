import React from "react";
import { formatAmount } from "../utils/MoneyFormat";

const OldPrice = (oldPrices) => {
  const { oldPrice } = oldPrices;
  return (
    <div className="product-old-price">
      {oldPrice === 0 ? null : `$ ${formatAmount(oldPrice)}`}
    </div>
  );
};

export default OldPrice;
