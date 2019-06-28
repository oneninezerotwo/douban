import React from "react";
import { Router, Route, Switch } from "dva/router";
// import IndexPage from './routes/IndexPage';

import Time from "./routes/Time/Time";
import Collection from "./routes/Collection/Collection";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Time} />
        <Route path="/collection" component={Collection} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
