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
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const FormQ = () => {
  const [postData, setPostData] = useState({
    user_fname: '',
    category: '',
    question: '',
    comments: [],
    likes: 0
  });

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault(); //to prevent refresh in the browser
    dispatch(createPost(postData));
    clear();
  };

  const clear = () => {
    setPostData({ user_fname: '', category: '', question: '', comments: [], /*likes: 0 */});
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
          Ask Your Question
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

        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel
            id='demo-simple-select-outlined-label'
            name='category'
            variant='outlined'
            label='Discussion Category'
            fullWidth
          >
            Discussion Category
          </InputLabel>

          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={postData.category}
            onChange={e => {
              console.log(e.target);
              setPostData({ ...postData, category: e.target.value });
            }}
            label='Discussion Category'
          >
            <MenuItem value=''>
              <em>Discussion Category</em>
            </MenuItem>
            <MenuItem value='Repertoire'>Repertoire</MenuItem>
            <MenuItem value='Memorization'>Memorization</MenuItem>
            <MenuItem value='Role Preparation'>Role Preparation</MenuItem>
            <MenuItem value='Lyric Diction'>Lyric Diction</MenuItem>
            <MenuItem value='Audition Etiquette'>Audition Etiquette</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id='outlined-textarea'
          className={classes.questionArea}
          rowsMin={3}
          placeholder='Question'
          name='question'
          variant='outlined'
          label='Question'
          multiline
          fullWidth
          value={postData.question}
          onChange={e => setPostData({ ...postData, question: e.target.value })}
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

export default FormQ;
