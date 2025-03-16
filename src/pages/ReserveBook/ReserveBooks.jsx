import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ReserveBooks.css";
import MainLayout from "../../layouts/MainLayout";

const ReserveBooks = () => {
  const [books, setBooks] = useState([]);
  const [reservedBooks, setReservedBooks] = useState([]);

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

  const handleReserve = (bookId) => {
    if (!reservedBooks.includes(bookId)) {
      setReservedBooks([...reservedBooks, bookId]);
    }
  };

  return (
    <MainLayout>
      <div className="reserve-books-container">
        <h2>Apartar Libros</h2>

        <div className="books-grid">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <button
                className={`reserve-btn ${reservedBooks.includes(book.id) ? "reserved" : ""}`}
                onClick={() => handleReserve(book.id)}
                disabled={reservedBooks.includes(book.id)}
              >
                {reservedBooks.includes(book.id) ? "Reservado" : "Apartar"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ReserveBooks;
