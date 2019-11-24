import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const DefaultRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

DefaultRoute.propTypes = {
  component: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default DefaultRoute;
