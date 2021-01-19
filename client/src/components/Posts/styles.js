import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  //forumPaper: {
    //display: 'flex',
    //flexGrow: 1,
    //width: "100%"
  //},
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
    marginBottom: "1em",
    marginTop: "2em",
    fontFamily: "Quintessential, cursive",
    color: "#e40475",
    textShadow: "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC, 3px 7px 3px rgba(190,179,139,0.27)",
    
  }
}));