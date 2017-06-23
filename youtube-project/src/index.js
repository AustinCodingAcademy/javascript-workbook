import _ from 'lodash';
import React, { Component } from 'react';//all the import statements librearies and components
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import VideoListItem from './components/videoListItems';
const API_KEY = 'AIzaSyAyx-HHMCrhTsegdVUEAI8JDcwrmhyhbjI';//API key


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    }
// above is building the constructor for the main component. initially has an empty array to hold states video data.
// and initially sets a value of null for selectedVideo until search is begun.

videoSearch(term) {
  YTSearch({
    key: API_KEY,
    term: term,
  },
//kicking off search here and heading to searchBar component passing along api key and term
    (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
      //updating state with search results or selected video items
    });
  });
}



  render() {
    const videoSearch = _.debounce ((term) => { this.videoSearch(term) }, 300);
//setting 300ms delay on keystrokes for smoother search UI using debounce method on term
    return (
     <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        videos={this.state.videos}
        onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
    {/* above is bringing in and rendering each component to DOM. props are being taken in (videos) order to pass data back
      and forth from parent state to VideoList as it updates and then used to update the state when video is selected  */}
    </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));//rendering App to root div in tml file
