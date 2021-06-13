import { combineReducers } from 'redux';
import peliculaReducer from './peliculasReducer';
import loaderReducer from './loaderReducer';

export default combineReducers({
    peliculaReducer,
    loaderReducer
});