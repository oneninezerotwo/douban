import React, { Component } from "react";
import { connect } from "dva";
import axios from "axios";

import "./Content.scss";

export default connect(state => {
  return state;
})(
  class Content extends Component {
    state = {};
    render() {
      return (
        <div className="Content">
          <h2>{this.state.name}</h2>
          <div className="listbox">
            {this.state.mainlist
              ? this.state.mainlist.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="Tappable-inactive _319mo _2WA7g _3env8 _37Jdw"
                    >
                      <div
                        className="_2iS06"
                        style={{
                          backgroundImage: "url(" + item.profile_cover_url + ")"
                        }}
                      >
                        <div className="_25sxI _2xsDX">视频</div>
                      </div>
                      <div className="y0UzV">
                        <div className="lzHbK">
                          <h2>{item.title}</h2>
                        </div>
                        <i>主讲 {item.authors[0].name}</i>
                        {item.discount_price ? (
                          <span className="_2RKq3">
                            <span className="_2Jmbn">
                              {item.discount_price}.00
                              <span className="_39aJt">元</span>
                            </span>

                            <del>{item.price}.00元</del>
                          </span>
                        ) : (
                          <span className="_2RKq3">
                            <span className="_2Jmbn">
                              {item.price}.00
                              <span className="_39aJt">元</span>
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      );
    }
    async componentDidMount() {
      const data = await axios(
        "https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/collection" +
          this.props.match.params.topicId
      );
      this.props.dispatch({
        type: "example/save",
        payload: {
          topicId: this.props.match.params.topicId
        }
      });
      this.setState({
        name: this.props.example.conname,
        mainlist: data.data.columns
      });
    }
    async componentDidUpdate() {
      if (this.props.example.conresok) {
        const data = await axios(
          "https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/collection" +
            this.props.match.params.topicId
        );
        this.props.dispatch({
          type: "example/save",
          payload: {
            conresok: false
          }
        });
        this.setState({
          name: this.props.example.conname,
          mainlist: data.data.columns
        });
      }
    }
  }
);
