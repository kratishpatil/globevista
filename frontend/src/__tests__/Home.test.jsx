import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import { BrowserRouter } from 'react-router-dom';

test('renders hero title and a destination', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(screen.getByText(/Explore the World with/i)).toBeInTheDocument();
  expect(screen.getByText(/Paris, France/i)).toBeInTheDocument();
}); 