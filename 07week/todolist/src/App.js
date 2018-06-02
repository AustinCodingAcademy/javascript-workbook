import React, { Component } from 'react';
import './App.css';
import ListRender from './listRender'

class App extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    inputValue: '',
    list: [] //list of items on the to-do list
  }

  handleInputChange = (e) => {
    this.setState ({inputValue: e.target.value});
  }

  handleKeyDown = (e) => {
    if(e.keyCode === 13) this.handleAddClick()
  }

  handleAddClick = () => {
    if(this.state.inputValue) {
      const newList = this.state.list.slice();
      const inputObj = {
        inputValue: this.state.inputValue,
        isChecked: false,
        visibility: 'visible'
      }
      newList.push(inputObj);
      this.setState({
        list: newList,
        inputValue: ''
      });
    }

  }

  handleClearListClick = () => {
    this.setState({list:[]});
  }

  changeList = (newList) => {
    this.setState({list: newList});
  }

  render() {
    return (
      <div className="checklist">
        <h2>Checklist App</h2>
        <input
          type='text'
          value={this.state.inputValue}
          onChange = {(e)=> this.handleInputChange(e)}
          onKeyDown = {(e)=> this.handleKeyDown(e)}
        />
        <input
          type='submit'
          value ='Add'
          onClick={this.handleAddClick}/>
        <input
          type='submit'
          value ='Clear List'
          onClick={this.handleClearListClick}/>
        <ListRender
          list = {this.state.list}
          changeList = {this.changeList}
        />
      </div>
    );
  }
}


export default App;
