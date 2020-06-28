import React, { useState, useEffect } from 'react';
import {
  Grid, Typography, Box,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchCharacter } from '../../services/character';

const Home = ({ user }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchCharacter(user.heroId).then((response) => {
      const char = response.data.data.results[0];
      setCharacter(char);
    });
  }, []);

  return (
    <Box mt={10}>
      <Grid container>
        <Grid item xs={12}>
          { character && character.name }
        </Grid>
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state) => {
  const { user } = state.loginReducer;
  return {
    user,
  };
};

export default connect(mapStateToProps)(Home);
