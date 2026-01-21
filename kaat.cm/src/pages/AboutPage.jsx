import React from 'react';
    import './AboutPage.css';

    function AboutPage() {
      return (
        <div className="about-page container">
          <h1>About KAAT</h1>
          <p className="page-description">
            "KAAT" means "book" in the Bassa language of Cameroon. We are a non-profit initiative
            dedicated to fostering multilingual education and cultural preservation in Cameroon.
          </p>

          <section className="mission-values-section card">
            <h2>Our Mission & Values</h2>
            <p>
              Our mission is to empower Cameroonian children, parents, and educators with free,
              accessible, and engaging educational resources in local languages. We believe that
              learning in one's mother tongue strengthens cognitive development, cultural identity,
              and overall educational outcomes.
            </p>
            <ul>
              <li><strong>Accessibility:</strong> All content is free and available online.</li>
              <li><strong>Inclusivity:</strong> Supporting a wide range of Cameroonian languages.</li>
              <li><strong>Quality:</strong> Providing engaging and pedagogically sound materials.</li>
              <li><strong>Community:</strong> Building a platform that serves and grows with the community.</li>
              <li><strong>Sustainability:</strong> Promoting long-term linguistic and cultural heritage.</li>
            </ul>
          </section>

          <section className="languages-featured-section card">
            <h2>Cameroonian Languages Featured</h2>
            <p>
              Cameroon is a country of incredible linguistic diversity, boasting over 250 languages.
              KAAT is proud to feature materials in many of these vibrant languages, including:
            </p>
            <div className="language-list">
              <span>Duala</span>
              <span>Ewondo</span>
              <span>Fulfulde</span>
              <span>Ghomala</span>
              <span>Bassa</span>
              <span>Nufi</span>
              <span>Limbum</span>
              <span>Medumba</span>
              <span>...and many more to come!</span>
            </div>
            <p>
              We are continuously working with local communities and linguists to expand our collection
              and include more of Cameroon's rich linguistic heritage.
            </p>
          </section>

          <section className="multilingual-education-section card">
            <h2>Why Multilingual Education Matters</h2>
            <p>
              Research shows that children who learn in their mother tongue alongside other languages
              develop stronger cognitive skills, higher self-esteem, and a deeper connection to their
              cultural roots. Multilingual education:
            </p>
            <ul>
              <li>Enhances critical thinking and problem-solving abilities.</li>
              <li>Fosters a stronger sense of identity and belonging.</li>
              <li>Improves academic performance across all subjects.</li>
              <li>Promotes cultural understanding and appreciation.</li>
              <li>Prepares children for a globalized world while rooting them in their local heritage.</li>
            </ul>
          </section>

          <section className="usage-terms-section card">
            <h2>Usage Terms and Permissions</h2>
            <p>
              All content on KAAT is provided under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
            </p>
            <ul>
              <li><strong>Free for Personal & Educational Use:</strong> You are welcome to read online, download, and print materials for personal, family, classroom, or non-commercial educational purposes.</li>
              <li><strong>Commercial Use:</strong> Any commercial printing, distribution, or adaptation of our materials requires explicit written permission. Please contact us at <a href="mailto:contact@kaat.cm">contact@kaat.cm</a> for commercial inquiries.</li>
              <li><strong>Attribution:</strong> Please always attribute KAAT as the source when using our materials.</li>
            </ul>
            <p>
              By using this platform, you agree to these terms. We appreciate your cooperation in helping us sustain this free resource.
            </p>
          </section>

          <section className="team-info-section card">
            <h2>Our Team</h2>
            <p>
              KAAT is powered by a passionate team of educators, linguists, developers, and volunteers
              who believe in the transformative power of language and education. We are a diverse group
              committed to making a positive impact on children's lives across Cameroon.
            </p>
            <p>
              (Placeholder: Team member profiles and photos would go here in a full implementation.)
            </p>
          </section>
        </div>
      );
    }

    export default AboutPage;