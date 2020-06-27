import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#e71923',
    },
    secondary: {
      main: '#b5bab9',
    },
  },
  overrides: {
    MuiTextField: {
      color: 'white',
    },
    MuiInputBase: {
      root: {
        color: '#b5bab9',
        border: '0',
      },
    },

  },
});

export default theme;
