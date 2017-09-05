import React, { Component } from 'react';
import './App.css';
import TimeLine from './Timeline';

class App extends Component {
    /** Two Components, one parent that takes a user's status
     * and a child that displays all the statuses */
  constructor(props){
    super(props);
    this.state = {
        inputValue: '',
        timeLine: [],
    }
  }
  handleChange(e){
      this.setState({inputValue: e.target.value});
  }
  handleClick=()=>{
      const card = {
          createdAt: new Date(),
          text:  this.state.inputValue,
          color: 'blue',
          id: this.state.timeLine.length + 1
      };
      this.setState({timeLine: [...this.state.timeLine, card], inputValue: ''})
  };
  deleteStatus=(id)=>{
      console.log(id ,this.state.timeLine);
      const deleteCardList = this.state.timeLine.filter((card, index) =>{
          return card.id !== id;
      });
      this.setState({timeLine: deleteCardList});
  };
  render() {
    return (
      <div className="App">
        <form>
          <FormGroup bsSize="large">
            <FormControl
              type="text"
              onChange={(e) => this.handleChange(e)}
              value={this.state.inputValue}
              placeholder="Update"
            />
          </FormGroup>
        </form>
        // <input
        //     onChange={(e) => this.handleChange(e)}
        //     value={this.state.inputValue}
        //     type="text"
        // />
        <button onClick={this.handleClick}>Submit</button>
        <TimeLine deleteStatus={this.deleteStatus} list={this.state.timeLine} />
      </div>
    );
  }
}

export default App;
