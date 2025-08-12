import { memo } from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

function Hero() {
  return (
    <Container className="mt-12 sm:mt-16 lg:mt-20">
      <div className="mb-20 sm:mb-28 lg:mb-35 bg-primary max-w-7xl items-center">
        {/* First part of the hero */}
        <div>
          <h1 className="heading-xl mb-16 sm:mb-20 lg:mb-26 animate-fade-up-1">
            Designing digital product with emphasis on{" "}
            <span className="text-text_three">visual design</span>
          </h1>
        </div>
        {/* Second Part of the hero */}
        <div className="flex gap-6 sm:gap-7 text-Links text-lg max-lg:flex-col lg:flex lg:justify-between lg:items-center animate-fade-up-2">
          <Link
            to="/contact"
            aria-label="Contact us to discuss your project "
            className="w-40 Links ">
            Let's Talk →
          </Link>

          <p className="max-w-90 ">
            A multidisciplinary designer harnessing the power of design to
            achieve online goals.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default memo(Hero);
