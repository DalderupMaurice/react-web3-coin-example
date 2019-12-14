import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DefaultRoute from './Route';
import App from '../App';
import PageNotFound from '../../components/NotFound';

const Routes = React.memo((props: any) => {
  return (
    <Switch>
      <DefaultRoute exact path="/" component={App} />
      <Route component={PageNotFound} />
    </Switch>
  );
});

export default Routes;
