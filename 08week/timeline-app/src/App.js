import React, { Component } from 'react';
import './App.css';
import TimeLine from './TimeLine';


// Create Two Components
// One parent that takes a user's status
// One child that displays all the statuses
class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      timeLine: [],
    }
  }


  handleChange(e){
    this.setState({inputValue: e.target.value});
  };


  handleClick=()=>{
    // Create a card object to hold the information about a post
    const card = {
      createdAt: new Date(),
      text:  this.state.inputValue,
      color: 'blue',
      id: this.state.timeLine.length + 1
    };
    // Push the card object, with the inputValue, onto the front of the timeLine array using spread operator
    // Set the state with the new array
    this.setState({timeLine: [...this.state.timeLine, card], inputValue: ''})
  };


  deleteStatus=(id)=>{
    const deleteCardList = this.state.timeLine.filter((card, index) => {
      return card.id !== id;
    });
    this.setState({timeLine: deleteCardList});
  };


  render() {
    return (
      <div className="App">

        <input
          onChange={(e) => this.handleChange(e)}
          value={this.state.inputValue}
          type="text"
        />

        <button onClick={this.handleClick}>Submit</button>

        <TimeLine deleteStatus={this.deleteStatus} list={this.state.timeLine} />

      </div>
    );
  }
}

export default App;
