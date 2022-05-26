import React from "react";
import '../stylesheet/Boton.css';

function Boton({ texto, manejarClic, bloqueado }) {
  return (
    <div className="botonContenedor">
      <button className={ `btn-restart ${bloqueado}` } onClick={manejarClic}>
        {texto}
      </button>
    </div>
  );
}

export default Boton;