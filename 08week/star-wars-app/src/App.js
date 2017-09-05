import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';


// Use swapi.co to find list of Star Wars characters
const urlForStarWarsChrctrs = `https://swapi.co/api/people/1`
// Only gives me the first page, so I might have to use multiple API calls,
// iterating from 1 - 87 (the current char list)

class App extends Component {
  constructor(props) {
    super(props);
    // Begin state with just a name so I can test if it's working
    this.state = {
      name: 'Star Wars App',

    };
  }

  componentDidMount() {
    // Using the above const, call the StarWars API for a list of all characters
    fetch(urlForStarWarsChrctrs)
      // Format the results with JSON
      .then(charData => charData.json())
      // Update this.state with the SW characters' data
      .then(charData => {
        this.setState({
          starWarsChars: charData
        })
      })
  }

  console.log(this.state.starWarsChars);
  // console.log(this.state.starWarsChars.results.split());

  // Display each character on the list, one by one,
  // in the center of the screen, starting at the beginning,
  // with the most easily identifiable as Light or Dark Side
  // this.state.starWarsChars.map((character) => { })
  // User clicks on one of two buttons below the name (or image)
  // This pops the center displayed name

  // // Places the name on the LEFT, Light Side
  // const lightArray = [
  //   Name: Side
  // ];
  // // or RIGHT, Dark side
  // const darkArray = [
  //   Name: Side
  // ];


  render() {
    // Ensure there is SW data to be rendered
    if (!this.state.starWarsChars) { return <h3>Loading...</h3> }
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
