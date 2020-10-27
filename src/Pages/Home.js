import React, { Component } from "react";
import { Title } from "../Components/Title";
import { SearchForm } from "../Components/SearchForm";
import Credits from "../Components/Credits";
import { MovieList } from "../Components/MoviesList";

export class Home extends Component {
  state = {
    results: [],
    usedSearch: false,
  };
  _handleReesults = (results = []) => {
    this.setState({ results, usedSearch: true });
  };
  _renderResults() {
    return this.state.results.length === 0 ? (
      <small>Sin Resultados </small>
    ) : (
      <MovieList Movies={this.state.results} />
    );
  }

  render() {
    return (
      <div className="App container">
        <Title>Ask Movies.io</Title>
        <div className="SearchForm-Wrapper">
          <SearchForm onResults={this._handleReesults} />
        </div>
        <div>{this.state.usedSearch ? this._renderResults() : <Credits />}</div>
      </div>
    );
  }
}
