import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'
import Config from './config.js';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// You'll need to get your own API key and put it in a config.js file ...
// config.js:
//
//  export default {
//    API_KEY: "ThIsIsMySuP3Rs3cR3Tk3y";
//  }
//

const API_KEY = Config.API_KEY;

// Create a new component. This compoenet should produce some HTML

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term : term}, videos => {
      this.setState({
        videos:videos,
        selectedVideo : videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);
    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>);
  }
}

// Take this component's generated HTML and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));
