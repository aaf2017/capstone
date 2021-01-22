import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 150;
export default makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    marginTop: "6em",
    overflow: 'auto',
    color: "#48e0e4",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  list: {
    color: "#e40475",
    fontFamily: "Piazzolla, cursive",
    fontWeight: 600,
    alignItems: 'center',
    flexWrap: 'wrap',
    "&:hover": {
      backgroundColor: "transparent",
      color: "rgba(190,179,139,0.94)",
  }
  },
  categories: {
    "&:hover": {
      backgroundColor: "transparent",
      color: "rgba(190,179,139,0.94)",
  }
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
    display: "flex",
    marginLeft: "auto",
  },
  boardHeader: {
    fontWeight: "600",
    display: "flex",
    flexShrink: 0,
    //flexDirection: "flex-end",
    marginLeft: "1em",
    marginBottom: "1em",
    marginTop: "2em",
    fontFamily: "Quintessential, cursive",
    color: "#e40475",
    textShadow: "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC, 3px 7px 3px rgba(190,179,139,0.27)",
    
  },
}));