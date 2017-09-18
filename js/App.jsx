import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Search from "./Search";
import Details from "./Details";
import Landing from "./Landing";
import preload from "../data.json";

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  SearchComponent = props => <Search shows={preload.shows} {...props} />;

  DetailsComponent = props => {
    const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
    return <Details show={selectedShow} {...props} />;
  };

  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="app">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/search" component={this.SearchComponent} />
              <Route path="/details/:id" component={this.DetailsComponent} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
