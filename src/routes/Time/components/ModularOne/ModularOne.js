import React, { Component } from "react";
import { connect } from "dva";

import "./ModularOne.scss";

export default connect(state => {
  return state;
})(
  class ModularOne extends Component {
    state = {
      modata: [],
      srmain: {}
    };
    render() {
      return (
        <div>
          {this.state.modata ? (
            <div className="ModularOne">
              <h2>{this.state.srmain.title}</h2>
              <div className="main">
                <div
                  className="_2iS06"
                  style={
                    this.state.srmain.profile_cover_url
                      ? {
                          backgroundImage:
                            "url(" + this.state.srmain.profile_cover_url + ")"
                        }
                      : {
                          backgroundImage:
                            "url(" + this.state.srmain.cover_url + ")"
                        }
                  }
                >
                  {this.state.srmain.subtype ? (
                    <div className="_25sxI _2xsDX">音频</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="y0UzV">
                  <div className="lzHbK">
                    <h2>
                      {this.state.srmain.package_title ||
                        this.state.srmain.column_title}
                    </h2>
                    <span className="_2RKq3">
                      <span className="_2Jmbn">
                        {this.state.srmain.user_price ||
                          this.state.srmain.discount_price}
                        .00
                        <span className="_39aJt">元</span>
                      </span>
                      <del>
                        {this.state.srmain.user_bulk_price ||
                          this.state.srmain.price}
                        .00元
                      </del>
                    </span>
                  </div>
                  {this.state.srmain.authors ? (
                    <i>主讲人 {this.state.srmain.authors[0].name}</i>
                  ) : (
                    <i
                      style={{
                        fontSize: "11px",
                        lineHeight: "20px"
                      }}
                    >
                      {this.state.srmain.intro}
                    </i>
                  )}

                  {this.state.srmain.short_intro ? (
                    <p>{this.state.srmain.short_intro}</p>
                  ) : (
                    <p
                      style={{
                        whiteSpace: "normal",
                        lineHeight: "18px"
                      }}
                    >
                      包含{this.state.srmain.total}个专栏，总价
                      {this.state.srmain.user_bulk_price}元，购买此包，仅需
                      {this.state.srmain.user_price}元就能拥有全部栏。
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
    async componentDidMount() {
      await this.setState({
        modata: this.props.example.timedata
      });
      if (this.props.nac === "2") {
        this.setState({
          srmain: this.state.modata[2]
        });
      }
      if (this.props.nac === "3") {
        this.setState({
          srmain: this.state.modata[3]
        });
      }
    }
  }
);
