import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
render() {
    const style = {
        width: '600px',
        height: '600px',
    }
    return (
      <Map 
        google={this.props.google}
        style={style}
        zoom={17}
        initialCenter={{
            lat: 47.7572284,
            lng: 18.1267641
          }}
      
      >
        <Marker
            title={'Szent Andás bazilika'}
            name={'Szent Andás bazilika'}
            position={{lat: 47.7572284, lng: 18.1267641}} 
        />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyD-hwNWChc-jkRMqtkpKsiPPd86RWwLELw")
})(MapContainer)