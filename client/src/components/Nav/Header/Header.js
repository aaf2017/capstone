import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  AppBar,
  Button,
  Typography,
  Grid,
  Toolbar,
  Box,
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
            <Grid className={classes.logout}>
            
            <Typography className={classes.userName}>
                Welcome, {user.firstName}
              </Typography>
            

            <div className = {classes.authLink}>
              <Button
                className={classes.authLink}
                color='secondary'
                onClick={() => onLogOut()}
              >
                Logout
              </Button>
            </div>
            </Grid>
         
          ) : (
            <Button
              disableRipple
              component={Link}
              to='/auth'
              color='#48e0e4'
              className={classes.tab}
            >
               Login
            </Button>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
