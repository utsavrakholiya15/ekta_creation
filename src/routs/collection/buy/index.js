import React, { useEffect, useState } from "react";
import "./buy.scss";
import { useParams, useSearchParams } from "react-router-dom";
// import { itemsCollection } from "../../../utilities/data/items";
import { FaWhatsapp } from "react-icons/fa";
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
    fetch("https://api.jsonbin.io/v3/b/6807652b8561e97a5004ea22/latest")
      .then((res) => res.json())
      .then((data) => {
        const found = data.record.find((item) => item.id === id);
        setitem(found);
      })
      .catch((err) => console.error("Error fetching data:", err));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  //   setitem(itemTemp);
  //   console.log("***", item.id);
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
    <div className="buy container-big">
      {item ? (
        <div className="buy-grid container">
          <div className="buy-sliders">
            {/* <img className="img-full" src={item.image} /> */}
            <Slider className="silder" {...settings}>
              <div className="buy-img">
                <img className="img-full" src={item.image} />
              </div>
              <div className="buy-img">
                <img className="img-full" src={item.image1} />
              </div>
              <div className="buy-img">
                <img className="img-full" src={item.image2} />
              </div>
              <div className="buy-img">
                <img className="img-full" src={item.image3} />
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
              <div className="size-div">REGULAR</div>
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
                  `Image: ${item.image}\n\n\n\nHi, I'm interested in this saree:\n\nName: ${item.name}\nPrice: Rs.${item.price}\n`
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
          </div>
        </div>
      ) : (
        <div>under maintanance</div>
      )}
    </div>
  );
}
