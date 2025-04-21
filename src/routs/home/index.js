import React from "react";
import HeroBanner from "./herobanner";
import Discover from "./discover";
import Gallery from "./gallery";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Discover />
      <Gallery />
    </div>
  );
}
