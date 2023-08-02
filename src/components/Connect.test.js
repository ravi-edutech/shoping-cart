import React from "react";
import { render, screen } from '@testing-library/react';
import Connect from "./Connect";

test('renders the landing page', () => {
  render(<Connect />);
  const headers = screen.getAllByRole('heading')
  expect(headers).toHaveLength(1);
});