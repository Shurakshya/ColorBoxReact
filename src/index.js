import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import App from './Home';
import ColorDetail from './Detail';
import Preference from './Preferences';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path={"/"} component={ App } />
      <Route path={"/color/:colorName"} component={ ColorDetail } />
      <Route path={"/preference/id/:colorId"} component={ Preference } />
    </Router>
  ),document.getElementById('root'));
registerServiceWorker();
