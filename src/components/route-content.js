import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Urls from 'urls';

import Home from './home';
import About from './about';

const NotFound = () => (
  <div className="jumbotron">
    <div className="text-center">
      <h1>404.. This page is not found!</h1>
    </div>
  </div>
);

const FeatureDisabled = () => (
  <div className="jumbotron">
    <div className="text-center">
      <h1>Feature Disabled</h1>
    </div>
  </div>
);

const ComingSoon = () => (
  <div className="jumbotron">
    <div className="text-center">
      <h1>Coming Soon!</h1>
    </div>
  </div>
);

export default class RouteContent extends React.Component {
  renderRoute(path, component, enabled) {
    component = enabled ? component : FeatureDisabled;
    return <Route path={ path } component={ component } />;
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/*' component={ NotFound } />
      </Router>
    );
  }
}
