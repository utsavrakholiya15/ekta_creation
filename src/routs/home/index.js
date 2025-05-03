import React, { useEffect } from "react";
import HeroBanner from "./herobanner";
import Discover from "./discover";
import Gallery from "./gallery";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <HeroBanner />
      <Discover />
      <Gallery />
    </div>
  );
}
