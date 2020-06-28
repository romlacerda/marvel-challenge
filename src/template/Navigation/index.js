import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StyledAppBar from '../../components/AppBar/style';

const Navigation = ({ user }) => (
  <StyledAppBar position="absolute" color="transparent">
    <Toolbar>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h6">
            { user.name }
          </Typography>
        </Grid>
        <Grid item>
          <Box mt={1}>
            <ExitToAppIcon color="secondary" />
          </Box>
        </Grid>
      </Grid>
    </Toolbar>
  </StyledAppBar>
);

const mapStateToProps = (state) => {
  const { isLogged, user } = state.loginReducer;
  return {
    isLogged,
    user,
  };
};

export default connect(mapStateToProps)(Navigation);
