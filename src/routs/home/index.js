import React, { useEffect, useState } from "react";
import HeroBanner from "./herobanner";
import Discover from "./discover";
import Gallery from "./gallery";
import Reviews from "./reviews";

export default function Home({ images }) {
  // console.log("home****",images);

  return (
    <div>
      <HeroBanner images={images} />
      <Discover images={images} />
      <Gallery images={images} />
      <Reviews />
    </div>
  );
}
