import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import API_KEY from './config.js';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



class App extends Component  {
     state = {
    videos: [],
    selectedVideo: null
  }


componentDidMount() {
  YTSearch({key: API_KEY, term: "lakers"}, videos => {
     this.setState({videos,
      selectedVideo: videos[0]})
  });

}
handleClickedVideo = (video) => {
  this.setState({
    selectedVideo: video
  })
}

handleSearch = (searchQuery) => {
  YTSearch({key: API_KEY, term: searchQuery}, videos => {
     this.setState({videos,
      selectedVideo: videos[0]})
  });
}


  render() {
  return (
    <div>
      <SearchBar search={this.handleSearch} />
      <VideoDetail  video={this.state.selectedVideo}/>

      <VideoList onVideoSelect={this.handleClickedVideo} videos={this.state.videos} />

    </div>
  )
 }
}

export default App;
