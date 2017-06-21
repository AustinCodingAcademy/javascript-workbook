import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
const heading = {
  fontSize: 40
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      userList: []
    }
  }

  componentDidMount() {
    let url = 'https://randomuser.me/api/?results=5'
    axios.get(url).then(response =>
      this.setState({
        userList: response.data.results
      })
    );
  }

  renderUsers = () => {
    return (
      this.state.userList.map(user => 
      <li key={user.id.value}>  <img alt="pic of user" src={user.picture.large}/> <br/>
          Name:{user.name.first} {user.name.last} <br/> DOB: {user.dob}
      </li>)
    )
  } 
    
  render() {
    return (
      <div>
        Cold or Not: 
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

export default App;
