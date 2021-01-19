import { makeStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  /*toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        marginBottom: "2em"
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1.25em"
      }
},*/
  appBar: {
    marginTop: 0,
    //marginBottom: "70px",
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
  },
  logo: {
    height: "5em",
    width: "5em",
  },
  logoContainer: {
    padding: 0,
    marginLeft: "2em",
    "&:hover": {
        backgroundColor: "transparent"
    }
  },
  toolbar: { //*** */
    display: 'flex',
    justifyContent: 'flex-end',
    width: '150px',
  },
  tabContainer: {//*** */
    marginRight: 0,
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
    textShadow: "8px 4px 7px rgba(228,4,117,0.94)",
    //fontFamily: "Quintessential, cursive",
    fontWeight: 600,
    fontSize: 18,
    padding: 0,
    "&:hover": {
        backgroundColor: "transparent",
        color: "rgba(190,179,139,0.94)",
        textShadow: "8px 4px 7px rgba(228,4,117,0.94)",
    }
  },
  /*profile: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },*/
  subHeader: {
    color: "#BEB38B",
    fontWeight: "400",
    marginRight: "60px",
    marginLeft: "auto"
  },
  cyan: {
    color: theme.palette.getContrastText(cyan[500]),
    backgroundColor: cyan[200],
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  }
 
}));