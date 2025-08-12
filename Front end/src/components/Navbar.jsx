import { Link } from "react-router-dom";
import { useState, memo, useCallback } from "react";
import Container from "../components/container";

// Static data moved outside component to prevent recreation
const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Contact", link: "/contact" },
  { name: "Work", link: "/work" },
];

const socialMediaLinks = ["instagram", "twitter", "facebook"];

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  
  const setSidebarVisibility = useCallback((value) => setShowSidebar(value), []);
  const toggleSidebar = useCallback(() => setShowSidebar(true), []);
  const closeSidebar = useCallback(() => setShowSidebar(false), []);
  return (
    <>
      {/* Navbar */}
      <Container>
        <nav
          className="w-full bg-transparent z-50 mb-7"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex justify-between items-center py-8">
            {/* LOGO HERE */}
            <Link to="/" className="text-secondary font-bold text-2xl">
              Cretti
            </Link>

            {/* Right Navbar */}
            <div className="flex gap-1 sm:gap-4">
              {/* Contact btn */}
              <Link to="/contact" className="Links" aria-label="Contact us">
                Start a project →
              </Link>

              {/* Sidebar toggle */}
              <button
                onClick={toggleSidebar}
                className="flex-center Links"
                aria-label="Open navigation menu"
                aria-expanded={showSidebar}
                aria-controls="sidebar-menu"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </Container>

      {/* Sidebar */}
      <div
        id="sidebar-menu"
        className={`fixed top-0 left-0 w-full h-full bg-sidebar_bg z-[60] 
            transition-all duration-500 ease-out origin-top ${
              showSidebar ? "translate-y-0" : "-translate-y-full"
            }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebar-title"
        {...(!showSidebar && { inert: "" })}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Header */}
          <header className="flex-shrink-0 flex justify-between items-center py-8 mx-6 sm:mx-10 lg:mx-20 xl:mx-30">
            {/* LOGO HERE */}
            <span
              id="sidebar-title"
              className="text-primary font-bold text-2xl"
            >
              Cretti
            </span>
            <div className="flex gap-1 sm:gap-4">
              {/* Contact btn */}
              <Link
                to="/contact"
                className="px-6 py-2 text-sm lightLinks max-sm:px-2 max-sm:py-1/2"
                aria-label="Contact us"
                onClick={closeSidebar}
              >
                Let's Talk →
              </Link>

              {/* Sidebar toggle */}
              <button
                onClick={closeSidebar}
                className="w-12 h-12 lightLinks"
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>
          </header>

          {/* Navigation Links */}
          <nav
            className="flex-1 flex flex-col justify-center py-8 mx-6 sm:mx-10 lg:mx-12 border-t border-[#4B5563] space-y-8"
            role="navigation"
            aria-label="Main menu"
          >
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                onClick={closeSidebar}
                className={`transform transition-all duration-500 ease-out ${
                  showSidebar 
                    ? 'translate-x-0 opacity-100' 
                    : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center group Focus">
                  <span className="text-primary text-3xl md:text-5xl font-light hover:opacity-70 transition-opacity Focus">
                    {link.name}
                  </span>
                  <button
                    className="text-primary border border-primary rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 Focus"
                    aria-label={`Navigate to ${link.name}`}
                    tabIndex="-1"
                  >
                    →
                  </button>
                </div>
              </Link>
            ))}
          </nav>

          {/* Side Bar Footer Section */}
          <footer className="flex-shrink-0 py-8 mx-6 sm:mx-10 lg:mx-12 border-t border-[#4B5563]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left - Follow me Social Media */}
              <div>
                <h3 className="text-gray-400 text-sm mb-6">Follow me.</h3>
                <div className="flex flex-wrap gap-6">
                  {socialMediaLinks.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-primary text-sm hover:opacity-70 transition-opacity flex items-center gap-2 Focus"
                      aria-label={`Follow us on ${social}`}
                    >
                      {social.toUpperCase()} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right - Stay connected Email*/}
              <div>
                <h3 className="text-gray-400 text-sm mb-6">
                  Stay connected w/ me.
                </h3>
                <form className="flex" role="form" onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    console.log('Valid email submitted:', email);
                  }
                }}>
                  <label htmlFor="email-input" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-input"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent border-b border-gray-600 text-primary placeholder-gray-400 flex-1 py-2 focus:outline-none focus:border-primary"
                    aria-required="true"
                    required
                  />
                  <button
                    type="submit"
                    className="ml-4 text-primary hover:opacity-70 transition-opacity Focus"
                    aria-label="Subscribe to newsletter"
                  >
                    <span aria-hidden="true">↗</span>
                  </button>
                </form>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-sidebar_bg/50 z-[50] transition-opacity duration-500 ${
          showSidebar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />
    </>
  );
}

export default memo(Navbar);
