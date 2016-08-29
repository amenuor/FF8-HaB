import React from 'react';
import  { Route, IndexRoute } from 'react-router';
import App from './components/app';

import EntitiesList from './components/entities_list';
import Entity from './components/entity';

export default (
  <Route path="/"  component={App}>
    <IndexRoute component={EntitiesList} />
    <Route path="/entity" component={Entity} />
  </Route>

);
