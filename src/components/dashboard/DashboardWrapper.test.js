import { render, screen } from '@testing-library/react';
import DashboardWrapper from './DashboardWrapper';

describe('<DashboardWrapper /> and childs', () => {
  beforeEach(() => {
    render(<DashboardWrapper />);
  });

    test('renders DashboardWrapper react link', () => {

      const title = screen.getByText(/holaa/i);
      expect(title).toBeInTheDocument();
    });
    
    test('renders Profile child component', () => {

        const title = screen.getByText(/this is Profile/i);
        expect(title).toBeInTheDocument();
    });

    test('renders SideBar child component', () => {

      const title = screen.getByText(/this is sidebar/i);
      expect(title).toBeInTheDocument();
  });
});
