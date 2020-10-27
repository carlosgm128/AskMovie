import React, { Component } from "react";
import { Movie } from "./Movie";

export class MovieList extends Component {
  render() {
    const { Movies } = this.props;

    return (
      <div className="MoviesList">
        {Movies.map((movie) => (
          <div key={movie.imdbID} className="MoviesList-item">
            <Movie
              id={movie.imdbID}
              Title={movie.Title}
              Poster={movie.Poster}
              Year={movie.Year}
            />
          </div>
        ))}
      </div>
    );
  }
}
