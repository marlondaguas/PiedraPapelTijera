import React from "react";
import '../stylesheet/Header.css';

function Header() {
  return(
    <header>
      <h1>
        <span className="piedra">Piedra</span>
        <span className="papel">Papel</span>
        <span className="tijera">Tijera</span>
      </h1>
    </header>
  );
}

export default Header;