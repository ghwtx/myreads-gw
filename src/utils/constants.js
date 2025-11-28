/**
 * Shelf types enum
 */
export const SHELF_TYPES = {
  CURRENTLY_READING: 'currentlyReading',
  WANT_TO_READ: 'wantToRead',
  READ: 'read',
  NONE: 'none',
};

/**
 * Shelf configuration with labels and icons
 */
export const SHELF_CONFIG = {
  [SHELF_TYPES.CURRENTLY_READING]: {
    label: 'Currently Reading',
    icon: '📖',
  },
  [SHELF_TYPES.WANT_TO_READ]: {
    label: 'Want to Read',
    icon: '⏰',
  },
  [SHELF_TYPES.READ]: {
    label: 'Read',
    icon: '✓',
  },
};

/**
 * Gradient colors for book covers based on first character
 */
export const COVER_GRADIENTS = [
  { from: '#3B82F6', to: '#06B6D4' }, // Blue to Cyan
  { from: '#10B981', to: '#14B8A6' }, // Emerald to Teal
  { from: '#F43F5E', to: '#EC4899' }, // Rose to Pink
  { from: '#F59E0B', to: '#F97316' }, // Amber to Orange
  { from: '#6366F1', to: '#A855F7' }, // Indigo to Purple
  { from: '#475569', to: '#334155' }, // Slate dark
  { from: '#DC2626', to: '#B91C1C' }, // Red
];

/**
 * @description Get gradient colors for a book based on its ID
 * @param {string} id - The book ID
 * @returns {Object} Object with from and to color values
 */
export const getBookGradient = (id) => {
  const index = id.charCodeAt(0) % COVER_GRADIENTS.length;
  return COVER_GRADIENTS[index];
};
