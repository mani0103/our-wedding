import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import LoginModal from './Login-dialog/LoginModal';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Details from './Home/Details';
import Auth from './Auth/Auth';
import fire from './fire'
import FireImage from './Image/FireImage'

class App extends Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state = {
      authed: false,
      loading: false,
      lang: 'hun'
    };
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

  changeLanguage(lang){
    this.setState({lang: lang})
  }

  render() {
    
    return (
      <div>       
        <Route path="/" render={(props) => <FireImage src='header.png' />} />
        <Route path="/" render={(props) => <Navigation authed={this.state.authed} changeLanguage={this.changeLanguage} lang={this.state.lang} {...props} />} />
        <Route path="/home" render={(props) => <Home authed={this.state.authed} lang={this.state.lang} {...props} />} />
        <Route path="/details" render={(props) => <Details authed={this.state.authed} lang={this.state.lang} {...props} />} />
        <Route path="/photos" render={(props) => <div>Photos</div>} />
        <div className="scroll-test">
        </div>
      </div>

    );
  }
}

export default App;