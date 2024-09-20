// src/App.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the SplashScreen while loading', () => {
    render(<App />);
    
    // Check for loading message
    const loadingMessage = screen.getByText(/Loading.../i);
    expect(loadingMessage).toBeInTheDocument();
    
    // Check for the progress indicator
    const progressIndicator = screen.getByRole('progressbar');
    expect(progressIndicator).toBeInTheDocument();
  });

  test('renders the main content after loading', async () => {
    render(<App />);
    
    // Wait for loading to finish (2 seconds)
    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    }, { timeout: 3000 }); // Ensure the timeout is long enough

    // Check for welcome message
    const welcomeMessage = screen.getByText(/Welcome to Contact Manager!/i);
    expect(welcomeMessage).toBeInTheDocument();

    // Check for Sync Contacts button
    const syncButton = screen.getByRole('button', { name: /Sync Contacts/i });
    expect(syncButton).toBeInTheDocument();
  });
});
