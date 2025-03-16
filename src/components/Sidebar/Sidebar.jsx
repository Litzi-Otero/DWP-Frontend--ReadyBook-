import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBook, FaBookmark, FaUser, FaBell, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Detectar la ruta actual

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      <ul>
        <li>
          <Link to="/explore" className={location.pathname === "/explore" ? "active" : ""}>
            <FaBook className="icon" /> {isOpen && "Explorar libros"}
          </Link>
        </li>
        <li>
          <Link to="/reserve" className={location.pathname === "/reserve" ? "active" : ""}>
            <FaBookmark className="icon" /> {isOpen && "Apartar libros"}
          </Link>
        </li>
        <li>
          <Link to="/usuarios" className={location.pathname === "/usuarios" ? "active" : ""}>
            <FaUser className="icon" /> {isOpen && "Gestión de usuarios"}
          </Link>
        </li>
        <li>
          <Link to="/notificaciones" className={location.pathname === "/notificaciones" ? "active" : ""}>
            <FaBell className="icon" /> {isOpen && "Notificaciones"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
