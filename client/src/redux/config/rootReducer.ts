import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from "history";

import commonReducer from '../common/commonReducer';

const rootReducer = (history: History<any>) =>
  combineReducers({
    router: connectRouter(history),
    nos: commonReducer
  });

  export default rootReducer;

  export type RootState = ReturnType<ReturnType<typeof rootReducer>>;
  export type RootState2 = typeof commonReducer;
