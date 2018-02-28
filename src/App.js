import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import LoginModal from './Login-dialog/LoginModal';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import fire from './fire'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      loading: false,
    }
  }

  componentDidMount () {
    this.removeListener = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return (
      <div>
        <Navigation authed={this.state.authed} />
        <Route path="/home" render={(props) => <Home authed={this.state.authed} {...props} />} />
        <Route path="/details" render={(props) => <div>Details</div>} />
        <Route path="/photos" render={(props) => <div>Photos</div>} />
        <div class="scroll-test">
          blbla
        </div>
      </div>

    );
  }
}

export default App;