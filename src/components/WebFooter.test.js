import React from "react";
import { render, screen } from '@testing-library/react';
import WebFooter from './WebFooter';

test('renders the landing page', () => {
  render(<WebFooter />);
  const headers = screen.getAllByRole('heading')
  expect(headers).toHaveLength(3);
});