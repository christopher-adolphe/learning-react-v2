import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('should render a list of posts', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async() => [
        {
          id: 'p1',
          title: 'First post'
        }
      ]
    });

    render(<Async/>);

    const listElems = await screen.findAllByRole('listitem');
    
    expect(listElems).not.toHaveLength(0);
  });
});
