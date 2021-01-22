import React from 'react';
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

const Header = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position='fixed'>
      <Box className={classes.boxTwoBrand}>
        <Button
          container
          component={Link}
          to="/"
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
            <div className={classes.profile}>
              <Avatar
                className={classes.cyan}
                alt={user.result.name}
                src={user.result.imageUrl}
              >
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant='h6'>
                {user.result.name}
              </Typography>
              <Button
                variant='contained'
                className={classes.logout}
                color='secondary'
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
