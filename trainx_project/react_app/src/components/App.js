import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ReactDOM from "react-dom";
import "moment-timezone";
import { Provider } from "react-redux";

import store from "../store";
import Dashboard from "../components/dashboard";
import Header from "./layout/Header";
import ClientDetail from "./clients/ClientDetail";
import ClientCreate from "./clients/ClientCreate";
import ClientEdit from "./clients/ClientEdit";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/client/add" component={ClientCreate} />
              <Route exact path="/client/edit/:id" component={ClientEdit} />
              <Route exact path="/client/:id" component={ClientDetail} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
