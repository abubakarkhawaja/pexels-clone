import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { mediaReducer, userReducer } from './reducers/reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: 'user',
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ mediaReducer, user: userReducer })
);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);
export default { store, persistor };
