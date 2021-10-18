import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import mediaReducer from './app/reducers';

const store = createStore(
  combineReducers({ mediaReducer }),
  applyMiddleware(thunk)
);

export default store;
