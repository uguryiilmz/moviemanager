import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

export default class Movie extends Component {
  state = {
    showInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_MOVIE", payload: id });
  };

  render() {
    const { id, name, description, image, stars, director } = this.props.movie;
    const { showInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={() =>
                    this.setState({ showInfo: !this.state.showInfo })
                  }
                  className="fas fa-arrow-down"
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`movies/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1em"
                    }}
                  />
                </Link>
              </h4>

              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <h4>Description </h4> {description}
                  </li>
                  <li className="list-group-item">
                    <img src={image} />
                  </li>
                  <li className="list-group-item">
                    <h4> Stars </h4> {stars}
                  </li>
                  <li className="list-group-item">
                    <h4> Director </h4>
                    {director}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
