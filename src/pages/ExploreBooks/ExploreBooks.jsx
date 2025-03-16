import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ExploreBooks.css";
import { FaSearch } from "react-icons/fa";
import MainLayout from "../../layouts/MainLayout";

const ExploreBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulación de datos (reemplaza con tu API)
    const mockBooks = [
      { id: 1, title: "Cien años de soledad", author: "Gabriel García Márquez", image: "https://via.placeholder.com/150" },
      { id: 2, title: "El principito", author: "Antoine de Saint-Exupéry", image: "https://via.placeholder.com/150" },
      { id: 3, title: "1984", author: "George Orwell", image: "https://via.placeholder.com/150" },
      { id: 4, title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", image: "https://via.placeholder.com/150" },
    ];
    setBooks(mockBooks);
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="explore-books-container">
        <h2>Explorar Libros</h2>

        <div className="books-grid">
          {filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`/detalles/${book.id}`} className="view-details-btn">Ver Detalles</Link>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ExploreBooks;
