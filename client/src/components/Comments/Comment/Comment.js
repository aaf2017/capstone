import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Divider,
  Grid,
  Button,
  ButtonGroup,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Comment = ({ post /*, setCurrentId*/ }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const createdAt = new Date(post.createdAt);
  return (
    <React.Fragment>
      <Box className={classes.boxThree} component='span' display='block' p={1}>
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
            variant='body2'
            color='textSecondary'
            gutterBottom
          >
            {post.question}
          </Typography>
        </Grid>

        <Grid>
          <Button
            className={classes.actions}
            style={{ color: '#e40475' }}
            size='small'
            onClick={() => {}} /*or: onClick={() => setCurrentId(post._id)} */
          >
            <MoreHorizIcon fontSize='default' />
          </Button>
          <br />
          <Button
            size='small'
            onClick={() => /*dispatch(deletePost(post._id)) */ {}}
            className={classes.actions}
          >
            <DeleteOutlineIcon
              fontSize='small'
              variant='body2'
              className={classes.deleteOutlineIcon}
            />
          </Button>
        </Grid>

        <Grid>
          <Button
            size='small'
            onClick={() => /*dispatch(deletePost(post._id)) */ {}}
            className={classes.actions}
          >
            <ThumbUpAltIcon
              fontSize='small'
              variant='body2'
              className={classes.likeIcon}
            />
            {post.likeCount}
          </Button>
          <br />
          <Button size='small' onClick={() => {}} className={classes.actions}>
            <QuestionAnswerIcon
              fontSize='small'
              variant='body2'
              className={classes.questionAnswerIcon}
            />
          </Button>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Comment;
