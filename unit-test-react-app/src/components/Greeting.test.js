import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('should render a heading', () => {
    render(<Greeting />);
  
    const headingElem = screen.getByText(/hello world/i);
  
    expect(headingElem).toBeInTheDocument();
  });
  
  // test('should render a paragraph', () => {
  //   render(<Greeting />);
  
  //   const paragraphElem = screen.getByText(/It's good to see you!/i);
  
  //   expect(paragraphElem).toBeInTheDocument();
  // });

  test('should render "It\'s good to see you!" given the button is not clicked', () => {
    render(<Greeting />);

    const paragraphElem = screen.getByText(/It's good to see you!/i);
  
    expect(paragraphElem).toBeInTheDocument();
  });

  test('should render "What\'s up bro!" given the button is clicked', () => {
    render(<Greeting />);

    const buttonElem = screen.getByRole('button');

    userEvent.click(buttonElem);

    const paragraphElem = screen.getByText('What\'s up bro!', { exact: true });
  
    expect(paragraphElem).toBeInTheDocument();
  });

  test('should not render "It\'s good to see you!" given the button is clicked', () => {
    render(<Greeting />);

    const buttonElem = screen.getByRole('button');

    userEvent.click(buttonElem);

    const paragraphElem = screen.queryByText(/It's good to see you!/i);
  
    expect(paragraphElem).toBeNull();
  });
});
