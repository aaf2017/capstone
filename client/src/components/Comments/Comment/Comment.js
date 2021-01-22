import React from 'react';
import {
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

const Comment = ({ comment /*, setCurrentId*/ }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxThree} component='span' display='block' p={1}>
        <Grid style={{ width: '100%' }} className={classes.nameGrid}>
          <Typography variant='body1' className={classes.name}>
            {comment.user_fname}
          </Typography>
        </Grid>

        <Grid style={{ width: '100%' }} className={classes.questionGrid}>
          <Typography
            className={classes.question}
            variant='body2'
            color='textSecondary'
            gutterBottom
          >
            {comment.comment}
          </Typography>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Comment;
