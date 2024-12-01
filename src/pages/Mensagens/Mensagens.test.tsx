import React from 'react';
import { render, screen } from '@testing-library/react';
import Mensagens from './Mensagens';

test('renders learn react link', () => {
  render(<Mensagens />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
