import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { PageSkeleton } from "./components/ui/LoadingSkeleton";
import ErrorBoundary from "./components/ErrorBoundary";

// lazy loading
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const ServicesPage = lazy(() => import("./components/services/servicesPages"));
const Work = lazy(() => import("./pages/Work"));
const WorkPage = lazy(() => import("./components/Work/WorkPages"));
const NotFound = lazy(() => import("./pages/404"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // instant scrolling
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter
        future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <ScrollToTop />
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work-pages/:slug" element={<WorkPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services-pages/:title" element={<ServicesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
