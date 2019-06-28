import React, { Component } from "react";
import { connect } from "dva";
import { Link } from "dva/router";

import "./Master.scss";

export default connect(state => {
  return state;
})(
  class Master extends Component {
    state = {
      masterlist: {}
    };
    render() {
      return (
        <div className="master">
          <div className="title">
            {this.state.masterlist.title}
            <Link to="/collection/26">
              <span>
                查看更多
                <i />
              </span>
            </Link>
          </div>
          <div className="main">
            <div className="box">
              {this.state.masterlist.items
                ? this.state.masterlist.items.map((item, index) => {
                    return (
                      <li key={index} className="list">
                        <div
                          className="img"
                          style={{
                            backgroundImage: "url(" + item.cover_url + ")"
                          }}
                        >
                          <div className="name">
                            {item.type === "audio"
                              ? "音频"
                              : item.type === "video"
                              ? "视频"
                              : "图文"}
                          </div>
                        </div>
                        <h2>{item.title}</h2>
                        <div className="jiRV5">
                          {item.discount_price ? (
                            <div className="IwGT2">
                              <div className="YGXuX">
                                {item.discount_price}.00
                                <span className="_2KwxF">元</span>
                              </div>
                              <del>{item.price}.00元</del>
                            </div>
                          ) : (
                            <div className="IwGT2">
                              <div className="YGXuX">
                                {item.price}.00
                                <span className="_2KwxF">元</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      );
    }
    async componentDidMount() {
      await this.setState({
        masterlist: this.props.example.timedata[4]
      });
    }
  }
);
