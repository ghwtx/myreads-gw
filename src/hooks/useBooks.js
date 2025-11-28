import { useState, useCallback, useEffect } from 'react';
import * as BooksAPI from '../BooksAPI';

/**
 * @description Custom hook for managing book state and operations
 * Handles fetching books, updating shelves, and keeping state in sync
 * @returns {Object} Object containing myBooks, loading, error states and methods
 */
export const useBooks = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all user's books on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const books = await BooksAPI.getAll();
        setMyBooks(books || []);
        setError(null);
      } catch (err) {
        setError('Failed to load books');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  /**
   * @description Update a book's shelf and sync state
   * @param {Object} book - The book object to update
   * @param {string} shelf - The shelf to move the book to
   */
  const updateShelf = useCallback(async (book, shelf) => {
    try {
      // Optimistic UI update
      setMyBooks(prev => {
        if (shelf === 'none') {
          return prev.filter(b => b.id !== book.id);
        }

        const exists = prev.find(b => b.id === book.id);
        if (exists) {
          return prev.map(b => b.id === book.id ? { ...b, shelf } : b);
        } else {
          return [...prev, { ...book, shelf }];
        }
      });

      // Call API
      await BooksAPI.update(book, shelf);
    } catch (err) {
      setError('Failed to update book');
      console.error(err);
      // Revert optimistic update on error
      const books = await BooksAPI.getAll();
      setMyBooks(books || []);
    }
  }, []);

  /**
   * @description Get books filtered by shelf
   * @param {string} shelf - The shelf to filter by
   * @returns {Array} Array of books on the specified shelf
   */
  const getBooksByShelf = useCallback((shelf) => {
    return myBooks.filter(b => b.shelf === shelf);
  }, [myBooks]);

  /**
   * @description Search for books in the library
   * @param {string} query - The search query string
   * @returns {Array} Array of books matching the search query
   */
  const searchLibrary = useCallback(async (query) => {
    if (!query.trim()) return [];

    try {
      const results = await BooksAPI.search(query, 20);
      if (!Array.isArray(results)) return [];

      // Map results to include current shelf status if in myBooks
      return results.map(libBook => {
        const myBook = myBooks.find(b => b.id === libBook.id);
        return myBook || libBook;
      });
    } catch (err) {
      console.error('Search failed:', err);
      return [];
    }
  }, [myBooks]);

  return {
    myBooks,
    loading,
    error,
    updateShelf,
    getBooksByShelf,
    searchLibrary,
  };
};
