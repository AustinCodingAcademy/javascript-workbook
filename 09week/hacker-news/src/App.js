import React, { Component } from 'react';
import './App.css';


// Child of Timeline
class Story extends Component {
  render() {
    return (
      <Details />
    );
  }
}

// Child of Story
class Details extends Component {
  render() {
    return (
      <div>
        <p></p>
      </div>
    );
  }
}

// **** To insert screenshots, use https://www.producthunt.com/posts/enpose  ****

// Parent
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Begin topStories with empty array, so we can push into it
      topStories: [],
    };
  }

  componentDidMount() {
    // Initial API call to HN for top stories, returns 8 digit number
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    // Pass response to function that will JSONify the response
    .then((res) => {res.json()
      // Slice the JSON formatted response, called storyIds, to get the first 20
      .then((storyIds) => {storyIds.slice(0, 20)
        // For each story id in the array
        .forEach((storyId) => {
          // Call API, asking for specific story, with the story id in the URL. 1 - 20
          fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
          // Pass response to function that will JSONify the response
          .then((res) => {res.json()
            // Each story is passed to setState function
            .then((story) =>
              //
              this.setState({
                // setState of topStories to the entirity of topStories + current story
                topStories: [...this.state.topStories, story]
              })
            );
          });
        });
      });
    });
  }
  // Create method to render each story title
  renderStories() {
    // Return the map of topStories array, pass in 'story' as element, 'key' as iterator
    return this.state.topStories.map((story, key) => {
      // Multiline return statement
      return (
        // Define 'key' so React knows where to place element in relation to other elements
        <div key={key} style={{paddingBottom: 30}}>

          <h4> {key + 1} </h4>
          <h5> {story.by} </h5>
          <h3>
            <a
              className='link'
              href={story.url}
              target='_blank'
              style={{textDecoration: 'none'}}>
              {story.title}
            </a>
          </h3>
          <p> {story.score} points </p>
          <hr></hr>

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
