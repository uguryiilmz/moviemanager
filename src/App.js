import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Movies from "./components/movie/Movies";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddMovies from "./components/layout/AddMovies";
import EditMovies from "./components/layout/EditMovies";
import test from "./components/testing/test";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Movie Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/movies/add" component={AddMovies} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={test} />
                <Route exact path="/movies/edit/:id" component={EditMovies} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
