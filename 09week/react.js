<!DOCTYPE html>
<html>

<head>
  <title>React! React! React!</title>
  <script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>

  <style>
    #container {
      padding: 50px;
      background-color: #EEE;
    }
    #container h1 {
      font-size: 144px;
      font-family: sans-serif;
      color: #0080a8;
    }
  </style>
</head>

<body>
  <div id="container"></div>
  <script type="text/babel">
    var destination = document.querySelector("#container");

    ReactDOM.render(React.createElement(
    ReactDOM.render(
  <h1>Sherlock Holmes</h1>,
  document.body
);
  </script>
</body>

</html>

//fetch and axios do same thing but differently=====================

import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
const heading = {
  font: 40
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: []
  }
}

componentDidMount() {
  let url = 'https//randomuser'
  axios.get(url).then(response =>
  this.setState({
    userList: response.data.results
  })
 );
}

renderUsers = () => {
  return (
    this.state.userList.map((user, i) =>
  <li key={i}> <img alt="pic of user" src={user.picture.large}/> <br/>)
  Name:{user.name.first} {user.name.last} <br/> DOB: {user.dob}
  </li>)
  )
}

render() {
  return (
    <div>
    Cold or not:
    <ul>{this.renderUsers()}</ul>
    </div>
  )
}
}
export default App;
