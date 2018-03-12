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
          {TRANSLATIONS['ertesito'][this.props.lang]}
        </p>
        <q>
          {TRANSLATIONS['idezet'][this.props.lang]}
        </q>
      </div>
    );
  }
}

export default Home;
