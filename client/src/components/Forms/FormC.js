import React, { useState, useEffect } from 'react';
import { /*useSelector,*/ useDispatch } from 'react-redux';
import {
  TextField,
  Button,
  Typography,
  Paper,
  TextareaAutosize,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
//import FormControl from '@material-ui/core/FormControl';
//import Select from '@material-ui/core/Select';

import useStyles from './styles';
import { createPost /*, updateComment deleteComment, likeComment */ } from '../../actions/comments';

const FormC = () => {
  const [postData, setPostData] = useState({
    user_fname: '',
    question: '',
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault(); //to prevent refresh in the browser
    dispatch(createPost(postData));
    clear();
  };

  const clear = () => {
    setPostData({ user_fname: '', question: '', });
  };

  return (
    <Paper className={classes.paper} item xs={12}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6' className={classes.formQheader}>
          Write Your Answer/Comment
        </Typography>

        <TextField
          name='user_fname'
          variant='outlined'
          label='First Name'
          fullWidth
          value={postData.user_fname}
          onChange={e =>
            setPostData({ ...postData, user_fname: e.target.value })
          }
        />

        <TextField
          id='outlined-textarea'
          className={classes.questionArea}
          rowsMin={3}
          placeholder='Answer/Comment'
          name='comment'
          variant='outlined'
          label='Answer/Comment'
          multiline
          fullWidth
          value={postData.question}
          onChange={e => setPostData({ ...postData, comment: e.target.value })}
        />

        <Button
          className={classes.buttonSubmit}
          variant='contained'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>

        <Button
          className={classes.buttonClear}
          variant='contained'
          color='secondary'
          size='large'
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default FormC;
