import { Helmet } from "react-helmet-async";
import { memo } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Container from "../container";
import { Link, useLocation } from "react-router-dom";
import { articles } from "./dataServices";
import ServiceSection from "./ServiceSection";

function ServicesPage() {
  // We get the data from Link state
  const location = useLocation();
  const serviceData = location.state;

  // Error handling for missing service data
  if (!serviceData) {
    return (
      <>
        <Navbar />
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">
              The requested service information is not available.
            </p>
            <Link to="/services" className="Links">
              View All Services →
            </Link>
          </div>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Service Details - Cretti</title>
        <meta
          name="description"
          content="Detailed information about our web design service."
        />
      </Helmet>

      <Navbar />
      <Container>
        <article className="py-12 sm:py-16 lg:py-20">
          {/* Hero Section */}
          <header className="mb-12 sm:mb-16 lg:mb-20 lg:flex lg:justify-between">
            <h1 className="text-3xl  lg:w-120 lg:text-5xl font-bold text-[#1c1c1a] mb-8">
              {serviceData.title || "Service Title"}
            </h1>
            <p className="w-full lg:w-100 text-xl text-gray-600 max-w-xl">
              {serviceData.description || "Service description not available."}
            </p>
          </header>

          {/* Featured *MAIN Image */}
          <div className="mb-8 sm:mb-10">
            <img
              src={serviceData.image || "/placeholder-image.jpg"}
              alt={`${serviceData.title || "Service"} illustration`}
              className="w-full h-64 sm:h-80 lg:h-96 shadow-xl object-cover rounded-2xl"
            />
          </div>

          <div className=" lg:flex justify-between gap-3">
            <header className="mb-10">
              <h2 className="text-2xl  lg:w-120 lg:text-3xl font-bold text-[#1c1c1a] mb-5">
                {serviceData.title || "Service Title"}
              </h2>
              <Link to="/contact" className="Links" aria-label="Contact us">
                get the service →
              </Link>
            </header>

            {/* Our Website Capabilities */}
            <section className="mb-12 sm:mb-16 lg:mb-20">
              <h3 className="text-[15px] text-gray-600 mb-4">
                Our Website Capabilities
              </h3>
              {(serviceData.capabilities || []).map((capability, index) => (
                <div key={index} className="space-y-4 font-semibold">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-primary text-sm">
                      ✓
                    </span>
                    <span className="text-lg text-[#1c1c1a]">{capability}</span>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className=" mb-20 pb-6 border-b-1 border-text_three flex justify-between items-center">
            <h2 className="text-4xl  font-bold leading-tight text-[#1c1c1a] ">
              Services
            </h2>
            <Link
              to="/services"
              className="Links"
              aria-label="View all services"
            >
              All services →
            </Link>
          </div>

          <article>
            {articles && Array.isArray(articles) && articles.length > 0 ? (
              <>
                {articles.length > 0 && articles[0] && (
                  <ServiceSection
                    title={articles[0].title || "Service"}
                    description={
                      articles[0].description || "Service description"
                    }
                    imageSrc={articles[0].image || "/placeholder-image.jpg"}
                    isReversed={true}
                  />
                )}
                {articles.length > 1 && articles[1] && (
                  <ServiceSection
                    title={articles[1].title || "Service"}
                    description={
                      articles[1].description || "Service description"
                    }
                    imageSrc={articles[1].image || "/placeholder-image.jpg"}
                    isReversed={false}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">
                  No additional services available at the moment.
                </p>
              </div>
            )}
          </article>
        </article>
      </Container>
      <Footer />
    </>
  );
}

export default memo(ServicesPage);
