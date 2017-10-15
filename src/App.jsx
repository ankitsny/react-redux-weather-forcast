import _ from 'lodash';

import React from 'react';
import YTSearch from 'youtube-api-search';


import { key } from '../config';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.searchVideo('some search terms');
  }

  searchVideo(term) {
    if (!term) return;
    YTSearch({ key, term }, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const searchVideo = _.debounce(term => this.searchVideo(term), 300);
    return (
      <div className="container">
        <SearchBar onSearchTermChange={term => searchVideo(term)} />
        <VideoDetail
          video={this.state.selectedVideo}
        />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;

