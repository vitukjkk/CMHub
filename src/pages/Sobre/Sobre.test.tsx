import React from 'react';
import { render, screen } from '@testing-library/react';
import Sobre from './Sobre';

test('renders learn react link', () => {
  render(<Sobre />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
