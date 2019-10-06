import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";

import App from './components/App/App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import configureStore from './state/configureStore';

import history from './utils/history';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
      <ErrorBoundary>
        <Router history={history}>
          <App/>
        </Router>
      </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));