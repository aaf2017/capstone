import React, { useState } from 'react';
import {
  Grid,
  CircularProgress,
  Typography,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
// import Comment from '../Comments/Comment/Comment';
// import Comments from '../Comments/Comments';

import useStyles from './styles';

const Posts = () => {
  const posts = useSelector(state => state.posts);
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const resultSet =
    category === '' ? posts : posts.filter(post => post.category === category);

  const onCategorySelected = ctg => {
    console.log(ctg);
    setCategory(ctg);
  };
  return !resultSet.length ? (
    <CircularProgress />
  ) : (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List className={classes.list}>
            {['', '', '', 'ALL CATEGORIES'].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => onCategorySelected('')}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              'Repertoire',
              'Role Preparation',
              'Memorization',
              'Lyric Diction',
              'Audition Etiquette',
            ].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => onCategorySelected(text)}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <Container>
        <Typography variant='h5' className={classes.boardHeader}>
          Discussion Board
        </Typography>
      </Container>

      {resultSet.map((post, idx) => (
        <Container
          key={post._id}
          container
          alignItems='center'
          height='auto'
          direction='row'
          spacing={1}
          item
          xs={12}
          sm={12}
        >
          <Post post={post} key={idx} /*setCurrentId={setCurrentId}*/ />
          <Divider />
        </Container>
      ))}
    </React.Fragment>
  );
};
export default Posts;
