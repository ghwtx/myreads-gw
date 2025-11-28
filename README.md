# MyReads - Book Management Application

A React-based bookshelf application that allows users to select and categorize books into three shelves: Currently Reading, Want to Read, and Read. Users can search for new books and manage their personal library.

## Features

- **Three Book Shelves**: Organize books into "Currently Reading," "Want to Read," and "Read"
- **Search Functionality**: Search for books by title or author in a full-screen search overlay
- **Book Management**: Easily move books between shelves or remove them from your library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd myreads-gw
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open automatically at `http://localhost:5173` (or the next available port). The app will hot-reload as you make changes.

### Other Available Commands

- `npm run dev` - Start the development server (alternative to `npm start`)
- `npm run build` - Build for production
- `npm run lint` - Check code quality with ESLint
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── BookCover.jsx
│   ├── BookCard.jsx
│   ├── BookShelf.jsx
│   ├── ShelfChanger.jsx
│   └── SearchPage.jsx
├── hooks/               # Custom React hooks
│   └── useBooks.js      # Book state management hook
├── utils/               # Utility functions and constants
│   └── constants.js     # Configuration and constants
├── App.jsx              # Main application component
└── BooksAPI.js          # API integration with Udacity backend
```

## Architecture

The application follows a clean architecture with:

- **Custom Hooks**: `useBooks` hook manages all book state and API interactions
- **Reusable Components**: Each component has a single responsibility and can be reused
- **Composition**: Components are built by composing smaller, focused pieces
- **Unidirectional Data Flow**: State flows down, callbacks flow up
- **Optimistic Updates**: UI updates immediately while API calls complete in background

## API Integration

The application uses the Udacity Books API to:
- Fetch user's current book collection
- Search for books by title or author
- Update book shelf assignments
