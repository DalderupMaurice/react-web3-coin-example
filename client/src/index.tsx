import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import Root from './components/Root/Root';

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('root')
);
