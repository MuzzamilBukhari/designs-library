import React, { useState } from "react";
import PropTypes from "prop-types";
import { Search, MessageCircle } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface HeroSectionProps {
  backgroundImage: string;
  logoText: string;
  navLinks: NavLink[];
  avatarSrcList: string[];
  userCount: number;
  title: string;
  description: string;
  placeholder: string;
  ctaText: string;
  onSubmit: (email: string) => void;
  footerVersion: string;
}

/**
 * HeroSection
 *
 * A reusable hero component with a full-bleed background,
 * header, main call-to-action, and footer.
 */
export default function HeroSection({
  backgroundImage,
  logoText,
  navLinks,
  avatarSrcList,
  userCount,
  title,
  description,
  placeholder,
  ctaText,
  onSubmit,
  footerVersion,
}: HeroSectionProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    onSubmit(email);
    setEmail("");
  };

  return (
    <>
      <header className="absolute inset-x-0 top-0 p-6 md:p-8 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold">{logoText}</div>
          <nav className="hidden md:flex space-x-8 text-sm">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-gray-300 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              aria-label="Search"
              className="hover:text-gray-300 transition-colors"
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="border border-white rounded-full px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
            >
              Join
            </button>
          </div>
        </div>
      </header>

      <main
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto h-screen flex items-center px-6 md:px-8">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="flex items-center mb-4">
              <div className="flex -space-x-2">
                {avatarSrcList.map((src, idx) => (
                  <img
                    key={idx}
                    className="h-8 w-8 rounded-full ring-2 ring-gray-900/50"
                    src={src}
                    alt={`User avatar ${idx + 1}`}
                  />
                ))}
              </div>
              <p className="ml-3 text-sm text-gray-300">
                &lt;{userCount.toLocaleString()} users have joined
              </p>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              {title}
            </h1>

            <p className="text-md text-gray-300 max-w-md mb-8">
              {description}
            </p>

            <form
              className="flex w-full max-w-sm"
              onSubmit={handleSubmit}
              aria-label="Waitlist signup"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-l-md border-0 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-black placeholder:text-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-white text-black font-bold px-5 py-3 rounded-r-md hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                {ctaText}
              </button>
            </form>
          </div>
        </div>
      </main>

      <footer className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">{footerVersion}</div>
          <button
            type="button"
            aria-label="Open chat"
            className="bg-white/10 backdrop-blur-sm rounded-full h-12 w-12 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      </footer>
    </>
  );
}

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  logoText: PropTypes.string.isRequired,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  avatarSrcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  userCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  footerVersion: PropTypes.string.isRequired,
};
