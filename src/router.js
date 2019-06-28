import React from "react";
import { Router, Route, Switch } from "dva/router";
// import IndexPage from './routes/IndexPage';

import Time from "./routes/Time/Time";
import Collection from "./routes/Collection/Collection";
import Received from "./components/Received/Received";
import MovieDetail from "./components/MovieDetail/MovieDetail";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Time} />
        <Route path="/collection" component={Collection} />
        <Route path="/received" component={Received} />
        <Route path="/moviedetail" component={MovieDetail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
