import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import PeliculaServices from '../../services/PeliculaServices';
import { useDispatch } from 'react-redux';
import { setLoaderAction } from '../../redux/actions/loader/loaderAction';
import PeliculaDetailCard from './PeliculasItemDetailCard';
import PeliculasDetailDescription from './PeliculasItemDetailDes';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row'
        },
    },
    sectionMobile: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}));

const PeliculasItemDetail = (props) => {
    const { match, history } = props;
    const [detailPelicula, setDetailPelicula] = useState({});
    const { title, image_base_vertical, large_description, extendedcommon, ranking } = detailPelicula;
    const dispatch = useDispatch();

    const classes = useStyles();
    const idPelicula = match.params.id;

    const redirectMenu = () => {
        history.push('/peliculas');
    };

    const getPeliculaDetail = useCallback(async () => {
        dispatch(setLoaderAction({ open: true }));
        const peliculaServices = new PeliculaServices();
        const response = await peliculaServices.getDetailPeliculaById(idPelicula);

        if (response?.status === 200) {
            setDetailPelicula(response.data.response.group.common);
            dispatch(setLoaderAction({ open: false }));
        } else {
            console.log('error al comsumir el servicio peliculas detalles');
        }
    }, [idPelicula, dispatch]);

    useEffect(() => {
        getPeliculaDetail();
    }, [getPeliculaDetail]);

    return (
        <div>
            <Card className={classes.sectionDesktop}>
                <PeliculaDetailCard
                    {...{ image_base_vertical, title }}
                />
                <PeliculasDetailDescription
                    {...{ title, large_description, extendedcommon, ranking, redirectMenu }}
                />
            </Card>

            <Card className={classes.sectionMobile}>
                <PeliculaDetailCard
                    {...{ image_base_vertical, title }}
                />
                <PeliculasDetailDescription
                    {...{ title, large_description, extendedcommon, ranking, redirectMenu }}
                />
            </Card>
        </div>
    );
};

PeliculasItemDetail.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default PeliculasItemDetail;