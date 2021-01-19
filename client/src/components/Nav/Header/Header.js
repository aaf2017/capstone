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
    <>
      <AppBar className={classes.appBar} position='fixed'>
        <Box className={classes.boxTwoBrand}>
          <Button
            //component={Link}
            //to="/"
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
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List className={classes.list}>
            {['', '', '', 'DISCUSSION CATEGORIES'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              'Repertoire',
              'Role Preparation',
              'Memorization',
              'Lyric Diction',
              'Audition Etiquette',
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;

/*import React, { useState, useEffect } from 'react';
import { Container, AppBar, Button, Typography, Grow, Grid, Toolbar, Box, Tabs, Tab, Menu, MenuItem, useMediaQuery, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {useTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './images/logo.svg';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import FormQ from './components/Forms/FormQ';
import useStyles from './styles';

export default function Header(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar className={classes.appBar} position="fixed">
                    <Toolbar disableGutter>

                    <Box className="classes.boxOne">
                        <Typography className={classes.subHeader} variant="h6">
                            ...professional forum for classical singers...
                        </Typography>
                    </Box>
                    
                    <Box className={classes.boxTwo}>
                        <Button
                            //component={Link} 
                            //to="/" 
                            disableRipple 
                            //onClick={() => setValue(0)} 
                            className={classes.logoContainer}
                        >
                            <img className={classes.logo} src={logo} alt="Treble Clef Logo" height="60" />
                        </Button>
                            
                        <Typography className={classes.appName} variant="h4">il PASSAGGIO</Typography>
                    </Box>
                    
                        
                    </Toolbar>          
                </AppBar>
            
                <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}
*/
