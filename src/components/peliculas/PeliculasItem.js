import React from 'react';
import PropTypes from 'prop-types';
import Styles from './PeliculasItem.module.css';

const PeliculasItem = (props) => {
    const { id, title, image_base_vertical } = props.pelicula;
    const { history } = props;

    const handleDetails = (id) => {
        history.push(`/peliculas/${id}`);
    };

    return (
        <div
            className={Styles.Pelicula_Card}
            onClick={() => handleDetails(id)}
        >
            <img
                src={image_base_vertical}
                alt={title}
                className={Styles.Pelicula_Card_Img}
            />

            <span className={Styles.Pelicula_Card_Title}>
                {title}
            </span>
        </div>
    );
};

PeliculasItem.propTypes = {
    pelicula: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default PeliculasItem;