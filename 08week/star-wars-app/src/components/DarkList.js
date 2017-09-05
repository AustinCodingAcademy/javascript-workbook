import React, { Component } from 'react';
import './App.css';

class DarkList extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default DarkList;
