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

