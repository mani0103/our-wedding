import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  
  onMarkerClick( props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
 
  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    const style = {
        width: '100%',
        height: '300px',
        margin: '50px auto'
    }
    return (
      <Map 
        google={this.props.google}
        style={style}
        zoom={17}
        initialCenter={this.props.pos}
        onClick={this.onMapClicked}
      
      >
        <Marker
            title={'Szent Andás bazilika'}
            name={'Szent Andás bazilika'}
            position={this.props.pos} 
            onClick={this.onMarkerClick}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              {this.props.pos.name}
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyD-hwNWChc-jkRMqtkpKsiPPd86RWwLELw")
})(MapContainer)