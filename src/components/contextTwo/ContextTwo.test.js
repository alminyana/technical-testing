import { render, screen, fireEvent } from '@testing-library/react';
import ContextTwo from './ContextTwo';

describe('Test <ContextTwo />', () => {
    test('renders ContextTwo component', () => {
        render(<ContextTwo />);
        const title = screen.getByText(/this is SubComponentOne/i);
        expect(title).toBeInTheDocument();
    });

    test('button in child component is rendered', () => {
        render(<ContextTwo />);
        const button = screen.getByText(/print title/i);
        expect(button).toBeInTheDocument();
    }); 
    
    test('renders new text onClick button', () => {
        render(<ContextTwo />);
        const firstTitle = screen.getByText(/FIRST DATA/i);
        expect(firstTitle).toBeInTheDocument();
        
        const button = screen.getByText(/print title/i);
        fireEvent.click(button);

        const changedTitle = screen.getByText(/data has changed/i);
        expect(changedTitle).toBeInTheDocument();
    });    
});
