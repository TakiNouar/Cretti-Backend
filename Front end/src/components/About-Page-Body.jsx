import { memo, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";
import OptimizedImage from "../components/ui/OptimizedImage";
import CrettiImage from "../assets/Cretti.png";

// Lazy load ScrollFadeIn for better code splitting
const ScrollFadeIn = lazy(() => import("./ScrollAnimate"));

const ServiceCard = ({ title, description, icon = 0 }) => (
  <div className="group bg-primary/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
    <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-secondary rounded-2xl flex items-center justify-center mb-6  transition-transform duration-300">
      <span className="text-gray-300 text-2xl">{icon}</span>
    </div>
    <h3 className="text-secondary text-xl font-bold mb-4 group-hover:text-gray-700 transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const FeatureCard = ({ letter, title, description = 0 }) => {
  // Add these arrays after imports

  return (
    <div className="text-center md:text-left group">
      <div className=" w-16 h-16 bg-gradient-to-br from-gray-700 to-secondary rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6  hover:text-primary ">
        <span className="text-gray-300 font-bold text-xl ">{letter}</span>
      </div>
      <h3 className="text-secondary text-xl font-bold mb-4 group-hover:text-gray-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

function Body() {
  const servicesData = [
    {
      title: "Web Design & UI/UX",
      description:
        "Creating intuitive and visually appealing interfaces that engage users and drive conversions.",
      icon: "🎨",
    },
    {
      title: "Responsive Development",
      description:
        "Building websites that work flawlessly across all devices and screen sizes with pixel-perfect precision.",
      icon: "📱",
    },
    {
      title: "Brand Integration",
      description:
        "Seamlessly incorporating your brand identity into every digital touch point for consistent experiences.",
      icon: "🎯",
    },
    {
      title: "Performance Optimization",
      description:
        "Ensuring lightning-fast loading times and smooth user experiences that keep visitors engaged.",
      icon: "⚡",
    },
  ];

  const featuresData = [
    {
      letter: "C",
      title: "Collaboration",
      description:
        "We work closely with you throughout the entire process, ensuring your vision comes to life exactly as you imagined.",
    },
    {
      letter: "C",
      title: "Clarity",
      description:
        "Clear communication and transparent processes keep you informed every step of the way with regular updates.",
    },
    {
      letter: "C",
      title: "Creativity",
      description:
        "Innovative solutions and cutting-edge design that set your business apart from the competition.",
    },
    {
      letter: "C",
      title: "Care",
      description:
        "We genuinely care about your success and treat every project with dedication and attention to detail.",
    },
  ];
  return (
    <div className="bg-gradient-to-br from-gray-100 via-primary to-gray-200 ">
      {/* Hero Section */}
      <header className="relative overflow-hidden  flex items-center justify-center bg-primary">
        <Container className="mt-12 sm:mt-16 lg:mt-20">
          <div className="relative z-10 text-center max-w-5xl mb-20 mx-auto">
            <Suspense
              fallback={
                <div className="animate-pulse h-20 bg-gray-200 rounded mb-4"></div>
              }>
              <ScrollFadeIn className="animate-fade-up-1">
                <h1 className="heading-xl mb-16 sm:mb-20 lg:mb-16">
                  Design that works.
                  <br />
                  <span className="text-text_three">Code that connects.</span>
                </h1>
              </ScrollFadeIn>
              <ScrollFadeIn className="animate-fade-up-2">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                  We turn ideas into digital realities for startups and small
                  businesses.
                </p>
              </ScrollFadeIn>
              <ScrollFadeIn className="animate-fade-up-3">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link to="/contact" className="Links">
                    Start Your Project
                  </Link>
                  <Link to="/work" className="Links">
                    View Our Work
                  </Link>
                </div>
              </ScrollFadeIn>
            </Suspense>
          </div>
        </Container>
      </header>

      <Container>
        <div className="py-20">
          {/* Mission Section */}
          <section className="text-center mb-16 pb-16 border-b-2 border-gray-400">
            <h2 className="text-4xl md:text-5xl font-secondary mb-8 bg-gradient-to-r from-secondary via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Crafting Web Experiences That Speak for You
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Cretti helps startups and small businesses build impactful digital
              identities that resonate with their audience. We believe every
              business deserves a website that not only looks stunning but also
              drives real results.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16 pb-16 border-b-2 border-gray-400">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-primary/60 backdrop-blur-sm rounded-2xl border border-gray-100">
                <div className="text-4xl font-secondary text-gray-800 mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-8 bg-primary/60 backdrop-blur-sm rounded-2xl border border-gray-100">
                <div className="text-4xl font-secondary text-secondary mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center p-8 bg-primary/60 backdrop-blur-sm rounded-2xl border border-gray-100">
                <div className="text-4xl font-secondary text-gray-700 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">
                  Support Available
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16 pb-16 border-b-2 border-gray-400">
            <h2 className="text-4xl md:text-5xl font-secondary text-center mb-12 bg-gradient-to-r from-secondary via-gray-600 to-gray-900 bg-clip-text text-transparent">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service, index) => (
                <ServiceCard key={service.title || index} {...service} />
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16 pb-16 border-b-2 border-gray-400">
            <h2 className="text-4xl md:text-5xl font-secondary text-center mb-12 bg-gradient-to-r from-gray-900 via-gray-500 to-secondary bg-clip-text text-transparent">
              Why Choose Cretti
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuresData.map((feature, index) => (
                <FeatureCard key={`${feature.title}-${index}`} {...feature} />
              ))}
            </div>
          </section>

          {/* About Founder Section */}
          <section className="mb-16 pb-16 border-b-2 border-gray-400">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-secondary mb-8 bg-gradient-to-r from-secondary via-gray-600 to-gray-900 bg-clip-text text-transparent">
                  Who's Behind Cretti
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Hi, I'm the creative developer behind Cretti. With a passion
                  for clean code and beautiful design, I've dedicated myself to
                  helping small businesses and startups establish their digital
                  presence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  I believe that every business, regardless of size, deserves a
                  website that truly represents their vision and connects with
                  their audience. That's why I founded Cretti – to bridge the
                  gap between ambitious ideas and digital reality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    React Expert
                  </span>
                  <span className="px-4 py-2 bg-gray-200 text-secondary rounded-full text-sm font-medium">
                    UI/UX Designer
                  </span>
                  <span className="px-4 py-2 bg-gray-300 text-gray-900 rounded-full text-sm font-medium">
                    Full-Stack Developer
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-3xl blur-2xl"></div>
                <OptimizedImage
                  src={CrettiImage}
                  alt="Developer workspace"
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl hover:scale-101 transition-transform duration-500"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="relative bg-footer p-16 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-secondary/20"></div>
              <div className="absolute top-10 left-10 w-32 h-32 bg-gray-400/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-300/20 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-secondary text-primary mb-6">
                  Let's Build Something Great Together
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                  Ready to transform your vision into a digital reality? Let's
                  collaborate and create something extraordinary that your
                  audience will love.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact" className="group lightLinks">
                    Start Your Project
                  </Link>
                  <Link to="/work" className="lightLinks">
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}

export default memo(Body);
