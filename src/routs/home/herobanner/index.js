import React from "react";
import "./herobanner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronRight } from "react-icons/fi";

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
export default function HeroBanner({ images }) {
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
  // console.log("hb****",images);

  return (
    <div className="hb">
      <div className="hb-sliders">
        <Slider {...settings}>
          <div className="hb-img">
            <img
              loading="lazy"
              className="img-full"
              // src={heroImg1}
              src={images.hero1}
              alt=""
            />
            <div className="hb-img-blur"></div>
            <div className="hb-img-data-first">
              <h4>ETHICAL AND BEAUTIFUL COLLECTION</h4>
              <p>
                a saree is not just a garment, it's a language of grace,
                elegance, and timeless tradition
              </p>
              <button onClick={()=>{navigate("/collection")}}>EXPLORE</button>
            </div>
          </div>
          <div className="hb-img">
            <img
              loading="lazy"
              className="img-full"
              // src={heroImg2}
              src={images.hero2}
              alt=""
            />
            <div className="hb-img-blur"></div>
            <div className="hb-data-second-parent">
              <div className="hb-data-second">
                <h4>PARTY WEAR COLLECTION</h4>
                <div className="hb-data-second-logo">
                  <h2>
                    BY EKTA <span>CREATION</span>
                  </h2>
                </div>
                <button onClick={()=>{navigate("/collection")}}>SHOP NOW</button>
              </div>
            </div>
          </div>

          <div className="hb-img">
            <img
              loading="lazy"
              className="img-full"
              // src={heroImg3}
              src={images.hero3}
              alt=""
            />
            <div className="hb-img-blur"></div>
            <div className="hb-img-data-third">
              <h4>SAREES</h4>
              <p>
              a saree is elegance, tradition, and pride — woven together in six yards of timeless beauty.
              </p>
              <button onClick={()=>{navigate("/collection")}}>EXPLORE</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
