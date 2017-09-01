import React, { Component } from 'react';
import './App.css';

class App extends Component {
/*
Two compoonents, one parent, that takes in a user's status
and a child that displays all the statuses.
*/
constructor(props) {
  super(props);
  this.state = {
    inputValue: '',
  }
}
handleChange(e) {
  console.log(e.target.value);
  this.setState({inputValue: e.target.value});
}
  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange} value={this.state.inputValue} type="text"/>
      </div>
    );
  }
}

export default App;
