import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

const Loader = () => {
  const state = useSelector(estado => estado.loaderReducer)
  const { open } = state;
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={open} data-testid='loader'>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;