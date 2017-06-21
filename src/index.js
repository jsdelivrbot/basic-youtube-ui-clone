import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js'
import Config from './config.js';

// You'll need to get your own API key and put it in a config.js file ...
// config.js:
//
//  export default {
//    API_KEY: "AIzaSyAkS8n1Rhrv6GggOBaAr7eNr2A7wJhTDvg"
//  }
//

const API_KEY = Config.API_KEY;

// Create a new component. This compoenet should produce some HTML

const App = () => {
  return <div>Hello World <SearchBar /></div>
}

// Take this component's generated HTML and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));
