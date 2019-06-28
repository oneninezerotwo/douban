import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Received from './components/Received/Received';
import MovieDetail from './components/MovieDetail/MovieDetail';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/received"  component={Received} />
        <Route path="/moviedetail" component={MovieDetail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
