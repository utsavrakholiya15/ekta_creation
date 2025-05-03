import React, { useEffect } from "react";
import "./about.scss";
import { Loader } from "../common";
export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="about container-big">
      <div className="about-title">
        <h2>About Us</h2>
      </div>
      <div className="about-data">
        <p>
          At Ekta Creation, we believe that a saree is more than just
          traditional attire—it's a symbol of grace, heritage, and identity. Our
          goal is to bring timeless elegance into the modern woman’s wardrobe by
          curating a beautiful selection of sarees that reflect India’s rich
          textile traditions. Each saree in our collection is handpicked or
          handcrafted, ensuring authenticity and excellence in every thread. We
          strive to make traditional fashion accessible, stylish, and
          comfortable, blending classic artistry with modern preferences.
          Whether you're dressing up for a celebration or simply cherishing
          daily elegance, our sarees are designed to make you feel confident and
          beautiful.
        </p>

        <p>
          Our sarees come from various regions across India, showcasing the
          unique craftsmanship of skilled weavers and artisans. From the
          intricate patterns of Banarasi silk to the subtle charm of soft
          cottons, we offer something for every mood, season, and occasion. Our
          artisans pour generations of knowledge and love into every weave, dye,
          and design. By choosing our sarees, you’re not only embracing beauty
          and tradition but also supporting the livelihoods of talented
          craftspeople who keep these art forms alive.
        </p>

        <p>
          We take great pride in offering sarees that are both elegant and
          versatile. Whether you prefer minimalistic pastels or bold, festive
          hues, our collection features a wide range of colors, patterns, and
          styles. We understand that every woman has her own unique sense of
          style, and our goal is to provide sarees that reflect your personality
          while maintaining the integrity of traditional design. Our team is
          constantly exploring new trends and timeless classics to ensure our
          collection evolves with your tastes.
        </p>

        <p>
          At [Your Brand Name], sustainability is not just a trend—it’s a
          commitment. We work with artisans and suppliers who follow ethical,
          eco-friendly practices to ensure that every product we offer is made
          with respect for the environment and the people behind it. Our
          production process supports slow fashion, fair wages, and responsible
          sourcing, allowing you to wear our sarees with pride and purpose. We
          believe in fashion that feels good, looks beautiful, and does good for
          the planet.
        </p>

        <p>
          We also believe in making your shopping experience as seamless and
          enjoyable as possible. From an easy-to-navigate website to responsive
          customer support, our team is dedicated to helping you find the
          perfect saree for any event. Detailed product descriptions,
          high-quality images, and size/fabric guides are all designed to make
          online shopping worry-free. If you ever need assistance, we’re just a
          message away—ready to guide you every step of the way.
        </p>

        <p>
          Whether you're a bride searching for your dream wedding saree or
          someone rediscovering the joy of draping one, [Your Brand Name] is
          here to walk with you on your saree journey. Our collection includes
          sarees for every generation—elegant enough for your mother, trendy
          enough for your daughter, and timeless enough for you. It's not just
          about wearing a saree, but experiencing a story, a tradition, and a
          connection that lasts a lifetime.
        </p>

        <p>
          Thank you for visiting [Your Brand Name]. We are more than just an
          e-commerce store—we are a community that celebrates Indian
          craftsmanship, feminine elegance, and the power of tradition. We
          invite you to browse our collection, support handcrafted art, and find
          your next favorite saree. Let’s keep the drape of tradition alive,
          together.
        </p>
      </div>
    </div>
  );
}
