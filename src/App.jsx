import { Routes, Route } from 'react-router-dom';
import { useBooks } from './hooks/useBooks';
import { SearchPage } from './components';
import { MainPage } from './pages/MainPage';
import './App.css';

/**
 * @description Main App Component - MyReads book management application
 * Sets up routing between main page and search page
 *
 * Architecture:
 * - useBooks hook manages all book state and API interactions
 * - React Router handles navigation between pages
 * - State flows down from App to child pages
 * - Single responsibility: App manages routing and passes state to pages
 *
 * @returns {React.ReactNode} The rendered App with routes
 */
function App() {
  const { loading, error, updateShelf, getBooksByShelf, searchLibrary } =
    useBooks();

  if (loading) {
    return (
      <div className="app app--loading">
        <p>Loading your library...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="app__header">
        <div className="app__header-content">
          <h1 className="app__title">
            <span className="app__icon">📚</span>
            {' '}
            MyReads
          </h1>
        </div>
      </header>

      {/* Error Display */}
      {error && <div className="app__error">{error}</div>}

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              myBooks={getBooksByShelf}
              updateShelf={updateShelf}
              getBooksByShelf={getBooksByShelf}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              searchLibrary={searchLibrary}
              onUpdateShelf={updateShelf}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
