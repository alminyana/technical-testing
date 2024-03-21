import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders App react link', () => {
  render(<App />);
  const title = screen.getByText(/Testing React app/i);
  expect(title).toBeInTheDocument();
});
