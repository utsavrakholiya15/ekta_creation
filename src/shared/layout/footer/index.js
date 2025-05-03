import React from "react";
import "./footer.scss";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import fLogo from "../../../assets/LOGOs/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919274462615"; // replace with your number
    const message = encodeURIComponent(
      "Hi, I am interested in your services Ekta Creation👋!"
    ); // customize your message
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-logo">
            <div className="footer-logo-img">
              <img className="img-full" src={fLogo} alt="" />
            </div>
            <div className="footer-logo-name">
              <p>
                EKTA <span>CREATION</span>
              </p>
            </div>
          </div>
          <div className="footer-item footer-links">
            <h4>LINKS</h4>
            <p
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>
            <p
              onClick={() => {
                navigate("/collection");
              }}
            >
              Collection
            </p>
            <p
              onClick={() => {
                navigate("/about");
              }}
            >
              About Us
            </p>
          </div>

          <div className="footer-item footer-products">
            <h4>OUR PRODUCT</h4>
            <p
              onClick={() => {
                navigate("/collection?category=lycra");
              }}
            >
              Lycra
            </p>
            <p
              onClick={() => {
                navigate("/collection?category=rimzim");
              }}
            >
              Rimzim
            </p>
            <p
              onClick={() => {
                navigate("/collection?category=chinon");
              }}
            >
              Chinon
            </p>
            <p
              onClick={() => {
                navigate("/collection?category=satin");
              }}
            >
              Satin
            </p>
            <p
              onClick={() => {
                navigate("/collection?category=georgette");
              }}
            >
              Georgatte
            </p>
          </div>
          <div className="footer-item">
            <h4>CONTACT US</h4>
            <p className="footer-item-links">
              <a href="tel:+919274462615">
                <span>
                  <MdOutlinePhone />
                </span>
                +918849772129
              </a>
            </p>
            <p className="footer-item-links">
              <a href="ektaa.creation01@gmail.com">
                <span>
                  <MdOutlineMail />
                </span>
                ektaa.creation01@gmail.com
              </a>
            </p>
            <p className="footer-item-links">
              <span>
                <FaWhatsapp />
              </span>
              +918849772129
            </p>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          <div
            className="whatsapp-icon-wrapper"
            onClick={handleWhatsAppClick}
            style={{ cursor: "pointer" }}
          >
            <div className="whatsapp-icon">
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
