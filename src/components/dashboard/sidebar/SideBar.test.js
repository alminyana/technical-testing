import { render, screen } from '@testing-library/react';
import DashboardWrapper from '../DashboardWrapper';

test('renders SideBar react link', () => {
  render(<DashboardWrapper />);
  const title = screen.getByText(/this is Sidebar -/i);
  expect(title).toBeInTheDocument();
});
