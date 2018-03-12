import React, { Component } from 'react';
import './Details.css'
import LocalizedText from '../Translations/LocalizedText';
import { TRANSLATIONS } from '../Translations/Translations'

class Details extends Component {

  
  render() {
    const isAuthenticated = this.props.authed;
    return (
      <div className="container">
        <h1>
          <LocalizedText stringUN='details' {...this.props}/>
        </h1>
        <p>
          {TRANSLATIONS['detailslong'][this.props.lang].split('\n').map(line => <p className='noPadding'>{line}</p>)}
        </p>
      </div>
    );
  }
}

export default Details;
