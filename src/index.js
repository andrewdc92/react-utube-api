import _ from 'lodash';
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
      this.videoSearch('surfboards');
        // calling this.setState is a callback
        // in es6, {videos} means key:videos, value: videos, just shorthand
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
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
      // creates a new version of the inner function that will only run every 300 ms
    return (
    <div>
      <SearchBar onSearchTermChange= {term => this.videoSearch(term)} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos = {this.state.videos}/>
    </div>
    );
   }
  }
  // videoSearch method gets passed to onSearchTermChange prop
  // passing prop videos and onVideoSelect to video list


    ReactDOM.render(<App />, document.querySelector('.container'));
