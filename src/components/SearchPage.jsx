import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookCard } from './BookCard';
import './SearchPage.css';

/**
 * @description SearchPage component - search overlay for finding new books
 * Allows users to search and add books to their shelves
 */
export const SearchPage = ({ searchLibrary, onUpdateShelf }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback(
    async (searchQuery) => {
      setQuery(searchQuery);

      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsSearching(true);
      const books = await searchLibrary(searchQuery);
      setResults(Array.isArray(books) ? books : []);
      setIsSearching(false);
    },
    [searchLibrary]
  );

  return (
    <div className="search-page">
      <div className="search-page__header">
        <button
          className="search-page__back-button"
          onClick={() => navigate('/')}
          aria-label="Close search"
        >
          ← Back
        </button>
        <div className="search-page__input-wrapper">
          <svg
            className="search-page__search-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search by title or author..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-page__input"
            autoFocus
          />
        </div>
      </div>

      <div className="search-page__content">
        {query === '' ? (
          <div className="search-page__initial-state">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <p className="search-page__initial-text">
              Type to find new books for your collection.
            </p>
            <p className="search-page__initial-hint">
              Try searching for "Harry Potter" or "Dune"
            </p>
          </div>
        ) : isSearching ? (
          <div className="search-page__loading">
            <p>Searching...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="search-page__no-results">
            <p>No results found for "{query}"</p>
          </div>
        ) : (
          <div className="search-page__grid">
            {results.map(book => (
              <BookCard
                key={book.id}
                book={book}
                onUpdateShelf={onUpdateShelf}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
