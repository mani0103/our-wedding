import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import LoginModal from './Login-dialog/LoginModal';
import Navigation from './Navigation/Navigation';
import Gifts from './Home/Gifts';
import Home from './Home/Home';
import Details from './Home/Details';
import Meals from './Home/Meals'
import PhotoGallery from './Home/Photos';
import Auth from './Auth/Auth';
import fire from './fire'
import header from './Resources/header.png'
import { TRANSLATIONS } from './Translations/Translations'


const storage = fire.storage();
const storageRef = storage.ref();
const photoNames = ['1.jpg','2.jpg','3.jpg']



class App extends Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state = {
      authed: false,
      loading: false,
      lang: 'hun',
      photoUrls: []
    };
  }

  componentDidMount () {

    Promise.all(
      photoNames.map(name => 
        storageRef.child(name).getDownloadURL()))
          .then(urls => this.setState({photoUrls: urls}
      )
    )

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
    const isAuthenticated = this.state.authed;
    return (
      <div>
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />  
        <Route path="/" render={(props) => <div className='header-image'/>} />
        <Route path="/" render={(props) => <Navigation authed={this.state.authed} changeLanguage={this.changeLanguage} lang={this.state.lang} {...props} />} />
        <Route path="/home" render={(props) => <Home authed={this.state.authed} lang={this.state.lang} {...props} />} />
        <Route path="/details" render={(props) => <Details authed={this.state.authed} text={TRANSLATIONS['detailslong'][this.state.lang]} {...props} />} />
        <Route path="/photos" render={(props) => <PhotoGallery urls={this.state.photoUrls}/>} />
        {isAuthenticated &&
          <div>
            <Route path="/locations" render={(props) => <Details authed={this.state.authed} text={TRANSLATIONS['locationslong'][this.state.lang]} {...props} />} />
            <Route path="/gifts" render={(props) => <Gifts authed={this.state.authed} lang={this.state.lang} {...props} />} />
            <Route path="/meals" render={(props) => <Meals authed={this.state.authed} lang={this.state.lang} {...props} />} />
          </div>
        }
        {!isAuthenticated &&
          <div>
            <Route path="/location" render={() => (<Redirect to="/home" />)} />
            <Route path="/accomodation" render={() => (<Redirect to="/home" />)} />
            <Route path="/gifts" render={() => (<Redirect to="/home" />)} />
            <Route path="/meals" render={() => (<Redirect to="/home" />)} />
          </div>
        }
      </div>

    );
  }
}

export default App;