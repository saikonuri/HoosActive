import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, InfoWindow, Circle, Marker} from 'react-gmaps';
import Nav from './Nav.js';
import Popup from './Popup.js';
import MyMarker from './MyMarker.js';
import MuiThemeProvider from  'material-ui/styles/MuiThemeProvider'; 

const coords = {
  lat: 38.0293,
  lng: -78.4767
};

const params = {key: 'AIzaSyDDFlmyKc2TKtcmWw-lC1-fmjJAh9qQv54'};

export default class App extends React.Component {

constructor(props){
  super(props);

var that = this;
  this.state={
    events: [ 
      {
        lat: 38.03,
        lng: -78.48,
        eventName: 'Football',
        creator: 'Vinny',
        index: 0
      },
      {
         lat: 38.028,
         lng: -78.485,
         eventName: 'Basketball',
         creator: 'Rishi',
         index: 1
      },
      {
           lat: 38.029,
           lng: -78.47,
           eventName: 'Golf',
           creator: 'Shawn',
           index: 2
      }

    ],

    popup: ''
  }

  //this.showPopup=this.showPopup.bind(this);
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
    var index=this.index;
    this.context.setState({
      popup:  <Popup event={this.event}  creator={this.creator}/>
    })
  };


  render() {
    var that = this;
    var eventList = this.state.events.map((event) =>{
      return (
        <Marker
            lat={event.lat}
            lng={event.lng}
            event={event.eventName}
            creator={event.creator}
            draggable={true}
            onDragEnd={this.onDragEnd}
            onClick={this.showPopup}
            index={this.index}
            context={that}
         />   
      );
    })
    return (
      <div className="App">
      <div className="map-container">
        <Gmaps id='map'
                    width={'100%'}
                    height={'1000px'}
                    lat={coords.lat}
                    lng={coords.lng}
                    zoom={14}
                    loadingMessage={'Be happy'}
                    params={params}
                    onMapCreated={this.onMapCreated}>
          {eventList}
          </Gmaps>  
        </div>

         <div className='nav-bar'>
           <Nav/>
         </div>
         <div>
            {this.state.popup}
         </div>  
        </div>
      
    );
  }

};

