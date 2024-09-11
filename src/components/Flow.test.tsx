// src/components/Flow.test.tsx
import { render, screen } from '@testing-library/react';
import Flow from './Flow';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

test('renders flow component', () => {
  render(<Flow />);
  expect(screen.getByText('Add Node')).toBeInTheDocument();
});
