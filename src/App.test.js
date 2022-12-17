import { render, screen } from '@testing-library/react';
import App from '../src/components/App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/Liberty News/i);
  expect(titleElement).toBeInTheDocument();
});
