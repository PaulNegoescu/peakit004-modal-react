import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// layouts

import Admin from './layouts/Admin';
import Auth from './layouts/Auth';

// views without layouts

import Landing from './views/Landing';
import Profile from './views/Profile';
import Index from './views/Index';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        <Route path="/landing" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Index} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);
