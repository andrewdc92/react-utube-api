import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCetO-Veu4hILuRuvB64uyFch0BgHdzRvA';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

  // Create a new component that produces HTML and renders it in DOM
  const App = () => {
    return (
      <div>
         <SearchBar />
     </div>
    );
  }


    ReactDOM.render(<App />, document.querySelector('.container'));
