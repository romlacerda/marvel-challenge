import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import React from 'react';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

import useStyles from './style';

const ComicList = ({ comics }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {comics.map((item) => (
          <GridListTile key={item.id} classes={{ root: classes.gridListTile }}>
            <Link href={item.urls[0].url} target="_blank">
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} style={{ width: '100%' }} alt={item.title} />
              <GridListTileBar
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

ComicList.propTypes = {
  comics: PropTypes.array.isRequired,
};

export default ComicList;
