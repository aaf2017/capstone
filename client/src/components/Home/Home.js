import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grow, Grid } from '@material-ui/core';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import FormQ from '../Forms/FormQ';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Grow in>
      <Container className={classes.appBody}>
        <Grid
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} sm={9}>
            <Posts />
          </Grid>
          <Grid gutterItem xs={12} sm={3} className={classes.formQ}>
            <FormQ />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
