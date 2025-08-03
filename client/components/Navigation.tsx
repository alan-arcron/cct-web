import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "@/assets/images/CC-logo-H.png";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="w-full px-4 lg:px-20 py-2 sticky">
      <div className="bg-white flex items-center justify-around h-[77px] bg-[#F5F5F5] rounded-xl max-w-[1280px] mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={Logo}
              alt="Construct Collect Logo"
              className="w-[149px]"
            />
          </Link>
        </div>

        {/* Navigation Links - Hidden on mobile, visible on lg+ */}
        <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-[34px]">
          <Link
            to="/"
            className="text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
          >
            Home
          </Link>
          <Link
            to="/platform"
            className="text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
          >
            Platform
          </Link>
          <Link
            to="/use-cases"
            className="text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
          >
            Use Cases
          </Link>
          <Link
            to="/pricing"
            className="text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            className="text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
          >
            Blog
          </Link>
        </div>

        {/* CTA Button */}
        <button className="hidden sm:flex text-white text-center font-montserrat text-base font-semibold leading-[150%] px-[23px] py-[15px] flex-col justify-center items-center rounded-[18px] bg-[#0F0F0F] relative z-10 hover:bg-gray-800 transition-colors">
          Request a Demo
        </button>

        {/* Mobile Menu Button - Visible on mobile only */}
        <div className="lg:hidden">
          <button
            className="p-2 text-[#0F0F0F] hover:opacity-70 transition-opacity"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4">
          <div className="bg-[#F5F5F5] rounded-xl px-6 py-4 space-y-4">
            <Link
              to="/"
              className="block text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/platform"
              className="block text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Platform
            </Link>
            <Link
              to="/use-cases"
              className="block text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link
              to="/pricing"
              className="block text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/blog"
              className="block text-[#0F0F0F] font-montserrat text-base font-normal leading-[120%] capitalize hover:opacity-70 transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
