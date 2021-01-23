import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import { updatePost } from '../../actions/posts';

const FormC = ({ post }) => {
  const [postData, setPostData] = useState({
    user_fname: '',
    comment: '',
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault(); //to prevent refresh in the browser
    post.comments.push(postData);
    dispatch(updatePost(post._id, post));
    clear();
  };

  const clear = () => {
    setPostData({ user_fname: '', comment: '' });
  };

  return (
    <Paper item xs={12}>
      <form noValidate onSubmit={handleSubmit}>
        <Typography variant='h6' className={classes.formCheader}>Write Your Comment</Typography>

        <TextField
          className={classes.questionArea}
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
          placeholder='Comment'
          name='comment'
          variant='outlined'
          label='Comment'
          multiline
          fullWidth
          value={postData.comment}
          onChange={e => setPostData({ ...postData, comment: e.target.value })}
        />

        <Button
          className={classes.buttonSubmitComment}
          variant='contained'
          size='large'
          type='submit'   
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default FormC;
