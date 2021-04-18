import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Img = styled.img`
  width:100%;
`;
const MovieWrapper = styled(Link)`
  width:100%;
`;

export class Movie extends Component {
  render() {
    const { id, Poster, Title, Year } = this.props;

    return (
      <MovieWrapper to={`/detail/${id}`} className="card">
        <div className="card-image">
          <div className="image is-4by3">
            <Img src={Poster} alt={Title} />
          </div>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{Title}</p>
            <p className="subtitle is-6">{Year}</p>
          </div>
          <div className="content"></div>
        </div>
      </MovieWrapper>
    );
  }
}
