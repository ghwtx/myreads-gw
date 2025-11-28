import './BookCover.css';

/**
 * @description BookCover component - displays a book cover with color fallback
 * Reusable component for showing book visual representation
 */
export const BookCover = ({ book }) => {
  const imageUrl = book.imageLinks?.thumbnail;
  const title = book.title || 'Unknown Title';
  const authors = book.authors?.join(', ') || 'Unknown Author';

  return (
    <div
      className="book-cover"
      style={
        imageUrl
          ? { backgroundImage: `url(${imageUrl})` }
          : { backgroundColor: '#e5e7eb' }
      }
    >
      {!imageUrl && (
        <div className="book-cover__placeholder">
          <h3 className="book-cover__title">{title}</h3>
          <p className="book-cover__author">{authors}</p>
        </div>
      )}
    </div>
  );
};
