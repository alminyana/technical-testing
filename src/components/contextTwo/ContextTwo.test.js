import { render, screen } from '@testing-library/react';
import ContextTwo from './ContextTwo';

test('renders ContextTwo component', () => {
    render(<ContextTwo />);
    const title = screen.getByText(/this is SubComponentOne/i);
    expect(title).toBeInTheDocument();
});
