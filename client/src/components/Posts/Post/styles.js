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
    flexDirection: 'row',
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
    color: '#48e0e4',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#e40475',
    },
  },
  /*deleteOutlineIcon: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#e40475',
    },
  },
  questionAnswerIcon: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#e40475',
    },
  },*/
  overlay: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
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
    fontFamily: "Felipa, cursive",
    fontWeight: '600',
  },
});
