import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Login from './pages/Login';
import theme from './global/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Login />
  </ThemeProvider>
);

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
});

export default connect(mapStateToProps)(App);
