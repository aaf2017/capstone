import { makeStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    marginTop: 0,
    backgroundColor: '#0e0220',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: theme.zIndex.modal + 1
  },
  appName: {
    fontFamily: "Quintessential, cursive",
    color: "#e40475",
    fontWeight: "600",
    marginLeft: "3rem",
    letterSpacing: "0.1rem",
    fontSize: "30px",
    textDecoration: "none",
    "&:hover": {
      transform: "scale(1.2)",
      transitionDuration: "1s",
    },
  },
  logo: {
    height: "5em",
    width: "5em",
    "&:hover": {
      transform: "scale(1.2)",
      transitionDuration: "1s",
    }, 
  },
  logoContainer: {
    padding: 0,
    marginLeft: "2em",
    "&:hover": {
        backgroundColor: "transparent"
    }
  },
  toolbar: { 
    display: 'flex',
    justifyContent: 'flex-end',
    width: '200px',
  },
  tabContainer: {
    marginRight: 0,
    //minWidth: 100
    //display: "block",

  },
  boxTwoBrand: {
    display: "flex",
    alignItems: "center",
    marginLeft: 0,
    flexGrow: "0",
    justifyContent: "flex-start",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 15,
    marginRight: 0,
    color: "#48e0e4",
    fontWeight: 600,
    fontSize: 18,
    padding: 0,
    "&:hover": {
        backgroundColor: "transparent",
        color: "#e40475",
    }
  },
  subHeader: {
    color: "#BEB38B",
    fontWeight: 400,
    marginRight: "9em",
    marginLeft: "auto"
  },
  
  userName: {
    display: 'flex',
    flexGrow: 0,
    alignItems: 'center',
      ...theme.typography.tab,
    minWidth: 145,
    marginRight: "2em",
    marginLeft: "auto",
    color: "#e40475",
    fontFamily: "Quintessential, cursive",
    fontWeight: 600,
    fontSize: 18,
    padding: 0,
  },
  logout: {
    display: 'flex',
    justifyContent: 'center',
    width: '150px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
 authLink: {
  ...theme.typography.tab,
  //minWidth: 15,
  marginRight: "3em",
  marginLeft: "auto",
  color: "#48e0e4",
  fontWeight: 600,
  fontSize: 18,
  padding: 0,
  "&:hover": {
      backgroundColor: "transparent",
      color: "#e40475",
  }
 },
}));