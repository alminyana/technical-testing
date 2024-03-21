import { render, screen, fireEvent } from '@testing-library/react';
import PostData from './PostData';

describe('<PostData />', () => {
    beforeEach(() => {
        render(<PostData />);
    });

    test('renders PostData component', async () => {
        const input = screen.getByRole('textbox', { placeholder: /enter name/i});
        const button = screen.getByRole('button', { name: /submit/i});
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();

        fireEvent.change(input, { target: { value: 'Hello mates'}});
        fireEvent.click(button);

        const title = screen.getByText(/Hello mates/i);
        expect(title).toBeInTheDocument();
    });
});
