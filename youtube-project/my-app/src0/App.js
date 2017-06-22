import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';//'current folder(./) go into components and find searchBar there'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoListItem from './VideoListItem';
const API_KEY = 'AIzaSyCilkKMHE8Grt9I-4lVxfWyUes56ygh83g';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: 'none'
      }
    }

  videoSearch(term) {
    console.log(YTSearch);

    YTSearch({
      key: API_KEY,
      term: term,
    },
      (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce ((term) => { this.videoSearch(term) }, 300);
      return (
        <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
        </div>
      );
    }
  }

  export default App;
