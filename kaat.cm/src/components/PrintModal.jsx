import React from 'react';
    import './PrintModal.css';

    function PrintModal({ isOpen, onClose, onAgreeAndPrint }) {
      const [agreed, setAgreed] = React.useState(false);

      if (!isOpen) return null;

      const handlePrint = () => {
        if (agreed) {
          onAgreeAndPrint();
          onClose();
        } else {
          alert('You must agree to the terms before printing.');
        }
      };

      return (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Print Terms of Use</h2>
            <p>
              These materials are provided free of charge for <strong>personal and educational use only</strong>.
              You are welcome to print copies for your family, classroom, or community learning initiatives.
            </p>
            <p>
              <strong>Commercial printing or distribution requires explicit permission.</strong>
              For any commercial use requests, please contact us at <a href="mailto:contact@kaat.cm">contact@kaat.cm</a>.
            </p>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="agreeTerms">I agree to the terms of use.</label>
            </div>
            <div className="modal-actions">
              <button onClick={onClose} className="cancel-button">Cancel</button>
              <button onClick={handlePrint} disabled={!agreed}>Print</button>
            </div>
          </div>
        </div>
      );
    }

    export default PrintModal;