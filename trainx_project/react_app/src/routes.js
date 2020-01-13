import React from "react";
import { Route } from "react-router-dom";

import Dashboard from "./components/dashboard";
import ClientDetail from "./components/clients/ClientDetail";

const BaseRouter = () => {
  <div>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/client_detail/:id" component={ClientDetail} />
  </div>;
};

export default BaseRouter;
