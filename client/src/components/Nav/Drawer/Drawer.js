import React from 'react';
import { Drawer, List, Typography, Divider, ListItem, ListItemText }from '@material-ui/core';
import useStyles from './styles';
import Header from '../Header/Header';


const ClippedDrawer = () => {
    const classes = useStyles();
    const styles = {
        drawerPaper: {
          background: "blue"
        }
      };
    
    return (
        <div>
             <div className={classes.root}>
      <Header />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      
        <div className={classes.drawerContainer} >
          <List className={classes.list}>
            {['', '', '', 'DISCUSSION CATEGORIES'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
            {['Repertoire', 'Role Preparation', 'Memorization', 'Lyric Diction', 'Audition Etiquette'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
        </div>
    )
};

export default ClippedDrawer;