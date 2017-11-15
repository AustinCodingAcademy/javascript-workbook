import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
     timelineData: [
         {name: 'renee', post: 'I love kitties', id: 1},
         {name: 'stevie', post: 'I love dogs', id: 2},
         {name: 'groot', post: 'I Am Groot', id: 3},
         {name: 'luke', post: 'blah blah blah', id: 4},
         {name: 'vader', post: 'I am your father', id: 5},
         {name: 'lea', post: 'Pizza', id: 6},
         {name: 'tamra', post: 'Workout', id: 7},
         {name: 'vicky', post: 'Coto Insurance', id: 8},
     ]

  };

  renderPosts = () => {
    return this.state.timelineData.map((item, key) => {
        return <p key={key}>{item}</p>
        console.log(item)
    });
    this.setState({})
  }
     /*User inputs task, on submit it's added to list */
   render(){
    return(
        <div>
        <p>{this.render.post}</p> <p>{this.renderPosts.name}</p> <a>like</a>
        </div>
    );
  }
}
export default App;
