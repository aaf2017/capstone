import React from 'react';
import { useDispatch, useState } from 'react-redux';
import {
  Container,
  Grid,
  Button,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@material-ui/core';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
//import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { likePost, deletePost, updatePost } from '../../../actions/posts';
import Comment from '../../Comments/Comment/Comment';
import useStyles from './styles';
import FormC from '../../Forms/FormC';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log(post);
  const createdAt = new Date(post.createdAt);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  const onLike = () => {
    post.likes++;
    dispatch(updatePost(post._id, post));
  };

  

  return (
    <React.Fragment>
      <Accordion square expanded={expanded}>
        <AccordionSummary aria-controls='panel1dh-content' id='panel1dh-header'>
          <Box
            className={classes.boxThree}
            component='span'
            display='block'
            p={1}
          >
            <Grid style={{ width: '100%' }} className={classes.nameGrid}>
              <Typography variant='body1' className={classes.name}>
                {post.user_fname}
              </Typography>
              <Typography variant='body2'>
                {createdAt.toLocaleDateString()}
              </Typography>
            </Grid>

            <Grid style={{ width: '100%' }} className={classes.questionGrid}>
              <Typography
                className={classes.question}
                variant='body1'
                gutterBottom
              >
                {post.question}
              </Typography>
              <Typography
                className={classes.question}
                variant='body2'
                color='textSecondary'
                gutterBottom
              >
                {post.category}
              </Typography>
            </Grid>

            <Grid className={classes.actionButtons}>
              <Button
                disableRipple
                size='small'
                onClick={() => onLike()}
                className={classes.actions}
              >
                <ThumbUpAltIcon
                  disableRipple
                  fontSize='small'
                  variant='body2'
                  className={classes.likeIcon}
                />
                {post.likes}
              </Button>
              <br />
              <Button
                size='small'
                onClick={() => handleChange()}
                disableRipple
                className={classes.actions}
              >
                <QuestionAnswerIcon
                  fontSize='small'
                  variant='body2'
                  className={classes.questionAnswerIcon}
                />
              </Button>
              <Button
                disableRipple
                size='small'
                onClick={() => dispatch(deletePost(post._id))}
                className={classes.actions}
              >
                <DeleteOutlineIcon
                  disableRipple
                  fontSize='small'
                  variant='body2'
                  className={classes.deleteOutlineIcon}
                />
              </Button>
            </Grid>
          </Box>
        </AccordionSummary>
        <AccordionDetails style={{ display: 'block' }}>
          {post &&
            post.comments &&
            post.comments.map((comment, idx) => (
              <Container
                key={idx}
                container
                alignItems='center'
                height='auto'
                direction='row'
                spacing={1}
                item
                xs={12}
                sm={12}
              >
                <Comment comment={comment}></Comment>
                <Divider />
              </Container>
            ))}
          <FormC post={post}></FormC>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};

export default Post;
