import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      width: '30%',
      height: 'auto'
    },
  },
  sectionMobile: {
    display: 'flex',
    width: 'auto',
    height: 240,
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

const PeliculasItemDetailCard = (props) => {
  const { image_base_vertical, title } = props;
  const classes = useStyles();

  return (
    <>
      <CardMedia
        className={classes.sectionDesktop}
        component='img'
        image={image_base_vertical}
        title={title}
      />

      <CardMedia
        className={classes.sectionMobile}
        component='img'
        image={image_base_vertical}
        title={title}
      />
    </>
  );
};

PeliculasItemDetailCard.propTytes = {
  image_base_vertical: PropTypes.string,
  title: PropTypes.string
};

PeliculasItemDetailCard.defaultProps = {
  image_base_vertical: '',
  title: ''
};

export default PeliculasItemDetailCard;