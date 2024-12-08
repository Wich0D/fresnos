import React from "react";
import { Link } from "react-router-dom";
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
          <li><a href="#descriptionSection">Conócenos</a></li>
          <li><a href="#bookSection">Reserva</a></li>
          <li><a href="#footerSection">Contáctanos</a></li>
          <li className="login"><Link to="/login">Ingresa</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
