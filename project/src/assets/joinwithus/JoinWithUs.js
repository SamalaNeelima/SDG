// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { theme } from './theme';
import Header from './Header';
import Hero from './Hero';
import BusinessPartnership from './BusinessPartnership';

function App() { 
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <BusinessPartnership />
    </ThemeProvider>
  );
}

export default App;
