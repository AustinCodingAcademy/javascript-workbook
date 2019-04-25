import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ' ',
      list: [],
      // text: ''
    }
  
  }
  handleClick = () =>{
    let arr = this.state.list;
    arr.push(this.state.inputValue)
    this.setState({list: arr, 
      inputValue: ''
  
    })
  }
  handleInputText =(e)=>{
    this.setState({inputValue: e.target.value})
  }
  handleDelete = (e) => {
    let item = e.target.value
    let arr = this.state.list
    arr.splice(arr.indexOf(item),1)
    this.setState({list: arr})
  }
  
 
  render() {
    return (
      <div className="App">
      
        <input type="text" onChange={this.handleInputText} value ={this.state.inputValue}/>
        <button onClick={this.handleClick}>Add Item</button>
        <div className="container"> 
          {this.state.list.map((item) =>{
            // console.log(item)
            return (
              <div className="todoItem">
                <button value={item} onClick={this.handleDelete}>X</button>
                <p>{item}</p>
              </div>
            )
            })}
        </div>
      </div>
    );
  }
}

export default App;
