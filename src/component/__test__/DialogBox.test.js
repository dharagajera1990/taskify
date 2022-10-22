import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import DialogBox from '../DialogBox';

describe("Test the Dialog component",()=>{
    test("render the dialog with 1 buttons",async ()=>{
        render(<DialogBox />);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    });
});