import React from 'react';
import { render, screen } from '@testing-library/react';
import Feed from './Feed';

test('renders learn react link', () => {
  render(<Feed />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
