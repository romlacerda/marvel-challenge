import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '50vh',
    position: 'relative',
    '& .MuiTypography-root': {
      color: '#FFF',
    },
    '& .MuiTypography-h3': {
      fontWeight: 'bold',
    },
  },
}));

export default useStyles;
