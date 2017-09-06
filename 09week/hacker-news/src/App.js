
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        stories: [],
        likes: 0
    }
  }

 componentDidMount(){
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
     res.json().then((storyIds) => {
       storyIds.forEach((storyId) => {
         fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
           res.json().then((story) => {
            this.setState({stories: [...this.state.stories, story]})
            console.log(story);

       })
     });
   });
 });
});
}

renderStories(){
      return this.state.stories.map((obj, key) => {
          return (
              <div key={key}>
                <a className='link' href={obj.url} target="_blank" >{obj.title}</a>
              </div>
          )
      });
}

render() {
    return (
      <div className="App">
        {this.renderStories()}
      </div>
    );
  }
}
export default App;
