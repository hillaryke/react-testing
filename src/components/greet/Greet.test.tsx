// Greet should render the text hello and if a name is passed into the component
// It should render hello followed by name

import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

test('Greets renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()

})