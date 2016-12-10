import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCetO-Veu4hILuRuvB64uyFch0BgHdzRvA';


  // Create a new component that produces HTML and renders it in DOM
  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        videos: [],
        selectedVideo: null
      };

      YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({
           videos: videos,
           selectedVideo: videos[0]
          });
        // calling this.setState is a callback
        // in es6, {videos} means key:videos, value: videos, just shorthand
      });
    }
    render() {
    return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos = {this.state.videos}/>
    </div>
    );
   }
  }
  // passing prop videos and onVideoSelect to video list


    ReactDOM.render(<App />, document.querySelector('.container'));
