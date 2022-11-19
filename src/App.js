import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Container from './components/common/Container';
import Router from './pages/Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

export default function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Router />
        </Container>
      </ThemeProvider>
    </RecoilRoot>
  );
}
