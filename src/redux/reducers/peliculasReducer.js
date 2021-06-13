import { setUrlPelicula } from '../actions/peliculas/peliculasType';

const initialState = {
    url: ''
};

const peliculasReducer = (state = initialState, action) => {
    switch (action.type) {
        case setUrlPelicula:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default peliculasReducer;