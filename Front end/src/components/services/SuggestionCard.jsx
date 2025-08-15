// SuggestionCard.jsx
import { memo, useMemo } from "react";
import { services } from "./dataServices";
import { ServiceSection } from "./ServiceSection";

function SuggestionCard({ currentServiceSlug }) {
  console.log(currentServiceSlug);
  const randomservices = useMemo(() => {
    // Exclude the current service
    const filteredServices = services.filter(
      (service) => service.slug !== currentServiceSlug
    );

    if (filteredServices.length === 0) return [];

    // Fisher–Yates shuffle for unbiased randomness
    const shuffled = [...filteredServices];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Return the first two
    return shuffled.slice(0, 2);
  }, [currentServiceSlug, services]);

  return (
    <div>
      {randomservices.map((service) => (
        <ServiceSection
          id={service.id}
          title={service.title}
          description={service.description}
          imageSrc={service.image}
          slug={service.slug}
        />
      ))}
    </div>
  );
}

export default memo(SuggestionCard);
