import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },
  palette: {
    background: {
      default: '#171717',
    },
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
