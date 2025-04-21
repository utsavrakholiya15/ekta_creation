import React from "react";
import "./herobanner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronRight } from "react-icons/fi";

import hero1 from "../../../assets/IMAGEs/hero1.webp";
import hero2 from "../../../assets/IMAGEs/hero2.jpg";
import hero3 from "../../../assets/IMAGEs/hero3.webp";
import heroImg1 from "../../../assets/IMAGEs/heroImg1.png";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="right-arrow" onClick={onClick}>
      <FiChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="left-arrow" onClick={onClick}>
      <FiChevronRight />
    </div>
  );
}
export default function HeroBanner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    waitForAnimate: false,
  };
  return (
    <div className="hb ">
      <div className="hb-sliders">
        <Slider {...settings}>
          <div className="hb-img">
            <img className="img-full" src={heroImg1} />
          </div>
          <div className="hb-img">
            <img className="img-full" src={hero1} />
          </div>
          <div className="hb-img">
            <img className="img-full" src={hero3} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
