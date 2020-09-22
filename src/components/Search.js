import React, { Fragment, useState } from "react";
import liderLogo from "../assets/lider.png";

const Search = ({ setBuscador }) => {
  const [busqueda, setBusqueda] = useState("");

  const buscarImagen = (e) => {
    e.preventDefault();
    setBuscador(busqueda);
  };

  const onChange = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <Fragment>
      <div className="offset-md-1 col-md-1 col-2">
        <img className="search-bar__image" alt="Logo Lider" src={liderLogo} />
      </div>
      <div className="col-md-9 col-9">
        <form onSubmit={buscarImagen} data-testid="form-submit">
          <div className="search-bar__container">
          
            <input
              type="text"
              className="search-bar__input"
              onChange={onChange}
              placeholder="¿Que estás buscando?"
              value={busqueda}
              name="input-search"
            />
            
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Search;
