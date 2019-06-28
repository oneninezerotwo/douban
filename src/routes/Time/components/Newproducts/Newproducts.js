import React, { Component } from "react";
import { connect } from "dva";
import "./Newproducts.scss";

import ModularOne from "../ModularOne/ModularOne";

export default connect(state => {
  return state;
})(
  class Newproducts extends Component {
    state = {
      newlist: []
    };
    render() {
      return (
        <div className="newp">
          <ModularOne nac="2" />
          <ul className="shit">
            <div className="box">
              {this.state.newlist
                ? this.state.newlist.map((item, index) => {
                    return (
                      <li key={index} className="lina">
                        <div className="linabox">
                          <div className="play">
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 22 22"
                              version="1.1"
                              className="playpic"
                            >
                              <circle
                                id="Oval"
                                stroke="#42BD56"
                                strokeWidth="0.5"
                                cx="10"
                                cy="10"
                                r="10"
                                fill="none"
                              />
                              <path
                                d="M13.7909775,8.63933261 C14.7405077,9.20905068 14.7413132,10.1322629 13.7909775,10.7024643 L8.73360932,13.7368852 C7.7840792,14.3066033 7.01433294,13.8637034 7.01433294,12.7663907 L7.01433294,6.57540621 C7.01433294,5.46969881 7.78327365,5.03471028 8.73360932,5.60491169 L13.7909775,8.63933261 Z"
                                fill="#42BD56"
                              />
                            </svg>
                            试听
                          </div>
                          <div className="title">{item.title}</div>
                        </div>
                      </li>
                    );
                  })
                : ""}
            </div>
          </ul>
        </div>
      );
    }
    async componentDidMount() {
      await this.setState({
        newlist: this.props.example.timedata[2].items
      });
    }
  }
);
