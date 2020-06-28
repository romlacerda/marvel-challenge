import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTypography-root': {
      color: '#FFF',
    },
    '& .MuiTypography-h3': {
      fontWeight: 'bold',
    },
  },
}));
