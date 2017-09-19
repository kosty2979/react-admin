import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import { getRoutes } from './routes';
import store from './store/configureStore';
import './styles/main.scss';


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={getRoutes(store)} />
  </Provider>, document.getElementById('app')
);
