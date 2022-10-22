import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

//to check that my child component must be there to check it i can check if it contains a button
test("render the Child with 1 buttons",async ()=>{
  render(<App />);
  const buttonList = await screen.findAllByRole("button");
  expect(buttonList).toHaveLength(1);
});