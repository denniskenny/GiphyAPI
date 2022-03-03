import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import App from './components/App'; // eslint-disable-line import/no-named-as-default
import HomePage from './components/HomePage.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NoPageFound from './components/NoPageFound';

const store = configureStore();

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={HomePage}/>
        </Route>
      <Route path="*" component={NoPageFound} />
    </Router>
  </Provider>
), document.getElementById('app'));
