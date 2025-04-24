import React from "react";
import "./about.scss";
import { Loader } from "../common";
export default function About() {
  return (
    <div className="about container">
      <Loader />
      {/* <span className="loader"></span> */}
    </div>
  );
}
