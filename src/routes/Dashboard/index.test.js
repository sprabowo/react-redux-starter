import React from 'react'
import { render as rtlRender, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import store from '../../reducers'
import { Provider } from 'react-redux'
import Dashboard from './index'
import Home from '../Home'
import userEvent from '@testing-library/user-event'

function render(ui) {
  function Wrapper({ children }) {
    const history = createMemoryHistory()
    return (
      <Provider store={store}>
        <Router history={history}>
        {children}
        </Router>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper })
}

describe('render Dashboard page', () => {
  it('should render Dashboard with redux state', () => {
    render(<Dashboard />)
    expect(screen.getByTestId('counter-value-dashboard')).toHaveTextContent(0)
  })
})

describe('change counter State from Home to Dashboard', () => {
  it('should render same value in Dashboard', () => {
    const history = createMemoryHistory()
    history.push('/')
    render(<Home />)
    userEvent.click(screen.getByTestId('decrement-home'))
    userEvent.click(screen.getByTestId('increment-home'))
    userEvent.click(screen.getByTestId('increment-home'))
    history.push('/dashboard')
    render(<Dashboard/>)
    expect(screen.getByTestId('counter-value-dashboard')).toHaveTextContent(1)
  })
})

describe('Navigate from Dashboard to Home', () => {
  it('should go Home', () => {
    const history = createMemoryHistory()
    history.push('/dashboard')
    render(<Dashboard/>)
    expect(screen.getByTestId('counter-value-dashboard')).toHaveTextContent(1)
    history.push('/')
    render(<Home />)
    userEvent.click(screen.getByTestId('increment-home'))
    expect(screen.getByTestId('counter-value-home')).toHaveTextContent(2)
    userEvent.click(screen.getByTestId('increment-home'))
    expect(screen.getByTestId('counter-value-home')).toHaveTextContent(3)
    userEvent.click(screen.getByTestId('increment-home'))
    expect(screen.getByTestId('counter-value-home')).toHaveTextContent(4)
  })
})