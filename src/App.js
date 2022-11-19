import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './pages/Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}
