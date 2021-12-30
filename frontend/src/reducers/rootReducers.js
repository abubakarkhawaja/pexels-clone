import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mediaReducer from './mediaReducer';
import userReducer from './userReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: 'user',
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ media: mediaReducer, user: userReducer })
);

export default persistedReducer;
