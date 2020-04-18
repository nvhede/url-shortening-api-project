import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const root = (
  <Router history={history}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Router>
)

ReactDOM.render(
  root,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
