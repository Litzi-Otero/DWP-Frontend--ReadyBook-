import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout"; 
import "./Profile.css"; 
import userImage from "../../assets/user.png"; 

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Nombre del Usuario",
    email: "usuario@example.com",
    phone: "+1234567890",
    address: "Calle Falsa 123, Ciudad, País"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    
  };

  return (
    <MainLayout>
      <div className="profile-container">
        <div className="profile-sidebar">
          <img src={userImage} alt="User" className="profile-image" />
          <h2>{userInfo.name}</h2>
          <p>Correo: {userInfo.email}</p>
        </div>
        <div className="profile-content">
          <h3>Información Personal</h3>
          {isEditing ? (
            <div>
              <p>
                <strong>Nombre:</strong>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Correo:</strong>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Teléfono:</strong>
                <input
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>Dirección:</strong>
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                />
              </p>
              <button className="btn-save" onClick={handleSave}>
                Guardar
              </button>
            </div>
          ) : (
            <div>
              <p>
                <strong>Nombre:</strong> {userInfo.name}
              </p>
              <p>
                <strong>Correo:</strong> {userInfo.email}
              </p>
              <p>
                <strong>Teléfono:</strong> {userInfo.phone}
              </p>
              <p>
                <strong>Dirección:</strong> {userInfo.address}
              </p>
              <button className="btn-edit" onClick={handleEdit}>
                Editar
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;