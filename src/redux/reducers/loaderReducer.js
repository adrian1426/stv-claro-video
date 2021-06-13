import { loader } from '../actions/loader/loaderType';

const initialState = {
    open: false
};

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case loader:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default loaderReducer;