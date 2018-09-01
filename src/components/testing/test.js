import React, { Component } from "react";
import axios from "axios";

class test extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios.get().then(res => {
      this.setState({ movies: res.data.results });
    });
    // .then(res => {
    //   const movies = res.data.results.map(obj => ({
    //     title: obj.title,
    //     overview: obj.overview
    //   }));
    //   this.setState({ movies: movies });
    // });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1 />
      </div>
    );
  }
}

export default test;
