import { BookCover } from './BookCover';
import { ShelfChanger } from './ShelfChanger';
import './BookCard.css';

/**
 * @description BookCard component - complete book display with cover and shelf changer
 * Combines BookCover and ShelfChanger for unified book interaction
 */
export const BookCard = ({ book, onUpdateShelf }) => {
  const handleShelfChange = (shelf) => {
    onUpdateShelf(book, shelf);
  };

  return (
    <div className="book-card">
      <div className="book-card__cover-container">
        <BookCover book={book} />
        <ShelfChanger currentShelf={book.shelf} onUpdate={handleShelfChange} />
      </div>
      <div className="book-card__info">
        <h3 className="book-card__title">{book.title || 'Unknown Title'}</h3>
        <p className="book-card__authors">
          {book.authors?.join(', ') || 'Unknown Author'}
        </p>
      </div>
    </div>
  );
};
