import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('should render a heading', () => {
    render(<Greeting />);
  
    const headingElem = screen.getByText(/hello world/i);
  
    expect(headingElem).toBeInTheDocument();
  });
  
  test('should render a paragraph', () => {
    render(<Greeting />);
  
    const paragraphElem = screen.getByText(/It's good to see you!/i);
  
    expect(paragraphElem).toBeInTheDocument();
  });
});
