import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from './combinedReducers';
import rootSaga from './rootSaga';

export default function configureStore(initialState: any, history: any) {
  const sagaMiddleWare = createSagaMiddleware();

  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleWare, routerMiddleware(history)));

  const store = createStore(createRootReducer(history), initialState, enhancer);
  sagaMiddleWare.run(rootSaga);

  return store;
}
