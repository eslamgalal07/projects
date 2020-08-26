import React from "react";

class SearchBar extends React.Component {
  state = {
    term: " ",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div onSubmit={this.onFormSubmit} className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search" style={{ marginTop: "10px" }}>
              Image Search
            </label>
            <input
              type="text"
              id="search"
              // get value from State
              value={this.state.term}
              // controlled due to store value in State
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
