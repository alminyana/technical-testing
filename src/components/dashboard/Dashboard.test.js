import { render, screen } from '@testing-library/react';
import DashboardWrapper from './DashboardWrapper';

describe('<DashboardWrapper />', () => {
  let component;

  beforeEach(() => {
      component = render(<DashboardWrapper />);
  });

  test('renders Dashboard react link', () => {
    const title = component.getByText(/useContext case/i);
    expect(title).toBeInTheDocument();
  });
  
  test('renders Dashboard component aproach 2', () => {
    const label = component.getByText(/Peter/i);
    expect(label).toBeInTheDocument();
  });
});
