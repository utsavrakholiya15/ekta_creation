import React from "react";
import "./footer.scss";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import fLogo from "../../../assets/LOGOs/logo.jpg";

export default function Footer() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919274462615"; // replace with your number
    const message = encodeURIComponent(
      "Hi, I am interested in your services Ekta Creation👋!"
    ); // customize your message
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <footer className="container">
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
          <p>Home</p>
          <p>Collection</p>
          <p>About Us</p>
        </div>

        <div className="footer-item footer-products">
          <h4>OUR PRODUCT</h4>
          <p>Lycra</p>
          <p>Rimzim</p>
          <p>Chinon</p>
          <p>Satin</p>
          <p>Georgatte</p>
        </div>
        <div className="footer-item">
          <h4>CONTACT US</h4>
          <p href="tel:+919274462615">
            <span>
              <MdOutlinePhone />
            </span>
            +918849772129
          </p>
          <p>
            <span>
              <MdOutlineMail />
            </span>
            ektacreation@gmail.com
          </p>
          <p>
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
    </footer>
  );
}
