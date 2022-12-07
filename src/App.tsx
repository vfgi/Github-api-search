import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import {ThemeProvider} from 'styled-components'
import Header from './components/Header';
import { LightTheme, DarkTheme } from './components/theme';
import { RootState } from './redux/rootReducers';
import { Router } from './routes';

function App() {
  const { switchTheme } = useSelector((state: RootState) => state) 

  return (
    <BrowserRouter>
      <ThemeProvider theme={switchTheme.darkTheme ? DarkTheme : LightTheme}>
        <Header theme={switchTheme.darkTheme ? DarkTheme : LightTheme}/>
          <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
