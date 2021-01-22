import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  boxThree: {
    display: 'flex',
    flexDirection: 'block',
    //justifyContent: 'space-between',
    borderRadius: '5px',
    height: 'auto',
    position: 'relative',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  actions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    //color: "#e40475",
    color: '#48e0e4',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'rgba(190,179,139,0.94)',
    },
  },
  deleteOutlineIcon: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'rgba(190,179,139,0.94)',
    },
  },
  questionAnswerIcon: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'rgba(190,179,139,0.94)',
    },
  },
  edit: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'rgba(190,179,139,0.94)',
    },
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  buttons: {
    //color: "#e40475",
    color: '#48e0e4',
    size: '5px',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'rgba(190,179,139,0.94)',
    },
  },
  questionGrid: {
    marginRight: 0,
  },
  nameGrid: {
    margin: 0,
    padding: '0 16px',
    maxWidth: '120px',
  },
  name: {
    //fontFamily: "Felipa, cursive",
    fontWeight: '600',
  },
});
