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
  withStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from '../Posts//Post/Post';
import Comment from './Comment/Comment';
//import Comments from './Comments/Comments';

import useStyles from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Comments = (/*{ setCurrentId }*/) => {
  const posts = useSelector(state => state.posts);
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <React.Fragment>
      <Container>
        <Typography variant='h5' className={classes.boardHeader}>
          Discussion Board
        </Typography>
      </Container>

      {posts.map((post, idx) => (
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
          <div className={classes.accordion}>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
              >
                <Post post={post} key={idx} /*setCurrentId={setCurrentId}*/ />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <Divider />
        </Container>
      ))}
    </React.Fragment>
  );
};
export default Comments;
