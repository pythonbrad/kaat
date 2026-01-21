import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import HomePage from './pages/HomePage';
    import BooksPage from './pages/BooksPage';
    import BookReaderPage from './pages/BookReaderPage';
    import AboutPage from './pages/AboutPage';
    import ContactPage from './pages/ContactPage';

    function App() {
      return (
        <>
          <Header />
          <main style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/books/:bookId" element={<BookReaderPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </>
      );
    }

    export default App;