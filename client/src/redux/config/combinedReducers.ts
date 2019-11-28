import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import web3Reducer from '../web3/web3Reducer';

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    web3: web3Reducer
  });
