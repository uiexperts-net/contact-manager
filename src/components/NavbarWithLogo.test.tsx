// src/components/NavbarWithLogo.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import NavbarWithLogo from './NavbarWithLogo';

describe('NavbarWithLogo Component', () => {
  test('renders logo, title, contact count, and group count', () => {
    render(<NavbarWithLogo contactCount={10} groupCount={5} />);

    // Check if logo is in the document
    const logo = screen.getByAltText(/Contact Manager Logo/i);
    expect(logo).toBeInTheDocument();

    // Check if title is in the document
    const title = screen.getByText(/Contact Manager/i);
    expect(title).toBeInTheDocument();

    // Check if contact count is displayed correctly
    expect(screen.getByText(/10 Contacts/i)).toBeInTheDocument();

    // Check if group count is displayed correctly
    expect(screen.getByText(/5 Groups/i)).toBeInTheDocument();
  });

  test('renders with zero counts', () => {
    render(<NavbarWithLogo contactCount={0} groupCount={0} />);

    // Check if contact count displays correctly
    expect(screen.getByText(/0 Contacts/i)).toBeInTheDocument();

    // Check if group count displays correctly
    expect(screen.getByText(/0 Groups/i)).toBeInTheDocument();
  });
});
