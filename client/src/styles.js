import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        marginBottom: "2em"
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1.25em"
      }
},
  appBar: {
    margin: '0',
    backgroundColor: '#0e0220',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: theme.zIndex.modal + 1
  },
  appName: {
    fontFamily: "Quintessential, cursive",
    color: "#e40475",
    fontWeight: "600",
    marginRight: "1rem",
    letterSpacing: "0.1rem",
    fontSize: "30px",
  },
  logo: {
    height: "4em",
    width: "5em",
    marginRight: "1em",
    marginLeft: "1em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
        backgroundColor: "transparent"
    }
},
  tabContainer: {
    marginRight: "auto"
  },
  boxTwo: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    flexGrow: "0",
    justifyContent: "flex-end"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "auto"
  },
  subHeader: {
    color: "#BEB38B",
    fontWeight: "400",
    //marginRight: "auto",
    //marginLeft: "auto"
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  }
 
}));