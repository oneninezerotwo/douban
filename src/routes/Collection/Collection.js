import React, { Component } from "react";
import { connect } from "dva";
import { Route, Switch } from "dva/router";
// import axios from "axios";

import "./Collection.scss";

import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

export default connect(state => {
  return state;
})(
  class Collection extends Component {
    render() {
      return (
        <div id="Collection">
          <Sidebar url={this.props.match.url} />
          <Switch>
            <Route
              path={`${this.props.match.url}/:topicId`}
              component={Content}
            />
          </Switch>
        </div>
      );
    }
  }
);
