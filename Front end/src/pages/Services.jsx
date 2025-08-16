import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/services/hero";
import Footer from "../components/Footer";
import Container from "../components/container";
import { mainArticle, services } from "../components/services/dataServices";
import { Link } from "react-router-dom";
import { removeLoader } from "../Loader/RemoveLoader";
import { useEffect, memo, useMemo } from "react";

function Services() {
  useEffect(() => {
    removeLoader();
  }, []);

  // All services except the main one
  const otherServices = useMemo(
    () => services.filter((service) => service.id !== mainArticle.id),
    []
  );

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Web Design Services for Startups - Cretti</title>
        <meta
          name="description"
          content="Comprehensive web design services tailored for startups and small businesses. From MVP websites to full digital presence - we help you launch and grow online."
        />
        <meta
          name="keywords"
          content="startup web design services, small business web development, MVP website design, affordable web services, business website packages"
        />
        <link rel="canonical" href="https://cretti.com/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Web Design Services for Startups - Cretti"
        />
        <meta
          property="og:description"
          content="Comprehensive web design services tailored for startups and small businesses. From MVP websites to full digital presence."
        />
        <meta
          property="og:image"
          content="https://cretti.com/images/cretti-services-og.jpg"
        />
        <meta property="og:url" content="https://cretti.com/services" />
        <meta property="og:site_name" content="Cretti" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Design Services for Startups - Cretti"
        />
        <meta
          name="twitter:description"
          content="Comprehensive web design services tailored for startups and small businesses."
        />
        <meta
          name="twitter:image"
          content="https://cretti.com/images/cretti-services-twitter.jpg"
        />
      </Helmet>

      <Navbar />
      <Container>
        <Hero />
        <main role="main" aria-label="Services content">
          <section
            className="py-12 sm:py-16 lg:py-20"
            aria-labelledby="services-heading">
            <div className="mb-12 sm:mb-16 lg:mb-20 pb-6 border-b border-text_three">
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl font-bold text-[#1c1c1a] mb-6 sm:mb-8 lg:mb-10">
                Services
              </h2>
            </div>

            {/* Featured service */}
            <section
              aria-labelledby="featured-service"
              className="mb-16 sm:mb-20 lg:mb-24 bg-gradient-Light">
              <Link
                to={mainArticle.href}
                state={mainArticle}
                className="block lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8 rounded-2xl overflow-hidden group"
                aria-describedby="featured-description">
                <div className="h-64 sm:h-72 lg:h-80 xl:h-96 mb-4 lg:mb-0">
                  <img
                    alt={mainArticle.title}
                    src={mainArticle.image}
                    className="h-full w-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="h-full flex flex-col justify-between px-4 py-4 lg:px-6 lg:py-0">
                  <div>
                    <h3
                      id="featured-service"
                      className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1c1c1a] mb-4 group-hover:underline transition-all duration-300">
                      {mainArticle.title}
                    </h3>
                    <p
                      id="featured-description"
                      className="text-gray-600 mb-6 leading-relaxed">
                      {mainArticle.description}
                    </p>
                  </div>
                  <button
                    className="hidden Links  lg:flex w-fit items-center justify-center"
                    aria-label={mainArticle.ariaLabel}
                    tabIndex="-1">
                    <span className="" aria-hidden="true">
                      see service →
                    </span>
                  </button>
                </div>
              </Link>
            </section>

            {/* All other services */}
            <section aria-labelledby="other-services">
              <h3 id="other-services" className="sr-only">
                Other Services
              </h3>
              <div
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 "
                role="list">
                {otherServices.map((service) => (
                  <article key={service.id} role="listitem" className="group bg-gradient-Light">
                    <Link
                      to={`/services-pages/${service.slug}`}
                      state={service}
                      className="block rounded-2xl transition-transform duration-300 "
                      aria-describedby={`service-desc-${service.id}`}>
                      <img
                        alt={service.title}
                        src={service.image}
                        className="h-48 sm:h-56 lg:h-64 w-full object-cover rounded-2xl shadow-md mb-4 group-hover:shadow-lg transition-shadow duration-300"
                      />
                      <h4 className="text-lg font-bold text-gray-900 group-hover:underline sm:text-xl mb-3 transition-all duration-300">
                        {service.title}
                      </h4>
                      <p
                        id={`service-desc-${service.id}`}
                        className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </section>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default memo(Services);
