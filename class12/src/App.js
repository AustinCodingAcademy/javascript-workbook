import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
     timelineData: [
         {name: 'renee', post: 'I love kitties', id: 1},
         {name: 'stevie', post: 'I love dogs', id: 2},
         {name: 'groot', post: 'I Am Groot', id: 3},
        //  {name: 'luke', post: 'blah blah blah', id: 4},
        //  {name: 'vader', post: 'I am your father', id: 5},
         {name: 'lea', post: 'Pizza', id: 6},
        //  {name: 'tamra', post: 'Workout', id: 7},
        //  {name: 'vicky', post: 'Coto Insurance', id: 8},
     ]

  };
 //  handleLikeClick=(e)=>{
 //    this.setState({timelineData: e.target.value})
 // };
 // handleILikeClick=()=>{
 //    const newState = this.state.timelineData;
 //    // newState.push({this.state.timelineData});
 //    this.setState({timelineData: newList, ''})
 // };
  renderPosts = () => {
    return this.state.timelineData.map((item, key) => {
      return (
        <div>
          <p>{item.post}</p> <p>{item.name}</p>
          <button onClick={this.renderPosts}><a>like</a></button>
        </div>
      );
      /*item = this.state.timelineData.post;
      return <div><p key={key}>{item}</p></div>*/
    })
    this.setState({})
  }
  render() {
    return this.renderPosts(this.state.timelineData)
  }

}
export default App;
