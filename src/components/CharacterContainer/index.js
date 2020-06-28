import React from 'react';
import {
  Grid, Typography, Box, Container,
} from '@material-ui/core';
import { useStyles } from './style';

const CharacterContainer = ({
  imgPath, imgExtension, name, description,
}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      style={{
        width: '100vw', height: '50vh', position: 'relative',
      }}
      classes={{ root: classes.root }}
    >
      <img
        src={`${imgPath}.${imgExtension}`}
        style={{
          width: '100%', maxHeight: '100%', objectFit: 'cover', opacity: '0.35',
        }}
      />

      <Box mt={15} style={{ position: 'absolute', top: '0' }}>
        <Container>
          <Grid item xs={12}>
            <Typography variant="h3" color="secondary">{ name }</Typography>
            <Typography variant="body2" color="secondary">{ description }</Typography>
          </Grid>
        </Container>
      </Box>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '50px',
        bottom: '0px',
        background: 'linear-gradient(to bottom, rgba(137,255,241,0) 0%, #171717 100%)',
      }}
      />
    </Grid>
  );
};

export default CharacterContainer;
