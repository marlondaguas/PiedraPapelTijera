import './App.css';
import Header from './components/Header';
import Puntaje from './components/Puntaje';
import Jugador from './components/Jugador';
import Opciones from './components/Opciones';
import Boton from './components/Boton';
import Aviso from './components/Aviso';
import { useState, useEffect } from 'react';

function App() {

  const [ganador, setGanador] = useState('')
  const [opciones, setOpciones] = useState([]);
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [bloqueado, setBloqueado] = useState('bloqueado');
  const [aviso, setAviso] = useState(false);

  const handleChange = (event) => {
    if (event.target.id==='jugador1') {
      setValor1(event.target.value);
    }else{
      setValor2(event.target.value);
    }
  };

  const manejarClic = () => {
    setBloqueado('');
    setAviso(false);
  }

  useEffect(() => {
    if (!valor1 || !valor2) {
      setBloqueado('bloqueado')
    }else{
      setBloqueado('')
    }
  }, [valor1, valor2])


  return (
    <div className="App">
      <Header />
      <Puntaje 
        puntaje={ganador}
      />
      <Jugador 
        texto='Jugador #1'
        id='jugador1'
        valor={valor1}
        handleChange={handleChange}
      />
      <Opciones 
        bloqueado={bloqueado}
        opciones={opciones}
        setOpciones={setOpciones}
        setGanador={setGanador}
        setBloqueado={setBloqueado}
        setAviso={setAviso}
      />
      <Aviso 
        aviso={aviso}
      />
      <Jugador 
        texto='Jugador #2'
        id='jugador2'
        valor={valor2}
        handleChange={handleChange}
      />
      <Boton
        texto='Reiniciar Juego'
        esBotonDeIniciar={false}
        manejarClic={manejarClic}
      />
    </div>
  );
}

export default App;
