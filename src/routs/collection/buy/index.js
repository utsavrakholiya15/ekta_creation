import React, { useEffect, useState } from "react";
import "./buy.scss";
import { useParams, useSearchParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiChevronRight } from "react-icons/fi";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="right-arrow-buy" onClick={onClick}>
      <FiChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="left-arrow-buy" onClick={onClick}>
      <FiChevronRight />
    </div>
  );
}
export default function Buy({ collection }) {
  const [queryParam] = useSearchParams();
  const id = queryParam.get("id");

  const [item, setitem] = useState({});

  useEffect(() => {
    const found = collection.find((item) => item.id === id);
    setitem(found);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  console.log("***", item);
  // console.log("this****",collection);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container-big buy">
      {item ? (
        <div className="buy-grid container">
          <div className="buy-sliders">
            {/* <img className="img-full" src={item.image} /> */}
            <Slider className="slider" {...settings}>
              <div className="buy-img">
                <img className="img-full" src={item.image1} alt="" />
              </div>
              <div className="buy-img">
                <img className="img-full" src={item.image2} alt="" />
              </div>
              <div className="buy-img">
                <img className="img-full" src={item.image3} alt="" />
              </div>
              <div className="buy-img">
                <img className="img-full" src={item.image4} alt="" />
              </div>
            </Slider>
          </div>
          <div className="buy-details">
            <div className="buy-details-name">
              <p>{item.name}</p>
            </div>
            <div className="buy-details-price">
              <p>Rs.{item.price}</p>
              <span>Tax included. Shipping calculated at checkout.</span>
            </div>
            <div className="buy-details-size">
              <p>SIZE</p>
              <div className="size-div">FREE</div>
            </div>
            {/* <div className="buy-details-buy">
              <button>
                <FaWhatsapp className="button-wp" />
                BUY NOW
              </button>
            </div> */}
            <div className="buy-details-buy">
              <a
                href={`https://wa.me/+919274462615?text=${encodeURIComponent(
                  `Image: ${item.image1}\n\n\n\nHi, I'm interested in this saree:\n\nProduct: ${window.location.href}\n\nName: ${item.name}\nPrice: Rs.${item.price}\n`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FaWhatsapp className="button-wp" />
                  BUY NOW
                </button>
              </a>
            </div>
            <div className="buy-pDetails">
              <h3>Product Details</h3>
              <p>Name : {item.name}</p>
              <p>Saree Fabric : {item.saree_fabric}</p>
              <p>Blouse Fabric : {item.blouse}</p>
              <p>Pallu : {item.pallu}</p>
              <p>Occasion : {item.occassion}</p>
              <p>Pattern : {item.pattern}</p>
              <p>{"Net Quantity (N) : Single"}</p>
              <p>Sizes : Free Size</p>
            </div>
          </div>
        </div>
      ) : (
        <div>under maintanance</div>
      )}
    </div>
  );
}
