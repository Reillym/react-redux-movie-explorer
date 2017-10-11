import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import AsyncRoute from "./AsyncRoute";
import preload from "../data.json";

const FourOhFour = () => <h1>404</h1>;

class App extends Component {

  SearchComponent = props => <AsyncRoute props={Object.assign({shows: preload.shows}, props)} loadingPromise={import('./Search')} />;

  DetailsComponent = props => {
    const selectedShow = preload.shows.find(
      show => props.match.params.id === show.imdbID
    );
    return <AsyncRoute props={Object.assign({show: selectedShow}, props)} loadingPromise={import('./Details')} />;
  };

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Switch>
            <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./landing')} />} />
            <Route path="/search" component={this.SearchComponent} />
            <Route path="/details/:id" component={this.DetailsComponent} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
