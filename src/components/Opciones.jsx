import React from "react";
import '../stylesheet/Opciones.css';
import piedra from '../images/piedra.png';
import papel from '../images/papel.png';
import tijera from '../images/tijera.png';

function Opciones({ bloqueado, opciones, setOpciones, setGanador, setBloqueado, setAviso }) {

  

  const agregarOpcion = opcion => {
    const opcionesActualizadas = [...opciones, opcion]
    setOpciones(opcionesActualizadas);

    const ultimosDos = opcionesActualizadas.slice(-2)
    let [uno, dos] = ultimosDos
    if (ultimosDos.length%2===0) {
      setOpciones([])
      var comprobar = comparacion(dos, uno)
    }

    if (comprobar === 1) {
      setGanador(`Gana el jugador #1  |  Jugador #1 elige: ${uno}  |  Jugador #2 elige: ${dos}`)
      setBloqueado('bloqueado')
      setAviso(true)
    }
    if (comprobar === 2) {
      setGanador(`Gana el jugador #2  |  Jugador #1 elige: ${uno}  |  Jugador #2 elige: ${dos}`)
      setBloqueado('bloqueado')
      setAviso(true)
    }
    if (comprobar === 3) {
      setGanador(`Empate nadie gana  |  Jugador #1 elige: ${uno}  |  Jugador #2 elige: ${dos}`)
      setBloqueado('bloqueado')
      setAviso(true)
    }
  }

  const comparacion = (dos, uno) => {
    switch (uno+dos){
      case 'piedratijera':
      case 'papelpiedra':
      case 'tijerapapel':
          return 1;
      case 'tijerapiedra':
      case 'piedrapapel':
      case 'papeltijera':
          return 2;
      case 'papelpapel':
      case 'piedrapiedra':
      case 'tijeratijera':
          return 3;
      default:
    }
  }
  

  return (
    <div className="opciones">
      <button className={`opcion ${bloqueado}`} id="piedra" onClick={() => agregarOpcion('piedra')}><img src={piedra} alt="imagen de una piedra" /></button>
      <button className={`opcion ${bloqueado}`} id="papel" onClick={() => agregarOpcion('papel')}><img src={papel} alt="imagen de una hoja" /></button>
      <button className={`opcion ${bloqueado}`} id="tijera" onClick={() => agregarOpcion('tijera')}><img src={tijera}  alt="imagen de una tijera" /></button>
    </div>
  );
}

export default Opciones;