import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

test('Greet renders correctly', () => {
    render(<Greet />)
    const greetElement = screen.getByText('Hello');
    expect(greetElement).toBeInTheDocument()
}, 5000)