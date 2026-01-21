import React from 'react';
    import { Link } from 'react-router-dom';
    import './BookCard.css';

    function BookCard({ book }) {
      return (
        <div className="book-card">
          <img src={book.coverImage} alt={book.title} className="book-cover" />
          <div className="book-info">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-meta">
              Age: <span>{book.ageGroup}</span> | Lang: <span>{book.languages.join(', ')}</span>
            </p>
            <p className="book-description">{book.description}</p>
            <Link to={`/books/${book.id}`} className="read-button">Read Online</Link>
          </div>
        </div>
      );
    }

    export default BookCard;