import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from '../SearchBar/SearchBar';
import {Video} from '../../Components/Video/Video';
import {VideoList} from '../../Components/Video/VideoList/VideoList';

const API_KEY = 'AIzaSyCBTRUw6am2Gsh8C8d43JfxRCflhGdXhbk';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term, maxResults: 8}, (videos) => {
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
        <div className='container'>
          <SearchBar onSearchTermChange={videoSearch}/>
          <div className='row'>
            <Video video={this.state.selectedVideo}/>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
