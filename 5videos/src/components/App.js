import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    // default search
    this.onFormSubmit("buildings");
  }
  onFormSubmit = async (term) => {
    let response = await youtube.get("/search", { params: { q: term } });
    this.setState({
      videos: response.data.items,
      // show first result by default
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui  container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row ">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className=" five wide column">
              <VideosList
                onVideoClick={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
