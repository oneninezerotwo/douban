import React, { Component } from "react";
import { connect } from "dva";
import { Link } from "dva/router";
import axios from "axios";

import "./Sidebar.scss";

export default connect(state => {
  return state;
})(
  class Sidebar extends Component {
    state = {
      navok: 0,
      navlist: null
    };
    render() {
      return (
        <div className="Sidebar">
          {this.state.navok
            ? this.state.navlist.map((item, index) => {
                return (
                  <Link
                    to={`${this.props.url}/${item.id}`}
                    key={index}
                    onClick={this.changeid.bind(this, item.id, item.title)}
                  >
                    <div
                      className={
                        this.state.topicId === item.id ||
                        this.props.example.topicId === item.id
                          ? "list light"
                          : "list"
                      }
                    >
                      <span>{item.title}</span>
                    </div>
                  </Link>
                );
              })
            : ""}
        </div>
      );
    }
    async componentDidMount() {
      const data = await axios.get(
        "https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/doubanlist"
      );
      this.setState({
        navok: 1,
        navlist: data.data.items
      });
    }
    componentDidUpdate(prevProps) {
      if (prevProps.example.topicId !== this.props.example.topicId) {
        this.setState({
          topicId: this.props.example.topicId
        });
        let num = this.props.example.topicId;
        let numindex;
        for (let i = 0; i < this.state.navlist.length; i++) {
          if (this.state.navlist[i].id === num) {
            numindex = i;
            break;
          }
        }
        this.props.dispatch({
          type: "example/save",
          payload: {
            conname: this.state.navlist[numindex].title
          }
        });
      }
    }
    changeid(i, name) {
      this.setState({
        topicId: i
      });
      this.props.dispatch({
        type: "example/save",
        payload: {
          topicId: i,
          conresok: true,
          conname: name
        }
      });
    }
  }
);
