import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import authReducer from './auth';
// import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import allCatererReducer from './caterer';
import venues from './venues';

export const reducer = combineReducers({
  authReducer,
  venues,
  allCatererReducer,
  // other subreducers
});

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ axios }),
    createLogger({ collapsed: true })
  )
);

export default store;
// export other sub redux file
export * from './auth';
