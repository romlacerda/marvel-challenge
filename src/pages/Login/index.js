import React from 'react';
import {
  Grid, Typography, Box,
} from '@material-ui/core';
import StyledTextField from '../../components/TextField/style';
import StyledButton from '../../components/Button/style';

const Login = () => (
  <Grid container>
    <Grid item xs={6} style={{ backgroundImage: 'url(http://localhost:8080/spider.png)' }} />
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
          <StyledTextField placeholder="Usuário" variant="outlined" />
        </Box>
        <Box m={1} width={1}>
          <StyledTextField placeholder="Senha" variant="outlined" type="password" />
        </Box>
        <Box m={1} width={1}>
          <StyledButton color="primary" variant="contained">Entrar</StyledButton>
        </Box>
      </Grid>
    </Grid>
  </Grid>
);

export default Login;
