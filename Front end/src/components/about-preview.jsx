import { memo } from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

function AboutPreview() {
  return (
    <Container>
      <section
        className="bg-primary text-secondary py-10"
        aria-labelledby="about-heading">
        <div className="flex flex-col items-center lg:h-84 lg:gap-32 xl:gap-45 lg:flex-row justify-between gap-6 sm:gap-7">
          <div className="lg:w-1/2">
            <h2
              id="about-heading"
              className="text-4xl md:text-6xl font-bold mb-6">
              Design that sparks engagement and inspires action
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg sm:text-xl text-text_three mb-6">
              I'm a Product Designer living in Munich, and I focus on making
              digital experiences that are easy to use, enjoyable, and get the
              job done. I love tackling challenging problems and creating
              solutions that truly matter to people.
            </p>
            <Link
              to="/about"
              className="Links"
              aria-label="Learn more about me and my work">
              About Me
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default memo(AboutPreview);
