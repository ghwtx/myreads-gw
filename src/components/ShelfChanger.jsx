import { SHELF_TYPES, SHELF_CONFIG } from '../utils/constants';
import './ShelfChanger.css';

/**
 * @description ShelfChanger component - allows moving books between shelves
 * Positioned as a floating button over book covers
 */
export const ShelfChanger = ({ currentShelf, onUpdate }) => {
  /**
   * @description Handle shelf selection change
   * @param {Object} e - The change event from the select element
   */
  const handleChange = (e) => {
    const newShelf = e.target.value;
    if (newShelf !== 'move') {
      onUpdate(newShelf);
    }
  };

  return (
    <div className="shelf-changer">
      <select
        className="shelf-changer__select"
        value={currentShelf || SHELF_TYPES.NONE}
        onChange={handleChange}
        aria-label="Move book to shelf"
      >
        <option value="move" disabled>
          Move to...
        </option>
        {Object.entries(SHELF_CONFIG).map(([key, config]) => (
          <option key={key} value={key}>
            {config.label}
          </option>
        ))}
        <option value={SHELF_TYPES.NONE}>None</option>
      </select>
      <div className="shelf-changer__button" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </div>
    </div>
  );
};
