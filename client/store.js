import { createStore, applyMiddleware, combineReducers } from 'redux';
import authReducer from './redux/auth';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

export const reducer = combineReducers({
  authReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware.withExtraArgument({ axios }),
    createLogger({ collapsed: true }) // QUESTION: not sure should we keep the argument
  )
);

export default store;
export * from './redux/auth';
