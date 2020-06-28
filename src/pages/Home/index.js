import React, { useState, useEffect } from 'react';
import {
  Grid, Typography, Box, CardActionArea, CardMedia, CardContent,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchCharacter } from '../../services/character';
import CharacterContainer from '../../components/CharacterContainer';
import StyledComicCard from '../../components/ComicCard/style';

const Home = ({ user }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchCharacter(user.heroId).then((response) => {
      const char = response.data.data.results[0];
      setCharacter(char);
      console.log(char);
    });
  }, []);

  return (
    <Box>
      <Grid container>
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
          { character && character.comics
          && (
            character.comics.items.map((item) => (
              <StyledComicCard>
                <CardActionArea>
                  <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      { item.name }
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </StyledComicCard>
            ))
          )}
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
