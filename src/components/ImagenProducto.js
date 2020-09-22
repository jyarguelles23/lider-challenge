import React from "react";
import Price from "../components/Price";
import OldPrice from "../components/OldPrice";

const Imagen = ({ producto }) => {
  const { id, brand, description, price, image, oldPrice } = producto;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={image} alt={brand} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            <strong >{brand}</strong> {description}{" "}
          </p>
          <Price key={`${id}-${price}`} price={price} oldPrice={oldPrice}></Price>
          <OldPrice key={`${id}-${oldPrice}`} oldPrice={oldPrice}></OldPrice>
         
        </div>
      </div>
    </div>
  );
};

export default Imagen;
