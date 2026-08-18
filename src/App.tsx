import React from 'react';

/**
 * Main App Component
 * Root component for the Lyricified application
 */
export default function App(): React.ReactElement {
  return (
    <div className="app">
      <header>
        <h1>🎵 Lyricified</h1>
        <p>Discover and enjoy lyrics with style</p>
      </header>
      
      <main>
        <section>
          <h2>Welcome to Lyricified</h2>
          <p>Get started by exploring songs and artists.</p>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2026 Lyricified. Made with ♥ for music lovers.</p>
      </footer>
    </div>
  );
}
