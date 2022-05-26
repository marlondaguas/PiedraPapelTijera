import React from "react";
import '../stylesheet/Puntaje.css';

function Puntaje({ puntaje }) {
  return (
    <div className="resultado" id="resultado">
      {puntaje}
    </div>
  );
}

export default Puntaje;