import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCetO-Veu4hILuRuvB64uyFch0BgHdzRvA';


  // Create a new component that produces HTML and renders it in DOM
  class App extends Component {
    constuctor(props) {
      super(props);

      this.state = { videos: [] };

      YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos });
      });
    }
    render() {
    return (
      <div>
         <SearchBar />
     </div>
    );
   }
  }


    ReactDOM.render(<App />, document.querySelector('.container'));
