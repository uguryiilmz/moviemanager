import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "./TextInputGroup";

class AddMovies extends Component {
  state = {
    name: " ",
    description: " ",
    image: " ",
    stars: " ",
    director: " ",
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, description, image, stars, director } = this.state;

    if (name === " ") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (description === " ") {
      this.setState({ errors: { description: "Description is required" } });
      return;
    }
    if (image === " ") {
      this.setState({ errors: { image: "image is required" } });
      return;
    }
    if (stars === " ") {
      this.setState({ errors: { stars: "Stars are required" } });
      return;
    }
    if (director === " ") {
      this.setState({ errors: { director: "Director is required" } });
      return;
    }

    const newMovie = {
      id: uuid(),
      name: name,
      description: description,
      image: image,
      stars: stars,
      director: director,
      errors: {}
    };
    dispatch({ type: "ADD_MOVIE", payload: newMovie });

    //Clear the form
    this.setState({
      name: "",
      description: "",
      image: "",
      stars: "",
      director: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, description, image, stars, director, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Movies</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter a title"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Description"
                    name="description"
                    placeholder="Enter a description"
                    value={description}
                    onChange={this.onChange}
                    error={errors.description}
                  />
                  <TextInputGroup
                    label="Image"
                    name="image"
                    placeholder="Enter an URL"
                    value={image}
                    onChange={this.onChange}
                    error={errors.image}
                  />
                  <TextInputGroup
                    label="Stars"
                    name="stars"
                    placeholder="Enter stars' names"
                    value={stars}
                    onChange={this.onChange}
                    error={errors.stars}
                  />
                  <TextInputGroup
                    label="Director"
                    name="director"
                    placeholder="Enter directors' names"
                    value={director}
                    onChange={this.onChange}
                    error={errors.director}
                  />
                  <input
                    type="submit"
                    value="Add Movie"
                    className="btn btn-gray btn-block "
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddMovies;
