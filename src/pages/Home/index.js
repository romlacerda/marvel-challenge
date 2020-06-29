import React, { useState, useEffect } from 'react';
import {
  Grid, Typography, Box, CardActionArea, CardMedia, CardContent,
} from '@material-ui/core';
import { connect } from 'react-redux';
import ComicList from '../../components/ComicList';
import { fetchCharacter, getComics } from '../../services/character';
import CharacterContainer from '../../components/CharacterContainer';

const Home = () => {
  const [character, setCharacter] = useState({});
  const [comics, setComics] = useState([]);
  const user = JSON.parse(localStorage.getItem('loggedUser'));

  useEffect(() => {
    fetchCharacter(user.heroId).then((response) => {
      const char = response.data.data.results[0];
      setCharacter(char);
    });

    getComics(user.heroId, 'modified').then((response) => {
      const filteredComics = response.data.data.results;
      setComics(filteredComics);
    });
  }, []);

  return (
    <Box>
      <Grid container data-testid="resolved">
        { character && character.thumbnail
          && (
            <CharacterContainer
              imgPath={character.thumbnail.path}
              imgExtension={character.thumbnail.extension}
              name={character.name}
              description={character.description}
            />
          )}

        <Grid item xs={12}>
          <ComicList comics={comics} />
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
