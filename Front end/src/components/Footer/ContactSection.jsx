import { memo } from "react";
import PropTypes from 'prop-types';

const ContactSection = memo(({ socialLinks = [] }) => (
  <div>
    <div>
      <span className="text-xs tracking-wide uppercase text-text_one">
        Contact Us
      </span>
      <a
        href="mailto:hello@cretti.com"
        className="block text-2xl font-medium sm:text-3xl text-primary hover:opacity-80 transition-opacity"
      >
        hello@cretti.com
      </a>
    </div>

    <ul className="mt-8 flex gap-6" role="list">
      {socialLinks?.map((social) => (
        <li key={social.name}>
          <a
            href={social.href}
            rel="noopener noreferrer"
            target="_blank"
            className="transition hover:opacity-75 text-text_one"
            aria-label={`Follow Cretti on ${social.name}`}
          >
            <svg
              className="size-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  </div>
));

ContactSection.displayName = "ContactSection";

ContactSection.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  )
};

export default ContactSection;
