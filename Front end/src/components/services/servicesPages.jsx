import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Body from "./Body";
import { services } from "./dataServices";
import ServiceSuggestionCard from "./SuggestionCard";
import { removeLoader } from "../../Loader/RemoveLoader";
import { useEffect, memo } from "react";

function ServicesPage() {
  useEffect(() => {
    removeLoader();
  }, []);

  const { slug } = useParams();
  const serviceData = services.find((s) => s.slug === slug);

  if (!serviceData) {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">
            The requested service information is not available.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{serviceData.title} - Cretti</title>
        <meta
          name="description"
          content={serviceData.description || "Service details"}
        />
      </Helmet>

      <Navbar />
      <Body serviceData={serviceData} />
      <ServiceSuggestionCard currentServiceSlug={serviceData.slug} />

      <Footer />
    </>
  );
}

export default memo(ServicesPage);
