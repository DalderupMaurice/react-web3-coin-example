import React from 'react';
import { Route } from 'react-router-dom';
import { any, bool, string } from 'prop-types';

const DefaultRoute = ({ exact, path, component: Component }: any) => (
  <Route exact={exact} path={path} render={props => <Component {...props} />} />
);

DefaultRoute.propTypes = {
  component: any.isRequired,
  path: string.isRequired,
  exact: bool
};

DefaultRoute.defaultValues = {
  exact: false
};

export default DefaultRoute;
