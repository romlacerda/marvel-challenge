import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './global/theme';
import Routes from './routes/index';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes />
  </ThemeProvider>
);

export default App;
