import React, { Component } from "react";
import { connect } from "dva";
import { Link } from "dva/router";

import "./SpecialColumn.scss";

export default connect(state => {
  return state;
})(
  class SpecialColumn extends Component {
    render() {
      return (
        <div className="SpecialColumn">
          <div className="title">
            {this.props.mainlist.title}
            <Link to={"/collection/" + this.props.topicId}>
              <span>
                查看更多
                <i />
              </span>
            </Link>
          </div>
          <div className="main">
            {this.props.mainlist.items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="Tappable-inactive _319mo _2WA7g _3env8 "
                >
                  <div
                    className="_2iS06"
                    style={{
                      backgroundImage: "url(" + item.profile_cover_url + ")"
                    }}
                  >
                    <div className="_25sxI _2xsDX">
                      {item.type === "audio"
                        ? "音频"
                        : item.type === "article"
                        ? "图文"
                        : "视频"}
                    </div>
                  </div>
                  <div className="y0UzV">
                    <div className="lzHbK">
                      <h2>{item.title}</h2>
                      <span className="_2RKq3">
                        <span className="_2Jmbn">
                          {item.price}.00<span className="_39aJt">元</span>
                        </span>
                        {item.discount_price ? (
                          <del>{item.discount_price}.00元</del>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <i>主讲人 北岛和朋友们</i>
                    <p>
                      北岛和朋友们为你讲述诗人传奇故事，解读文化历史背景，细析诗句幽微妙处。
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
);
