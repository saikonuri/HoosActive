import React, { Component } from 'react';
import logo from './logo.svg';
import Map from 'google-maps-react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Map center={lat=-34.397, lng=150.644}, zoom=8>
      </div>
    );
  }
}

export default App;
