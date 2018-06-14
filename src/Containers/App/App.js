import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from '../Search_bar/search_bar';
import VideoDetail from '../../Components/Video/video_detail';

const API_KEY = 'AIzaSyCBTRUw6am2Gsh8C8d43JfxRCflhGdXhbk';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = (term) => {this.videoSearch(term)};
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
      </div>
    );
  }
}

export default App;
