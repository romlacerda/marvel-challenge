import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import {
  Avatar, Box, Toolbar, Typography, Grid, IconButton,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import StyledAppBar from '../../components/AppBar/style';
import { logout } from '../../actions/loginActions';

const Navigation = ({ isLogged, setLogout }) => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('loggedUser'));

  function handleLogout() {
    setLogout();
  }

  useEffect(() => {
    if (!isLogged) {
      history.push('/login');
    }
  }, [isLogged]);

  return (
    <StyledAppBar position="absolute" color="transparent">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
            <Box mt={1} display="flex">
              <Avatar alt={user.name} style={{ marginRight: '15px' }} />
              <Typography variant="h6" style={{ marginTop: '8px', fontSize: '1em' }}>
                { user && user.name }
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box mt={1}>
              <IconButton aria-label="logout" onClick={handleLogout}>
                <ExitToAppIcon color="secondary" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

const mapStateToProps = (state) => {
  const { isLogged, user } = state.loginReducer;
  return {
    isLogged,
    user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setLogout: () => {
    dispatch(logout());
  },
});

Navigation.propTypes = {
  // isLogged: PropTypes.bool.isRequired,
  setLogout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
