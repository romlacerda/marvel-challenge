import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Login from './pages/Login';
import theme from './global/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Login />
  </ThemeProvider>
);

export default App;
