import { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import PeliculasFilter from './PeliculasFilter';
import PeliculasItem from './PeliculasItem';
import { useSelector, useDispatch } from 'react-redux';
import { setLoaderAction } from '../../redux/actions/loader/loaderAction';
import PeliculaServices from '../../services/PeliculaServices';
import Styles from './Peliculas.module.css';

const Peliculas = (props) => {
    const [peliculas, setPeliculas] = useState([]);
    const [filter, setFilter] = useState('');
    const state = useSelector(estado => estado.peliculaReducer);
    const dispatch = useDispatch();
    const { history } = props;

    const getPeliculas = useCallback(async () => {
        dispatch(setLoaderAction({ open: true }));
        const peliculaServices = new PeliculaServices();
        const response = state.url && await peliculaServices.getPeliculas(state.url);

        if (response?.status === 200) {
            setPeliculas(response.data.response.groups);
            dispatch(setLoaderAction({ open: false }));
        } else {
            console.log('error al comsumir el servicio peliculas');
        }
    }, [state.url, dispatch]);

    const peliculasFiltradas = useMemo(() => {
        const expresion = new RegExp(`${filter}.*`, 'i');
        const peliculaFilter = peliculas.filter(pelicula => expresion.test(pelicula.title));
        return peliculaFilter;
    }, [peliculas, filter]);

    useEffect(() => {
        getPeliculas();
    }, [getPeliculas]);

    return (
        <div className={Styles.Container_Peliculas}>
            <div className={Styles.Container_Peliculas_Header}>
                <img
                    src="https://www.clarovideo.com/webclient/sk_core/images/clarovideo-logo-sitio.svg"
                    alt="claro-video"
                    height='35px'
                    width='15%'
                />
                <PeliculasFilter busquedaPeliculas={setFilter} />
            </div>

            <div className={Styles.Container_Peliculas_Item}>
                {peliculasFiltradas.map(item => {
                    return (
                        <PeliculasItem
                            key={item.id}
                            pelicula={item}
                            history={history}
                        />
                    )
                })}
            </div>
        </div>
    );
};

Peliculas.propTypes = {
    history: PropTypes.object.isRequired
};

export default Peliculas;