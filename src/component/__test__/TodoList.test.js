import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import TodoList from '../TodoList';

test('renders react component in the document', () => {
    render(<TodoList />);
    const childElemnt =screen.getByText("To Do");
    expect(childElemnt).toBeInTheDocument();
  });