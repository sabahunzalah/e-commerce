import React from "react";
import { Carousel } from "antd";
import "./slider.css";
import IMAGE1 from "../../assets/Items/slide1.avif"
import IMAGE2 from "../../assets/Items/slide2.avif";
import IMAGE3 from "../../assets/Items/slide3.avif";
import IMAGE4 from "../../assets/Items/slide4.avif";
import { ColorFormat } from "antd/es/color-picker/interface";

const Slider = () => {
  return (
    <Carousel
      autoplay={true}
      dotPosition="botom"
      dots={true}
      className="carousel"
    >
      <div className="carousalDiv">
        <img src={IMAGE1} alt="" className="carousalImages" sizes="contain" />
      </div>
      <div className="carousalDiv">
        <img src={IMAGE2} alt="" className="carousalImages" />
      </div>
      <div className="carousalDiv">
        <img src={IMAGE3} alt="" className="carousalImages" />
      </div>
      <div className="carousalDiv">
        <img src={IMAGE4} alt="" className="carousalImages" />
      </div>
    </Carousel>
  );
};

export default Slider;
