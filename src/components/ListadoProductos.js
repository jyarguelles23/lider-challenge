import React from "react";
import ImagenProducto from "./ImagenProducto";

const ListadoProductos = ({ productos }) => {
  return (
    <div data-testid="lista-productos-component" className="col-12 p-5 row">
      {productos.map((producto) => {
        return <ImagenProducto key={producto.id} producto={producto} />;
      })}
    </div>
  );
};

export default ListadoProductos;
