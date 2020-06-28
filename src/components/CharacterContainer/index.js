import React from 'react';
import {
  Grid, Typography, Box, Container,
} from '@material-ui/core';
import useStyles from './style';
import CharacterBackground from '../CharacterBackground/style';
import Fade from '../Fade/style';

const CharacterContainer = ({
  imgPath, imgExtension, name, description,
}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      classes={{ root: classes.root }}
    >
      <CharacterBackground src={`${imgPath}.${imgExtension}`} alt={name}/>
      <Box mt={15} style={{ position: 'absolute', top: '0' }}>
        <Container>
          <Grid item xs={12}>
            <Typography variant="h3" color="secondary">{ name }</Typography>
            <Typography variant="body2" color="secondary">{ description }</Typography>
          </Grid>
        </Container>
      </Box>
      <Fade />
    </Grid>
  );
};

export default CharacterContainer;
