import React from "react";
import "./herobanner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronRight } from "react-icons/fi";

import heroImg1 from "../../../assets/IMAGEs/heroImg1.png";
import heroImg2 from "../../../assets/IMAGEs/hero2.jpg";
import heroImg3 from "../../../assets/IMAGEs/hero3.jpg";
import heroImg4 from "../../../assets/IMAGEs/hero4.jpg";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
    <div className="hb">
      <div className="hb-sliders">
        <Slider {...settings}>
          <div className="hb-img">
            <img loading="lazy" className="img-full" src={heroImg1} alt="" />
            <div className="hb-img-blur"></div>
            <div className="hb-img-data">
              <h4>ETHICAL AND BEAUTIFUL COLLECTION</h4>
              <p>
                a saree is not just a garment, it's a language of grace,
                elegance, and timeless tradition
              </p>
              <button>EXPLORE</button>
            </div>
          </div>
          <div className="hb-img">
            <img loading="lazy" className="img-full" src={heroImg2} alt="" />
          </div>
          <div className="hb-img">
            <img loading="lazy" className="img-full" src={heroImg3} alt="" />
          </div>
          <div className="hb-img">
            <img loading="lazy" className="img-full" src={heroImg4} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
