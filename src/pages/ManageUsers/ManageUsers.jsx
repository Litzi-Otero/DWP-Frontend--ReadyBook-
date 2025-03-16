import React, { useState, useEffect } from "react";
import { FaSearch, FaUserPlus, FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import MainLayout from "../../layouts/MainLayout";
import "./ManageUsers.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    const mockUsers = [
      { id: 1, name: "Juan Pérez", email: "juan@example.com", role: "Admin" },
      { id: 2, name: "María López", email: "maria@example.com", role: "Usuario" },
      { id: 3, name: "Carlos Sánchez", email: "carlos@example.com", role: "Editor" },
    ];
    setUsers(mockUsers);
  }, []);

  const handleEdit = (id) => {
    alert(`Editar usuario con ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este usuario?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleAddUser = () => {
    setUsers([...users, { id: Date.now(), ...newUser }]);
    setNewUser({ name: "", email: "", role: "" });
    setIsModalOpen(false);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="manage-users-container">
        <h2>Gestión de Usuarios</h2>

        {/* Barra de búsqueda */}
        <div className="search-containerM">
          <input
            type="text"
            placeholder="Buscar usuario..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="search-iconM" />
          <button className="add-user-btn" onClick={() => setIsModalOpen(true)}>
            <FaUserPlus /> Agregar Usuario
          </button>
        </div>

        {/* Tabla de usuarios */}
        <div className="users-table">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEdit(user.id)}>
                      <FaEdit />
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Agregar Usuario</h3>
                <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                  <FaTimes />
                </button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Rol"
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                />
              </div>
              <div className="modal-footer">
                <button className="save-btn" onClick={handleAddUser}>Guardar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ManageUsers;
