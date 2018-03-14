import React, { Component } from 'react';
import './Details.css'
import LocalizedText from '../Translations/LocalizedText';
import { TRANSLATIONS } from '../Translations/Translations'
import MapContainer from './Map'

class Details extends Component {

  
  render() {
    const isAuthenticated = this.props.authed;
    return (
      <div className="container">
        {this.props.text.split('\n').map(line => {
            return (
              line.match(/\{.+\}/g) ?
              <div className='google-maps-container' key={line.id}>
                <MapContainer pos={JSON.parse(line.trim())} />
              </div>:
              <p className='noPadding' key={line.id}>{line}</p>
            )
          }
        )}
      </div>
    );
  }
}

export default Details;
