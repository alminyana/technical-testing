import { render, screen } from '@testing-library/react';
import DashboardWrapper from './DashboardWrapper';

describe('DashboardWrapper and childs', () => {

    test('renders DashboardWrapper react link', () => {
      render(<DashboardWrapper />);
      const title = screen.getByText(/holaa/i);
      expect(title).toBeInTheDocument();
    });
    
    test('renders Profile child component', () => {
        render(<DashboardWrapper />);
        const title = screen.getByText(/this is Profile/i);
        expect(title).toBeInTheDocument();
    });

    test('renders SideBar child component', () => {
      render(<DashboardWrapper />);
      const title = screen.getByText(/this is sidebar/i);
      expect(title).toBeInTheDocument();
  });
});
