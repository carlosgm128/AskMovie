import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Movie extends Component {
  render() {
    const { id, Poster, Title, Year } = this.props;

    return (
      <Link to={`/detail/${id}`} className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={Poster} alt={Title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{Title}</p>
            <p className="subtitle is-6">{Year}</p>
          </div>
          <div className="content"></div>
        </div>
      </Link>
    );
  }
}
