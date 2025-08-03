import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-montserrat font-bold text-[#0F0F0F] mb-4">404</h1>
          <h2 className="text-2xl font-montserrat font-semibold text-[#0F0F0F] mb-4">Page Not Found</h2>
          <p className="text-lg text-[#0F0F0F] opacity-70 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="bg-[#0F0F0F] hover:bg-gray-800 text-white px-8 py-4 rounded-[18px] font-montserrat font-semibold text-base transition-colors inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
