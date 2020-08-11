import { combineReducers } from 'redux';

import user from './user/reducer';

const combinedReducers = combineReducers({
    user,
});

export default combinedReducers;
