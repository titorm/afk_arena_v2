import { SET_USER } from './constants';

const INITIAL_STATE = {
    user: {},
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

export default reducer;
