import { memo } from "react";
import { Link } from "react-router-dom";

const NavigationSection = memo(() => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div>
      <p className="font-medium text-primary">Services</p>
      <ul className="mt-6 space-y-4 text-sm">
        <li>
          <Link
            to="/services"
            className="transition hover:opacity-75 text-text_one"
          >
            Web Design
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="transition hover:opacity-75 text-text_one"
          >
            Development
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className="transition hover:opacity-75 text-text_one"
          >
            Branding
          </Link>
        </li>
      </ul>
    </div>

    <div>
      <p className="font-medium text-primary">Cretti</p>
      <ul className="mt-6 space-y-4 text-sm">
        <li>
          <Link
            to="/about"
            className="transition hover:opacity-75 text-text_one"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="transition hover:opacity-75 text-text_one"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            className="transition hover:opacity-75 text-text_one"
          >
            Work
          </Link>
        </li>
      </ul>
    </div>
  </div>
));

NavigationSection.displayName = "NavigationSection";

export default NavigationSection;
