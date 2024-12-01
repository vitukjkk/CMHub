import React from 'react';
import { render, screen } from '@testing-library/react';
import Perfil from './Perfil';

test('renders learn react link', () => {
  render(<Perfil />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
