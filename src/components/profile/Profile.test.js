import { render, screen } from '@testing-library/react';
import DashboardWrapper from '../dashboard/DashboardWrapper';

test('renders Profile react link', () => {
  render(<DashboardWrapper />);
  const title = screen.getByText(/this is Profile - name/i);
  expect(title).toBeInTheDocument();
});
