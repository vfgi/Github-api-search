import { screen, fireEvent } from '@testing-library/react'
import { Button } from '.'
import { setupStore } from '../../redux/store';
import { renderWithProviders } from '../../redux/test-utils';

test('validate button click', () => {
  const store = setupStore()
  const handleClick = jest.fn()

  renderWithProviders(<Button onClick={handleClick}>Click Me</Button>, { store })
  
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
});