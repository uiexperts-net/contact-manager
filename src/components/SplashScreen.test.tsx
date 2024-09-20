// src/components/SplashScreen.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import SplashScreen from './SplashScreen';

describe('SplashScreen Component', () => {
  test('renders loading indicator and logo when loading is true', () => {
    render(<SplashScreen loading={true} />);
    
    // Check for logo
    const logoElement = screen.getByAltText(/logo/i);
    expect(logoElement).toBeInTheDocument();
    
    // Check for loading text
    const loadingIndicator = screen.getByRole('progressbar');
    expect(loadingIndicator).toBeInTheDocument();

    // Check for the main title
    const titleElement = screen.getByText(/Contact Manager/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders optional message when loading is true', () => {
    const message = 'Loading your contacts...';
    render(<SplashScreen loading={true} message={message} />);

    // Check for the custom loading message
    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });

  test('does not render anything when loading is false', () => {
    const { container } = render(<SplashScreen loading={false} />);
    
    // Check that nothing is rendered
    expect(container).toBeEmptyDOMElement();
  });
});
