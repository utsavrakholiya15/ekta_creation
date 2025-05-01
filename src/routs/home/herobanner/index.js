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
    // autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    waitForAnimate: false,
  };
  return (
    <div className="hb ">
      <div className="hb-sliders">
        <Slider {...settings}>
          <div className="hb-img">
            <img loading="lazy" className="img-full" src={heroImg1} alt=""/>
            <div className="hb-img-blur"></div>
            <div className="hb-img-data">
              <h4>ETHICAL AND BEAUTIFUL COLLECTION</h4>
              <p>a saree is not just a garment, it's a language of grace, elegance, and timeless tradition</p>
              <button>EXPLORE</button>
            </div>
          </div>
          <div className="hb-img">
            <img loading="lazy" className="img-full" src={heroImg1} alt=""/>
          </div>
          <div className="hb-img">
            <img loading="lazy" className="img-full" src={heroImg1} alt=""/>
          </div>
          <div className="hb-img">
            <img loading="lazy" className="img-full" src={heroImg1} alt=""/>
          </div>
        </Slider>
      </div>
    </div>
  );
}
