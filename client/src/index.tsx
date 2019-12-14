import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import './index.scss';

import Root from './containers/Root/Root';
import configureStore from './redux/config/configureStore';

// import { restoreSession } from "./redux/users/userActions";

// Initialize data from server or localstorage here
const history = createBrowserHistory();
const store = configureStore({}, history);
// store.dispatch(restoreSession());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
