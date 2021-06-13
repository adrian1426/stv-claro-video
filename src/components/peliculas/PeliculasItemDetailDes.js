import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Rating from '@material-ui/lab/Rating';
import Chip from '@material-ui/core/Chip';
import { Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  chip: {
    margin: '2px'
  }
}));

const PeliculasItemDetailDes = (props) => {
  const { title, large_description, extendedcommon, ranking, redirectMenu } = props;
  const classes = useStyles();

  return (
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5" data-testid='titlePelicula'>
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" data-testid='titleDescription'>
          {large_description}
        </Typography>

        <Divider />

        <div>
          <Typography>Genero: </Typography>
          {extendedcommon?.genres.genre.map(item => {
            return (
              <Chip
                key={item.id}
                className={classes.chip}
                label={item.desc}
                data-testid='genero'
              />
            )
          })}

          {extendedcommon?.roles.role.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <Typography>{item.desc}</Typography>
                {item.talents.talent.map(iTalent => {
                  return (
                    <Chip
                      key={iTalent.id}
                      label={iTalent.fullname}
                      className={classes.chip}
                      data-testid='roles'
                    />
                  )
                })}
              </React.Fragment>
            )
          })}

          <br /><br /><br />
          {ranking && <Rating value={ranking.average_votes} readOnly />}
        </div>
      </CardContent>

      <div className={classes.controls}>
        <Button
          startIcon={<ArrowBack />}
          variant='contained'
          onClick={() => redirectMenu()}
        >
          Regresar
        </Button>
      </div>
    </div>
  );
};

PeliculasItemDetailDes.propTypes = {
  title: PropTypes.string,
  large_description: PropTypes.string,
  extendedcommon: PropTypes.object,
  ranking: PropTypes.object,
  redirectMenu: PropTypes.func.isRequired
};

export default PeliculasItemDetailDes;