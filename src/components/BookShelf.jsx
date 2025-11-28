import { BookCard } from './BookCard';
import './BookShelf.css';

/**
 * @description BookShelf component - displays a collection of books on a shelf
 * Shows shelf header with count and empty state when no books
 */
export const BookShelf = ({ title, icon, books, onUpdateShelf }) => {
  return (
    <section className="book-shelf">
      <div className="book-shelf__header">
        <span className="book-shelf__icon">{icon}</span>
        <h2 className="book-shelf__title">{title}</h2>
        <span className="book-shelf__count">{books.length}</span>
      </div>

      {books.length === 0 ? (
        <div className="book-shelf__empty">
          <p>No books in this shelf yet.</p>
        </div>
      ) : (
        <div className="book-shelf__grid">
          {books.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onUpdateShelf={onUpdateShelf}
            />
          ))}
        </div>
      )}
    </section>
  );
};
