import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload)
      };

    case "ADD_MOVIE":
      return {
        ...state,
        movies: [action.payload, ...state.movies]
      };

    case "UPDATE_MOVIE":
      console.log("payload is", action.payload.id);
      return {
        ...state,
        movies: state.movies.map(
          movie =>
            movie.id === action.payload.id ? (movie = action.payload) : movie
        )
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "John Wick",
        description:
          "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        image: "",
        stars: " Keanu Reeves, Michael Nyqvist, Alfie Allen ",
        director: "Chad Stahelski"
      },
      {
        id: 2,
        name: "Deadpool",
        description:
          "A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.",
        image: "",
        stars: " Ryan Reynolds, Morena Baccarin, T.J. Miller",
        director: "Tim Miller"
      },
      {
        id: 3,
        name: "Captain America: The Winter Soldier",
        description:
          "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
        image: "",
        stars: " Chris Evans, Samuel L. Jackson, Scarlett Johansson ",
        director: "Antony Russo"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
