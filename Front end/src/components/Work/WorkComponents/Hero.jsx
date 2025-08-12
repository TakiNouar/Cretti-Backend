import { memo } from "react";
import Container from "../../container";

function Hero() {
  return (
    <Container>
      <section
        className="bg-primary text-secondary"
        aria-labelledby="about-heading"
      >
        <div className="flex flex-col items-center lg:h-32 lg:gap-32 xl:gap-45 lg:flex-row justify-center gap-6 sm:gap-7">
          <div>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10"
            >
              Bringing your brand to life in the{" "}
              <span className="text-text_three">visual design</span>
            </h2>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default memo(Hero);
