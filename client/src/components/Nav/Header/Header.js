import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  Divider,
  Container,
  AppBar,
  Button,
  Typography,
  Avatar,
  Grow,
  Grid,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import logo from '../../../images/logo.svg';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { logOut, loggedIn } from '../../../actions/auth';
import { useDispatch } from 'react-redux';

const Header = () => {
  const classes = useStyles();
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loggedIn());
  }, [loggedIn, dispatch]);

  const onLogOut = async () => {
    dispatch(logOut());
  };
  return (
    <AppBar className={classes.appBar} position='fixed'>
      <Box className={classes.boxTwoBrand}>
        <Button
          container
          component={Link}
          to='/'
          disableRipple
          //onClick={() => setValue(0)}
          className={classes.logoContainer}
        >
          <img
            className={classes.logo}
            src={logo}
            alt='Treble Clef Logo'
            height='60'
          />
        </Button>
        <Typography
          component={Link}
          to='/'
          className={classes.appName}
          variant='h4'
        >
          il PASSAGGIO
        </Typography>
      </Box>
      <Box className='classes.boxOne'>
        <Typography className={classes.subHeader} variant='h6'>
          ...professional forum for classical singers...
        </Typography>
      </Box>
      <Toolbar className={classes.toolbar}>
        <Container className={classes.tabContainer}>
          {user ? (
            <div>
              <Typography className={classes.userName} variant='h6'>
                {user.firstName}
              </Typography>
              <Button
                variant='contained'
                className={classes.logout}
                color='secondary'
                onClick={() => onLogOut()}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              disableRipple
              component={Link}
              to='/auth'
              color='#48e0e4'
              className={classes.tab}
            >
              Sign In
            </Button>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
