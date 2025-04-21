import React, { useEffect } from "react";
import "./buy.scss";
import { useParams, useSearchParams } from "react-router-dom";
import { itemsCollection } from "../../../utilities/data/items";
import { FaWhatsapp } from "react-icons/fa";
export default function Buy() {
  const [queryParam] = useSearchParams();
  const id = queryParam.get("id");
  const item = itemsCollection[id];
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    <div className="buy container-big">
      <div className="buy-grid">
        <div className="buy-img">
          <img className="img-full" src={item.img} />
        </div>
        <div className="buy-details">
          <div className="buy-details-name">
            <p>{item.name}</p>
          </div>
          <div className="buy-details-price">
            <p>Rs.{item.price}</p>
            <span>ax included. Shipping calculated at checkout.</span>
          </div>
          <div className="buy-details-size">
            <p>SIZE</p>
            <div className="size-div">REGULAR</div>
          </div>
          <div className="buy-details-buy">
            <button><FaWhatsapp className="button-wp" />BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
