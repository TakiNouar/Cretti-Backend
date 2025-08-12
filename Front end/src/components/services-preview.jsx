import { memo } from "react";
import { Link } from "react-router-dom";
import Container from "./container";
import OptimizedImage from "./ui/OptimizedImage";
import ScrollFadeIn from "./ScrollAnimate";
import { services } from "./services/dataServices";
import CrettiImage from "../assets/Cretti.png";

// Memoized service item renderer
const ServiceItemRenderer = memo(({ title, description, image }) => (
  <Link to="/services" className="space-y-4 block">
    <h3 className="text-xl font-semibold">{title}</h3>
    <OptimizedImage
      src={image}
      alt={`${title} service illustration`}
      className="rounded-lg object-cover w-full h-48 md:h-87"
      width={400}
      height={200}
    />
    <p className="text-gray-600 mb-10">{description}</p>
  </Link>
));

function ServicesPreview() {
  return (
    <>
      <section
        className="bg-footer text-primary  mt-10 py-10"
        aria-labelledby="services-heading"
        role="region">
        <div className="mx-6 sm:mx-10 lg:mx-20 xl:mx-30">
          {/* Header section with title and description */}
          <header className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 sm:gap-8 mb-12 sm:mb-16">
            <ScrollFadeIn>
              <div className="md:w-1/2">
                <span
                  className="text-sm text-text_one mb-4 block"
                  aria-label="Section category">
                  • Our Expertise
                </span>
                <h1
                  id="services-heading"
                  className="text-4xl lg:text-5xl font-bold leading-tight">
                  How we take your business to the next level
                </h1>
              </div>
            </ScrollFadeIn>
            <div className="md:w-1/2 md:text-right">
              <p className="text-text_one mb-6">
                We are a digital marketing agency with expertise, and we're on a
                mission to help you take the next step in your business.
              </p>
              <Link
                to="/services"
                className="lightLinks"
                aria-label="View all our services">
                See all services
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </header>

          {/* Desktop layout - image and expandable service list */}
          <div className="hidden lg:flex gap-16 xl:gap-20 mb-12 sm:mb-16">
            {/* Service showcase image */}
            <div className="w-1/3">
              <Link to="/services">
                <OptimizedImage
                  src={CrettiImage}
                  alt="Professional web design services showcase"
                  className="rounded-lg object-cover w-full h-115 shadow-primary/30 shadow-xl/5 hover:scale-[1.02] transition-transform duration-300 ease-out sticky top-16 max-h-[80vh]"
                  width={400}
                  height={440}
                />
              </Link>
            </div>

            {/* Expandable service details list */}
            <div
              className="w-2/3 space-y-6"
              role="list"
              aria-label="Service details">
              {services.map((service, index) => (
                <details
                  open={index === 0}
                  key={index}
                  className="bg-gradient-dark text-primary group smooth-details p-6 rounded-t-lg  brightness-70 hover:brightness-100  cursor-pointer transition-colors "
                  role="listitem">
                  <summary
                    className="flex justify-between items-center mb-4 text-xl font-semibold list-none "
                    aria-expanded="false"
                    aria-controls={`service-description-${index}`}>
                    {service.title}
                    <span
                      className="flex-center text-2xl rounded-sm bg-primary/50  text-secondary w-3 h-5 px-3 pb-1 group-open:rotate-45 group-open:bg-primary transition-transform"
                      aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p
                    id={`service-description-${index}`}
                    className="text-text_one group-open:animate-fade-up-2 mb-3"
                    role="region"
                    aria-label={`Description for ${service.title}`}>
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="font-bold group-open:animate-fade-up-2 block">
                    See service →
                  </Link>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile layout - simplified service cards */}
        <Container>
          <div
            className="lg:hidden"
            role="list"
            aria-label="Featured services for mobile">
            {services.slice(0, 3).map((service, index) => (
              <article key={service.id} role="listitem" className="mb-6">
                <ServiceItemRenderer
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default memo(ServicesPreview);
