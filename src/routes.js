import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();


/*
export const oldmakeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/details" render={(props) => <div>Details</div>} />
        <Route path="/photos" render={(props) => <div>Photos</div>} />
      </div>
    </Router>
  );
}
*/
export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <App {...this.props}/>
    </Router>
  );
}