import React from 'react';
import PropTypes from 'prop-types';
import Styles from './PeliculasFilter.module.css';

const PeliculasFilter = (props) => {
    const { busquedaPeliculas } = props;

    return (
        <input
            data-testid='filter'
            type='text'
            placeholder='Buscar'
            className={Styles.Input_Filter}
            onChange={(e) => busquedaPeliculas(e.target.value)}
        />
    );
};

PeliculasFilter.propTypes = {
    busquedaPeliculas: PropTypes.func.isRequired
};

export default PeliculasFilter;