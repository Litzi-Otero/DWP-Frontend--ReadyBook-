import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import MainLayout from "../../layouts/MainLayout";
import "./ManageNotifications.css";

const ManageNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulación de datos
    const mockNotifications = [
      { id: 1, message: "Nuevo libro disponible: 'React Avanzado'", date: "12/03/2024" },
      { id: 2, message: "Tu reserva de 'JavaScript Básico' vence mañana", date: "11/03/2024" },
      { id: 3, message: "Mantenimiento programado para el sistema", date: "10/03/2024" },
      { id: 4, message: "Nuevo usuario registrado", date: "09/03/2024" }
    ];
    setNotifications(mockNotifications);
  }, []);

  return (
    <MainLayout>
      <div className="notifications-container">
        <h2>Notificaciones</h2>
        <div className="notifications-grid">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification-card">
              <FaBell className="notification-icon" />
              <div>
                <p>{notification.message}</p>
                <small>{notification.date}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ManageNotifications;
