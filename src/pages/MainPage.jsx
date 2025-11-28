import { useNavigate } from 'react-router-dom';
import { BookShelf } from '../components';
import { SHELF_TYPES, SHELF_CONFIG } from '../utils/constants';
import './MainPage.css';

/**
 * @description MainPage component - displays user's book shelves
 * Shows three shelves: Currently Reading, Want to Read, and Read
 */
export const MainPage = ({ myBooks, updateShelf, getBooksByShelf }) => {
  const navigate = useNavigate();

  const shelfIcons = {
    [SHELF_TYPES.CURRENTLY_READING]: '📖',
    [SHELF_TYPES.WANT_TO_READ]: '⏰',
    [SHELF_TYPES.READ]: '✓',
  };

  return (
    <main className="main-page">
      <div className="main-page__shelves">
        {Object.entries(SHELF_CONFIG).map(([shelfKey, config]) => (
          <BookShelf
            key={shelfKey}
            title={config.label}
            icon={shelfIcons[shelfKey]}
            books={getBooksByShelf(shelfKey)}
            onUpdateShelf={updateShelf}
          />
        ))}
      </div>

      {/* Floating Action Button */}
      <button
        className="main-page__fab"
        onClick={() => navigate('/search')}
        aria-label="Add a book"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <span className="main-page__fab-label">Add Book</span>
      </button>
    </main>
  );
};
