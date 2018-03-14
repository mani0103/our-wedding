import React, { Component } from 'react';
import LocalizedText from '../Translations/LocalizedText';
import { TRANSLATIONS } from '../Translations/Translations';
import './Home.css';

class Gifts extends Component {

  
  render() {
    const isAuthenticated = this.props.authed;
    return (
      <div className="container">
          <LocalizedText stringUN='gifts' {...this.props}/>
      </div>
    );
  }
}

export default Gifts;
