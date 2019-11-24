import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import DefaultRoute from './Route';
import App from './Root';
import PageNotFound from '../NotFound';

const routes = React.memo((props: any) => {
  return (
    <Switch>
      <DefaultRoute exact path="/" component={App} />
      <Route component={PageNotFound} />
    </Switch>
  );
});
