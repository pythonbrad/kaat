import React from 'react';
    import { Link } from 'react-router-dom';
    import './HomePage.css';

    function HomePage() {
      const languages = [
        "Duala", "Ewondo", "Fulfulde", "Ghomala", "Bassa", "Nufi", "Limbum", "Medumba"
      ];

      return (
        <div className="homepage">
          <section className="hero-section">
            <div className="container hero-content">
              <img src="/kaat-logo-icon-only-light-background.png" alt="KAAT Logo" className="hero-logo" />
              <h1>Every Language, Every Family</h1>
              <p className="mission-statement">
                KAAT provides free educational books and materials to help parents and educators
                support children's multilingual development in Cameroon. We believe in the power
                of local languages to foster strong cultural identities and enhance learning.
              </p>
              <Link to="/books" className="browse-button">Browse Free Books</Link>
            </div>
          </section>

          <section className="languages-overview container">
            <h2>Discover Cameroonian Languages</h2>
            <p className="text-center">
              Explore a rich collection of stories and activities in various Cameroonian languages,
              designed to make learning fun and accessible for children.
            </p>
            <div className="language-grid">
              {languages.map((lang, index) => (
                <div key={index} className="language-item card">
                  <h3>{lang}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className="mission-values container">
            <h2>Our Mission</h2>
            <p>
              At KAAT, we are dedicated to preserving and promoting the linguistic diversity of Cameroon.
              By offering free, high-quality educational resources, we empower families and communities
              to nurture multilingualism from an early age, ensuring that every child has the opportunity
              to learn in their mother tongue and beyond.
            </p>
            <p>
              All our content is freely accessible online and can be printed for personal and educational use.
              Join us in celebrating the vibrant tapestry of Cameroonian languages!
            </p>
          </section>
        </div>
      );
    }

    export default HomePage;