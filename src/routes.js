import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();


export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <App {...this.props}/>
    </Router>
  );
}