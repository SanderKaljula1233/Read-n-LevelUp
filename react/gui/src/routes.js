import React from "react";
import { Route } from "react-router-dom";

import Layout from "./containers/Layout";

const BaseRouter = () => (
  <div>
      <Route exact path='/' component={Layout} />{" "}
  </div>
);

export default BaseRouter;