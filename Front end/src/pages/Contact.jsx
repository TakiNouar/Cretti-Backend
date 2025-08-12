import { Helmet } from "react-helmet-async";
import { useState, useCallback } from "react";
import Navbar from "../components/Navbar";
import Container from "../components/container";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const referralOptions = [
  { value: "", label: "how did you hear about Cretti" },
  { value: "google", label: "Google" },
  { value: "friend", label: "Friend" },
  { value: "social", label: "Social Media" },
  { value: "ad", label: "Advertisement" },
];

const services = [
  "Mobile App",
  "Website Design",
  "Branding",
  "Web Development",
  "Illustration",
  "Logo Design",
  "Graphic Design",
];

export default function Contact() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = useCallback((data) => {
    const newErrors = {};

    if (!data.name?.trim()) newErrors.name = "Name is required";
    if (!data.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    return newErrors;
  }, []);

  // Sanitize input to prevent XSS
  const sanitizeInput = (input) => {
    if (typeof input !== "string") return input;
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const data = new FormData(e.target);
      const formObject = {};

      // Sanitize all form inputs
      for (const [key, value] of data.entries()) {
        formObject[key] = sanitizeInput(value);
      }

      const validationErrors = validateForm(formObject);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setIsSubmitting(false);
        return;
      }

      // Simulate form submission with sanitized data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("Form submission error:", error.message || "Unknown error");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm]);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Contact Cretti - Start Your Startup Website Project Today</title>
        <meta
          name="description"
          content="Ready to launch your startup online? Contact Cretti for a free consultation. Get a custom quote for your small business website project within 24 hours."
        />
        <meta
          name="keywords"
          content="contact cretti, startup website quote, small business web design consultation, free website consultation, get started"
        />

        <link rel="canonical" href="https://cretti.com/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Cretti - Start Your Startup Website Project Today"
        />
        <meta
          property="og:description"
          content="Ready to launch your startup online? Contact Cretti for a free consultation and custom quote within 24 hours."
        />
        <meta
          property="og:image"
          content="https://cretti.com/images/cretti-contact-og.jpg"
        />
        <meta property="og:url" content="https://cretti.com/contact" />
        <meta property="og:site_name" content="Cretti" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Cretti - Start Your Startup Website Project Today"
        />
        <meta
          name="twitter:description"
          content="Ready to launch your startup online? Get a free consultation and custom quote within 24 hours."
        />
        <meta
          name="twitter:image"
          content="https://cretti.com/images/cretti-contact-twitter.jpg"
        />
      </Helmet>
      <Navbar />
      <Container>
        {/* Page Header - Main greeting section */}
        <header className="text-center pb-15 pt-10">
          <h1 className="text-[#1c1c1a] text-4xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="text-text_three">Hi!</span> It's nice to meet{" "}
            <br /> ya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a nice works? Reach out and let's chat.
          </p>
        </header>

        {/* Main Content - Contact form and information */}
        <main role="main" aria-label="Contact information and form">
          <section className="py-20" aria-labelledby="contact-section">
            <h2 id="contact-section" className="sr-only">
              Contact Us
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <div>
                <p className="text-gray-600 mb-8">
                  Please fill out the form to get in touch. Alternatively, if
                  you don't know your project details — head over to our
                  Services for more details.
                </p>

                {/* TODO: Add actual link to project planner page */}
                <Link
                  to="/services"
                  className="Links mb-8"
                  aria-label="Navigate to project planner"
                  type="button">
                  Go to Service →
                </Link>

                <p className="text-gray-600">
                  Hate contact forms?{" "}
                  <span className="font-semibold">hello@cretti.com</span>
                </p>
              </div>

              {/* Right Column - Contact Form */}
              {/* TODO: Add form validation and submission handling */}
              <form
                className="space-y-6"
                role="form"
                aria-label="Contact form"
                onSubmit={handleSubmit}
                noValidate>
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    Sorry, there was an error sending your message. Please try
                    again.
                  </div>
                )}
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      aria-required="true"
                      className={`w-full p-3 border rounded-lg Focus ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      className={`w-full p-3 border rounded-lg Focus ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone (Optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone (Optional)"
                    aria-label="Phone number (optional)"
                    className="w-full p-3 border border-gray-300 rounded-lg Focus"
                  />
                </div>

                {/* (how did you hear) Dropdown */}
                <div>
                  <label htmlFor="referral" className="sr-only">
                    How did you hear about Cretti?
                  </label>
                  <select
                    id="referral"
                    name="referral"
                    aria-label="How did you hear about Cretti?"
                    className="w-full p-3 border border-gray-300 rounded-lg Focus">
                    {referralOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Company Name Field */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company or website?"
                    className="w-full p-3 border border-gray-300 rounded-lg Focus"
                  />
                </div>

                {/* What's in your mind - Service Selection */}
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    What's in your mind?
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 cursor-pointer border-secondary border-1 p-3 rounded-xl ">
                        <input
                          type="checkbox"
                          className="size-3 rounded border-gray-300 shadow-sm"
                          id={service}
                        />

                        <span className="font-medium text-gray-700">
                          {" "}
                          {service}{" "}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget Range Selection */}
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    How much your budget range?
                  </h3>
                  <span className="text-gray-700 ">My budget is between :</span>

                  <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-3 text-sm">
                    <div className="flex items-center">
                      <label htmlFor="minBudget" className="sr-only">
                        Minimum budget
                      </label>
                      <input
                        type="number"
                        id="minBudget"
                        name="minBudget"
                        placeholder="89"
                        className="w-16 sm:w-20 p-2 border border-gray-300 rounded-l Focus"
                      />
                      <span className="text-gray-700 bg-gray-100 px-2 py-2 rounded-r border border-l-0 border-gray-300">
                        £
                      </span>
                    </div>

                    <span className="text-gray-700">and</span>

                    <div className="flex items-center">
                      <label htmlFor="maxBudget" className="sr-only">
                        Maximum budget
                      </label>
                      <input
                        type="number"
                        id="maxBudget"
                        name="maxBudget"
                        placeholder="189"
                        className="w-16 sm:w-20 p-2 border border-gray-300 rounded-l Focus"
                      />
                      <span className="text-gray-700 bg-gray-100 px-2 py-2 rounded-r border border-l-0 border-gray-300">
                        £
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="project" className="sr-only">
                    Tell us about your project
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    placeholder="Tell us about your project"
                    rows="6"
                    aria-label="Project description"
                    className="w-full p-3 border border-gray-300 rounded-lg Focus resize-vertical"></textarea>
                </div>

                {/* Newsletter Subscription */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="Focus"
                  />
                  <label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter for all the latest Cretti goss!
                  </label>
                </div>

                {/* Privacy Policy Notice */}
                <p className="text-xs text-gray-500">
                  By submitting this form I accept the Privacy Policy of this
                  site.
                </p>

                {/* Submit Button */}
                {/* TODO: Add loading state and success/error handling */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-full Focus transition-colors ${
                    isSubmitting
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-secondary text-primary hover:bg-gray-800"
                  }`}
                  aria-label="Send contact message">
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </div>
          </section>
        </main>
      </Container>
      <Footer />
    </>
  );
}
