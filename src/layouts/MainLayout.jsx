import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"; // Importa el logo
import "./MainLayout.css"; // Importa los estilos

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header className="main-header">
        <Link to="/">
          <img src={logo} alt="Logo" className="main-logo" />
        </Link>
        <nav className="main-nav">
          <Link to="/profile" className="nav-link">Perfil</Link>
          <Link to="/settings" className="nav-link">Configuración</Link>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </header>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;