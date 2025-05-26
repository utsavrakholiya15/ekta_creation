import React from "react";
import "./reviews.scss";
import Marquee from "react-fast-marquee";
const Star = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3179 9.45362L17.0313 13.6281L18.0436 19.5241C18.0652 19.6506 18.0511 19.7805 18.0027 19.8993C17.9543 20.0182 17.8736 20.1211 17.7697 20.1965C17.6658 20.2719 17.5429 20.3167 17.4148 20.3259C17.2868 20.3352 17.1587 20.3084 17.045 20.2487L11.7448 17.4651L6.44522 20.2481C6.33157 20.3078 6.20347 20.3345 6.07541 20.3253C5.94734 20.316 5.82442 20.2712 5.72053 20.1958C5.61665 20.1204 5.53595 20.0175 5.48756 19.8987C5.43916 19.7798 5.42501 19.6499 5.44669 19.5234L6.45898 13.6274L2.17171 9.45362C2.07969 9.36405 2.0146 9.25053 1.98382 9.12592C1.95304 9.0013 1.95779 8.87057 1.99753 8.74851C2.03728 8.62645 2.11044 8.51795 2.20872 8.43528C2.307 8.35261 2.42648 8.29908 2.55364 8.28074L8.47806 7.42137L11.1275 2.05749C11.3594 1.58793 12.1302 1.58793 12.3621 2.05749L15.0115 7.42137L20.9359 8.28074C21.0628 8.29956 21.1819 8.35335 21.2799 8.43608C21.3778 8.51881 21.4507 8.62719 21.4904 8.74904C21.5301 8.87089 21.5349 9.00139 21.5045 9.12585C21.474 9.25032 21.4094 9.36383 21.3179 9.45362Z"
        fill="#F7A011"
      ></path>
    </svg>
  );
};
export default function Reviews() {
  return (
    <div className="reviews container-45">
      <div className="reviews-title">
        <h3>Reviews</h3>
      </div>
      <div>
        <Marquee pauseOnHover={true} speed={30} autoFill={true}>
          <div className="reviews-item">
            <div className="reviews-item-text">
              <p>
                The saree exceeded my expectations! The fabric, color, and
                finish were all perfect. I felt confident and elegant wearing
                it.
              </p>
            </div>
            <div className="reviews-item-bottom">
              <div className="reviews-item-profile">
                <span>Aarohi Mehta</span>
              </div>
              <div className="reviews-item-starts">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>{" "}
          <div className="reviews-item">
            <div className="reviews-item-text">
              <p>
                Absolutely beautiful! The quality is amazing and it looked
                exactly like the pictures. I got so many compliments!{" "}
              </p>
            </div>
            <div className="reviews-item-bottom">
              <div className="reviews-item-profile">
                <span>Sana Roy</span>
              </div>
              <div className="reviews-item-starts">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>{" "}
          <div className="reviews-item">
            <div className="reviews-item-text">
              <p>
                This saree is a true masterpiece. It arrived on time,
                well-packed, and looked stunning when I wore it. Totally worth
                it!{" "}
              </p>
            </div>
            <div className="reviews-item-bottom">
              <div className="reviews-item-profile">
                <span>Ishita Nair</span>
              </div>
              <div className="reviews-item-starts">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>{" "}
          <div className="reviews-item">
            <div className="reviews-item-text">
              <p>
                Loved every bit of it—from the texture to the design. It felt so
                special wearing something crafted with such care.{" "}
              </p>
            </div>
            <div className="reviews-item-bottom">
              <div className="reviews-item-profile">
                <span>Neha Bhattacharya</span>
              </div>
              <div className="reviews-item-starts">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
          <div className="reviews-item">
            <div className="reviews-item-text">
              <p>
                Beautifully made and so elegant. I wore it for a family function
                and it made me feel graceful and stylish throughout the day.
              </p>
            </div>
            <div className="reviews-item-bottom">
              <div className="reviews-item-profile">
                <span>Radhika Kapoor</span>
              </div>
              <div className="reviews-item-starts">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
