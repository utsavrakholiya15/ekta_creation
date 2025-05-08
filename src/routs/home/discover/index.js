import React from "react";
import "./discover.scss";
export default function Discover({ images }) {
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
            <p>SPRING SUMMER 2025</p>
            <h4>PARIS HAUTE COUTURE WEEK</h4>
            <button>DISCOVER</button>
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
            <p>SPRING SUMMER 2025</p>
            <h4>PARIS HAUTE COUTURE WEEK</h4>
            <button>DISCOVER</button>
          </div>
        </div>
      </div>
    </div>
  );
}
