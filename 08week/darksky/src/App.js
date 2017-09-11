// Google API key - AIzaSyCR4RdyHrMgKcPP-fkS7z4BzstPXDyqmZY
    // Sample - https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY
// DarkSky API key - 1b54497b6fdc42632c24e42811c1c10c
    // Sample - https://api.darksky.net/forecast/ API Key /37.8267,-122.4233

// Responsible for
// API calls - DarkSky and Google Geocoding
// Input box
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// create a user input box and store the value in the state

class App extends Component {
  state = {
    streetNumber: '',
    streetName: '',
    zip: ''
  };

  getLongLatFromApiAsync(paramString) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?${paramString}`)
      .then((response) => response.json())
      .then((responseJson) => {
        const lat = responseJson.results[0].geometry.location.lat;
        const long = responseJson.results[0].geometry.location.lng;
        this.setState({lat: lat, long: long});
        // pass lat long to dark sky
        fetch(`https://api.darksky.net/forecast/1b54497b6fdc42632c24e42811c1c10c/37.8267,-122.4233`)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson, 'dark sky response')
            return responseJson
          })
          .catch((error) => {
            console.error(error);
          });
      })
    .catch((error) => {
      console.error(error);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const address = `address=${this.state.streetNumber}+${this.state.streetName.replace(/ /g, "+")},+${this.state.zip}`;
    this.getLongLatFromApiAsync(address);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Street Number"
            value={this.state.streetNumber}
            onChange={(e) => this.setState({streetNumber: e.target.value})}
          />
          <input
            type="text"
            placeholder="Street Name"
            value={this.state.streetName}
            onChange={(e) => this.setState({streetName: e.target.value})}
          />
          <input
            type="text"
            placeholder="Zipcode"
            value={this.state.zip}
            onChange={(e) => this.setState({zip: e.target.value})}
          />
          <br/><br/>
          <input
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default App;
