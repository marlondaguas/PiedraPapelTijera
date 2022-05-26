import React from "react";
import '../stylesheet/Jugador.css';

function Jugador({ texto, id, valor1, valor2, handleChange }) {

  return(
    <div className="jugador">
      <div><label htmlFor={id} className={id}>{texto}</label></div>
      <div><input type="text" id={id} value={id==='jugador1' ? valor1 : valor2} onChange={handleChange} placeholder='Ingrese el nombre el jugador' /></div>
    </div>
  );
}

export default Jugador;