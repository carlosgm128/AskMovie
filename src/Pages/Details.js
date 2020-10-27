import React, { Component } from "react";

const API_KEY = "5342a66b";

export class Details extends Component {
  state = {
    movie: {},
  };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((movie) => {
        console.log({ movie });
        this.setState({ movie });
      });
  }

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this._fetchMovie({ id });
  }
  _goBack() {
    window.history.back();
  }
  render() {
    const { Title, Actors, Poster, Plot } = this.state.movie;
    return (
      <div className="container ">
        <button className="" onClick={this._goBack}>
          Close
        </button>
        <h1 className="">{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3 className="">{Actors}</h3>
        <p className=""> {Plot}</p>
      </div>
    );
  }
}
