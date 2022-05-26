import React from "react";
import '../stylesheet/Aviso.css';

function Aviso({ aviso }) {
  return(
    <div className={aviso ? 'aviso' : 'ocultar-aviso'}>
        <p>Desea Volver a jugar ?</p>
    </div>
  );
}

export default Aviso;