import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexGrow: 1,
    overflow: 'hidden',
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: "6.5em",
    boxShadow: "6px 8px 14px 10px rgba(190,179,139,0.83)",
    width: "300px",
    display: "flex",
    flexGrow: 1,
    overflow: 'hidden',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formQheader: {
    fontWeight: "600",
    color: "#e40475",
    fontFamily: "Quintessential, cursive",
    textShadow: "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC, 3px 7px 3px rgba(190,179,139,0.27)",
    marginTop: "1.5em",
    marginBottom: "1.5em",
  },
  formCheader: {
    fontWeight: "400",
    fontSize: "16px",
    color: "#e40475",
    fontFamily: "Quintessential, cursive",
    textShadow: "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC, 3px 7px 3px rgba(190,179,139,0.27)",
    margin: "1em auto 1em 1em",
  },
  InputLabel: {
    width: '97%',
    margin: '10px 0',
  },
  questionArea: {
    width: '97%',
    margin: '10px 0',
    minHeight: '40px',
    fontFamily: "Felipa, cursive"
  },
  buttonClear: {
    marginBottom: 10,
    backgroundColor: "#BEB38B",
    color: "#e0220",
    fontWeight: 600, 
    "&:hover": {
      backgroundColor: "#d7fbf6",
      color: "#0e0220",
      fontFamily: "Felipa, cursive"
  } 
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#e40475",
    color: "#e0220",
    fontWeight: 600, 
    marginTop: 10,
    position: "static",
    "&:hover": {
      backgroundColor: "#48e0e4",
      color: "#0e0220",
      fontFamily: "Felipa, cursive"
  }   
  },
  buttonSubmitComment: {
    marginBottom: 10,
    backgroundColor: "#48e0e4",
    color: "#e40475",
    fontWeight: 600, 
    marginTop: 10,
    marginRight: 0,
    display: "flex",
    flexDirection: "flex-end",
    //alignContent: "center",
    "&:hover": {
      backgroundColor: "#e40475",
      color: "#0e0220",
      fontFamily: "Felipa, cursive"
  }   
  },
  formControl: {
    margin: theme.spacing(1),
    width: "97%", 
    wrap: "nowrap"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));