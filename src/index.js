import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCetO-Veu4hILuRuvB64uyFch0BgHdzRvA';


  // Create a new component that produces HTML and renders it in DOM
  class App extends Component {
    constructor(props) {
      super(props);

      this.state = { videos: [] };

      YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos });
        // calling this.setState is a callback
        // in es6, {videos} means key:videos, value: videos, just shorthand
      });
    }
    render() {
    return (
      <div>
         <SearchBar />
       <VideoList videos = {this.state.videos}/>
     </div>
    );
   }
  }
  // passing prop videos to video list


    ReactDOM.render(<App />, document.querySelector('.container'));
