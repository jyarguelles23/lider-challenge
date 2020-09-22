import React, { useState, useEffect, Fragment } from "react";
import ListadoProductos from "./components/ListadoProductos";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Error from "./components/Error";
import axios from "axios";
import "./styles/main.scss";
import { url, urlAll } from "./config/config";

function App() {
  const [buscador, setBuscador] = useState(null);
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [hasError, setHasError] = useState(false);

  const cantidadElementos = 12;

  useEffect(() => {
    if (buscador === null) {
      return;
    }

    const urlFinal =
      buscador !== ""
        ? url(buscador, paginaActual, cantidadElementos)
        : urlAll(paginaActual, cantidadElementos);

    axios
      .get(urlFinal)
      .then((result) => {
        const finalResult = result.data.content
          ? result.data.content
          : [result.data];
        setProductos(finalResult);
        const totalPag =
          finalResult.length > 0 ? result.data.totalPages : finalResult.length;
        setTotalPaginas(totalPag);
        setHasError(false);
      })
      .catch((e) => {
        setTotalPaginas(1);
        setHasError(true);
      });

    return () => {};
  }, [buscador, paginaActual]);

  return (
    <Fragment>
      <header className="row header">
        <Search setBuscador={setBuscador} />
      </header>
      <div className="app container">
        <div className="row justify-content-center">
          {hasError ? (
            <Error data-testid="error-component"></Error>
          ) : (
            <ListadoProductos productos={productos}></ListadoProductos>
          )}

          <Pagination
            data-testid="pagination-component"
            setCurrentPage={setPaginaActual}
            totalPaginas={totalPaginas}
          ></Pagination>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
