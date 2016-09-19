import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import routes from './routes'

import injectTapEventPlugin from 'react-tap-event-plugin';

// for bundling you styles
import './scss/bundle.scss';

// for bundling modernizr
import './lib/modernizr.custom.js';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory} routes={routes}>
  </Router>
  </Provider>
  , document.querySelector('.react-root'));
