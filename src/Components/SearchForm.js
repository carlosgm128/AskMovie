import React, { Component } from "react";

const API_KEY = "5342a66b";

export class SearchForm extends Component {
  state = {
    inputMovie: "",
  };
  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value });
  };
  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputMovie } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then((res) => res.json())
      .then((data) => {
        const { Search = [], totalResults = "0" } = data;
        console.log(totalResults);
        this.props.onResults(Search);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="control">
            <button href="/" className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;
