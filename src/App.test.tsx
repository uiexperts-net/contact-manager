// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders NavbarWithLogo with contact and group counts', () => {
    render(<App />);

    // Check if the NavbarWithLogo is rendered
    expect(screen.getByRole('img', { name: /Contact Manager Logo/i })).toBeInTheDocument();
    
    // Check if the title is rendered
    expect(screen.getByText(/Welcome to the Contact Manager/i)).toBeInTheDocument();

    // Check if contact count is displayed
    expect(screen.getByText(/10 Contacts/i)).toBeInTheDocument();

    // Check if group count is displayed
    expect(screen.getByText(/5 Groups/i)).toBeInTheDocument();
  });
});
