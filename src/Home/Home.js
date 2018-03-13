import React, { Component } from 'react';
import './Home.css'
import LocalizedText from '../Translations/LocalizedText';
import { TRANSLATIONS } from '../Translations/Translations'

class Home extends Component {

  
  render() {
    const isAuthenticated = this.props.authed;
    return (
      <div className="container">
        <h1>
          Silvia & Attila
        </h1>
        <p>
          <LocalizedText stringUN='ertesito' {...this.props}/>
        </p>
        <p>
          <LocalizedText stringUN='idezet' {...this.props}/>
        </p>
      </div>
    );
  }
}

export default Home;
