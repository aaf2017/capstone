import React from 'react';
import { Grid, CircularProgress, Typography, Container, Divider } from '@material-ui/core';
//import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = (/*{ setCurrentId }*/) => {
  const posts = useSelector(state => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    !posts.length ? <CircularProgress /> : (
    <React.Fragment>
        <Container>
          <Typography variant="h5" className={classes.boardHeader}>Discussion Board</Typography>
        </Container> 

        {posts.map((post, idx) => (
          <Container key={post._id} container alignItems="center" height="auto" direction="row" spacing={1} item xs={12} sm={12}>
            <Post post={post} key={idx} /*setCurrentId={setCurrentId}*//>
            <Divider />
          </Container>       
        ))}        
    </React.Fragment>
    )
  );
};
export default Posts;
