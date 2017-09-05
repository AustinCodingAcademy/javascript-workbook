import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';


// Use swapi.co to find list of Star Wars characters
const urlForStarWarsChrctrs = `https://swapi.co/api/people`
// Only gives me the first page, so I might have to use multiple API calls,
// iterating from 1 - 87 (the current char list)

class App extends Component {
  constructor(props) {
    super(props);
    // Begin state with an empty object devs can add to later
    this.state = {};
  }

  componentDidMount() {
    // Since the swapi characters don't have IDs
    // Using the above var, call the StarWars API for a list of all characters
    fetch(urlForStarWarsChrctrs)
      // Format the results with JSON
      .then(charData => charData.json())
      // Update this.state with the SW characters' data
      .then(charData => {
        this.setState({
          starWarsChars: charData
        })
      })

    console.log(this.state);

    // Display each character on the list, one by one,
    // in the center of the screen, starting at the beginning,
    // with the most easily identifiable as Light or Dark Side
    // this.state.starWarsChars.map((character) => {
    //
    //
    // })
    // User clicks on one of two buttons below the name (or image)
    // This pops the center displayed name
    // Places the name on the LEFT, Light Side or RIGHT, Dark side
  }

  render() {
    return (
      <div className="App">

          <div className="App-header">
            <h1>Does the character belong to the Light or Dark?</h1>
            <h2>Click the button to assign them to a side</h2>
          </div>

          <RaisedButton label="Seek only the Light"  />
          <RaisedButton backgroundColor='grey' labelColor='white' label="Come to the Dark"  />
        </div>
    );
  }
}

export default App;
