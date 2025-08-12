import { memo } from "react";
import { Link } from "react-router-dom";

const ServiceSection = memo(({ title, description, imageSrc, isReversed = false }) => {
  const contentClasses = isReversed
    ? "mr-4 sm:mr-6 lg:mr-8 py-4 lg:p-4 w-full lg:w-1/2"
    : "lg:ml-4 lg:ml-6 py-4 lg:p-4 w-full lg:w-1/2";
  const sectionClasses = isReversed
    ? "flex flex-col lg:flex-row-reverse group mb-14"
    : "flex flex-col lg:flex-row group";

  return (
    <section className={`${sectionClasses} mb-10 sm:mb-14`}>
      <img
        alt="Service feature illustration"
        src={imageSrc}
        className="h-48 sm:h-64 lg:h-80 w-full lg:w-1/2 rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
      />
      <div className={contentClasses}>
        <Link to="/services">
          <h3 className="text-lg font-medium mb-4">
            {title} - Professional Service
          </h3>
          <h2 className="text-2xl lg:4xl font-bold mb-8">{title}</h2>
          <p className="mt-2 mb-7 lg:mb-9 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <button className="Links" aria-label="Learn more about this service">
            See the service →
          </button>
        </Link>
      </div>
    </section>
  );
});

ServiceSection.displayName = 'ServiceSection';

export default ServiceSection;