import React, { Component } from "react";
import { connect } from "dva";
import axios from "axios";

import "./Time.scss";

import Banner from "./components/Banner/Banner";
import Preferential from "./components/Preferential/Preferential";
import Newproducts from "./components/Newproducts/Newproducts";
import Qingjiao from "./components/Qingjiao/Qingjiao";
import Master from "./components/Master/Master";
import SpecialColumn from "./components/SpecialColumn/SpecialColumn";

export default connect(state => {
  return state;
})(
  class Time extends Component {
    state = {
      ajaxok: 0
    };
    render() {
      return (
        <div id="time">
          {this.state.ajaxok ? (
            <div>
              <Banner />
              <Preferential />
              <Newproducts />
              <Qingjiao />
              <Master />
              <SpecialColumn mainlist={this.state.alllist[5]} topicId={23} />
              <SpecialColumn mainlist={this.state.alllist[6]} topicId={22} />
              <div className="Advertisement">
                <img src={this.state.alllist[7].items[0].cover_url} alt="" />
              </div>
              <SpecialColumn mainlist={this.state.alllist[8]} topicId={21} />
              <div className="Advertisement">
                <img src={this.state.alllist[9].items[0].cover_url} alt="" />
              </div>
              <SpecialColumn mainlist={this.state.alllist[10]} topicId={20} />
              <SpecialColumn mainlist={this.state.alllist[11]} topicId={19} />
              <div className="Advertisement">
                <img src={this.state.alllist[12].items[0].cover_url} alt="" />
              </div>
              <SpecialColumn mainlist={this.state.alllist[13]} topicId={18} />
              <div className="Advertisement">
                <img src={this.state.alllist[14].items[0].cover_url} alt="" />
              </div>
              <SpecialColumn mainlist={this.state.alllist[15]} topicId={17} />
              <SpecialColumn mainlist={this.state.alllist[16]} topicId={16} />

              <div className="basecamp">
                <div className="title">{this.state.alllist[17].title}</div>
                <div className="basemain">
                  {this.state.alllist[17].items.map((item, index) => {
                    return <img key={index} src={item.cover_url} alt="" />;
                  })}
                </div>
              </div>

              <SpecialColumn mainlist={this.state.alllist[18]} topicId={7} />
              <div className="Advertisement">
                <img src={this.state.alllist[19].items[0].cover_url} alt="" />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }
    async componentDidMount() {
      const data = await axios(
        "https://www.easy-mock.com/mock/5cf62f5f95ac1528e1ea0aa8/douban"
      );
      this.props.dispatch({
        type: "example/save",
        payload: {
          timedata: data.data.modules
        }
      });
      this.setState({
        ajaxok: 1,
        alllist: this.props.example.timedata
      });
    }
  }
);
