import React from "react";
import "./footer.scss";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918849772129"; // replace with your number
    const message = encodeURIComponent(
      "Hi, I am interested in your services Alok Rakholiya!"
    ); // customize your message
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-left">
          <h4>CONTACT US</h4>
          <p>
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
