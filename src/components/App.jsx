import React from 'react';
import lazy from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const Main = lazy(() => import(/* webpackChunkName: "Main" */ '@components/Main'));
const ContentDetail = lazy(() => import(/* webpackChunkName: "ContentDetail" */ '@components/ContentDetail'));
const Edit = lazy(() => import(/* webpackChunkName: "Edit" */ '@components/Edit'));

const App = () => (
  <Switch>
    <Route path="/" component={Main} exact />
    <Route path="/view/:id" component={ContentDetail} />
    <Route path="/edit" component={Edit} />
  </Switch>
);

export default App;
