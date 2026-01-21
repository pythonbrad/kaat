import React, { useState } from 'react';
    import './ContactPage.css';

    function ContactPage() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form Data Submitted:', formData);
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        setTimeout(() => setSubmissionStatus(null), 5000); // Clear status after 5 seconds
      };

      const faqItems = [
        {
          question: "Are these books really free?",
          answer: "Yes! All books and educational materials on KAAT are completely free to read online and download for personal and educational use. Our mission is to provide accessible resources to everyone."
        },
        {
          question: "Can I print these books?",
          answer: "Absolutely! You can print any of our books for personal, family, classroom, or non-commercial educational use. We encourage you to use them to support learning in your community."
        },
        {
          question: "Can I use these in my school?",
          answer: "Yes, you can use our materials in your school for educational purposes without needing special permission. If you plan large-scale commercial printing or distribution, please contact us."
        },
        {
          question: "How do I request permission for commercial use?",
          answer: "For any commercial use (e.g., selling printed copies, using content in commercial products), please send a detailed request to contact@kaat.cm. We will review your request and get back to you."
        },
        {
          question: "How can I contribute to KAAT?",
          answer: "We welcome contributions! If you are a linguist, educator, illustrator, or writer interested in creating content for Cameroonian languages, please reach out to us via the contact form or email. We also appreciate donations to support our work."
        }
      ];

      return (
        <div className="contact-page container">
          <h1>Contact Us</h1>
          <p className="page-description">
            We'd love to hear from you! Whether you have questions, feedback, or commercial inquiries,
            please use the form below or find our contact details.
          </p>

          <div className="contact-grid">
            <div className="contact-form-section card">
              <h2>Send us a Message</h2>
              {submissionStatus === 'success' && (
                <p className="success-message">Thank you for your message! We will get back to you soon.</p>
              )}
              {submissionStatus === 'error' && (
                <p className="error-message">There was an error sending your message. Please try again later.</p>
              )}
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-label="Your name"
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Your email address"
                />

                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  aria-label="Subject of your message"
                />

                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-label="Your message"
                ></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>

            <div className="info-faq-section">
              <div className="commercial-info card">
                <h2>Commercial Use Requests</h2>
                <p>
                  If you are interested in commercial printing, distribution, or any other
                  commercial use of KAAT materials, please contact us directly.
                </p>
                <p>Email: <a href="mailto:commercial@kaat.cm">commercial@kaat.cm</a></p>
                <p>We are open to partnerships that align with our mission.</p>
              </div>

              <div className="social-faq card">
                <h2>Follow Us</h2>
                <div className="social-links">
                  <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i> Facebook</a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i> Twitter</a>
                  <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i> Instagram</a>
                </div>

                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                  {faqItems.map((item, index) => (
                    <details key={index} className="faq-item">
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default ContactPage;