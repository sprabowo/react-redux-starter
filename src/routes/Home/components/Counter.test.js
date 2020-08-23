import React from 'react'
import { render as rtlRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import store from '../../../reducers'
import { Provider } from 'react-redux'
import Counter from './Counter';

function render(ui) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper })
}

describe('Home', () => {
  it('should render Counter Component', () => {
    render(<Counter />)
    userEvent.click(screen.getByTestId('decrement-home'));
    expect(screen.getByTestId('counter-value-home')).toHaveTextContent(-1);
    userEvent.click(screen.getByTestId('increment-home'));
    userEvent.click(screen.getByTestId('increment-home'));
    userEvent.click(screen.getByTestId('increment-home'));
    expect(screen.getByTestId('counter-value-home')).toHaveTextContent(2);
  })
})