import { useState, memo, useTransition, useMemo } from "react";
import { Link } from "react-router-dom";
import CrettiImage from "../assets/Cretti.png";
import Container from "../components/container";
import ScrollFadeIn from "./ScrollAnimate";
import OptimizedImage from "../components/ui/OptimizedImage";
import { calculateSlideTransform } from "../constants/slideConstants";

function WorkPreview() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [, startTransition] = useTransition();

  const handleSlideChange = (index) => {
    startTransition(() => {
      setActiveSlide(index);
    });
  };

  const slides = useMemo(
    () => [
      { title: "FAMILY Style", content: "Design" },
      { title: "Animation Demo", content: "Animations" },
      { title: "Team Work", content: "Collaborate" },
    ],
    []
  );

  // Create infinite loop by adding last slide at beginning and first slide at end
  const infiniteSlides = useMemo(
    () => [slides[slides.length - 1], ...slides, slides[0]],
    [slides]
  );

  return (
    <section className="bg-primary text-secondary py-10">
      <div className="mx-0">
        {/* Header */}
        <Container>
          <ScrollFadeIn className="">
            <header className="mb-10 flex items-center animate-fade-right-1">
              <span className="h-px flex-1 bg-secondary"></span>
              <Link
                to="/work"
                className="text-md md:text-2xl shrink-0 ps-4 text-secondary ">
                Explore our work →
              </Link>
            </header>
          </ScrollFadeIn>
        </Container>

        {/* Desktop Slider */}
        <div className="hidden lg:block ">
          <div
            className="overflow-hidden w-full h-130 relative "
            role="region"
            aria-label="Work preview carousel"
            aria-live="polite">
            <div
              className="flex transition-transform duration-300 ease-out h-full gap-2 "
              style={{
                transform: calculateSlideTransform(activeSlide),
              }}>
              {infiniteSlides.map((slide, index) => (
                <OptimizedImage
                  key={index}
                  id={`desktop-slide-${index}`}
                  src={CrettiImage}
                  alt={slide.title}
                  role="tabpanel"
                  aria-labelledby={`desktop-tab-${index}`}
                  className={`h-full object-cover rounded-lg transition-transform  duration-300 ${
                    index === activeSlide + 1
                      ? "scale-100 "
                      : "scale-80 shadow-black/50 shadow-lg"
                  }`}
                  style={{ width: "60%", flexShrink: 0 }}
                  width={600}
                  height={440}
                  lazy={true}
                  placeholder={
                    <div
                      className="h-full bg-gray-200 animate-pulse rounded-lg flex items-center justify-center"
                      style={{ width: "60%", flexShrink: 0 }}>
                      <span className="text-gray-400">Loading...</span>
                    </div>
                  }
                />
              ))}
            </div>
          </div>

          {/* Navigation tabs */}
          <div
            className="flex justify-center mt-6 space-x-6 text-sm"
            role="tablist"
            aria-label="Work preview navigation">
            {slides.map((slide, index) => (
              <button
                key={index}
                id={`desktop-tab-${index}`}
                role="tab"
                aria-selected={activeSlide === index}
                aria-controls={`desktop-slide-${index}`}
                aria-label={`Go to ${slide.content} slide`}
                onClick={() => handleSlideChange(index)}
                className={`transition-colors pb-1 ${
                  activeSlide === index
                    ? "text-secondary font-medium border-b-2 border-secondary"
                    : "text-gray-400 hover:text-secondary"
                }`}>
                {slide.content}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Slider */}
        <Container>
          <div className="lg:hidden">
            <div
              className="overflow-hidden w-full h-64 rounded-lg"
              role="region"
              aria-label="Work preview carousel"
              aria-live="polite">
              <div
                className="flex transition-transform duration-300 ease-in-out h-full"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                  <OptimizedImage
                    key={index}
                    id={`slide-panel-${index}`}
                    src={CrettiImage}
                    alt={slide.title}
                    role="tabpanel"
                    aria-labelledby={`tab-${index}`}
                    aria-hidden={activeSlide !== index}
                    className="w-full h-full flex-shrink-0 object-cover"
                    width={400}
                    height={256}
                    lazy={true}
                    placeholder={
                      <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                        <span className="text-gray-400">Loading...</span>
                      </div>
                    }
                  />
                ))}
              </div>
            </div>

            {/* Navigation tabs */}
            <div
              className="flex justify-center mt-6 space-x-6 text-sm"
              role="tablist"
              aria-label="Work preview navigation">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  id={`tab-${index}`}
                  role="tab"
                  aria-selected={activeSlide === index}
                  aria-controls={`slide-panel-${index}`}
                  aria-label={`Go to ${slide.content} slide`}
                  onClick={() => handleSlideChange(index)}
                  className={`transition-colors pb-1 ${
                    activeSlide === index
                      ? "text-secondary font-medium border-b-2 border-secondary"
                      : "text-gray-400 hover:text-secondary"
                  }`}>
                  {slide.content}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default memo(WorkPreview);
