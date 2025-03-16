import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"; 
import "./MainLayout.css"; 
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="main-layout">
      {/* Header fijo */}
      <Sidebar />
      <header className="main-header">
        <Link to="/">
          <img src={logo} alt="Logo" className="main-logo" />
        </Link>
        <nav className="main-nav">
          <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>Inicio</Link>
          <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>Perfil</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contacto</Link>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </header>

      {/* Contenedor de contenido con margen superior para no tapar contenido */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
