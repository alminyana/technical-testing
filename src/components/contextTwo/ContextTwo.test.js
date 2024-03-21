import { render, screen, fireEvent } from '@testing-library/react';
import ContextTwo from './ContextTwo';

describe('<ContextTwo />', () => {
    beforeEach(() => {
        render(<ContextTwo />);
    });

    test('renders ContextTwo component', () => {
        const title = screen.getByText(/this is SubComponentOne/i);
        expect(title).toBeInTheDocument();
    });

    test('button in child component is rendered', () => {
        const button = screen.getByText(/print title/i);
        expect(button).toBeInTheDocument();
    }); 
    
    test('renders new text onClick button', () => {
        const firstTitle = screen.getByText(/FIRST DATA/i);
        expect(firstTitle).toBeInTheDocument();
        
        const button = screen.getByText(/print title/i);
        fireEvent.click(button);

        const changedTitle = screen.getByText(/data has changed/i);
        expect(changedTitle).toBeInTheDocument();
    });    
});
