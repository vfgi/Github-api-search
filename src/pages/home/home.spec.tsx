import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Home from '.';
import { setupStore } from '../../redux/store';
import { renderWithProviders } from '../../redux/test-utils';

test('renders the HomeScreen', () => {
  const store = setupStore()

  renderWithProviders(<Home />, { store })
  
  expect(screen.getByPlaceholderText("search users from github")).toBeInTheDocument();
});

test('validate button click', () => {
  const store = setupStore()
  renderWithProviders(<Home />, { store })

  const button = screen.getByText("Search")

  
  expect(button).toBeInTheDocument()
});