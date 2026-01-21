# KAAT - Every Language, Every Family

KAAT is a free multilingual learning platform for Cameroonian languages, providing educational books and materials to support children's multilingual development. This is a static, frontend-only MVP web application.

## Project Overview

This application aims to provide a user-friendly interface for browsing, reading, and interacting with educational content in various Cameroonian languages.

## Features

*   **Homepage:** Hero section, mission statement, language overview, and call-to-action.
*   **Books Library Page:** Grid layout of books with cover thumbnails, titles, age groups, languages, descriptions, and "Read Online" buttons. Includes filter options by language, age group, and book type, along with search functionality.
*   **Book Reader Page:** Clean reading interface with page navigation, adjustable text size, bookmarking (using `localStorage`), a print button with a disclaimer modal, and PDF download functionality. Stories include moral lessons and discussion questions.
*   **About Page:** Information about KAAT's mission, values, featured Cameroonian languages, the importance of multilingual education, and usage terms.
*   **Contact Page:** A simulated contact form, information for commercial use requests, social media links (placeholders), and a comprehensive FAQ section.
*   **Responsive Design:** Optimized for mobile-first viewing and works across various screen sizes.
*   **Offline Support:** Basic service worker implementation for caching static assets.

## Technology Stack

*   **Frontend:** React.js
*   **Build Tool:** Vite
*   **Routing:** React Router DOM
*   **Local Storage:** For bookmarks and user preferences
*   **PDF Generation:** `html2canvas` and `jspdf` (client-side)
*   **Styling:** Pure CSS

## Getting Started

To run this project locally:

1.  **Ensure Node.js is installed.**
2.  **Create the project directory and files:**
    The `kaat-logo.png` file should be placed in the `public/` directory.
    (The image provided in the prompt should be saved as `public/kaat-logo.png`).
    All other files and their content are provided in the artifact.
3.  **Install dependencies:**
    Navigate to the project root directory in your terminal and run:
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, and you can access the application in your browser, typically at `http://localhost:5173`.

## Usage

*   **Navigation:** Use the header links to navigate between pages.
*   **Books:** On the "Books" page, use the search bar and filters to find books. Click "Read Online" to open a book.
*   **Reader:** Use "Previous Page" and "Next Page" buttons. Adjust text size using the dropdown. Your progress will be saved automatically.
*   **Print/Download:** On the reader page, click "Print Book" to see terms and print, or "Download PDF" to save the book as a PDF.
*   **Contact Form:** Fill out the form and submit. A success message will appear (no backend integration).

## Design Principles

*   **Color Palette:** Ocean Blue (`#4A90E2`), Sunshine Yellow (`#FFB84D`), Forest Green (`#7CB342`), Warm Cream (`#FFF8E7`), Charcoal (`#333333`).
*   **Typography:** Clean, readable sans-serif fonts.
*   **UI Elements:** Rounded and friendly.
*   **Accessibility:** Designed with WCAG AA minimum standards in mind.
*   **Performance:** Optimized for fast loading, considering low-bandwidth environments.

## Important Notes

*   All content is **FREE** for personal and educational use.
*   Users **CAN print** for personal/educational use after agreeing to terms.
*   Clear instructions for requesting commercial permissions are provided on the "About" and "Contact" pages.
*   The UI is designed to be intuitive and community-focused.