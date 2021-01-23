import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Comment = ({ comment }) => {
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
