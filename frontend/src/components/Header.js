import React from "react";
import logo from "../images/logo/logo500-White.png"; // Ajusta la ruta al logo si está en otra ubicación.
import "../styles/Header.css"; // Archivo de estilos para el header.

function Header() {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="Logo" width="50px" />
        <p>Fresnos</p>
      </div>
      <nav>
        <ul className="header-nav">
          <li>Conócenos</li>
          <li>Reserva</li>
          <li>Contáctanos</li>
          <li className="login">Ingresa</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
