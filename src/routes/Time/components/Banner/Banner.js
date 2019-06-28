import React, { Component } from "react";
import { connect } from "dva";
import Swiper from "swiper";

import "swiper/dist/css/swiper.min.css";
import "./Banner.scss";

export default connect(state => {
  return state;
})(
  class Time extends Component {
    state = {
      bannerlist: [],
      navlist: [
        {
          title: "青椒学院",
          picpath: require("../../../../assets/qj.svg")
        },
        {
          title: "时间发现",
          picpath: require("../../../../assets/time.svg")
        },
        {
          title: "全部专栏",
          picpath: require("../../../../assets/all.svg")
        },
        {
          title: "签到",
          picpath: require("../../../../assets/qiandao.svg")
        },
        {
          title: "我的",
          picpath: require("../../../../assets/mine.svg")
        }
      ]
    };

    render() {
      return (
        <div className="banner">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {this.state.bannerlist.map((item, index) => {
                return (
                  <div key={index} className="swiper-slide ">
                    <img src={item.cover_url} alt="" className="bannerimg" />
                  </div>
                );
              })}
            </div>
            <div className="swiper-pagination" />
          </div>
          <ul className="time-nav">
            {this.state.navlist.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.picpath} alt="" />
                  <p>{item.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    async componentDidMount() {
      await this.setState({
        bannerlist: this.props.example.timedata[0].items
      });

      new Swiper(".swiper-container", {
        autoplay: {
          delay: 2000, // 延时，每隔两秒再切下一张
          disableOnInteraction: false // 设置成拖拽后还能继续运行
        },
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 1,
        loop: true, // 回路
        speed: 500, // 切换速度
        pagination: {
          // 显示焦点
          el: ".swiper-pagination"
        }
      });
    }
  }
);
