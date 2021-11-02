import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { mediaReducer, userReducer } from './reducers/reducers';

const store = createStore(
  combineReducers({ mediaReducer, user: userReducer }),
  applyMiddleware(thunk)
);

export default store;
