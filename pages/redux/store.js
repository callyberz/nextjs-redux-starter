import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = context => {
  return createStore(rootReducer, bindMiddleware([thunkMiddleware, logger]));
};

export const wrapper = createWrapper(makeStore);
