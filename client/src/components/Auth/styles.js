import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(16),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        boxShadow: "6px 8px 14px 10px rgba(190,179,139,0.83)",
      },
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#e40475",
      },
      signInsignUp: {
        color: "#e40475",
        fontFamily: "Quintessential, cursive",
        textShadow: "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC, 3px 7px 3px rgba(190,179,139,0.27)",
      },
      form: {
        width: '100%',
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#48e0e4",
        color: "#0e0220",
        fontWeight: 600,
        "&:hover": {
          fontFamily: "Quintessential, cursive",
          backgroundColor: "#48e0e4",
          color: "#e40475",
          fontSize: 15,
      }

      },
      googleButton: {
        marginBottom: theme.spacing(2),
        backgroundColor: "#e40475",
        color: "#0e0220",
        fontWeight: 600,
        "&:hover": {
          color: "#48e0e4",
          backgroundColor: "#e40475",
          fontSize: 15,
          fontFamily: "Quintessential, cursive",
      }
      },
      accountYesNo: {
        fontSize: "14px",
        color: "#e40475",
        "&:hover": {
        backgroundColor: "transparent",
        fontFamily: "Quintessential, cursive",
        fontFamily: "Quintessential, cursive",
          textShadow: "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC, 3px 7px 3px rgba(190,179,139,0.27)",
          fontSize: 15,
            }
      },
  /*paper: {
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
  avatar: {
  },*/
}));