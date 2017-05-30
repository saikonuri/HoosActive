import React from 'react';
import ReactDOM from 'react-dom';
import {Marker} from 'react-gmaps';

const params = {key: 'AIzaSyDDFlmyKc2TKtcmWw-lC1-fmjJAh9qQv54'};
export default class MyMarker extends React.Component{
    constructor(props){
    super(props);

    this.state={
        // lat: 0,
        // lng: 0,
        // event : 'center',
        // creator : 'sai'
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

render(){
    return(
            <Marker 
                lat={this.props.lat}
                lng={this.props.lng}
                onClick={this.showPopup}
                //event = {this.props.event}
                //creator = {this.props.creator}
                draggable={true}
                onDragEnd={this.onDragEnd}
            />
    )
}
}