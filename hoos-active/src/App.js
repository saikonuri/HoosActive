import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, InfoWindow, Circle, Marker} from 'react-gmaps';
import Nav from './Nav.js';
import Popup from './Popup.js';
import MyMarker from './MyMarker.js';
import MuiThemeProvider from  'material-ui/styles/MuiThemeProvider'; 
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import data from './data.json';
import * as firebase from "firebase"

  var config = {
    apiKey: "AIzaSyDrI4zjaCyL4G-F8VnkJhzRCQEHhyfeB1w",
    authDomain: "hoosactive.firebaseapp.com",
    databaseURL: "https://hoosactive.firebaseio.com",
    projectId: "hoosactive",
    storageBucket: "hoosactive.appspot.com",
    messagingSenderId: "484142672133"
  };
  firebase.initializeApp(config);

const coords = {
  lat: 38.0336,
  lng: -78.5080
};

const params = {key: 'AIzaSyDDFlmyKc2TKtcmWw-lC1-fmjJAh9qQv54'};

export default class App extends React.Component {

constructor(props){
  super(props);

var that = this;
  this.state={
    events: data,
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

  componentDidMount(){
    firebase.database().ref('events/').on('value', (snapshot) => {
           const events = snapshot.val()
           if(events != null){
             this.setState({
               events: events
             })
           }
         })
  }

  showPopup(){
    this.context.setState({
      popup:  <Popup event={this.event}  creator={this.creator} time={this.time} placeName={this.placeName} number={this.number}/>
    })
  };

  createEvent(x,y,n,c,d,p){
      var updatedEvents = this.state.events
      updatedEvents[updatedEvents.length] = {
        lat: x,
        lng: y, 
        eventName: n,
        creator: c,
        time: d,
        placeName: p
      }
      this.setState({
        events: updatedEvents
      })

      var eventsRef = firebase.database().ref("/");
      eventsRef.set({
        events : this.state.events
      })
      alert("Pickup Game Added! Click on Markers to view Details")   
  }

  // addPeopleGoing(newNumber){
    
  // }

  render() {
    var that = this;
    var eventList = this.state.events.map((event) =>{
      return (
        <Marker
            lat={event.lat}
            lng={event.lng}
            time={event.time}
            event={event.eventName}
            creator={event.creator}
            number={event.numberOfPeople}
            placeName={event.placeName}
            draggable={false}
            onDragEnd={this.onDragEnd}
            onClick={this.showPopup}
            context={that}
         />   
      );
    })
    return (
      <Router>
          <div className="App">
          <div className="map-container">
          <img src="hooslogo.png" id="logo" className="container"/>
            <Gmaps id='map'
                        width={'100%'}
                        height={'100vh'}
                        lat={coords.lat}
                        lng={coords.lng}
                        zoom={14}
                        params={params}
                        onMapCreated={this.onMapCreated}>
              {eventList}
              </Gmaps>  
            </div>
            <div className='nav-bar'>
              <Nav createEvent={(x,y,n,c,d,p)=>this.createEvent(x,y,n,c,d,p)}/>
            </div>
            <div>
                {this.state.popup}       
            </div> 
            <Route path='/popup' Component={Popup}/>
            </div> 
        </Router>     
    );
  }
};

