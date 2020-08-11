import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './modules/rootReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const _persistReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(_persistReducer);
const persistor = persistStore(store);

export default { store, persistor };
