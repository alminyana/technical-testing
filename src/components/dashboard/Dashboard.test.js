import { render, screen } from '@testing-library/react';
import DashboardWrapper from './DashboardWrapper';

test('renders Dashboard react link', () => {
  render(<DashboardWrapper />);
  const title = screen.getByText(/useContext case/i);
  expect(title).toBeInTheDocument();
});

test('renders Dashboard component aproach 2', () => {
  const component = render(<DashboardWrapper />);
  component.getByText(/Peter/i);
});
