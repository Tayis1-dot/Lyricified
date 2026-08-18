import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  it('renders the app header', () => {
    render(<App />);
    const header = screen.getByText(/Lyricified/i);
    expect(header).toBeInTheDocument();
  });

  it('renders the welcome section', () => {
    render(<App />);
    const welcome = screen.getByText(/Welcome to Lyricified/i);
    expect(welcome).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<App />);
    const footer = screen.getByText(/Made with ♥ for music lovers/i);
    expect(footer).toBeInTheDocument();
  });
});
