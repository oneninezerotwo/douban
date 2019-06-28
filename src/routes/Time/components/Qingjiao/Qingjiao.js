import React, { Component } from "react";
import { connect } from "dva";
// import Swiper from "swiper";

import "./Qingjiao.scss";

import ModularOne from "../ModularOne/ModularOne";

export default connect(state => {
  return state;
})(
  class Qingjiao extends Component {
    state = {
      swiperlist: []
    };
    render() {
      return (
        <div className="qingjiao">
          <ModularOne nac="3" />
          {/* <div className="swiper-container2">
            <div className="swiper-wrapper">
              {this.state.swiperlist.map((item, index) => {
                return (
                  <div key={index} className="swiper-slide ">
                    <img
                      src={item.profile_cover_url}
                      alt=""
                      className="swiperimg"
                    />
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      );
    }
    async componentDidMount() {
      await this.setState({
        swiperlist: this.props.example.timedata[3].items
      });

      // new Swiper(".swiper-container2", {
      //   // autoplay: {
      //   //   delay: 2000, // 延时，每隔两秒再切下一张
      //   //   disableOnInteraction: false // 设置成拖拽后还能继续运行
      //   // },
      //   slideToClickedSlide: true,
      //   slidesPerView: "auto",
      //   loop: true, // 回路
      //   speed: 500 // 切换速度
      //   // effect: "coverflow",
      //   // coverflowEffect: {
      //   //   rotate: 0, //滑动时旋转角度
      //   //   stretch: 10, //聚合宽度
      //   //   depth: 0, //景深
      //   //   modifier: 1, //覆盖叠加层数
      //   //   slideShadows: false //是否阴影
      //   // }
      // });
    }
  }
);
