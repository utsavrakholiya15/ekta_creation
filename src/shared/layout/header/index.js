import React, { useState } from "react";
import "./header.scss";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { LiaBarsSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
  const navigate = useNavigate();
  const [bar, setbar] = useState(false);

  const phone = "+918849772129";
  const message = "Hello,Ekta Creation👋";
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <header className="container">
      <div className="header-top">
        <div onClick={() => setbar((pre) => !pre)} className="header-bar">
          <LiaBarsSolid className="header-bar-svg" />
        </div>
        {bar && (
          <div className="bar-menu-parent">
            <div className="bar-menu">
              <p
                onClick={() => {
                  navigate("/");
                }}
              >
                HOME
              </p>
              <p
                onClick={() => {
                  navigate("/collection");
                }}
              >
                COLLECTION
              </p>
              <p>ABOUT US</p>
              <div className="bar-menu-icons">
                <a href="tel:+918849772129">
                  <MdOutlinePhone className="phone header-icon" />
                </a>
                <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="whatsapp header-icon" />
                </a>
                <a
                  href="https://www.instagram.com/ektaa.creation?igsh=d3N1YXptbGU3b25j"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiInstagram className="insta header-icon" />
                </a>
                <div
                  onClick={() => {
                    setbar(false);
                  }}
                  className="close-bar-menu"
                >
                  <IoCloseSharp />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex-left">
          <div className="header-title">
            <h2>
              EKTA <span>CREATION</span>
            </h2>
          </div>
          <div className="header-icons">
            <a href="tel:+918849772129">
              <MdOutlinePhone className="phone header-icon" />
            </a>
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="whatsapp header-icon" />
            </a>
            <a
              href="https://www.instagram.com/ektaa.creation?igsh=d3N1YXptbGU3b25j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiInstagram className="insta header-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="header-nav">
        <nav>
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </p>
          <p
            onClick={() => {
              navigate("/collection");
            }}
          >
            COLLECTION
          </p>
          <p>ABOUT US</p>
        </nav>
      </div>
    </header>
  );
}
