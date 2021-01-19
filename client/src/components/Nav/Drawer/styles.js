import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 150;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"#0e0220",
    
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  drawerContainer: {
    color: "#48e0e4",
  },
  list: {
    color: "#e40475",
    fontFamily: "Quinessential, cursive",
    fontWeight: 600,
    //display: "block",
    //display: 'flex',
    //direction: "row",
    alignItems: 'center',
    //flexWrap: 'wrap',

  }
}));