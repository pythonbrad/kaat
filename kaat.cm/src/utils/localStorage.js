// Utility functions for localStorage

    const BOOKMARK_PREFIX = 'kaat_bookmark_';
    const SETTINGS_PREFIX = 'kaat_settings_';

    /**
     * Saves the current page for a given book as a bookmark.
     * @param {string} bookId - The ID of the book.
     * @param {number} pageNumber - The page number to bookmark.
     */
    export const saveBookmark = (bookId, pageNumber) => {
      try {
        localStorage.setItem(`${BOOKMARK_PREFIX}${bookId}`, pageNumber.toString());
      } catch (e) {
        console.error("Error saving bookmark to localStorage", e);
      }
    };

    /**
     * Retrieves the saved bookmark for a given book.
     * @param {string} bookId - The ID of the book.
     * @returns {number|null} The bookmarked page number, or null if not found.
     */
    export const getBookmark = (bookId) => {
      try {
        const savedPage = localStorage.getItem(`${BOOKMARK_PREFIX}${bookId}`);
        return savedPage ? parseInt(savedPage, 10) : null;
      } catch (e) {
        console.error("Error retrieving bookmark from localStorage", e);
        return null;
      }
    };

    /**
     * Saves a user setting.
     * @param {string} key - The key for the setting.
     * @param {any} value - The value of the setting.
     */
    export const saveSetting = (key, value) => {
      try {
        localStorage.setItem(`${SETTINGS_PREFIX}${key}`, JSON.stringify(value));
      } catch (e) {
        console.error(`Error saving setting '${key}' to localStorage`, e);
      }
    };

    /**
     * Retrieves a user setting.
     * @param {string} key - The key for the setting.
     * @param {any} defaultValue - The default value to return if the setting is not found.
     * @returns {any} The setting's value or the default value.
     */
    export const getSetting = (key, defaultValue = null) => {
      try {
        const savedValue = localStorage.getItem(`${SETTINGS_PREFIX}${key}`);
        return savedValue ? JSON.parse(savedValue) : defaultValue;
      } catch (e) {
        console.error(`Error retrieving setting '${key}' from localStorage`, e);
        return defaultValue;
      }
    };