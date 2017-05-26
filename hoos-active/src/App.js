import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Nav from './Nav.js';
import Popup from './Popup.js';

const coords = {
  lat: 38.0293,
  lng: -78.4767
};

const params = {key: 'AIzaSyDDFlmyKc2TKtcmWw-lC1-fmjJAh9qQv54'};

export default class App extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  };

  onDragEnd(e) {
    console.log('onDragEnd', e);
  };

  onCloseClick() {
    console.log('onCloseClick');
  };

  onClick(e) {
    console.log('onClick', e);
  };

  render() {
    return (
      <div>
      <div>
        <Gmaps id='map'
          width={'100%'}
          height={'600px'}
          lat={coords.lat}
          lng={coords.lng}
          zoom={12}
          loadingMessage={'Be happy'}
          params={params}
          onMapCreated={this.onMapCreated}>
          <Marker
            lat={coords.lat}
            lng={coords.lng}
            draggable={true}
            onDragEnd={this.onDragEnd} />
          <InfoWindow
            lat={coords.lat}
            lng={coords.lng}
            content={'Event Details'}
            onCloseClick={this.onCloseClick} />
          </Gmaps>
        </div>
        <Nav id="nav-bar"/>
        <Popup/>
        </div>
      
    );
  }

};

