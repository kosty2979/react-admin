import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Dashboard from './containers/Dashboard/';
import Login from './containers/Login/';

import AllPost from './components/AllPost';
import NewPost from './components/NewPost';
import AllPortfolio from './components/AllPortfolio';
import NotFoundPage from './components/NotFoundPage.js';

// export default (
//   <Route path="/" component={App}>
//     <IndexRoute title="Login" component={Login} />
//     <Route path="/dashboard" component={Dashboard} onEnter={Dashboard.onEnter.bind(this, store)}>
//       <IndexRoute title="All Posts" component={AllPost} />
//       <Route path="allpost" title="All Posts" component={AllPost} />
//       <Route path="newpost" title="New Post" component={NewPost} />
//       <Route path="allportfolio" title="All Portfolio" component={AllPortfolio} />
//       <Route path="*" title="Page not found" component={NotFoundPage} />
//     </Route>
//   </Route>
// );

export function getRoutes(store) {
  return (
    <Route path="/" component={App}>
      <IndexRoute title="Login" component={Login} />
      <Route path="/dashboard" component={Dashboard} onEnter={Dashboard.onEnter.bind(this, store)}>
        <IndexRoute title="All Posts" component={AllPost} />
        <Route path="allpost" title="All Posts" component={AllPost} />
        <Route path="newpost" title="New Post" component={NewPost} />
        <Route path="allportfolio" title="All Portfolio" component={AllPortfolio} />
        <Route path="*" title="Page not found" component={NotFoundPage} />
      </Route>
    </Route>
  );
}
