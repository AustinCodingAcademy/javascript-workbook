import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';


// Use swapi.co to access list of Star Wars characters
// swapi.co/api/people/ + (num from 1 - 87)  -  Starts with Luke
const urlForStarWarsChrctrs = (swapiCharURL) => {
  return `https://swapi.co/api/people/${swapiCharURL}/`
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Create an iterator. Each time the Light or Dark buttons are hit
      // Set state of swapiCharURL to current+1 > render > new API call
      // Populates the center column with new SW character
      swapiCharURL: 1,
      name: 'default',
      lightArray: [],
      darkArray: [],
      fetchResults: [],
      isFetching: false,
      requestFailed: false,
      error: '',
    };

    // this.handleClick = this.handleClick(bind).this;
  }

  fetchStarWarsCharacters = () => {
    this.setState({
      isFetching: true,
    })
    return fetch(urlForStarWarsChrctrs(this.state.swapiCharURL))
      // Check API response is ok
      .then((response) => {
        if (!response.ok) {
          throw Error("Network request failed"); // Throw error
        }
        return response
      })
      // Format the results with JSON
      .then(response => response.json())
      // Pass the JSON formatted response
      // Update this.state with the queried SW character name
      .then((res) => {
        return this.setState({
          ...this.state,
          isFetching: false,
          fetchResults: [
            ...this.state.fetchResults,
            res
          ],
        })

      })
      .catch((err) => {
        this.setState({
          isFetching: false,
          requestFailed: true, //Catch errors
          error: err,
        })
      });
  }

  componentDidMount() {
    // Using the above const, call the StarWars API for a character
    this.fetchStarWarsCharacters();
  }

  // Check to see if the API call is working
  // console.log(this.state.starWarsChar);

  // Display each character on the list, one by one,
  // in the center of the screen, starting at the beginning,
  // with the most easily identifiable as Light or Dark Side

  // User clicks on one of two buttons below the name (or image) >
  // This pops the center displayed name >
  // Adds the characterCard name to the Light or Dark array
  handleClick = (e) => {
    // Create a characterCard object to hold info
    if (e.target.innerHTML === 'Seek only the Light') {
      this.setState({
        lightArray: this.state.name,
        swapiCharURL: this.state.swapiCharURL + 1,
      });
      this.fetchStarWarsCharacters();
    } else {
      this.setState({
        darkArray: this.state.name,
        swapiCharURL: this.state.swapiCharURL + 1,
      });
      this.fetchStarWarsCharacters();
    }

    };

  //   // FROM TIMELINE APP
  //   // New push method format
  //   // Inside [], use spread operator to include all of state
  //   // Push the card object, with the name, onto the front of the timeLine array
  //   // Set the state with the new array
  //   // this.setState({lightArray: [...this.state.starWarsChars, characterCard]})
  // };

  render() {
    // Ensure API request was successful
    // if (this.state.requestFailed) { return <h3>Request Failed</h3> }
    // Ensure there is SW data to be rendered
    // if (this.state.isFetching) { return <h3>Loading...</h3> }

    return (
      <div className="App">

        <div className="App-header">
          <h1>Does the character belong to the Light or Dark?</h1>
          <h2>Click the button to assign them to a side</h2>
        </div>
        <div>
          <h1>{this.state.name}</h1>
          <RaisedButton label="Seek only the Light" onClick={this.handleClick} />
          <RaisedButton backgroundColor='grey' labelColor='#fff' label="Come to the Dark" onClick={this.handleClick} />
        </div>

        <div>
          <ul>
            {this.state.fetchResults.length > 0
              && this.state.fetchResults
              .map((character, index) => {
                return <li key={index}>{character.name}</li>
              })
            }
          </ul>
        </div>

        <div>
          <ul>
            {this.state.fetchResults.length > 0
              && this.state.fetchResults
              .map((character, index) => {
                return <li key={index}>{character.name}</li>
              })
            }
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
