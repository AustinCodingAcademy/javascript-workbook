import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//catFight app, person has a cat, will combat other cats, cat's votes will be the metric,
// so get cats with votes.
class catFight extends Component {
  constructor(props) {
    super(props);
    this.state ={
      people: []
      fName: '',
      lName: '',
      pic:''
      }
    }

  componentDidMount() {
     const url = 'https://randomuser.me/api/?results=1';
     fetch(url)
     .then((response) => {
       response.json().then((data) =>{
        this.setState({
          people: data.results.map((person)=> {
            let fName = person.name.first;
            let lName = person.name.last;
            let pic = person.picture.thumbnail;
            return [fName, lName, pic];
            })
          });
        });

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
