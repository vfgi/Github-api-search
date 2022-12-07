import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { AppStore, RootState } from './store'
import searchUsers from './reducers/searchUsers'
import switchTheme from './reducers/themeChanger'
import { LightTheme } from '../components/theme'
import { ThemeProvider } from 'styled-components'
import searchSingleUser from './reducers/searchSingleUser'
import searchRepos from './reducers/searchRepos'
import { BrowserRouter } from 'react-router-dom'
// As a basic setup, import your same slice reducers

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { searchData: searchUsers, switchTheme: switchTheme, searchProfile: searchSingleUser, repos: searchRepos } }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <BrowserRouter><Provider store={store}><ThemeProvider theme={LightTheme}>{children}</ThemeProvider></Provider></BrowserRouter>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}