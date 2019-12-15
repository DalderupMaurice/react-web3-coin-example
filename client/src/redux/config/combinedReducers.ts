import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import commonReducer from '../common/commonReducer';

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    nos: commonReducer
  });
