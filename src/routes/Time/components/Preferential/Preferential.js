import React, { Component } from "react";
import { connect } from "dva";

import "./Preferential.scss";

export default connect(state => {
  return state;
})(
  class Preferential extends Component {
    state = {
      _618list: []
    };
    render() {
      return (
        <div className="preferential">
          <div className="title">6·18特惠</div>
          <div className="main">
            <div className="box">
              {this.state._618list.map((item, index) => {
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
              })}
            </div>
          </div>
        </div>
      );
    }
    async componentDidMount() {
      await this.setState({
        _618list: this.props.example.timedata[1].items
      });
    }
  }
);
