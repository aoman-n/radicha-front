import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import Home from './components/containers/HomeContainer';

const Routes = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);
export default hot(Routes);
