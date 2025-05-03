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
export default function Buy() {
  const [queryParam] = useSearchParams();
  const id = queryParam.get("id");
  //   const item = itemsCollection[id];
  //     useEffect(()=>{
  //         window.scrollTo(0, 0);
  //     },[])
  const [item, setitem] = useState({});

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/utsavrakholiya15/4d4dae2fe9d4cd0dae03bf56853770b3/raw/caf3aaf190f624546d65f70bda9fd0bdfd875fc6/ec.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setitem(found);
      })
      .catch((err) => console.error("Error fetching data:", err));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  //   setitem(itemTemp);
  // console.log("***", item);
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
                <img className="img-full" src={item.image3} alt=""/>
              </div>
              <div className="buy-img">
                <img className="img-full" src={item.image4} alt=""/>
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
              <p>Name : Value</p>
              <p>Saree Fabric : Value</p>
              <p>Blouse Fabric : Value</p>
              <p>Pallu : Value</p>
              <p>Occasion : Value</p>
              <p>Pattern : Value</p>
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
