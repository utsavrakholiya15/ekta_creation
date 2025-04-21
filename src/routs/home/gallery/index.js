import React from "react";
import "./gallery.scss";
import gal1 from "../../../assets/IMAGEs/gallery1.jpg";
export default function Gallery() {
  return (
    <div className="gal container-45">
      <div className="gal-item">
        <div className="gal-img">
          <img className="img-full" src={gal1} />
        </div>
        <div className="gal-data">
            <span>RAHUL MISHRA</span>
            <h4>IN AN INTERVIEW WITH VOGUE</h4>
            <p>“Today, if I feel there is no dream too big to dream, it is because of the knowledge that our craftsmen can bring it to life. It is the artisan that allows me the confidence to see the world as I do, to dream, to create”</p>
        </div>
      </div>
      <div className="gal-item">
        <div className="gal-data item1">
            <span>RAHUL MISHRA</span>
            <h4>IN AN INTERVIEW WITH VOGUE</h4>
            <p>“Today, if I feel there is no dream too big to dream, it is because of the knowledge that our craftsmen can bring it to life. It is the artisan that allows me the confidence to see the world as I do, to dream, to create”</p>
        </div>
        <div className="gal-img item2">
          <img className="img-full" src={gal1} />
        </div>
      </div>
    </div>
  );
}
