import React, { useState, useEffect, useRef } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';
    import { booksData } from '../data/booksData';
    import PrintModal from '../components/PrintModal';
    import { saveBookmark, getBookmark } from '../utils/localStorage';
    import html2canvas from 'html2canvas';
    import jsPDF from 'jspdf';
    import './BookReaderPage.css';

    function BookReaderPage() {
      const { bookId } = useParams();
      const navigate = useNavigate();
      const book = booksData.find(b => b.id === bookId);

      const [currentPage, setCurrentPage] = useState(1);
      const [fontSize, setFontSize] = useState(16); // Default font size
      const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
      const contentRef = useRef(null); // Ref for the content to print/download

      useEffect(() => {
        if (!book) {
          navigate('/books'); // Redirect if book not found
          return;
        }
        // Load bookmark
        const savedPage = getBookmark(book.id);
        if (savedPage) {
          setCurrentPage(savedPage);
        }
      }, [bookId, book, navigate]);

      useEffect(() => {
        // Save bookmark whenever page changes
        if (book) {
          saveBookmark(book.id, currentPage);
        }
      }, [currentPage, book]);

      if (!book) {
        return <div className="container">Loading book...</div>;
      }

      const totalPages = book.pages.length;
      const currentBookPage = book.pages[currentPage - 1];

      const handleNextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(prev => prev + 1);
        }
      };

      const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(prev => prev - 1);
        }
      };

      const handlePrint = () => {
        setIsPrintModalOpen(true);
      };

      const handleAgreeAndPrint = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>' + book.title + '</title>');
        printWindow.document.write('<style>');
        printWindow.document.write(`
          body { font-family: 'Inter', 'Open Sans', sans-serif; margin: 20mm; }
          h1, h2, h3 { color: #4A90E2; page-break-after: avoid; }
          p { margin-bottom: 1em; page-break-inside: avoid; }
          .page-content { margin-bottom: 20mm; }
          .page-number { text-align: right; font-size: 0.8em; color: #666; margin-top: 10mm; }
          .copyright-footer { text-align: center; font-size: 0.7em; color: #999; margin-top: 20mm; page-break-before: avoid; }
          @page { margin: 20mm; }
        `);
        printWindow.document.write('</style></head><body>');

        book.pages.forEach((page, index) => {
          printWindow.document.write('<div class="page-content">');
          printWindow.document.write(`<h3>Page ${page.pageNumber}</h3>`);
          printWindow.document.write(`<div style="font-size: ${fontSize}px;">${page.content}</div>`);
          printWindow.document.write('</div>');
          printWindow.document.write(`<div class="page-number">Page ${index + 1} of ${totalPages}</div>`);
          if (index < totalPages - 1) {
            printWindow.document.write('<div style="page-break-after: always;"></div>');
          }
        });

        printWindow.document.write('<div class="copyright-footer">© KAAT. Free for personal and educational use. Commercial use requires permission.</div>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
      };

      const handleDownloadPdf = async () => {
        const input = contentRef.current;
        if (!input) return;

        const pdf = new jsPDF('p', 'mm', 'a4');
        const margin = 10; // mm
        let yOffset = margin;
        const pageHeight = pdf.internal.pageSize.height - 2 * margin;

        for (let i = 0; i < book.pages.length; i++) {
          const pageContentDiv = document.createElement('div');
          pageContentDiv.style.width = '190mm'; // A4 width - 2*margin
          pageContentDiv.style.padding = '10mm';
          pageContentDiv.style.backgroundColor = 'white';
          pageContentDiv.innerHTML = `
            <h3>Page ${book.pages[i].pageNumber}</h3>
            <div style="font-size: ${fontSize}px;">${book.pages[i].content}</div>
            <div style="text-align: right; font-size: 0.8em; color: #666; margin-top: 10mm;">Page ${i + 1} of ${totalPages}</div>
          `;
          document.body.appendChild(pageContentDiv); // Temporarily add to DOM for rendering

          const canvas = await html2canvas(pageContentDiv, { scale: 2 });
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = 190; // mm
          const imgHeight = canvas.height * imgWidth / canvas.width;

          if (i > 0) {
            pdf.addPage();
            yOffset = margin;
          }

          pdf.addImage(imgData, 'PNG', margin, yOffset, imgWidth, imgHeight);
          document.body.removeChild(pageContentDiv); // Remove from DOM

          // Add copyright footer on the last page
          if (i === totalPages - 1) {
            pdf.setFontSize(8);
            pdf.setTextColor(150);
            pdf.text('© KAAT. Free for personal and educational use. Commercial use requires permission.', pdf.internal.pageSize.width / 2, pdf.internal.pageSize.height - margin, { align: 'center' });
          }
        }

        pdf.save(`${book.title.replace(/[^a-z0-9]/gi, '_')}.pdf`);
      };


      return (
        <div className="book-reader-page container">
          <h1 className="book-reader-title">{book.title}</h1>
          <p className="book-reader-meta">
            Languages: {book.languages.join(', ')} | Age Group: {book.ageGroup}
          </p>

          <div className="reader-controls card">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
            <div className="font-size-control">
              <label htmlFor="font-size">Text Size:</label>
              <select
                id="font-size"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                aria-label="Adjust text size"
              >
                <option value="14">Small</option>
                <option value="16">Medium</option>
                <option value="18">Large</option>
                <option value="20">X-Large</option>
              </select>
            </div>
            <button onClick={handlePrint} className="print-button">Print Book</button>
            <button onClick={handleDownloadPdf} className="download-pdf-button">Download PDF</button>
          </div>

          <div className="book-content-wrapper card" ref={contentRef}>
            <div className="book-content" style={{ fontSize: `${fontSize}px` }}>
              {currentBookPage.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {currentPage === totalPages && (
                <div className="moral-lesson">
                  <h3>Moral of the Story:</h3>
                  <p>{book.moralLesson}</p>
                  <h4>Questions for Discussion:</h4>
                  <ul>
                    {book.discussionQuestions.map((q, index) => (
                      <li key={index}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <PrintModal
            isOpen={isPrintModalOpen}
            onClose={() => setIsPrintModalOpen(false)}
            onAgreeAndPrint={handleAgreeAndPrint}
          />
        </div>
      );
    }

    export default BookReaderPage;