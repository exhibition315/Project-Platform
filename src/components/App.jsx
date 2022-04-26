import React from 'react';
import lazy from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const Main = lazy(() => import(/* webpackChunkName: "Main" */ '@components/Main'));
const ContentDetail = lazy(() => import(/* webpackChunkName: "ContentDetail" */ '@components/ContentDetail'));

const App = () => (
  <Switch>
    <Route path="/" component={Main} exact />
    <Route path="/:id" component={ContentDetail} />
  </Switch>
);

export default App;
