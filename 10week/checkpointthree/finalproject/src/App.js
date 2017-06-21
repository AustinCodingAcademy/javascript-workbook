import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newsArticles: ['hello New York Timeskkkkkkk']
    }
  }
  render() {
    return (
      <div>{this.state.newsArticles}</div>
    );
  }
}

export default App;
