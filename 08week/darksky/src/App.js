import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Google API key - AIzaSyCR4RdyHrMgKcPP-fkS7z4BzstPXDyqmZY
    // Sample - https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY
// DarkSky API key - 1b54497b6fdc42632c24e42811c1c10c
    // Sample - https://api.darksky.net/forecast/ API Key /37.8267,-122.4233

// Responsible for
    // API calls - DarkSky and Google Geocoding
    // Input box
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  fetchWeatherWithAddress = () => {
    // Receive address in inputbox from User

    //
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dark Sky App</h2>
        </div>
      </div>
    );
  }
}

export default App;
