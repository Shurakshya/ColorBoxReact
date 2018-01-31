import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import App from './Home';
import ColorDetail from './Detail';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path={"/"} component={ App } />
      <Route path={"/color/:id"} component={ ColorDetail } />
    </Router>
  ),document.getElementById('root'));
registerServiceWorker();
