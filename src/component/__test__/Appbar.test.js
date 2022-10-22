import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Appbar from '../Appbar';

describe("Test the Appbar component",()=>{
    test('renders with text My Task Board', () => {
        render(<Appbar />);
        const childElemnt =screen.getByText(/My Task Board/i);
        expect(childElemnt).toBeInTheDocument();
      });
});