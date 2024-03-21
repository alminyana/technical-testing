import { render, screen, fireEvent } from '@testing-library/react';
import PostData from './PostData';

describe('test <PostData />', () => {
    test('renders PostData component', () => {
        render(<PostData/>);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });
});
