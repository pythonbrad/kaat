import React, { useState, useEffect } from 'react';
    import BookCard from '../components/BookCard';
    import { booksData } from '../data/booksData';
    import './BooksPage.css';

    function BooksPage() {
      const [filteredBooks, setFilteredBooks] = useState(booksData);
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedLanguage, setSelectedLanguage] = useState('All');
      const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
      const [selectedCategory, setSelectedCategory] = useState('All');

      const allLanguages = ['All', ...new Set(booksData.flatMap(book => book.languages))];
      const allAgeGroups = ['All', ...new Set(booksData.map(book => book.ageGroup))];
      const allCategories = ['All', ...new Set(booksData.map(book => book.category))];

      useEffect(() => {
        let tempBooks = booksData;

        // Filter by search term
        if (searchTerm) {
          tempBooks = tempBooks.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.description.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        // Filter by language
        if (selectedLanguage !== 'All') {
          tempBooks = tempBooks.filter(book =>
            book.languages.includes(selectedLanguage)
          );
        }

        // Filter by age group
        if (selectedAgeGroup !== 'All') {
          tempBooks = tempBooks.filter(book =>
            book.ageGroup === selectedAgeGroup
          );
        }

        // Filter by category
        if (selectedCategory !== 'All') {
          tempBooks = tempBooks.filter(book =>
            book.category === selectedCategory
          );
        }

        setFilteredBooks(tempBooks);
      }, [searchTerm, selectedLanguage, selectedAgeGroup, selectedCategory]);

      return (
        <div className="books-page container">
          <h1>Our Free Books Library</h1>
          <p className="page-description">
            Dive into a world of stories, activities, and songs designed to celebrate and teach Cameroonian languages.
            All books are free to read online and print for personal use.
          </p>

          <div className="filters-search card">
            <input
              type="text"
              placeholder="Search by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search books"
            />

            <div className="filter-group">
              <label htmlFor="language-filter">Language:</label>
              <select
                id="language-filter"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                aria-label="Filter by language"
              >
                {allLanguages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="age-filter">Age Group:</label>
              <select
                id="age-filter"
                value={selectedAgeGroup}
                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                aria-label="Filter by age group"
              >
                {allAgeGroups.map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="category-filter">Category:</label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter by category"
              >
                {allCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="book-grid">
            {filteredBooks.length > 0 ? (
              filteredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))
            ) : (
              <p className="no-results">No books found matching your criteria.</p>
            )}
          </div>
        </div>
      );
    }

    export default BooksPage;