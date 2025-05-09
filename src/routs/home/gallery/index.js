import React from "react";
import "./gallery.scss";
import { useNavigate } from "react-router-dom";
export default function Gallery({ images }) {
  const navigate = useNavigate();
  // console.log(images);

  return (
    <div className="gal container-45">
      <div className="gal-title">
        <h3
          onClick={() => {
            navigate("/about");
          }}
        >
          About Us
        </h3>
      </div>
      <div className="gal-item">
        <div className="gal-img">
          <img
            className="img-full"
            // src={gal1}
            src={images.gallery1}
            alt=""
          />
        </div>
        <div className="gal-data">
          <h4>Woven Stories of Indian Elegance</h4>
          <p>
            “Our sarees come from various regions across India, showcasing the unique craftsmanship of skilled weavers and artisans. From the intricate patterns of Banarasi silk to the subtle charm of soft lycra, we offer something for every mood, season, and occasion. Our artisans pour generations of knowledge and love into every weave, dye, and design. By choosing our sarees, you’re not only embracing beauty and tradition but also supporting the livelihoods of talented craftspeople who keep these art forms alive.
            ”
          </p>
        </div>
      </div>
      <div className="gal-item">
        <div className="gal-data item1">
          <h4>Grace, Style, Tradition, Tailored for You</h4>
          <p>
            “We take great pride in offering sarees that are both elegant and versatile. Whether you prefer minimalistic pastels or bold, festive hues, our collection features a wide range of colors, patterns, and styles. We understand that every woman has her own unique sense of style, and our goal is to provide sarees that reflect your personality while maintaining the integrity of traditional design. Our team is constantly exploring new trends and timeless classics to ensure our collection evolves with your tastes”
          </p>
        </div>
        <div className="gal-img item2">
          <img
            className="img-full"
            // src={gal2}
            src={images.gallery2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
