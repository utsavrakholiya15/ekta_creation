import React from "react";
import "./discover.scss";
import { useNavigate } from "react-router-dom";
export default function Discover({ images }) {
  const navigate = useNavigate();
  // console.log(images);

  return (
    <div className="dis container-45">
      <div className="dis-title">
        <p>"Grace in six yards, strength in every fold"</p>
        <p>Indian Traditions</p>
      </div>
      <div className="dis-grid">
        <div className="dis-item">
          <img
            className="img-full"
            // src={dis1}
            src={images.discover1}
            alt=""
          />
          <div className="black-blur"></div>
          <div className="dis-item-data">
            <p>Drape Your Story</p>
            <h4>Celebrate Grace Every Day</h4>
            <button  onClick={()=>{navigate("/collection")}}>DISCOVER</button>
          </div>
        </div>
        <div className="dis-item">
          <img
            className="img-full"
            // src={dis2}
            src={images.discover2}
            alt=""
          />
          <div className="black-blur"></div>
          <div className="dis-item-data">
            <p>Style Meets Heritage</p>
            <h4>Timeless Sarees, Modern You</h4>
            <button  onClick={()=>{navigate("/collection")}}>DISCOVER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
