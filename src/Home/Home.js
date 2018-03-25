import React, { Component } from 'react';
import './Home.css'
import LocalizedText from '../Translations/LocalizedText';
import Countdown from '../Countdown/Countdown'
import { TRANSLATIONS } from '../Translations/Translations'

class Home extends Component {

  
  render() {
    const isAuthenticated = this.props.authed;
    return (
      <div className="container home">
        {/* <h1>
          Silvia & Attila
        </h1> */}
        <h1>
          <LocalizedText stringUN='ertesito' {...this.props}/>
        </h1>
        <p>
          <LocalizedText stringUN='idezet' {...this.props}/>
        </p> 
        <Countdown {...this.props}/>
      </div>
    );
  }
}

export default Home;
