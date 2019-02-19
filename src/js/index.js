import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import '../css/reset.css';
import Routes from './routes';
import createStore from './store';

const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
