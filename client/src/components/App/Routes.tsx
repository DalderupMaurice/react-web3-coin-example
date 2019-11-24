import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import DefaultRoute from './Route';
import App from './App';
import PageNotFound from './App';

const routes = React.memo((props: any) => {
  return (
    <Switch>
      <DefaultRoute exact path="/" component={App} />
      <Route component={PageNotFound} />
    </Switch>
  );
});
