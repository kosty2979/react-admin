import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Dashboard from './containers/Dashboard/';
import AllPost from './components/AllPost';
import NewPost from './components/NewPost';
import AllPortfolio from './components/AllPortfolio';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute title="Dashboard" component={Dashboard} />
    <Route path="/allpost" title="All post" component={AllPost} />
    <Route path="/newPost" title="New Post" component={NewPost} />
    <Route path="/allporfolio" title="All porfolio" component={AllPortfolio} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
