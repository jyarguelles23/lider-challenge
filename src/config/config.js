export const url = (buscador, paginaActual, cantidadElementos) =>
  `http://localhost:8080/product/api/${buscador}?page=${paginaActual}&size=${cantidadElementos}`;

export const urlAll = (paginaActual, cantidadElementos) =>
  `http://localhost:8080/product/api?page=${paginaActual}&size=${cantidadElementos}`;
