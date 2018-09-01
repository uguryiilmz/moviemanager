import React, { Component } from "react";
import Movie from "./Movie";
import { Consumer } from "../../context.js";

class Movies extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { movies } = value;
          return (
            <React.Fragment>
              {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Movies;
