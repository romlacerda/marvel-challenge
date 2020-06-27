import React, { useState, useEffect } from 'react';
import {
  Grid, Typography, Box,
} from '@material-ui/core';
import { connect } from 'react-redux';
import StyledTextField from '../../components/TextField/style';
import StyledButton from '../../components/Button/style';
import login from '../../actions/loginActions';
import Alert from '../../components/Alert';

const Login = ({ setLogin }) => {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');

  function handleChange(e) {
    if (e.target.name === 'user') {
      setUserLogin(e.target.value);
    } else if (e.target.name === 'password') {
      setUserPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (userLogin === '' || userPassword === '') {
      setError('O usuário e senha estão incorretos');
      return;
    }

    setLogin();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6} style={{ backgroundImage: 'url(../spider.png)', backgroundPosition: 'top' }} />
        <Grid
          item
          xs={6}
          style={{
            backgroundColor: '#171717',
            height: '100vh',
            boxShadow: '58px 34px 12px 61px rgba(23,23,23)',
          }}
        >
          <Grid item xs={6} container direction="column" justify="center" alignItems="center" style={{ height: '100vh', margin: '0 auto' }}>
            <Typography color="primary">Marvel</Typography>
            <Box m={1} width={1}>
              <StyledTextField placeholder="Usuário" variant="outlined" onChange={handleChange} name="user" value={userLogin} />
            </Box>
            <Box m={1} width={1}>
              <StyledTextField placeholder="Senha" variant="outlined" type="password" onChange={handleChange} name="password" value={userPassword} />
            </Box>
            <Box m={1} width={1}>
              <StyledButton color="primary" variant="contained" type="submit">Entrar</StyledButton>
            </Box>
            {error && (
            <Box m={1} width={1}>
              <Alert severity="error" onClick={() => setError(null)}>
                {error}
              </Alert>
            </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = (state) => {
  const { isLogged } = state.loginReducer;
  return {
    isLogged,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setLogin: () => {
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
