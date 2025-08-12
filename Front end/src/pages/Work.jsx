import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Work/WorkComponents/Hero";
import WorkCards from "../components/Work/WorkComponents/Work-Cards";

export default function Work() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Startup Website Portfolio - Cretti Success Stories</title>
        <meta
          name="description"
          content="See how Cretti has helped startups and small businesses launch successful websites. Browse our portfolio of real projects and client success stories."
        />
        <meta
          name="keywords"
          content="startup website portfolio, small business web design examples, cretti portfolio, startup success stories, website case studies"
        />

        <link rel="canonical" href="https://cretti.com/work" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Startup Website Portfolio - Cretti Success Stories"
        />
        <meta
          property="og:description"
          content="See how Cretti has helped startups and small businesses launch successful websites. Browse our portfolio of real projects."
        />
        <meta
          property="og:image"
          content="https://cretti.com/images/cretti-work-og.jpg"
        />
        <meta property="og:url" content="https://cretti.com/work" />
        <meta property="og:site_name" content="Cretti" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Startup Website Portfolio - Cretti Success Stories"
        />
        <meta
          name="twitter:description"
          content="See how Cretti has helped startups and small businesses launch successful websites."
        />
        <meta
          name="twitter:image"
          content="https://cretti.com/images/cretti-work-twitter.jpg"
        />
      </Helmet>
      <Navbar />
      <Hero />
      <WorkCards />
      <Footer />
    </>
  );
}
