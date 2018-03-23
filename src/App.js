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
import PeopleList from './Home/Rsvp'
import Auth from './Auth/Auth';
import fire from './fire'
import header from './Resources/header.png'
import { TRANSLATIONS } from './Translations/Translations'


const storage = fire.storage();
const storageRef = storage.ref();
const db = fire.database();
const pictureRef = db.ref('pictures/')



class App extends Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.selectImage = this.selectImage.bind(this);
    this.hideBar = this.hideBar.bind(this)
    this.state = {
      navbarFixedToTop: false,
      authed: false,
      loading: false,
      lang: 'hun',
      photos: {},
      user: {}
    };
  }

  componentDidMount () {

    window.addEventListener('scroll', this.hideBar);

    pictureRef.on('value',(photos) => this.setState({photos: photos.val()}))

    this.removeListener = fire.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: {
            email: user.email,
            uid: user.uid
          }
        })
      } else {
        this.setState({
          authed: false,
          loading: false,
          user: {}
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener();
    window.removeEventListener('scroll', this.hideBar);
  }

  changeLanguage(lang){
    this.setState({lang: lang})
  }

  selectImage(un) {
    const newPhotosState = this.state.photos;
    if(newPhotosState[un].hasOwnProperty("isSelected")){
      newPhotosState[un].isSelected = !newPhotosState[un].isSelected;
    }
    else{
      newPhotosState[un].isSelected = true;
    }

    this.setState({photos: newPhotosState})
  }

  hideBar() {
    let { navbarFixedToTop } = this.state
    window.scrollY > 300 ?
      !navbarFixedToTop && this.setState({ navbarFixedToTop: true })
      :
      navbarFixedToTop && this.setState({ navbarFixedToTop: false })

  }


  render() {
    const isAuthenticated = this.state.authed;
    const commonProps = {
      authed: this.state.authed,
      lang: this.state.lang,
      user: this.state.user,
      navbarFixedToTop: this.state.navbarFixedToTop
    }
    return (
      <div>
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />  
        <Route path="/" render={(props) => 
          <div className='header-image'>Silvia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>&<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attila</div>} />
        {this.state.navbarFixedToTop && <Route path="/" render={(props) => <div className='fakeNavigation'style={{height: '100px'}}/>} />}
        <Route path="/" render={(props) => <Navigation changeLanguage={this.changeLanguage} {...props} {...commonProps}/>} />
        <Route path="/home" render={(props) => <Home  {...props}  {...commonProps}/>} />
        <Route path="/details" render={(props) => <Details text={TRANSLATIONS['detailslong'][this.state.lang]} {...props} {...commonProps} />} />
        <Route path="/photos" render={(props) => <PhotoGallery photos={this.state.photos} selectImage={this.selectImage} {...commonProps}/>} />
        {isAuthenticated &&
          <div>
            <Route path="/locations" render={(props) => <Details text={TRANSLATIONS['locationslong'][this.state.lang]} {...props} {...commonProps} />} />
            <Route path="/gifts" render={(props) => <Gifts  {...props}  {...commonProps}/>} />
            <Route path="/meals" render={(props) => <Meals  {...props}  {...commonProps}/>} />
            <Route path="/rsvp" render={(props) => <PeopleList  {...props}  {...commonProps}/>} />
          </div>
        }
        {!isAuthenticated &&
          <div>
            <Route path="/location" render={() => (<Redirect to="/home" />)} />
            <Route path="/accomodation" render={() => (<Redirect to="/home" />)} />
            <Route path="/gifts" render={() => (<Redirect to="/home" />)} />
            <Route path="/meals" render={() => (<Redirect to="/home" />)} />
            <Route path="/rsvp" render={() => (<Redirect to="/home" />)} />
          </div>
        }
      </div>

    );
  }
}

export default App;