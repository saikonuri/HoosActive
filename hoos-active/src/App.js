import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, InfoWindow, Circle, Marker} from 'react-gmaps';
import Nav from './Nav.js';
import Popup from './Popup.js';
import MyMarker from './MyMarker.js';

const coords = {
  lat: 38.0293,
  lng: -78.4767
};

const params = {key: 'AIzaSyDDFlmyKc2TKtcmWw-lC1-fmjJAh9qQv54'};

export default class App extends React.Component {

constructor(props){
  super(props);

  this.state={
    events: []
  }
}
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

  showPopup(){
    console.log("Event Clicked");
    
  };


  render() {
    return (
      <div className="App">
      <div className="map-container">
        <Gmaps id='map'
                    width={'100%'}
                    height={'600px'}
                    lat={coords.lat}
                    lng={coords.lng}
                    zoom={12}
                    loadingMessage={'Be happy'}
                    params={params}
                    onMapCreated={this.onMapCreated}>
          <MyMarker 
                    lat={38.0293}
                    lng={78.4767}
                    creator='Sai'
                    event='Tennis'
              />
          </Gmaps>  
        </div>

         <div className='nav-bar'>
           <Nav/>
         </div>
        </div>
      
    );
  }

};

