import React, { Fragment, useState } from "react";

const Pagination = ({ setCurrentPage, totalPaginas }) => {
  const [paginaActual, setPaginaActual] = useState(0);

  const paginaAnterior = () => {
    const pagAnterior = paginaActual - 1;
    setPaginaActual(pagAnterior);
    setCurrentPage(paginaActual);
  };

  const paginaSiguiente = () => {
    const pagSiguiente = paginaActual + 1;
    setPaginaActual(pagSiguiente);
    setCurrentPage(paginaActual);
  };

  return (
    <Fragment>
      {paginaActual === 0 ? null : (
        <button
          onClick={paginaAnterior}
          type="button"
          className="btn btn-primary mr1"
          name="previous"
        >
          Anterior
        </button>
      )}

      {paginaActual === totalPaginas - 1 ? null : (
        <button
          onClick={paginaSiguiente}
          type="button"
          className="btn btn-primary mr1"
          name="next"
        >
          Siguiente
        </button>
      )}
    </Fragment>
  );
};

export default Pagination;
