import React, { Component } from "react";
import { Movie } from "./Movie";
import styled from 'styled-components'

const ContainerWrapper = styled.div`
`;
const CardWrapper = styled.div`
  display:grid;
  place-items:center;
  
`;


export class MovieList extends Component {

  render() {
    const { Movies } = this.props;
    return (
      <ContainerWrapper className="MoviesList">
        {Movies.map((movie) => (
          <CardWrapper key={movie.imdbID} className="MoviesList-item">
            <Movie
              id={movie.imdbID}
              Title={movie.Title}
              Poster={movie.Poster}
              Year={movie.Year}
            />
          </CardWrapper>
        ))}
      </ContainerWrapper>
    );
  }
}
