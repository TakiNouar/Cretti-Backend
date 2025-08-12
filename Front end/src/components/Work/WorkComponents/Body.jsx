import { memo } from "react";
import Container from "../../container";
import SuggestionCard from "./suggestionCard";

// Sanitize text to prevent XSS - moved outside component for performance
const sanitizeText = (text) => {
  if (typeof text !== 'string') return '';
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/&/g, '&amp;');
};

function Body(props) {
  return (
    <Container className="">
      <section
        className="bg-primary text-secondary"
        aria-labelledby="about-heading"
      >
        <div className="flex flex-col items-center lg:h-16 lg:gap-32 xl:gap-45 lg:flex-row justify-center gap-6 sm:gap-7">
          <div className="">
            {/* text here */}
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold">
              {sanitizeText(props.title || '')}
            </h2>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center align-center justify-center py-12 sm:py-16 gap-8 sm:gap-12">
        <img
          src={props.img}
          alt={`${sanitizeText(props.title || 'Project')} header image`}
          className="w-full max-w-4xl h-64 object-cover rounded-lg"
        />

        <div className="flex flex-col items-start gap-6 sm:gap-8 max-w-3xl text-left px-4">
          <div>
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">
              {sanitizeText(props.about || '')}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
            <p className="text-gray-600 leading-relaxed">
              {sanitizeText(props.clients || '')}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Results</h2>
            <p className="text-gray-600 leading-relaxed">
              {sanitizeText(props.res || '')}
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">More Projects</h2>
          <SuggestionCard currentProjectId={props.currentProjectId} />
        </div>
      </div>
    </Container>
  );
}

export default memo(Body);
